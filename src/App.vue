<template>
  <div>
    <router-link to="/todo-list">Todo List</router-link>
    <router-link to="/counter">Counter</router-link>
    <router-link to="/areaSelect">AreaSelect</router-link>
    <router-link to="/currency">Currency</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/toggle">Toggle</router-link>
    <router-link to="/policy">Policy</router-link>
 
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.count;
    },
  }
};
</script>

<style>
a {
  margin-right: 1em;
}
</style>