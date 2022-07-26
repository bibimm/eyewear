import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 1,
    number: 1,
    text: '55555',
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
    incrementNumber() {
      this.number++;
    },
    decrementNumber() {
      this.number--;
    },

    increaseCount() {
      this.count++
    },
    decreaseCount() {
      this.count--
    },

    
  },
});
