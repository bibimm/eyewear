<template>

  <v-dialog v-model="props.dialog">
    <v-row style="background-color: white">
      <v-col cols="12">
      <div class="d-flex align-center justify-center">
        <div class="tw-w-20">
          <v-img
            :width="100"
            src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png"
          >
          </v-img>
        </div>
      </div>
      <span class="d-flex align-center justify-center tw-text-xl tw-py-4">
        Thank you for your order!
      </span>

      <router-link to="/">
        <button class="button tw-text-white">
          Back to Home
        </button>
      </router-link>
      <router-link to="/cart">
        <div
          class="tw-opacity-50 hover:tw-opacity-80 tw-absolute tw-top-4 tw-right-4"
        >
          <v-img
            :width="15"
            src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1657495462~hmac=d8c23d46940c215cdfe466e34c420bcc"
          >
          </v-img>
        </div>
      </router-link>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script setup>
const props = defineProps({
  dialog: Boolean,
});
</script>
