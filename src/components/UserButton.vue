<template>
  <div class="container">
    <div class="btngroup" v-for="user in users" :key="user">
      <button class="btn" @click="ChangeId(user.id)" :class="{ active: user.id === page, unactive:user.id!==page}">
        {{ user.id }}
      </button>
      <span> {{ user.username }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["users", "page"],
  data() {
    return {
      pageNumber: this.page,
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
}
.btn {
  padding: 5px 10px;
}

.active {
  background-color: #3eaf7c;
  color: #fff;
}

.unative {
  background: #eee;
  border-color: #ddd;
  color: #999;
}

.deactive {
  background-color: #3eaf7c;
  color: #000;
}
</style>
