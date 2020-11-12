<template>
  <div>
    <input v-model="text"/>
    <button @click="addTodo">Submit</button>
    <ol>
        <li v-for="item in list" 
        :key="item.id"
        @click="toggleDone(item)"
        >
            <input type="checkbox" v-model="item.done"/>
            {{ item.text }}
            <button @click="cancelTodo(item)">cancel</button>
        </li>
    </ol>
  </div>
</template>

<script>
export default {
  data: () => ({
    text: "",
    list: [],
  }),
  methods: {
      addTodo() {
          if(this.text === "") return;
          const item = {
              id: Date.now(),
              text: this.text,
              done: false,
          }
          this.list.push(item)
          this.text = "";
      },
      toggleDone(item) {
          item.done = !item.done
      },
      cancelTodo(item) {
          //const idx = this.list.findIndex((elm) => elm === item)
          const idx = this.list.indexOf(item)
          this.list.splice(idx,1)
      },
  }
};
</script>