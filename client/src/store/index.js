import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      user: {},
      isLogged: false,
      isAdmin: false
    }
  },
  mutations: {
    login(state, user){
        state.user=user
        state.isLogged=true
    },
    isLogged(state, info){
        state.isLogged=info
    }
  }
})


export default store;