<template>
  <v-container fluid class="tw-mt-16">
    <v-row no-gutters class="tw-px-12">
      <v-col cols="12">
        <v-row no-gutters class="
                    tw-uppercase
                    d-flex  
                    align-center 
                    justify-center
                    tw-text-4xl
                    tw-font-medium
                    tw-pb-4
                ">
          Inventory Management
        </v-row>
        <v-divider></v-divider>

        <v-row no-gutters class="
                    tw-uppercase
                    d-flex  
                    align-center 
                    justify-center
                    tw-text-xl
                    tw-font-medium
                    tw-pb-4
                    tw-pt-4
                ">

          Add Product
        </v-row>
      </v-col>
      <v-col cols="12" class="tw-mb-16">
        <v-row no-gutters>
          <v-col cols="12">
            <!-- <v-row no-gutters class="tw-px-72">
                        <v-col cols="12">
                            Selete category of the product
                        </v-col>
                        <v-col cols="4">
                            <v-checkbox
                                v-model="checkboxEye"
                                label="Eyeglasses"
                                color="red"
                                value="eyeglasses"
                                hide-details
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="4">
                            <v-checkbox
                                v-model="checkboxSun"
                                label="Sunglasses"
                                color="red"
                                value="sunglasses"
                                hide-details
                            ></v-checkbox>
                        </v-col>
                        <v-col cols="4">
                            <v-checkbox
                                v-model="checkboxAc"
                                label="Accesories"
                                color="red"
                                value="accesories"
                                hide-details
                            ></v-checkbox>
                        </v-col>
                    </v-row> -->
            <!-- <v-form ref="form" v-model="valid" lazy-validation> -->
              <v-row no-gutters class="tw-px-72">
                <v-col class="d-flex " cols="6" sm="6">
                  <v-row no-gutters class="tw-pr-2">
                    <v-text-field label="Name" v-model="name" hint="For example, Glasses Box" outlined >
                    </v-text-field>
                  </v-row>
                </v-col>
                <v-col class="d-flex tw-pl-2" cols="6" sm="6">
                  <v-row no-gutters class="tw-pl-2">
                    <v-select :items="store.category" label="Category" v-model="category" outlined class="tw-capitalize"
                      ></v-select>
                  </v-row>
                </v-col>
              </v-row>

              <v-row no-gutters class="tw-px-72">
                <v-col cols="6">
                  <v-row no-gutters class="tw-pr-2">
                    <v-text-field type="number" label="Price" v-model="price" hint="For example, 100" solo >
                    </v-text-field>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row no-gutters class="tw-pl-2">
                    <v-text-field type="number" label="Quantity" v-model="each" hint="For example, 1" solo >
                    </v-text-field>
                  </v-row>
                </v-col>
              </v-row>
              <v-row no-gutters class="tw-px-72" v-for="i in count.counter" v-bind:key="i">
                <v-text-field label="Image Link" v-model="image[i-1]" hint="For example, www.example.jpg" solo >
                </v-text-field>
              </v-row>

              <v-row no-gutters class="tw-px-72">
                <button class="
                                    tw-capitalize
                                    tw-mb-10
                                    tw-underline tw-underline-offset-4
                                    tw-text-[#afad73]
                                    hover:tw-text-[#8b8b5a]
                                " @click="count.increment">
                  <!-- {{count.counter}} -->
                  Insert more image
                </button>
              </v-row>
              <v-row no-gutters class="tw-px-72">
                <v-col cols="12">
                  <div>
                    <button 
                      @click="store.pushData({ name: name, price: price, each: each, image: image, category: category})"
                      @click.stop="dialog = true"
                      class="block tw-bg-sky-200 tw-py-2 tw-w-full tw-rounded-lg tw-uppercase tw-tracking-wide tw-text-white">add
                      product
                    </button>

                    <!-- <v-dialog
                                    v-model="dialog"
                                    class="tw-w-96"
                                    >
                                        <div class="
                                        tw-bg-white
                                        tw-p-4
                                        tw-pt-8
                                        tw-w-96
                                        tw-rounded-lg
                                        ">
                                            <v-row no-gutters 
                                                class="
                                                d-flex
                                                justify-center
                                                align-center
                                                tw-bg-white
                                                "
                                            >jo
                                            </v-row>
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
                                                <button>
                                                    <v-img
                                                    :width="15"
                                                    src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1657495462~hmac=d8c23d46940c215cdfe466e34c420bcc"
                                                    >
                                                    </v-img>
                                                </button>
                                            </div>
                                        </div>
                                    </v-dialog> -->
                  </div>
                </v-col>
              </v-row>
            <!-- </v-form> -->
          </v-col>
        </v-row>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" class="tw-mt-6">
        <v-row no-gutters class="
                    tw-uppercase
                    d-flex  
                    align-center 
                    justify-center
                    tw-text-xl
                    tw-font-medium
                    tw-pb-4
                ">
          My Product
        </v-row>
        <v-row no-gutters
          class="
            tw-tracking-wide
             tw-uppercase
             tw-text-sm
          "
        >
          <v-col cols="4" v-for="(item, index) in store.products" :key="item.name"
            class="
              tw-text-amber-800
            "          
          >
            <v-card class="mx-auto pa-4 tw-m-2 py-6 " max-width="350">
              <v-row no-gutters>
                <v-carousel height="200" hide-delimiters show-arrows-on-hover>
                  <v-carousel-item v-for="(item, i) in item.image" :key="i" :src="item">
                  </v-carousel-item>
                </v-carousel>
              </v-row>
              <v-row no-gutters class="tw-pb-1">
                <v-col cols="6" class="
                                    d-flex 
                                    justify-start
                                    align-center
                                    tw-font-base
                                    tw-tracking-wide
                                    tw-uppercase
                                ">
                  Name: {{item.name}}
                </v-col>
                <v-col cols="6" class="
                                    d-flex 
                                    justify-start 
                                    align-center
                                    tw-font-base
                                ">
                  Price: ฿{{item.price}}
                </v-col>
              </v-row>
              <v-row no-gutters class="tw-pb-2">
                <v-col cols="6" class="
                                d-flex 
                                justify-start
                                align-center
                                tw-font-base
                                ">
                  Stock: {{item.each}}
                </v-col>
                <v-col cols="6" class="
                                    d-flex 
                                    justify-start
                                    align-center
                                    tw-font-base
                                ">
                  Category: {{item.category}}
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="6">
                  <!-- <v-btn @click.stop="edit = true" 
                    class="tw-text-white"       

                          outlined
                    block
                    color="success"  >
                    Edit
                  </v-btn> -->
                  <!-- <v-row justify="center">
                                        <v-dialog
                                            v-model="edit"
                                            persistent
                                            max-width="600px"
                                        >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                    color="primary"
                                                    dark
                                                    v-bind="attrs"
                                                    v-on="on"
                                                >
                                                    Open edit
                                                </v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                    <span class="text-h5">User Profile</span>
                                                </v-card-title>
                                                <v-card-text>
                                                    <v-container>
                                                        <v-row>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <v-text-field
                                                                    label="Legal first name*"
                                                                    require
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <v-text-field
                                                                    label="Legal middle name"
                                                                    hint="example of helper text only on focus"
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                                md="4"
                                                            >
                                                                <v-text-field
                                                                    label="Legal last name*"
                                                                    hint="example of persistent helper text"
                                                                    persistent-hint
                                                                    required
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                label="Email*"
                                                                required
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col cols="12">
                                                                <v-text-field
                                                                label="Password*"
                                                                type="password"
                                                                required
                                                                ></v-text-field>
                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                            >
                                                                <v-select
                                                                    :items="['0-17', '18-29', '30-54', '54+']"
                                                                    label="Age*"
                                                                    required
                                                                ></v-select>
                                                            </v-col>
                                                            <v-col
                                                                cols="12"
                                                                sm="6"
                                                            >
                                                                <v-autocomplete
                                                                    :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                                    label="Interests"
                                                                    multiple
                                                                ></v-autocomplete>
                                                            </v-col>
                                                        </v-row>
                                                    </v-container>
                                                    <small>*indicates required field</small>
                                                </v-card-text>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        color="blue darken-1"
                                                        text
                                                        @click="edit = false"
                                                    >
                                                        Close
                                                    </v-btn>
                                                    <v-btn
                                                        color="blue darken-1"
                                                        text
                                                        @click="edit = false"
                                                    >
                                                        Save
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-row> -->

                  <!-- <v-dialog
                                    v-model="edit"
                                    max-width="290"
                                    >
                                    <v-card>
                                        <v-card-title class="text-h5">
                                        Use Google's location service?
                                        </v-card-title>

                                        <v-card-text>
                                        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                                        </v-card-text>

                                        <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="edit = false"
                                        >
                                            Disagree
                                        </v-btn>

                                        <v-btn
                                            color="green darken-1"
                                            text
                                            @click="edit = false"
                                        >
                                            Agree
                                        </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                    </v-dialog> -->

                  
                </v-col>
                <v-col cols="6" class="d-flex justify-end">
                  <button @click="store.deleteTheProd(index)"
                      class="
                        tw-opacity-50 
                        hover:tw-opacity-80
                        tw-absolute
                        tw-top-4
                        tw-right-4
                      "
                    >
                      <v-img
                          :width="15"
                          src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1657495462~hmac=d8c23d46940c215cdfe466e34c420bcc"
                        >
                        </v-img>
                      </button>
                  <!-- <button @click="store.deleteTheProd(index)" 
                    elevation
                    depressed
                    fab
                    class="

                    "
                                    >
                    
                  
                  <v-img
                          :width="30"
                          src="
                  https://cdn-icons-png.flaticon.com/512/1214/1214428.png
                          "
                        >
                        </v-img>
                        </button> -->
                </v-col>
              </v-row>
            </v-card>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>


  <v-dialog overlay-opacity="0" v-model="edit" 
    v-for="(item, index) in store.products" :key="item.name"
  >
                    <div class="
                      tw-bg-white
                      tw-p-4
                      tw-pt-8
                      tw-rounded-lg
                    ">
                      <v-row no-gutters class="
                        d-flex
                        justify-center
                        align-center
                        tw-bg-white
                        
                      ">
                        <span
                          class="
                          tw-text-xl
                        tw-uppercase
                        tw-tracking-wider
                        tw-pb-4
                          "
                        >edit</span>
                        <v-col cols="12">
                          <v-row no-gutters>
                            <v-col class="d-flex " cols="6" sm="6">
                              <v-row no-gutters class="tw-pr-2">
                                <v-text-field label="Name" v-model="name" hint="For example, Glasses Box" outlined
                                  required :default="name[index]" >
                                </v-text-field>
                              </v-row>
                            </v-col>
                            <v-col class="d-flex tw-pl-2" cols="6" sm="6">
                              <v-row no-gutters class="tw-pl-2">
                                <v-select :items="store.category" label="Category" v-model="category" outlined
                                  class="tw-capitalize" required></v-select>
                              </v-row>
                            </v-col>
                          </v-row>

                          <v-row no-gutters>
                            <v-col cols="6">
                              <v-row no-gutters class="tw-pr-2">
                                <v-text-field type="number" label="Price" v-model="price" hint="For example, 100" solo
                                  required></v-text-field>
                              </v-row>
                            </v-col>
                            <v-col cols="6">
                              <v-row no-gutters class="tw-pl-2">
                                <v-text-field type="number" label="Quantity" v-model="each" hint="For example, 1" solo
                                  required>
                                </v-text-field>
                              </v-row>
                            </v-col>
                          </v-row>
                          <v-row no-gutters v-for="i in count.counter" v-bind:key="i">
                            <v-text-field label="Image Link" v-model="image[i-1]" hint="For example, www.example.jpg"
                              solo required>
                            </v-text-field>
                          </v-row>

                          <v-row no-gutters>
                            <button class="
                                  tw-capitalize
                                  tw-mb-10
                                  tw-underline tw-underline-offset-4
                                  tw-text-[#afad73]
                                  hover:tw-text-[#8b8b5a]
                              " @click="count.increment">
                              <!-- {{count.counter}} -->
                              Insert more image
                            </button>
                          </v-row>
                        </v-col>
                      </v-row>
                      <div class="
                                                    tw-opacity-50 
                                                    hover:tw-opacity-80
                                                    tw-absolute
                                                    tw-top-4
                                                    tw-right-4
                                                " @click="edit = false">
                        <button>
                          <v-img :width="15"
                            src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997911.png?token=exp=1657495462~hmac=d8c23d46940c215cdfe466e34c420bcc">
                          </v-img>
                        </button>
                      </div>
                    </div>
                  </v-dialog>
</template>

<script setup>
  import {
    useProductStore
  } from "@/stores/products";
  import {
    useCounterStore
  } from "../stores/counter";
  import {
    ref
  } from "vue";

  const store = useProductStore();
  const count = useCounterStore();
  const name = ref("");
  const price = ref("");
  const each = ref("");
  const image = ref([]);
  // const checkboxEye = ref(false);
  // const checkboxSun = ref(false);
  // const checkboxAc = ref(false);
  const category = ref("");
  const dialog = ref(false);
  const edit = ref(false);

  // const chooseCategory = () => {
  //     console.log(checkboxEye)
  //     console.log(checkboxSun)
  //     console.log(checkboxAc)
  //     console.log(checkboxAc.value)
  //   if (checkboxEye == true) {
  //     console.log(1)
  //     return checkboxEye.value
  //   }
  //   else if (checkboxSun==true) {
  //     console.log(2)
  //     return checkboxSun.value

  //   }
  //   else if (checkboxAc==true) {
  //     console.log(3)
  //     return checkboxAc.value
  //   }
  // }
</script>

<style lang="scss" scoped>
  .block {
    display: block;
    width: 100%;
    border: none;
    background-color: #afad73;
    padding: 10px 0px;
    cursor: pointer;
    text-align: center;
  }

  .block:hover {
    background-color: #979661;
  }
</style>