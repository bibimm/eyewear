<template>
  <v-container class="tw-mt-16">
    <v-row no-gutters>
      <v-carousel
        cycle
        width="100%"
        hide-delimiter-background
        :show-arrows="false"
        delimiter-icon="mdi-minus"
        progress
        touch
      >
        <!-- <v-carousel-item v-for="(topicCarousel, i) in topicCarousel" :key="i"> -->
        <v-carousel-item
                    v-for="(item,i) in picCarousel"
                    :key="i"
                    :src="item.src"
                  >
        
          <!-- <v-sheet :color="colorsCarousel[i]" height="100%"> -->
            <v-row class="fill-height"  align="center" justify="center">
              <v-col cols="12" >
                <v-row no-gutters>
                  <v-col cols="12" class="d-flex align-center justify-center tw-mb-6">
                    <div 
                      class="
                      tw-text-6xl
                      tw-font-base
                      tw-tracking-widest
                      "
                    >
                      {{ topicCarousel[i] }}
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters >
                  <v-col cols="12" class="d-flex align-center justify-center tw-text-lg">
                    {{ detailCarousel[i] }}
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          <!-- </v-sheet> -->
        </v-carousel-item>
      </v-carousel>
    </v-row>

<!-- NEW ARRIVALS & BEST SELLER  ----------------------------------------------------------------------------------->
    
    <v-row no-gutters>
      <v-col cols="12" 
        class="
          tw-rounded-3xl
          tw-mt-6
          tw-shadow-xl
        "
      >
        <v-row no-gutters
          class="
            d-flex
            justify-center
            align-center
            tw-pt-4
            tw-space-x-10
            tw-tracking-wider
            tw-text-lg
          "
        >
          <div
              v-if="(newBtn==false && bestBtn==true) || (bestBtn==true && newBtn==false)"
            class="
            tw-space-x-10
            "
          >
            <button
              @click="clickNewOrBest('new')"
              class="
              tw-text-gray-500
              hover:tw-underline tw-underline-offset-4
              "
            >
              NEW ARRIVAL
            </button>
            <button
              @click="clickNewOrBest('best')"
              elevation="0"
              fab
              class="
              tw-underline tw-underline-offset-4
              tw-text-black
              "

            >
              BEST SELLER
            </button>
            
            
          </div>
          <div
            v-else-if="(bestBtn==false && newBtn==true) || (newBtn==true && bestBtn==false)"
            class="
            tw-space-x-10
            "
          > 
            <button
              @click="clickNewOrBest('new')"
              class="
              tw-text-black
              tw-underline tw-underline-offset-4
              "
            >
              NEW ARRIVAL
            </button>
            <button
              @click="clickNewOrBest('best')"
              elevation="0"
              fab
              class="
              tw-text-gray-500
              hover:tw-underline tw-underline-offset-4
              "

            >
              BEST SELLER
            </button>
            
          </div>
        </v-row>
        <v-row no-gutters
          v-if="store.newBestBtn == false" 
          class="tw-p-6"
        >
          <!-- <v-sheet
            class="mx-auto"
            elevation="2"
            max-width="800"
          >
            <v-slide-group
              v-model="model"
              class="pa-1"
              active-class="success"
              show-arrows
            > -->
            <!-- <div
              v-if="storeFilterNewArrival.length > 3"
            > 
              <v-btn>see more</v-btn> -->
              <!-- <v-col cols="12">
                <v-row no-gutters> -->

          
              <v-col cols="4"
                v-for="(item, index) in storeFilterNewArrival"
                :key="item"
                class="
                tw-mb-1
                "
              >
                <!-- <div
                  v-if="i == 3"
                  i = null
                >{{i}}
                  <v-btn
                    @click="i = 3"
                  >see more</v-btn>
                </div> -->
                <v-hover
                  v-slot="{ isHovering, props }"
                  open-delay="100"
                >
                  <div
                    class="description
                    tw-mx-4
                    tw-my-0
                    tw-px-2
                    tw-py-2
                    "
                    :class="{ 'on-hover': isHovering }"
                    v-bind="props"
                  >
                    <v-row no-gutters>
                      <v-carousel 
                        height="200"
                        hide-delimiters
                        show-arrows-on-hover
                      >
                        <v-carousel-item
                          v-for="(item, i) in item.image"
                          :key="i"
                          :src="item"
                        ></v-carousel-item>
                      </v-carousel>
                    </v-row>
                    
                    <v-row no-gutters 
                      align="center"
                      justify="center"
                      class="
                        tw-font-medium
                        tw-text-lg
                        tw-pb-0
                        tw-tracking-wider
                      "
                    >
                      {{ item.name }}
                    </v-row>
                    <v-row no-gutters
                      align="center"
                      justify="center"
                      class="
                        tw-pb-0
                        tw-tracking-wide
                      "
                    >
                      ฿{{ item.price }}
                      <!-- ฿{{ eachItem.price }} -->
                      <!-- {{ item.price | toCurrency }} -->
                      <!-- {{ invoice.fees | toCurrency }} -->
                    </v-row>
                    <v-row no-gutters
                      align="center"
                      justify="center"
                      class="
                        stock
                        tw-pb-1.5
                        tw-text-gray-500
                        tw-text-sm
                        tw-tracking-wide
                      "
                    >
                      stock: {{ item.each }}
                    </v-row>
                    <v-row no-gutters>
                      <v-btn
                        @click="addedCart(item, index)"
                        :disabled="item.each<=0"
                        type="button"
                        block
                        rounded-lg
                        text="white"
                        class="
                        block"
                      > 
                        <span v-if="item.addCarts==false">
                          ADD TO BAG
                        </span>
                        <span v-if="item.addCarts==true">
                          ADDED
                        </span>
                      </v-btn>
                    </v-row>
                  </div>
                </v-hover>
                
              <!-- </v-col>
              </v-row> -->

              </v-col>
            <!-- </div> -->
            <!-- </v-slide-group>
          </v-sheet> -->
        </v-row>

        <v-row no-gutters
          v-if="store.newBestBtn == true" 
          class="tw-p-6"
        >
          <!-- <v-sheet
            class="mx-auto"
            elevation="2"
            max-width="800"
          >
            <v-slide-group
              v-model="model"
              class="pa-1"
              active-class="success"
              show-arrows
            > -->
              <v-col cols="4"
                v-for="(item, index) in storeFilterBestSeller"
                :key="item"
                class="
                tw-mb-1
                "
              >
                <v-hover
                  v-slot="{ isHovering, props }"
                  open-delay="100"
                >
                  <div
                    class="description
                    tw-mx-4
                    tw-my-0
                    tw-px-2
                    tw-py-2
                    "
                    :class="{ 'on-hover': isHovering }"
                    v-bind="props"
                  >
                    <v-row no-gutters>
                      <v-carousel 
                        height="200"
                        hide-delimiters
                        show-arrows-on-hover
                      >
                        <v-carousel-item
                          v-for="(item, i) in item.image"
                          :key="i"
                          :src="item"
                        ></v-carousel-item>
                      </v-carousel>
                    </v-row>
                    
                    <v-row no-gutters 
                      align="center"
                      justify="center"
                      class="
                        tw-font-medium
                        tw-text-lg
                        tw-pb-0
                        tw-tracking-wider
                      "
                    >
                      {{ item.name }}
                    </v-row>
                    <v-row no-gutters
                      align="center"
                      justify="center"
                      class="
                        tw-pb-0
                        tw-tracking-wide
                      "
                    >
                      ฿{{ item.price }}
                      <!-- ฿{{ eachItem.price }} -->
                      <!-- {{ item.price | toCurrency }} -->
                      <!-- {{ invoice.fees | toCurrency }} -->
                    </v-row>
                    <v-row no-gutters
                      align="center"
                      justify="center"
                      class="
                        stock
                        tw-pb-1.5
                        tw-text-gray-500
                        tw-text-sm
                        tw-tracking-wide
                      "
                    >
                      stock: {{ item.each }}
                    </v-row>
                    <v-row no-gutters>
                      <v-btn
                        @click="addedCart(item, index)"
                        :disabled="item.each<=0"
                        type="button"
                        block
                        rounded-lg
                        text="white"
                        class="
                        block"
                      > 
                        <span v-if="item.addCarts==false">
                          ADD TO BAG
                        </span>
                        <span v-if="item.addCarts==true">
                          ADDED
                        </span>
                      </v-btn>
                    </v-row>
                  </div>
                </v-hover>
              </v-col>
            <!-- </v-slide-group>
          </v-sheet> -->
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<!-- <script >
import { useProductStore } from "@/stores/products";
import { ref } from "vue";

