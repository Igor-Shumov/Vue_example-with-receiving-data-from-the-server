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
    PageNumber(state) {
      state.page = this.id
    }
  }
});
/* {{$store.state.page }} 
    $store.commit('')
*/