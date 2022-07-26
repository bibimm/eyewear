<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters 
      class="tw-bg-[#f4f4f4]
      tw-px-12
      tw-py-16
      "
    >
      <v-col cols="12">
        <v-row no-gutters>
          <v-col cols="4" 
            class="
            tw-space-y-2
            "
          >
            <v-row no-gutters>
              <v-col cols="12" 
                class="
                  tw-text-2xl
                  tw-mb-4
                  "
              >Product</v-col>
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
                <router-link to="/accesories">
                  Accesories
                </router-link>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4" 
            class="
              tw-space-y-2
            "
          >
            <v-row no-gutters>
              <v-col cols="12" 
                class="
                  tw-text-2xl
                  tw-mb-4
                "
              >Support</v-col>
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
          <v-col cols="4" 
            class="
              tw-space-y-2
            "
          >
            <v-row no-gutters>
              <v-col cols="12" 
                class="
                  tw-text-2xl
                  tw-mb-4
                "
              >Keep in Touch</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="12">Sign up and get 10% off</v-col>
            </v-row>
            <v-row no-gutters>
              <v-col cols="8" 
                class="d-flex 
                justify-start 
                align-center 
                tw-font-normal
                tw-border-[1px]
                tw-border-black
                "
              >
                <form action="" class="email-input">
                  <input type="text" v-model="search" placeholder="Email address*" width="mx-auto" />
                </form>
              </v-col>
              <v-col cols="4" 
                class="
                  d-flex 
                  justify-center 
                  align-center
                  tw-border-[1px] 
                  tw-border-black
                  "
              >
                <button>
                  <span>
                    Subscribe
                  </span>
                </button>
              </v-col>
            </v-row>
            <v-row no-gutters class="tw-pt-2">
              <v-col cols="10">
                <v-row no-gutters class="tw-space-x-1">
                  <v-col cols="2">
                    <v-img 
                      :width="24" 
                      src="
                        https://cdn.discordapp.com/attachments/1001607129385414737/1001607749265788968/facebook.png
                    ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img 
                      :width="24" 
                      src="
                        https://cdn.discordapp.com/attachments/1001607129385414737/1001607749613928568/instagram.png
                    ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img 
                      :width="24" 
                      src="
                        https://cdn.discordapp.com/attachments/1001607129385414737/1001610823761928313/twitter.png
                    ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img 
                      :width="24" 
                      src="
                        https://cdn.discordapp.com/attachments/1001607129385414737/1001607749983031448/line.png
                    ">
                    </v-img>
                  </v-col>
                  <v-col cols="2">
                    <v-img 
                      :width="24" 
                      src="
                        https://cdn.discordapp.com/attachments/1001607129385414737/1001610824638541964/youtube.png
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
    <v-row no-gutters 
      class="
      tw-px-20
      tw-py-1
      tw-bg-[#e0e0e0]
    ">
      <v-col cols="12">
        <v-row no-gutters 
          class="
            d-flex
            align-center
            justify-center
        ">
          <v-col cols="1">
            <v-img 
              :width="60" 
              src="
                https://cdn.discordapp.com/attachments/1001607129385414737/1001607750289199216/paypal.png
            ">
            </v-img>
          </v-col>
          <v-col cols="1">
            <v-img 
              :width="50" 
              src="
                https://cdn.discordapp.com/attachments/1001607129385414737/1001607747290271904/applePay.png
            ">
            </v-img>
          </v-col>
          <v-col cols="1">
            <v-img 
              :width="40" 
              src="
                https://cdn.discordapp.com/attachments/1001607129385414737/1001610824294596638/visa.png
            ">
            </v-img>
          </v-col>
          <v-col cols="4" 
            class="
              tw-text-sm
              d-flex
              justify-end
          ">
          </v-col>
          <v-col cols="5" 
            class="
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