export default {
  setup() {
    const store = useProductStore();
    const name = ref("");
    const price = ref("");
    const each = ref("");

    const storeFilterNewArrival = store.filterByType("newArrival")
    const storeFilterBestSeller = store.filterByType("bestSeller")

    const newBtn = ref(true);
    const bestBtn = ref(false);
 

    return { store, name, price, each, storeFilterNewArrival, storeFilterBestSeller, newBtn, bestBtn };
  },
  
  data () {
    return {
      picCarousel: [
        {
          src: 'https://i.pinimg.com/564x/38/9a/72/389a723f1c0069425d592e8ed70ba837.jpg',
        },
        {
          src: 'https://i.pinimg.com/564x/e6/22/7c/e6227c93897384cd72d7e622fe0e288a.jpg',
        },
        {
          src: 'https://i.pinimg.com/564x/e6/5b/c9/e65bc929fb2abc4c3d7dc335bcf969ac.jpg',
        },
      ],
      colorsCarousel: [
        "#e8f1f8",
        "#feefed",
        "#f7eef9",
        "#f9f2e8",
        "#f7f7ed",
        "#e2f5fb",
        "#e9f4ec",
      ],
      topicCarousel: [
        "SUNGLASSES", 
        "Environment Friendly Frame", 
        "Classic Design", 
      ], 
      detailCarousel: [
        "UV Protecting", 
        "New Arrivals", 
        "Easy To wear", 
      ],
      model: null,
      // textButton:  ["ADD TO CART", "ADDED"] ,
    }
  },
  

  methods() {
    Vue.filter('toCurrency', function (value) {
      if (typeof value !== "number") {
        return value;
      }
      var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
      return formatter.format(value);
    });
  },

  
};


