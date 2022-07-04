import { defineStore } from 'pinia';
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [
      { price: 100, name: 'แว่นดำ', each: 10 },
      { price: '2000', name: 'แว่นขาว', each: '50' },
    ],
  }),
  actions: {
    pushData(param) {
      this.products.push(param);
    },
  },
});
