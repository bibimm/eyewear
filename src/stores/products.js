import { defineStore } from 'pinia';
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [
      { price: 100, name: 'แว่นดำ', each: 10 },
      { price: '2000', name: 'แว่นขาว', each: '50' },
    ],
    cart: [],
  }),
  actions: {
    pushData(param) {
      this.products.push(param);
    },
    addCart(data) {
      this.cart.push(data);
    },
    deleteCart(index) {
      this.cart.splice(index, 1);
    },
  },
});
