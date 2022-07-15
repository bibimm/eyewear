<template>
  <div class="d-flex">
    <v-row>
      <v-col cols="12" v-for="item in list" :key="item">
        <v-hover v-slot="{ isHovering, props }">
          <v-card height="200" max-width="350" class="mx-auto" v-bind="props">
            <v-card-text
              :class="isHovering ? 'text-hover' : 'text'"
              class="my-4 text-center text-h6"
            >
              Hover over me!
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
  <v-btn color="primary" @click="isShow = true"> Open Dialog </v-btn>
  <Modal :dialog="isShow" />
</template>

<script setup>
import Modal from '../components/Modal.vue';
import { ref } from 'vue';
const isShow = ref(false);
const list = ['cake', 'donut', 'cookie'];
</script>

<style>
.text-hover {
  color: red;
  border: 2px solid red;
}
.text {
  color: blue;
  border: 2px solid blue;
}
</style>
