<template>
  <v-container>
    <v-row class='align-center'>
      <v-col cols="8">
        <v-text-field hide-details outlined v-model="text" ref="ipt" />
      </v-col>
      <v-col cols="4">
        <v-btn color="primary" @click="addTodo">Submit</v-btn>
      </v-col>
    </v-row>

    <ul>
      <li v-for="item in list" :key="item.id" @click="toggleDone(item)">
        <input type="checkbox" v-model="item.done" />
        {{ item.text }}
        <v-btn x-small color="error" @click="deleteItem(item)">delete</v-btn>
      </li>
    </ul>

    <pre>{{ JSON.stringify(list, null, 2) }}</pre>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    text: "",
    list: [],
  }),
  methods: {
    deleteItem(item) {
      const idx = this.list.indexOf(item);
      this.list.splice(idx, 1);
    },
    toggleDone(item) {
      item.done = !item.done;
    },
    addTodo() {
      if (this.text === "") return;

      const item = {
        id: Date.now(),
        text: this.text,
        done: false,
      };

      this.list.push(item);
      this.text = "";
    },
  },
  mounted() {
    this.$refs.ipt.focus();
  },
};
</script>