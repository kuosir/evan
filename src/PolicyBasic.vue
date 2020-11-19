<template>
  <div>
    <h4>Name</h4>
    <input v-model="name" />
    <h4>Gender</h4>
    <label>
      <input type="radio" value="m" v-model="gender" />
      Male
    </label>
    <label>
      <input type="radio" value="f" v-model="gender" />
      Female
    </label>
    <h4>Age</h4>
    <input v-model.number="age" />
  </div>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.getters.form.name;
      },
      set(val) {
        this.$store.dispatch("setForm", { name: val });
      },
    },
    age: {
      get() {
        return this.$store.getters.form.age;
      },
      set(val) {
        this.$store.dispatch("setForm", { age: val });
      },
    },
    gender: {
      get() {
        return this.$store.getters.form.gender;
      },
      set(val) {
        this.$store.dispatch("setForm", { gender: val });
      },
    },
  },
};
</script>