<template>
  <div>
    <input :value="name" />
    <button @click="active= !active">button</button>
    <h3 :style="{ background: active? 'green' : 'red'}">Hello!</h3>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    name: "Evan",
  }),
};
</script>