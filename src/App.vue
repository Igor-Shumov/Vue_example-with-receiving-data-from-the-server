<template>
  <div id="app">
    <div class="card">
      <h1>JSON Placeholder</h1>
      <div class="list">
        <user-card :users="UserPage" />
        <user-buttons :users="users" :page="page" @newId="PageNumber" />
      </div>
      <nav-buttons :page="page" @PageChange="PageNumber" :users="users.length"/>
    </div>
  </div>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import UserButtons from "./components/UserButtons.vue";
import NavButtons from "./components/NavButtons.vue";

export default {
  name: "App",
  components: { UserCard, UserButtons, NavButtons },
  data() {
    return {
      users: [],
      page: 1,
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
        const users = await res.json();
        this.users = users;
      } catch (e) {
        alert("Ошибка получения данных");
      }
    },
    PageNumber(id) {
      this.page = id;
    },
  },
  mounted() {
    this.fetchUsers();
  },

  computed: {
    UserPage() {
      return this.users.filter((item) => item.id === this.page);
      
    },
  },
};
</script>
