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
