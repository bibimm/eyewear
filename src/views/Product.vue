<template>
  <div v-for="item in store.products" :key="item.name">
    <span class="h1"> Name : {{ item.name }}</span>
    <br />
    <span class="h1"> Price : {{ item.price }}</span>
    <br />
    <span class="h1"> Each : {{ item.each }}</span>
    <v-btn @click="store.addCart(item)" color="red"> Cart{{ item.name }}</v-btn>
    <br />
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/products';
const store = useProductStore();
console.log(store.products);
</script>

<style lang="scss" scoped></style>
