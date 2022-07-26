<template>
  <v-container class="tw-mt-16">
    <v-row no-gutters>
      <v-col cols="12">
        <v-row no-gutters class="tw-py-4 tw-text-sm tw-text-gray-400 tw-font-light">
          <router-link to="/">HOMEPAGE /</router-link>
          <a class="tw-text-black tw-ml-1 tw-uppercase">eyeglasses </a>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row no-gutters 
          class="
            d-flex
            justify-center
            align-center
            tw-pb-6
          "
        >
          <div class="
            search-box
            d-flex
            justify-start
            align-center
            tw-bg-slate-100
            tw-rounded-full
            tw-w-2/4
            overflow-hidden
            tw-p-4
            hover:tw-bg-slate-200
            focus:tw-ring-2
            focus:tw-ring-offset-2
            focus:tw-ring-offset-purple-100
            focus:tw-border-2
            "  
          >
            <div 
              class=" 
              d-flex 
              justify-center 
              align-center
              " 
            >
              <button>
                <v-img
                  :width="20"
                  src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
                >
                </v-img>
              </button>
            </div>
            <!-- <input type="search" name="search" id="" placeholder="Search" v-on:change="filterByName()" v-model="msg">   -->
            <input 
              placeholder="Search name"  
              v-on:keyup="filterByName()" 
              v-model="msg" 
              class="
                tw-h-full   
                tw-w-full 
                tw-outline-0
                tw-pl-3
              "
            >  
          </div>
        </v-row>
        <v-row no-gutters>
          <v-col cols="4" v-for="(item, index) in showProducts" :key="item" class="
            tw-mb-1
            "
          >
            <v-hover v-slot="{ isHovering, props }" open-delay="100">
              <div class="description
              tw-mx-4
              tw-my-0
              tw-px-2
              tw-py-2
              " :class="{ 'on-hover': isHovering }" v-bind="props">
                <v-row no-gutters>
                  <v-carousel height="200" hide-delimiters show-arrows-on-hover>
                    <v-carousel-item v-for="(item, i) in item.image" :key="i" :src="item"></v-carousel-item>
                  </v-carousel>
                </v-row>

                <v-row no-gutters align="center" justify="center" class="
                  tw-font-medium
                  tw-text-lg
                  tw-pb-0
                  tw-tracking-wider
                ">
                  {{ item.name }}
                </v-row>
                <v-row no-gutters align="center" justify="center" class="
                  tw-pb-0
                  tw-tracking-wide
                ">
                  ฿{{ item.price }}
                  <!-- ฿{{ eachItem.price }} -->
                  <!-- {{ item.price | toCurrency }} -->
                  <!-- {{ invoice.fees | toCurrency }} -->
                </v-row>
                <v-row no-gutters align="center" justify="center" class="
                  stock
                  tw-pb-1.5
                  tw-text-gray-500
                  tw-text-sm
                  tw-tracking-wide
                ">
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
        </v-row>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useProductStore } from "@/stores/products";

const store = useProductStore();
const storeFilterEyeglasses = store.filterByCategory("eyeglasses")
 
const msg = ref('')
const showProducts = ref(storeFilterEyeglasses)

const filterByName = () => {
  showProducts.value = storeFilterEyeglasses
  const filter = showProducts.value.filter((each) => {
    return each.name.toUpperCase().includes(msg.value.toUpperCase())
  })
  return showProducts.value = filter
}

const addedCart = (item, index) => {
  store.addCart({ name: item.name, price: item.price, each: 1, image: item.image, index: index  })
  store.update(item.name, index)
}
      
</script>

<style lang="scss" scoped>
  .description {
    background-color: rgb(255, 255, 255);
    transition-duration: 0.25s;
  }

  .description.active,
  .description:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  }

  .block {
    display: block;
    width: 100%;
    border: none;
    // background-color: #afad73;
    background-color: #cdb972;
    padding: 10px 0px;
    cursor: pointer;
    text-align: center;
    opacity: 0;
    transition-duration: 0.25s;
    color: white;
  }

  .block:hover {
    // background-color: #979661;
    background-color: #b09f62;
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