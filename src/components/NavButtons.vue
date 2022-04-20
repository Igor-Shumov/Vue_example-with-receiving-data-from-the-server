<template>
  <div class="buttons">
    <button class="btn primary" v-if="btnDown" @click="PageDown()" :disabled="$store.state.page === 1">Назад</button>
    <button class="btn primary" @click="PageUp1()" v-if="btnUp">
      {{ $store.state.page === usersCouter ? "Закончить" : "Вперед" }}
    </button>
    <button class="btn primary" v-if="btnRestart" @click="PageRestart()">Начать сначала</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      btnUp: true,
      btnDown: true,
      btnRestart: false,
    };
  },
  methods: {
    ...mapMutations(["setPage", "pageDown", "pageUp"]),
    PageUp1() {
      if (this.$store.state.page < this.usersCouter) this.pageUp()
       else if (this.$store.state.page === this.usersCouter) (this.btnUp = this.btnDown = false), (this.btnRestart = true);
    },
    PageDown() {
      this.pageDown();
      this.btnUp = "Вперед";
    },
    PageRestart(){
      this.btnUp = "Вперед";
      this.btnDown = "Назад";
      this.btnRestart = false;
      this.setPage(1)
    },
  },
  computed: mapGetters(["usersCouter"]),
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
