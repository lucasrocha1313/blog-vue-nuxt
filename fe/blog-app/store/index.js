import {Store} from 'vuex'
import axios from "axios";

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: []
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
      }
    },
    actions: {
      nuxtServerInit(vueContext, context) {
        return axios.get(`${this.$config.dbUrl}/posts.json`)
          .then(response => {
            const posts = Object.keys(response.data).map(k => {
              return {...response.data[k], id: k}
            })
            vueContext.commit('setPosts', posts)
          })
          .catch(err => {
            context.error(err)
          })
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts)
      },
      addPost(context, post) {
        const createdPost = {...post, updatedDate: new Date()}
        return axios.post(`${this.$config.dbUrl}/posts.json`, createdPost)
          .then(res => context.commit('addPost', {...createdPost, id: res.data.name}))
          .catch(err => console.error(err))
      },
      editPost(context, post) {
        const editedPost = {...post, updatedDate: new Date()}
        return axios.put(`${this.$config.dbUrl}/posts/${editedPost.id}.json`, editedPost)
          .then(() =>context.commit('editPost', editedPost))
          .catch(err => console.error(err))
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
