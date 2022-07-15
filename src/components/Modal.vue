<template lang="">
  <v-dialog v-model="props.dialog">
    <v-row style="background-color: white">
      <v-col cols="12"> A </v-col>
    </v-row>
  </v-dialog>
</template>

<script setup>

const props = defineProps({
  dialog: Boolean,
});

</script>
