<template>
  <div>
    <h1>Policy</h1>
    <button @click="tab = 1">1</button>
    <button @click="tab = 2">2</button>
    <button @click="tab = 3">3</button>
    <hr />
    <PolicyBasic v-if="tab === 1" />
    <PolicyType v-if="tab === 2" />
    <PolicyPayment v-if="tab === 3" />
  </div>
</template>

<script>
import PolicyBasic from "./PolicyBasic";
import PolicyType from "./PolicyType";
import PolicyPayment from "./PolicyPayment";

export default {
  components: {
    PolicyBasic,
    PolicyType,
    PolicyPayment,
  },
  data: () => ({ tab: 1 }),
};
</script>