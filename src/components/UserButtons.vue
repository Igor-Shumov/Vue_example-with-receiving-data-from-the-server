<template>
  <div class="container">
    <div class="btngroup" v-for="user in $store.state.users" :key="user" @click="setPage(user.id)">
      <user-button :id="user.id" :username="user.username" />
    </div>
  </div>
</template>

<script>
import UserButton from "./UserButton.vue";
import { mapMutations } from "vuex";

export default {
  components: { UserButton },

  methods: mapMutations(["setPage"]),
};
</script>

<style scoped>
.container {
  display: flex;
}

.btngroup {
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
}
</style>
