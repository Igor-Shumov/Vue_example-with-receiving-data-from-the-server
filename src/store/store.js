import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      users: [],
      page: 1,
    };
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setPage(state, page) {
      state.page = page;
    },
    pageDown(state) {
      if (state.page > 0 )state.page--
    },
    pageUp(state) {
      state.page++
    }
  },
  getters: {
    usersCouter(state) {
      return state.users.length;
    },
    UserPage(state) {
      return state.users.filter((item) => item.id === state.page);
    },
  },
  actions: {
    async fetchUsers(ctx) {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
        const users = await res.json();
        ctx.commit("setUsers", users);
      } catch (e) {
        alert("Ошибка получения данных");
      }
    },
  },
});
/* {{$store.state.page }} 
    $store.commit('setPage')
*/
