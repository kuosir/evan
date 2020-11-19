import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// scars

const store = new Vuex.Store({
  state: {
    form: {
      name: '',
      gender: 'm',
      age: 18,
      type: 'A',
      years: 0,
      payment: 'atm', // 'credit'
      paytime: 'year', // 'quater'
    },
  },
  mutations: {
    setForm(state, payload) {
      state.form = { ...state.form, ...payload }
    }
  },
  getters: {
    form: state => state.form,
  },
  actions: {
    setForm(store, payload) {
      store.commit('setForm', payload)
    },
    submitForm(store) {
      const form = store.getters.form
      alert(JSON.stringify(form, null, 2))
      // api.post('/new-policy', { form }).then(() => {
      //   // 
      // })
    },
  }
});

export default store;
