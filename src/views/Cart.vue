<template>
  <v-container class="tw-my-16">
    <v-row no-gutters>
      <v-col cols="12">
        <v-row no-gutters class="tw-pb-10 tw-pt-8">
          <span class="
            tw-text-3xl
            tw-font-medium
            tw-tracking-wide
          ">Shopping Bag</span>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-row no-gutters class="tw-pr-8">
          <v-col cols="12">
            <v-row no-gutters v-if="store.cart != null || undefined">
              <v-col cols="12"
                v-if="store.cart == 0"
              >
                Your bag is empty.
              </v-col>
              <!-- else not empty-->
              <v-col cols="12">
                <v-row no-gutters 
                  v-if="store.cart != 0"
                  class="
                    tw-pt-2
                    tw-pb-3
                    tw-uppercase
                    tw-border-b-[1.5px]
                  "
                >
                  <v-col cols="11">
                    <v-row no-gutters>
                      <v-col cols="6" 
                        class="
                          d-flex 
                          align-center 
                          justify-center"
                      >Product</v-col>
                      <v-col cols="3" 
                        class="d-flex 
                          align-center 
                          justify-center"
                      >Quantity</v-col>
                      <v-col cols="3" 
                        class="d-flex 
                          align-center 
                          justify-center"
                      >Price</v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row no-gutters 
                v-for="(items, index) in store.cart"
                :key="items.name"
                  class="
                  tw-border-b-[1.5px]
                  tw-py-8
                  "
                >
                  <v-col cols="11" class="
                    d-flex 
                    align-center 
                    justify-center"
                  >
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-row no-gutters>
                          <v-col cols="3">
                            <v-img             
                              :src="items.image[0]"
                            >
                            </v-img>
                          </v-col>
                          <v-col cols="3"
                            class="
                              d-flex 
                              align-center 
                              justify-center
                              tw-font-medium
                            "
                          >
                            <v-row no-gutters class="tw-pl-10 tw-text-lg">
                              {{ items.name }}
                            </v-row>
                          </v-col>
                          <v-col cols="3" 
                            class="d-flex 
                              align-center 
                              justify-center"
                          >
                            <div 
                              class="
                                tw-w-6
                                tw-h-6
                                tw-rounded-full
                                hover:tw-bg-gray-100
                                d-flex 
                                justify-center
                                align-center
                              "
                            >
                              <button @click="store.decreaseCount(index)"
                                
                                class=" 
                                tw-text-lg 
                                tw-pb-1
                                "
                              > - </button>
                            </div>
                            
                            <div class="tw-mx-4">
                              {{ items.each }}
                            </div>
                            <div 
                              class="
                                tw-w-6
                                tw-h-6
                                tw-rounded-full
                                hover:tw-bg-gray-100
                                d-flex 
                                justify-center
                                align-center
                              "
                            >
                              <button @click="store.increaseCount(index)"
                                class="tw-text-lg 
                                tw-pb-1
                                "
                              > + </button>
                              </div>
                          </v-col>
                          <v-col cols="3" 
                            class="d-flex 
                              align-center 
                              justify-center"
                          >
                            ฿{{ items.price }}
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="1" 
                    class="
                      d-flex 
                      align-center 
                      justify-center
                      tw-pr-10
                    "
                  >
                    <button
                      @click="store.deleteCart(index)"
                    >
                      <div class="tw-opacity-50 hover:tw-opacity-80">
                        <v-img
                          :width="15"
                          src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1657495462~hmac=d8c23d46940c215cdfe466e34c420bcc"
                        >
                        </v-img>
                      </div>
                    </button>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row no-gutters class="tw-pt-12">
          <v-col cols="12">
            <router-link to="/">
              <button 
                class="
                  tw-underline tw-underline-offset-4
                  tw-text-[#afad73]
                  hover:tw-text-[#8b8b5a]
                "
              >
                Continue Shopping
              </button>
            </router-link>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-row no-gutters 
          class="
            tw-pl-10
          "
        >
          <v-col cols="12"
            class="
              tw-text-2xl
              tw-font-medium
              tw-border-b-[1.5px]
            "
          >
            <v-row no-gutters
              class="
              tw-pb-3
              d-flex
              align-center 
              justify-center
              "
            >
              Order Summary
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row no-gutters class="tw-pb-4 tw-pt-4">
              <v-col cols="7">
                Subtotal (Items) 
              </v-col>
              <v-col cols="5" class="
                d-flex
                align-center 
                justify-end
              ">฿{{ sum }}
              </v-col>
            </v-row>
            <!-- <span>{{ store.cart.length }}</span> -->
          </v-col>
          <v-col cols="12">
            <v-row no-gutters class="tw-pb-4">
              <v-col cols="7">
                Shipping
              </v-col>
              <v-col cols="5" class="
                d-flex
                align-center 
                justify-end
              ">Free
              </v-col>
            </v-row>
            <!-- <span>Vat  7%</span> -->
          </v-col>
          <v-col cols="12">
            <v-row no-gutters 
              class="
                tw-pb-4
                tw-border-t-[1.5px]
                tw-pt-4
                tw-font-medium
              "
            >
              <v-col cols="7">
                Order Total
              </v-col>
              <v-col cols="5" class="
                d-flex
                align-center 
                justify-end
              ">
              <!-- ฿{{ serviceCharge }} -->
              ฿{{ sum }}
              </v-col>
            </v-row>
          </v-col>

          <!-- ใช้ vuetify dialog -->

          <v-col cols="12">
            <!-- <v-row
              no-gutters
              class="
                tw-pt-1
                d-flex
                align-center 
                justify-center
                tw-rounded-md
              "
            >
              <button
                class="button
                  tw-text-white
                  tw-rounded
                "
                @click="(showModal = true) && store.deleteAllCart()"
              >
                CHECKOUT
              </button>
              <transition name="fade" appear>
                <div class="modal-overlay" 
                  v-if="showModal"
                  @click="showModal = false"
                >
                </div>
              </transition>
              <transition name="slide" appear>
                <div class="modal" v-if="showModal">
                  <div 
                    class="
                    d-flex
                    align-center 
                    justify-center"
                  >
                    <div
                      class="
                      tw-w-20
                      "
                    >
                      <v-img
                        :width="100"
                        src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png"
                      >
                      </v-img>
                    </div>
                  </div>
                  <span 
                    class="
                    d-flex  
                    align-center 
                    justify-center
                    tw-text-xl
                    tw-py-4
                  ">
                    Thank you for your order!
                  </span>

                  <router-link to="/">
                    <button 
                      class="button
                      tw-text-white
                      "
                      @click="showModal = false"
                    >Back to Home
                    </button>
                  </router-link>
                  <router-link to="/cart">
                    <div 
                      class="
                        tw-opacity-50 
                        hover:tw-opacity-80
                        tw-absolute
                        tw-top-4
                        tw-right-4
                      "
                      @click="showModal = false"
                    >
                      <v-img
                          :width="15"
                          src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1657495462~hmac=d8c23d46940c215cdfe466e34c420bcc"
                        >
                        </v-img>
                      </div>
                  </router-link>
                </div>
              </transition>
            </v-row> -->
            <!-- <v-row no-gutters>
              <v-btn @click="isShow = true" class="button"> CHECKOUT </v-btn>
              <Modal :dialog="isShow" />
            </v-row> -->
            <v-row no-gutters>
              <v-btn
                class="button"
                @click.stop="dialog = true"
                @click="checkBill()"

              >
                CHECKOUT
              </v-btn>

              <v-dialog
                v-model="dialog"
                max-width="290"
              >
                <div class="
                 tw-bg-white
                 tw-p-4
                 tw-pt-8
                 tw-w-96
                 tw-rounded-lg
                ">
                  <!-- <span class="d-flex align-center justify-center">Thanks for shopping with us!</span> -->
                  <div 
                    class="
                    d-flex
                    align-center 
                    justify-center"
                  >
                    <div
                      class="
                      tw-w-20
                      "
                    >
                      <v-img
                        :width="100"
                        src="https://cdn-icons-png.flaticon.com/512/1442/1442912.png"
                      >
                      </v-img>
                    </div>
                  </div>
                  <span 
                    class="
                    d-flex  
                    align-center 
                    justify-center
                    tw-text-xl
                    tw-py-4
                  ">
                    Thank you for your order!
                  </span>

                  <router-link to="/">
                    <button 
                      class="button
                      tw-text-white
                      "
                      @click="dialog = false"
                    >Back to Home
                    </button>
                  </router-link>
                  <router-link to="/cart">
                    <div 
                      class="
                        tw-opacity-50 
                        hover:tw-opacity-80
                        tw-absolute
                        tw-top-4
                        tw-right-4
                      "
                      @click="dialog = false"
                    >
                      <v-img
                          :width="15"
                          src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1657495462~hmac=d8c23d46940c215cdfe466e34c420bcc"
                        >
                        </v-img>
                      </div>
                  </router-link>
                </div>
              </v-dialog>
            </v-row>
          </v-col>
          <!-- <v-col cols="12">
            <v-row justify="center">
              <v-btn
                class="white--text"
                color="teal"
                @click="overlay = !overlay"
              >
                Show Overlay
              </v-btn>

              <v-overlay
                :z-index="zIndex"
                :value="overlay"
              >
                <v-btn
                  class="white--text"
                  color="teal"
                  @click="overlay = false"
                >
                  Hide Overlay
                </v-btn>
              </v-overlay>
            </v-row>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>



    <!-- <v-row no-gutters>
        <v-col cols="12">
            <v-row no-gutters
              class="
                tw-text-3xl
                tw-font-medium
              "
            >
                Cart
            </v-row>
        </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12">
        <div v-for="item in store.products" :key="item.name">
          <div ></div>
        </div>
        <div v-for="(item, index) in customer.customerCart" :key="item.name">
            <span class="h1"> Name : {{ item.name }}</span>
            <br />
            <span class="h1"> Price : {{ item.price }}</span>
            <br />
            <span class="h1"> Qty : {{ item.qty }}</span>
            <br />
            <v-btn color="blue" @click="customer.increaseCount(index)"
                > + </v-btn
            >
            <v-btn color="blue" @click="customer.decreaseCount(index)"

                > - </v-btn
            >
            <br />

        </div>


        <span class="h1"> Counter : {{ storeCounter.counter }}</span>
        <br />
        <span class="h1"> Number : {{ storeCounter.number }}</span>
        <br />

        <span class="h1"> Text : {{ storeCounter.text }}</span>

        <div>
            <v-btn color="blue" @click="storeCounter.$patch({ counter: storeCounter.counter + 1 })"
                >Increment</v-btn
            >
            <v-btn color="blue" @click="storeCounter.$patch({ number: storeCounter.number + 1 })"
                >Increment</v-btn
            >

            <button 
                @click="storeCounter.increaseCount"
                class="counter-button"
            >
                {{ storeCounter.count }}
            </button>
        </div>
      </v-col>
    </v-row> -->


     

  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/products';
import Modal from '../components/Modal.vue';

const store = useProductStore();
const total = ref(0);

const test = computed(() => {
  total.value = 0;
  store.cart.forEach((each) => {
    total.value = each.price * each.each + total.value;
  });
  return total.value;
});

const serviceCharge = computed(() => total.value * 0.07 + total.value);

const sum = computed(() => test);

const isShow = ref(false);

const dialog = ref(false);

const checkBill = () => {
  store.checkOut()
  store.deleteAllCart()
}


</script>

<!-- <script>
import { ref, computed } from 'vue';
import { useProductStore } from '@/stores/products';

export default {
  setup() {
    const store = useProductStore();
    const total = ref(0);

    const test = computed(() => {
      total.value = 0;
      store.cart.forEach((each) => {
        total.value = each.price * each.each + total.value;
        // console.log(each.price);
        // console.log(each.each);
        // console.log(total.value);
        // return each.price;

      });
      return total.value
      
    });


    const serviceCharge = computed(() => total.value * 0.07 + total.value);

    const sum = computed(() => test);
    // const sum = computed(() => total.value);
    
    return { store, sum, test, serviceCharge }
  },
  data() {
    return {
      showModal: true,
      // overlay: false,
      // zIndex: 0,
    }
  },
  //  data: () => ({
  //     overlay: false,
  //     zIndex: 0,
  //   }),
}
</script> -->

<!-- <script>
import { ref, computed } from 'vue';
import { useCustomerStore } from "@/stores/customerCart";
import { useCounterStore } from "@/stores/counter";

// const customer = useCustomerStore();
// const counter = useCounterStore();

// console.log(customer.customerCart);

export default {
  setup() {
    const customer = useCustomerStore();
    const storeCounter = useCounterStore();

    return { customer, storeCounter };
  },
};

</script> -->

<style lang="scss" scoped>
.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  width: 100%;
  // padding: 15px 25px;
  border-radius: 8px;

  background-color: #afad73;
  padding: 10px 0px;
  text-align: center;



  color: #fff;
  // font-size: 18px;
  font-weight: 450;

  // box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  &:hover {
    // box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
    // background-color: #979661;
    background-color: #8b8b5a;

  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(19, 19, 19, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 16px;

  padding: 25px;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-50%) translateX(100vw);
}
</style>
