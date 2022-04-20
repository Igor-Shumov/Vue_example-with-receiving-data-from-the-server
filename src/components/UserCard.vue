<template>
  <div class="list" v-for="user in $store.getters.UserPage" :key="user">
    <p class="list-item">
      ID: <a class="item">{{ user.id }}</a>
    </p>
    <p class="list-item">
      Name: <a class="item">{{ user.name }}</a>
    </p>
    <p class="list-item">
      Email: <a class="item">{{ user.email }}</a>
    </p>
    <p class="list-item">
      Phone: <a class="item">{{ user.phone }}</a>
    </p>
    <p class="list-item">
      Website: <a class="item">{{ user.website }}</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-item {
  white-space: nowrap;
  overflow: hidden;
  color: #3eaf7c;
  font-weight: 800;
}

.item {
  color: #2c3e50;
}
</style>
