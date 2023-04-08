import {Store} from 'vuex'

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state,posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      setPosts(context, posts) {
        context.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      }
    }
  })
}


export default createStore
