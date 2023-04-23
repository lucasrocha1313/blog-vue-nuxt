import {Store} from 'vuex'

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: [],
      token: null
    },
    mutations: {
      setPosts(state,posts) {
        state.loadedPosts = posts
      },
      addPost(state, newPost) {
        state.loadedPosts.push(newPost)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex( p => p.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      nuxtServerInit(vueContext, context) {
        return this.$axios.$get('/posts.json')
          .then(data => {
            const posts = Object.keys(data).map(k => {
              return {...data[k], id: k}
            })
            vueContext.commit('setPosts', posts)
          })
          .catch(err => {
            console.error(err)
          })
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts)
      },
      addPost(context, post) {
        const createdPost = {...post, updatedDate: new Date()}
        return this.$axios.$post(`/posts.json?auth=${context.state.token}`, createdPost)
          .then(res => context.commit('addPost', {...createdPost, id: res.data.name}))
          .catch(err => console.error(err))
      },
      editPost(context, post) {
        const editedPost = {...post, updatedDate: new Date()}
        return this.$axios.$put(`/posts/${editedPost.id}.json?auth=${context.state.token}`, editedPost)
          .then(() =>context.commit('editPost', editedPost))
          .catch(err => console.error(err))
      },
      authUser(context, authData) {
        let action = 'signInWithPassword'
        if(!authData.isLogin) {
          action = 'signUp'
        }

        return this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:${action}?key=${this.$config.firebaseApiKey}`,
          {
            email: authData.email,
            password:  authData.password,
            returnSecureToken: true
          }
        ).then(res => {
          context.commit('setToken', res.idToken)
        }).catch(err => {
          console.error(err)
        })
      }
    },
    getters: {
      getLoadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}


export default createStore
