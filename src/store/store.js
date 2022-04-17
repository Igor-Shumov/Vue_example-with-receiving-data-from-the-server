import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      users: [],
      page: 1,
    };
  },
  mutations:{
    setUsers(state, users) {
      state.users = users;
    },
    setPage(state, page) {
      state.page = page;
    },
  }
});
/* {{$store.state.page }} 
    $store.commit('setPage')
*/