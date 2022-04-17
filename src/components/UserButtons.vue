<template>
  <div class="container">
    <div class="btngroup" v-for="user in users" :key="user" @click="ChangeId(user.id)" >
      <user-button :id="user.id" :username="user.username" :page="page" />
    </div>
  </div>
</template>

<script>
import UserButton from "./UserButton.vue";

export default {
  components: { UserButton },
  props: {
    users: { type: Array, required: true },
    page: { type: Number, required: true },
  },
  data() {
    return {
      IdButton: 1,
    };
  },

  methods: {
    ChangeId(id) {
      this.IdButton = id;
      this.$emit("newId", this.IdButton);
    },
  },
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
.btn {
  padding: 5px 10px;
}

.active {
  background-color: #3eaf7c;
  color: #fff;
}

.deactive {
  background-color: #3eaf7c;
  color: #000;
  font-weight: 300;
}
</style>
