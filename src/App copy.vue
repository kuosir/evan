<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count+=1">Add</button>
    <h2 v-if="count % 2 === 0">Even</h2>
    <ol>
      <li v-for="text in list" :key="text">
        {{ text }}
      </li>
    </ol>
    <input v-model="account"/>
    <h1>{{ account }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return { 
      count: 0, 
      list: [
        'Learn JavaScript',
        'Learn Vue',
        '$ Profit $'
      ],
      account: '',
    };
  },
};
</script>

<style>
div {
  color:brown;
}
</style>