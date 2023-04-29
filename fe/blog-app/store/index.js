import {Store} from 'vuex'
import Cookie from 'js-cookie'

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
      },
      clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vueContext) {
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
          localStorage.setItem('token',  res.idToken)
          localStorage.setItem('tokenExpiration', new Date().getTime() + res.expiresIn*1000)
          Cookie.set('jwt', res.idToken)
          Cookie.set('expirationDate', new Date().getTime() + res.expiresIn*1000)

        }).catch(err => {
          console.error(err)
        })
      },
      initAuth(context, req) {
        let token = null
        let expirationDate = null
        if(req) {
          const jwtCookie = req.headers?.cookie?.split(";").find(c => c.trim().startsWith("jwt="))

          if(!jwtCookie) return;
          token = jwtCookie.split('=')[1]
          expirationDate = req.headers?.cookie?.split(";").find(c => c.trim().startsWith("expirationDate=")).split('=')[1]
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }

        if(new Date().getTime() > expirationDate || !token) {
          context.dispatch('logout')
          return;
        }

        context.commit('setToken', token)
      },
      logout(context) {
        context.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('expirationDate')
        localStorage.removeItem('token')
        localStorage.removeItem('tokenExpiration')
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
