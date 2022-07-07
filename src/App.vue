<template>
  <v-app>
    <v-main>
      <menu-bar></menu-bar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import MenuBar from './components/MenuBar.vue';
</script>
