<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <span>ตะกร้าสินค้า</span>
        <v-row no-gutters v-if="store.cart != null || undefined">
          <v-col
            v-for="(items, index) in store.cart"
            :key="items.name"
            cols="12"
          >
            <v-row no-gutters>
              <v-col cols="12">ชื่อสินค้า : {{ items.name }}</v-col>
              <v-col cols="12">ราคา : {{ items.price }}</v-col>
              <v-col cols="12">จำนวน : {{ items.each }}</v-col>
              <v-col cols="12">
                <v-btn
                  class="mb-10"
                  @click="store.deleteCart(index)"
                  color="red"
                  >Delete</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row no-gutters="">
          <v-col cols="12">
            <span>ราคาสินค้า : {{ sum }}</span>
            <span>{{ test }}</span>
          </v-col>
          <v-col cols="12">
            <span>ค่าธรรมเนียม : 7%</span>
          </v-col>
          <v-col cols="12">
            <span>ราคาสินค้าทั้งหมด : {{ serviceCharge }}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/products';
const store = useProductStore();
const total = ref(0);
const abc = 0;

const test = computed(() => {
  total.value = 0;
  store.cart.forEach((each) => {
    total.value = each.price * each.each + total.value;
  });
});

const serviceCharge = computed(() => total.value * 0.07 + total.value);

const sum = computed(() => total);
</script>

<style lang="scss" scoped></style>
