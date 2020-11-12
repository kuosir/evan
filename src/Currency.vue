<template>
  <div>
    <input v-model="text" />
    <ul>
      <li>TWD: {{ twd }}</li>
      <li>JPY: {{ jpy }}</li>
      <li>USD: {{ usd }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "0",
  }),
  computed: {
    twd() {
      return parseInt(this.text, 10);
    },
    jpy() {
      return this.twd * 3.69;
    },
    usd() {
      return this.twd * 0.035
    }
  },
};
</script>