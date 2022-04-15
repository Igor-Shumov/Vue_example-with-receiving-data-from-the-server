<template>
  <div id="app">
    <div class="card">
      <h1>JSON Placeholder</h1>
      <div class="list">
        <user-card :users="UserPage" />
        <user-button :users="users" :page="page" @newId="PageNumber"/>
      </div>
      <div class="card">
        <button class="btn primary" v-if="page!==5" @click="page--" :disabled="page <= 1">{{ btnDown }}</button>
        <button class="btn primary" @click="PageUp()">{{ page > 4 ? btnUp="Начать сначала" : btnUp="Вперед" }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import UserButton from "./components/UserButton.vue";

export default {
  name: "App",
  components: { UserCard, UserButton },
  data() {
    return {
      users: [],
      btnUp: "Вперед",
      btnDown: "Назад",
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
        alert("Ошибка");
      }
    },
    PageNumber(id) {
      this.page = id;
    },
    PageUp() {
      if (this.btnUp === "Начать сначала") (this.page = 1), (this.btnUp = "Вперед");
      else this.page++;
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

<style>
</style>