// let btnAddToCart = document.querySelector('button');

// btnAddToCart.addEventListener('click', () => {
//   btnAddToCart.innerText = 'ADDING...';
//   setTimeout(() => {
//     btnAddToCart.innerText = 'ADDED';
//   }, 5000);
// })

</script> -->

<script setup>
import { useProductStore } from "@/stores/products";
import { ref } from "vue";

const store = useProductStore();
const name = ref("");
const price = ref("");
const each = ref("");

const storeFilterNewArrival = store.filterByType("newArrival")
const storeFilterBestSeller = store.filterByType("bestSeller")

const newBtn = ref(true);
const bestBtn = ref(false);

const  picCarousel = [
  {
    src: 'https://i.pinimg.com/564x/38/9a/72/389a723f1c0069425d592e8ed70ba837.jpg',
  },
  {
    src: 'https://i.pinimg.com/564x/e6/22/7c/e6227c93897384cd72d7e622fe0e288a.jpg',
  },
  {
    src: 'https://i.pinimg.com/564x/e6/5b/c9/e65bc929fb2abc4c3d7dc335bcf969ac.jpg',
  },
];
const  colorsCarousel = [
  "#e8f1f8",
  "#feefed",
  "#f7eef9",
  "#f9f2e8",
  "#f7f7ed",
  "#e2f5fb",
  "#e9f4ec",
];
const  topicCarousel = [
  "SUNGLASSES", 
  "Environment Friendly Frame", 
  "Classic Design", 
];
const  detailCarousel = [
  "UV Protecting", 
  "New Arrivals", 
  "Easy To wear", 
];
const  model = null;

const clickNewOrBest = (name) => {
  if(name == 'best') {
    bestBtn.value = true;
    newBtn.value = false;
    store.updateNewBestBtn('best')

  }
  else if(name == 'new') {
    newBtn.value = true;
    bestBtn.value = false;
    store.updateNewBestBtn('new')

  }
}

const addedCart = (item, index) => {
  store.addCart({ name: item.name, price: item.price, each: 1, image: item.image })
  store.update(item.name, index)
}


    
  
  

  // methods() {
  //   Vue.filter('toCurrency', function (value) {
  //     if (typeof value !== "number") {
  //       return value;
  //     }
  //     var formatter = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD'
  //     });
  //     return formatter.format(value);
  //   });
  // },

  



// let btnAddToCart = document.querySelector('button');

// btnAddToCart.addEventListener('click', () => {
//   btnAddToCart.innerText = 'ADDING...';
//   setTimeout(() => {
//     btnAddToCart.innerText = 'ADDED';
//   }, 5000);
// })

</script>

<style lang="scss" scoped>

.description {
  background-color: rgb(255, 255, 255);
  transition-duration: 0.25s;
}
.description.active,
.description:hover{
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
}
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: #afad73;
  padding: 10px 0px;
  cursor: pointer;
  text-align: center;
  opacity: 0;
  transition-duration: 0.25s;
  color: white;

}
.block:hover {
  background-color: #979661;
}
.on-hover {
  .block {
    opacity: 1;
  }
  .stock {
    opacity: 1;
  }
 }
 .stock {
  opacity: 0;
  transition-duration: 0.25s;
 }

</style>