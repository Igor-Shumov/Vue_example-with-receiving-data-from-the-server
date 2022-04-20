<template>
  <div id="app">
    <div class="card">
      <h1>JSON Placeholder</h1>
      <div class="list">
        <user-card />
        <user-buttons />
      </div>
      <nav-buttons />
    </div>
  </div>
</template>

<script>
import UserCard from "./components/UserCard.vue";
import UserButtons from "./components/UserButtons.vue";
import NavButtons from "./components/NavButtons.vue";
import { /* mapGetters */ mapActions } from "vuex";

export default {
  name: "App",
  components: { UserCard, UserButtons, NavButtons },
  data() {
    return {
      users: [],
      page: 1,
    };
  },
  methods: mapActions(["fetchUsers"]),
  mounted() {
    this.fetchUsers();
  },
 /*  computed: mapGetters(["AllUsers"]), */
};
</script>
