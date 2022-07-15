<template>
  <v-btn color="primary" @click="isShow = true"> Open Dialog </v-btn>
  <Modal :dialog="isShow" />
</template>



<script setup>
import Modal from '../components/Modal.vue';
import { ref } from 'vue';
const isShow = ref(false);
</script>
