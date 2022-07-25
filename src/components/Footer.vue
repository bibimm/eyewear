<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="tw-bg-[#f4f4f4]
            tw-px-12
            tw-py-16
            ">
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="4" class="
                            tw-space-y-2
                        ">
            <v-row no-gutters>
              <v-col cols="12" class="tw-text-2xl
                                tw-mb-4
                                ">Product</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <router-link to="/product">
                  All Product
                </router-link>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <router-link to="/eyeglasses">

                  Eyeglasses
                </router-link>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <router-link to="/sunglasses">
                  Sunglasses
                </router-link>
              </v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <router-link to="/accessories">
                  Accesories
                </router-link>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" class="
                            tw-space-y-2
                        ">
            <v-row no-gutters>
              <v-col cols="12" class="tw-text-2xl
                                tw-mb-4
                                ">Support</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">
                <router-link to="/aboutus">
                  About Us
                </router-link>
              </v-col>
            </v-row>
            <!-- <v-row no-gutters>
              <v-col cols="12">Payment</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">Sustainability</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">FAQs</v-col>
            </v-row> -->
          </v-col>
          <v-col cols="4" class="
                            tw-space-y-2
                        ">
            <v-row no-gutters>
              <v-col cols="12" class="tw-text-2xl
                                tw-mb-4
                                ">Keep in Touch</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">Sign up and get 10% off</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="8" class="d-flex 
                                justify-start 
                                align-center 
                                tw-font-normal
                                tw-border-[1px]
                                tw-border-black
                                ">
                <form action="" class="email-input">
                  <input type="text" v-model="search" placeholder="Email address*" width="mx-auto" />
                </form>
              </v-col>
              <v-col cols="4" class="
                                d-flex 
                                justify-center 
                                align-center
                                tw-border-[1px] 
                                tw-border-black
                                ">
                <button>
                  <span class="
                                        
                                        ">
                    Subscribe
                  </span>
                </button>
              </v-col>
            </v-row>
            <!-- <v-row no-gutters>
                            <v-col cols="12">
                                <input type="checkbox" class="appearance-none checked:bg-blue-500 tw-rounded-full" />
                                <p-check class="p-default p-round p-fill">Fill</p-check>
                                <button 
                                    class="
                                    tw-rounded-full 
                                    tw-bg-red-200 
                                    tw-border-black
                                    tw-border-2
                                    outline: 1px
                                ">  
                                    jikk
                                </button>
                                <v-btn
                                    class="ma-2"
                                    outlined
                                    fab
                                    color="teal"
                                >
                                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row> -->
            <v-row no-gutters class="tw-pt-2">
              <v-col cols="10">
                <v-row no-gutters class="tw-space-x-1">
                  <v-col cols="2">
                    <v-img :width="24" src="
                                                https://cdn-icons-png.flaticon.com/512/1384/1384005.png

                                            ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img :width="24" src="
                                                https://cdn-icons-png.flaticon.com/512/1384/1384031.png

                                            ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img :width="24" src="
                                                https://cdn-icons-png.flaticon.com/512/733/733635.png

                                            ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img :width="24" src="
                                                https://cdn-icons.flaticon.com/png/512/3938/premium/3938097.png?token=exp=1657525469~hmac=a11a9a3bfb7b9163dc63b7437958c069

                                            ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img :width="24" src="
                                                https://cdn-icons-png.flaticon.com/512/1384/1384028.png

                                            ">
                    </v-img>
                  </v-col>
                </v-row>
              </v-col>

            </v-row>

          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="
                tw-px-20
                tw-py-1
                tw-bg-[#e0e0e0]
                ">
      <v-col cols="12">
        <v-row no-gutters class="
                    d-flex
                        align-center
                        justify-center
                    ">
          <v-col cols="1">
            <v-img :width="60" src="
                                https://cdn-icons-png.flaticon.com/512/38/38971.png
                            ">
            </v-img>


          </v-col>
          <v-col cols="1">
            <v-img :width="50" src="
                                https://cdn-icons-png.flaticon.com/512/5977/5977576.png
                            ">
            </v-img>
          </v-col>
          <v-col cols="1">
            <v-img :width="40" src="
                                https://cdn-icons-png.flaticon.com/512/39/39134.png
                            ">
            </v-img>
          </v-col>
          <v-col cols="4" class="
                        tw-text-sm
                        d-flex
                        justify-end
                    ">

          </v-col>

          <v-col cols="5" class="
                        tw-text-sm
                        d-flex
                        justify-end
                    ">
            <span class="tw-pl-2">
              <button>Term & Condition</button>
            </span>
            <span class="tw-pl-2">
              <button>Privacy Policy</button>
            </span>
            <span class="tw-pl-2">
              <button>Cookie Policy</button>
            </span>
            <span class="tw-pl-2">© 2022, LENS.</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    setup() {


      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .email-input {
    display: flex;
    align-items: center;
    padding: 18px;
    height: 50px;
    border-style: solid;
    border-color: rgb(0, 0, 0);
    width: fit-content;
  }

  .email-input input {
    flex: 1;
    border: 0;
    outline: none;
    height: 100%;
    width: 100%;
    border-style: solid;
    border-color: rgb(0, 42, 141);
  }
</style>