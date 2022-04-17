<template>
  <div class="buttons">
    <button class="btn primary" v-if="btnDown" @click="PageDown()" :disabled="page === 1">Назад</button>
    <button class="btn primary" @click="PageUp()" v-if="btnUp.length">
      {{ page === users ? btnUp = "Закончить" : btnUp }}
    </button>
    <button class="btn primary" v-if="btnRestart" @click="PageRestart()">Начать сначала</button>
  </div>
</template>

<script>
export default {
  props: ["page", "users"],
  data() {
    return {
      pageNumber: this.page,
      btnUp: "Вперед",
      btnDown: true,
      btnRestart: false,
    };
  },
  methods: {
    PageUp() {
      this.pageNumber = this.page;
      if (this.page === this.users - 1) this.pageNumber++;
      else if (this.page === this.users) (this.btnUp = ""), (this.btnDown = false), this.btnRestart=true;
      else this.pageNumber++;
      this.$emit("PageChange", this.pageNumber);
    },
    PageDown() {
      this.pageNumber = this.page;
      this.pageNumber--;
      this.btnUp = "Вперед";
      this.$emit("PageChange", this.pageNumber);
    },
    PageRestart() {
      this.pageNumber = 1;
      this.btnUp = "Вперед";
      this.btnDown = "Назад";
      this.btnRestart = false;
      this.$emit("PageChange", this.pageNumber);
    },
  },
};
</script>

<style scoped>
.buttons {
  padding: 10px;
  display: flex;
  justify-content: center;
}

.btn.primary {
  background: #42b983;
  color: #fff;
}
</style>
