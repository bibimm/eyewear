<template>
  <v-container class="tw-mt-16">
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
          "
        >
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
          "
        >
          Add Product
        </v-row>
      </v-col>
      <v-col cols="12" class="tw-mb-16">
        <v-row no-gutters>
          <v-col cols="12">
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
                <v-btn 
                  variant="text"
                  class="
                  tw-capitalize
                  tw-mb-10
                  tw-underline tw-underline-offset-4
                  tw-text-[#cdb972]
                  hover:tw-text-[#b09f62]
                  d-flex
                  justify-start
                  align-left
                  " 
                  @click="count.increment"
                >
                  Insert more image
                </v-btn>
              </v-row>
              <v-row no-gutters class="tw-px-72">
                <v-col cols="12">
                  <div>
                    <!-- <button 
                      @click="store.pushData({ name: name, price: price, each: each, image: image, category: category})"
                      @click.stop="dialog = true"
                      class="block tw-bg-sky-200 tw-py-2 tw-w-full tw-rounded-lg tw-uppercase tw-tracking-wide tw-text-white">add
                      product
                    </button> -->
                    <v-btn
                      @click.stop="addedProdDialog = true" 
                      @click="addedProduct()"
                      type="button"
                      block
                      rounded-lg
                      text="white"
                      class="
                      block"
                      
                    > 
                      ADD PRODUCT
                      <!-- <span v-if="store.addProducts==false">
                        ADD PRODUCT
                      </span>
                      <span v-if="store.addProducts==true">
                        ADDED
                      </span> -->
                    </v-btn>
                    

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
        <v-row no-gutters 
          class="
          tw-uppercase
          d-flex  
          align-center 
          justify-center
          tw-text-xl
          tw-font-medium
          tw-pb-4
          "
        >
          My Product
        </v-row>
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
        <v-row no-gutters
          class="
            tw-tracking-wide
            tw-uppercase
            tw-text-sm
          "
        >
          <v-col cols="4" v-for="(item, index) in showProducts" :key="item">
            <v-card class="mx-auto pa-4 tw-m-2 py-6 " max-width="350">
              <v-row no-gutters>
                <v-carousel height="200" hide-delimiters show-arrows-on-hover>
                  <v-carousel-item v-for="(item, i) in item.image" :key="i" :src="item">
                  </v-carousel-item>
                </v-carousel>
              </v-row>
              <v-row no-gutters class="tw-pb-0">
                <!-- <v-col cols="3" 
                  class="
                  d-flex 
                  justify-start
                  align-top
                  tw-tracking-wide
                  tw-text-base
                  tw-lowercase
                  "
                >
                  name:
                </v-col> -->
                <v-col cols="12" 
                  class="
                  d-flex 
                  justify-center
                  align-center
                  tw-tracking-wide
                  tw-text-lg
                  tw-lowercase
                  "
                >
                  <a class="tw-font-medium tw-uppercase"> {{item.name}} </a>
                </v-col>
              </v-row>
              <v-row no-gutters class="tw-pb-0">
                <!-- <v-col cols="3" 
                  class="
                  d-flex 
                  justify-start 
                  align-center
                  tw-text-base
                  tw-lowercase
                  "
                >
                  price:
                </v-col> -->
                <v-col cols="12" 
                  class="
                  d-flex 
                  justify-center
                  align-center
                  tw-text-base
                  tw-capitalize
                  "
                >
                  Price:<a class="tw-font-medium tw-uppercase"> ฿{{item.price}} </a>
                </v-col>
              </v-row>
              <v-row no-gutters class="tw-pb-0">
                <!-- <v-col cols="3" 
                  class="
                  d-flex 
                  justify-start
                  align-center
                  tw-font-base
                  tw-text-base
                  tw-lowercase
                  "
                >
                  Stock:
                </v-col> -->
                <v-col cols="12" 
                  class="
                  d-flex 
                  justify-center
                  align-center
                  tw-font-base
                  tw-text-base
                  tw-capitalize
                  "
                >
                  stock: <a class="tw-font-medium tw-text-base"> {{item.each}} </a>
                </v-col>
              </v-row>
              <v-row no-gutters class="tw-pb-0">
                <!-- <v-col cols="3" 
                  class="
                  d-flex 
                  justify-start
                  align-center
                  tw-font-base
                  tw-text-base
                  tw-lowercase
                  "
                >
                  Category:
                </v-col> -->
                <v-col cols="12" 
                  class="
                  d-flex 
                  justify-center
                  align-center
                  tw-font-base
                  tw-text-base
                  tw-capitalize
                  "
                >
                  category: <a class="tw-font-medium tw-uppercase"> {{item.category}} </a>
                </v-col>
              </v-row>
              <v-row no-gutters  class="tw-pt-2">
                <v-col cols="12">
                  <v-btn 
                    @click="callDialog(item, index)" 
                    class="tw-text-white"       
                    outlined
                    block
                    color="#b0d36c"  
                  >
                    Edit
                  </v-btn>
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
                <v-col cols="12" class="d-flex justify-end">
                  <button 
                    @click="deleteDialog = true"
                    @click.stop="callDeleteDialog(index)"
                    class="
                      tw-opacity-50 
                      hover:tw-opacity-80
                      tw-absolute
                      tw-top-4
                      tw-right-4
                    "
                  >
                    <v-img
                      :width="20"
                      src="https://cdn.discordapp.com/attachments/1001607129385414737/1001607748905095229/exit.png"
                    >
                    </v-img>
                  </button>
                </v-col>

                
              </v-row>
            </v-card>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog
    v-model="addedProdDialog"
    max-width="290"
  >
    <div class="
      tw-bg-white
      tw-p-4
      tw-pt-8
      tw-w-96
      tw-rounded-lg
    ">
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
            src="https://cdn.discordapp.com/attachments/1001607129385414737/1001701882592506036/addedProd.png"
          >
          </v-img>
        </div>
      </div>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-center
        tw-text-xl
        tw-pt-4
        tw-pb-3
        tw-font-medium
      ">
        This product has been added.
      </v-row>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-center
        tw-py-0
        "
      >
        You can check this product at the 
      </v-row>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-center
        tw-pb-4
        "
      >
        bottom of this page.
      </v-row>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-end
        "
      >
        <v-btn 
          color="#cdb972"
          block
          class="
          text-white
          "
          @click.stop="addedProdDialog = false"
        >OK</v-btn>
      </v-row>
    </div>
  </v-dialog>

  <v-dialog
    v-model="deleteDialog"
    max-width="290"
  >
    <div class="
      tw-bg-white
      tw-p-4
      tw-pt-8
      tw-w-96
      tw-rounded-lg
    ">
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
            src="https://cdn.discordapp.com/attachments/1001607129385414737/1001607748494049430/bin2.png"
          >
          </v-img>
        </div>
      </div>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-center
        tw-text-xl
        tw-py-4
        tw-font-medium
      ">
        You are about to delete a product
      </v-row>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-center
        tw-py-0
        "
      >
        This will delete your product from catalog
      </v-row>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-center
        tw-pb-4
        "
      >
        Are you sure?
      </v-row>
      <v-row no-gutters
        class="
        d-flex  
        align-center 
        justify-end
        "
      >
        <v-btn
          flat
          variant="text"
          
          @click="deleteDialog = false"
        >Cancel
        </v-btn>
        <v-btn 
          flat
          color="#d85146"
          class="
          text-white
          "
          @click="deleteTheProd(test.value)"
          @click.stop="deleteDialog = false"
        >Delete</v-btn>
      </v-row>
    </div>
  </v-dialog>


  <v-dialog overlay-opacity="0" v-model="editDialog.show" 
    persistent
    scrollable
  >
    <v-card 
      class="
      tw-bg-white
      tw-p-2
      tw-rounded-lg
      
    ">
      <v-card-title class="d-flex justify-center align-center">EDIT</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
      <v-row no-gutters class="
        d-flex
        justify-center
        align-center
        tw-bg-white
      ">
        <v-col cols="12">
          <v-row no-gutters>
            <v-col class="d-flex " cols="6" sm="6">
              <v-row no-gutters class="tw-pr-2">
                <v-text-field label="Name" v-model="editName" hint="For example, Glasses Box" outlined required>
                </v-text-field>
              </v-row>
            </v-col>
            <v-col class="d-flex tw-pl-2" cols="6" sm="6">
              <v-row no-gutters class="tw-pl-2">
                <v-select :items="store.category" label="Category" v-model="editCategory" outlined
                  class="tw-capitalize" required></v-select>
              </v-row>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="6">
              <v-row no-gutters class="tw-pr-2">
                <v-text-field type="number" label="Price" v-model="editPrice" hint="For example, 100" solo required></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-row no-gutters class="tw-pl-2">
                <v-text-field type="number" label="Quantity" v-model="editEach" hint="For example, 1" solo required>
                </v-text-field>
              </v-row>
            </v-col>
          </v-row>
          <!-- <v-row no-gutters v-for="i in count.counter" v-bind:key="i">
            <v-text-field label="Image Link" v-model="editImage[i-1]" hint="For example, www.example.jpg"
              solo required>
            </v-text-field>
          </v-row> -->
          <v-row no-gutters v-for="index in editImage.length" v-bind:key="index">
            <v-text-field label="Image Link" v-model="editImage[index-1].src" hint="For example, www.example.jpg"
              solo required>
            </v-text-field>
            <div v-if="moreImg">
              <div v-for="i in count.number" v-bind:key="i">
                <v-text-field label="Image Link" v-model="editImage[editImage.length-1+i].src" hint="For example, www.example.jpg"
                  solo required>
                </v-text-field>
              </div>
            </div>
          </v-row> 
          <!-- <v-row no-gutters>
            <v-btn 
              variant="text"
              class="
              tw-capitalize
              tw-mb-10
              tw-underline tw-underline-offset-4
              tw-text-[#cdb972]
              hover:tw-text-[#b09f62]
              " @click="count.incrementNumber"
                @click.stop="moreImg==true"
                
            >{{moreImg}}
              Insert more image
            </v-btn>
          </v-row> -->
        </v-col>
      </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
      <!-- <div class="
        tw-opacity-50 
        hover:tw-opacity-80
        tw-absolute
        tw-top-4
        tw-right-4
        " @click="editDialog.show = false"
      >
        <v-img :width="15"
          src="src/assets/exit.png">
        </v-img>
      </div> -->
      <v-row no-gutters>
        <v-btn text @click="editDialog.show = false">
          Close
        </v-btn>
        <v-btn text @click="updateItem()">
          Save
        </v-btn>
      </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { useProductStore } from "@/stores/products";
  import { useCounterStore } from "../stores/counter";
  import { ref, computed } from "vue";

  const { pushData, deleteTheProd, products, updateByEdit } = useProductStore()

  const store = useProductStore();
  const count = useCounterStore();
  const name = ref("");
  const price = ref("");
  const each = ref("");
  const image = ref([]);
  const category = ref("");
  const deleteDialog = ref(false);
  const editDialog = ref({
    show: false,
    item: {
      name: '', 
      category: '',
      image: '',
      price: null, 
      each: null, 
      index: null,
    }
  });
  const editImage = ref([])
  const editName = ref("")
  const editPrice = ref("")
  const editCategory = ref("")
  const editEach = ref("")
  const editIndex = ref("")

  const moreImg = ref(false);


  const addedProduct = () => {
    store.pushData({ name: name, price: price, each: each, image: image, category: category, addCarts: false})
    store.updateProduct()
  }

  const updateItem = async () => {
    const item = {
      name: editName, 
      price: editPrice,
      each: editEach, 
      category: editCategory, 
      image: editImage,
      index: editIndex,
    }
    updateByEdit(item)
    editDialog.value.show = false
  }

  const callDialog = async (item, index) => {
    editDialog.value.show = true
    editDialog.value.item = item
    editImage.value = editDialog.value.item.image
    editName.value = editDialog.value.item.name
    editPrice.value = editDialog.value.item.price
    editEach.value = editDialog.value.item.each
    editCategory.value = editDialog.value.item.category
    editIndex.value = index
  }

  const indexDelete = ref(0)

  const callDeleteDialog = (index) => {
    console.log(index)
    // const indexDelete = index
    // console.log(indexDelete)
    // clickDelete(index)
    console.log(indexDelete.value)
    indexDelete.value = index
    console.log('=')
    console.log(indexDelete.value)
  }

  const test = computed(() => indexDelete)

  const msg = ref('')
  const showProducts = ref(store.products)

  const filterByName = () => {
    showProducts.value = store.products
    const filter = showProducts.value.filter((each) => {
      return each.name.toUpperCase().includes(msg.value.toUpperCase())
    })
    return showProducts.value = filter
  }

  const addedProdDialog = ref(false);


  // const addedProdDialog = () => {

  // }

  // const indexDelete = computed(() => test);

  // const clickDelete = (index) => {
  //   console.log(index)
  //   return index
  // }



</script>

<style lang="scss" scoped>
  .block {
    display: block;
    width: 100%;
    border: none;
    // background-color: #afad73;
    background-color: #cdb972;
    padding: 10px 0px;
    cursor: pointer;
    text-align: center;
    color: white;
  }

  .block:hover {
    // background-color: #979661;
    background-color: #b09f62;



  }
</style>