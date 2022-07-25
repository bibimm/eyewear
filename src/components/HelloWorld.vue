<template>
  <span class="h1"> Counter : {{ store.counter }}</span>
  <br />
  <span class="h1"> Number : {{ store.number }}</span>
  <br />

  <span class="h1"> Text : {{ store.text }}</span>

  <div>
    <v-btn color="blue" @click="store.$patch({ counter: store.counter + 1 })"
      >Increment</v-btn
    >
    <v-btn color="blue" @click="store.$patch({ number: store.number + 1 })"
      >Increment</v-btn
    >
  </div>
</template>

<script >
import { useCounterStore } from "@/stores/counter";

export default {
  setup() {
    const store = useCounterStore();

    return { store };
  },
};
</script>

<style lang="scss" scoped>
</style>