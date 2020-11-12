<template>
  <div>
    <button @click="add">Add {{ step }}</button>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 1,
    step: 1,
  }),
  methods: {
    add() {
      this.count += this.step;
      this.step += 1;
    },
  },
};
</script>