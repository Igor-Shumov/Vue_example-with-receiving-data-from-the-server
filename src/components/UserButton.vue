<template>
  <button class="btn" :class="{ active: id === page, deactive: Viewed }">
    {{ id }}
  </button>
  <span> {{ username }} </span>
</template>

<script>
export default {
  props: {
    id: {},
    username: {},
    page: {},
  },
  data() {
    return {
      Viewed: false,
    };
  },

  updated() {
    if (this.id === 1) this.Viewed = true;
    else if (this.id === this.page) this.Viewed = true;
  },
};
</script>

<style scoped>
.btn {
  padding: 5px 10px;
  background: #eee;
  border-color: #ddd;
  color: #999;
  font-weight: 300;
}

.active {
  background-color: #3eaf7c !important;
  color: #fff !important;
  font-weight: 700 !important;
}

.deactive {
  background-color: #3eaf7c;
  color: #000;
  font-weight: 300;
}
</style>
