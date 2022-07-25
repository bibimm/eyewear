import { defineStore } from 'pinia';
import { ref } from 'vue'
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    msg: ref('Hi'),
    category: [ 'eyeglasses', 'sunglasses', 'accesories'],
    products: [
      { id: 1, name: 'Lilly', addCarts: false, price: 3190, each: 1, image: [
        {
          src: 'https://jp.owndays.com/storage/products/PDEfoZi8IMCzEipzIvNAZfJe5GkmqRbr9abWRj4y.jpeg',
        },
        {
          src: 'https://jp.owndays.com/storage/products/a547bfc2-dc70-41d0-9d90-8c195d0d8db8.jpeg',
        },
        {
          src: 'https://jp.owndays.com/storage/products/e8384cec-c543-46d4-b901-9f4ffec8ceed.jpeg',
        },
        {
          src: 'https://jp.owndays.com/storage/products/cc47cd4c-8300-4fe3-8e83-92bcc1b4acf4.jpeg',
        },
        ], category: 'eyeglasses', type: 'bestSeller', eachCart: 1,
      },
      { id: 2, name: 'Tulip',addCarts: false, price: 3490, each: 2 , image: [
        {
          src: 'https://jp.owndays.com/storage/products/5cdde6d4-25d8-4ec1-b796-dd07affb5f12.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/6fdd9272-5e74-4dd6-86e9-4d1195f83b60.jpeg'
        },
        {
          src: 'https://jp.owndays.com/storage/products/e55c6d68-b7cb-469c-9fc0-2c357f297544.jpeg'
        },
        {
          src: 'https://jp.owndays.com/storage/products/0834ab29-0b32-4d99-852d-9f5ef426b433.jpeg'
        }, 
        ], category: 'eyeglasses', type: 'bestSeller',  eachCart: 1,
      },
      { id: 3, name: 'Lavender',addCarts: false, price: 2890, each: 4, image: [
        {
          src: 'https://jp.owndays.com/storage/products/Q3yJrdfmezon3AFTEItDlQWO61JIQEhkTAzE04I4.jpeg'
        },
        {
          src: 'https://jp.owndays.com/storage/products/HWwecm39mCwxp0HIHBxRbjpWSyek8Tr4pdusLS6x.jpeg'
        },
        {
          src: 'https://jp.owndays.com/storage/products/8WS0PiOLZCZTHzySMeqwUOzRhx8h0VH2O3aTOEsC.jpeg'
        },
        {
          src: 'https://jp.owndays.com/storage/products/MGfeFXE7IO49pTjQePxRIqkhPbq0Yfdr6Otj7UKl.jpeg'
        },
        ], category: 'eyeglasses', type: 'newArrival',  eachCart: 1,
      },
      { id: 4, name: 'Lovely',addCarts: false, price: 1890, each: 10, image: [
        {
          src: 'https://jp.owndays.com/storage/products/R8sSDmu4IhGUUzCuxWPZGd9LR9EQAjzgWUiq8Iih.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/AR1yLMtE7JJ10jQ59teRtiZvscxx21CIMYhtq0ym.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/vUugBQbdpiux45bcA8vK9qZKTjyNU85oPP8WKUsD.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/lKiDfsL8BBEQtWtetKlpTBxSbmwRVJg7l2JGbblP.jpeg'
        },
        ], category: 'eyeglasses', type: 'newArrival',  eachCart: 1,
      },
      { id: 5, name: 'Pixxie',addCarts: false, price: 2490, each: 7, image: [
        {
          src: 'https://jp.owndays.com/storage/products/sjc4ChwY9MAKI4i2vzMtEBeMEBDkSKnF7CCjqcMd.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/VGJEryNhwb11V65gytMduUBbq7hUjeVc.jpg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/CRB0ydE3GpaD2ezk2QrSR5A9pjZLKMeA.jpg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/xzRUr4pcW6Aq9StHvVjS5uNS9uzgk82d.jpg'
        },
        ], category: 'sunglasses', type: 'bestSeller',  eachCart: 1,
      },
      { id: 6, name: 'Belle',addCarts: false, price: 2990, each: 6, image: [
        {
          src: 'https://jp.owndays.com/storage/products/3d03640d-52bc-44b1-8bb6-b4c3605a42e7.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/5694ca71-c13f-4228-a4f0-532db5c09f93.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/d6271c65-bdae-42fa-a59c-a43a516d40f0.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/7d1a3485-a95f-4f89-8db4-fe9311bb9028.jpeg'
        },
        ], category: 'sunglasses', type: 'newArrival',  eachCart: 1,
      },
      { id: 7, name: 'Sky', addCarts: false,price: 1990, each: 5, image: [
        {
          src: 'https://jp.owndays.com/storage/products/e264ff85-7a5c-4c15-8a9d-d00bea770e22.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/b48c4108-a390-4941-9e5a-cefa5ee67e26.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/389599d2-77c2-48b6-9ae7-541f2f8a0c43.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/33952383-a0e6-408e-8c06-4db9941e708d.jpeg'
        },
        ], category: 'sunglasses', type: 'newArrival',  eachCart: 1,
      },
      { id: 8, name: 'Cheetah',addCarts: false, price: 1990, each: 4, image: [
        {
          src: 'https://jp.owndays.com/storage/products/01de0521-ba37-4e15-bffe-d79bc997740e.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/ad814bec-41f7-4cd5-9bf8-334ca8665809.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/134828ae-04e0-4c12-815e-b7ff53904ba2.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/6e098965-7fdc-49cc-be17-5189682d3294.jpeg'
        },
        ], category: 'sunglasses', type: 'newArrival',  eachCart: 1,
      },
      { id: 9, name: 'Rose Glasses Box',addCarts: false, price: 250, each: 11, image: [
        {
          src: 'https://jp.owndays.com/storage/products/IXhivgGmSGSfStvKEubPwX6vwOmgaVj06vcVr5Je.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/KNvyzAUCwhWy76BaGLHqSsD2B7BXtq6kuLgpIWqv.jpeg'
        },
        ], category: 'accesories', type: null,  eachCart: 1,
      },
      { id: 10, name: 'Charcoal Glasses Box',addCarts: false, price: 250, each: 15, image: [
        {
          src: 'https://jp.owndays.com/storage/products/PxwyFbX7xiqZ0UEj0bHOMrdUvUVQnVN9vXyc2Ove.jpeg'
        }, 
        {
          src: 'https://jp.owndays.com/storage/products/NVCburhTvQv77gp2Ea55MJwUJnaSyEjUQZ5YnAq8.jpeg'
        },
        ], category: 'accesories', type: null, eachCart: 1,
      },
      
    ],
    cart: [],
    newBestBtn: false,
    eachCart: 1,
  }),
  actions: {
    pushData(param) {
      this.products.push(param);
    },
    addCart(data) {
      this.cart.push(data)
    },
    // addCart(data) {
      
    //   console.log(data)
    //   this.cart.forEach((each)=>{
    //     if(data.name != each.name) {
    //       return this.cart.push(data)
    //     }
    //   })
    //   this.cart.forEach((each)=>{
    //     const find = this.products.find((item)=>{
    //       if(each.name == item.name) {
    //         this.eachCart += data.each
    //         return item
    //       }
    //     })
    //     const index = this.products.find((item)=>{
    //       if(each.name == item.name) {
    //         // data.each++
    //         return item
    //       }
    //     })
    //     const findInCart = this.cart.find((item)=>{
    //       if(each.name != item.name) {
    //         return this.cart.push(data)
    //       }
    //     })

    //     // this.eachCart
    //       console.log(this.eachCart)
    //     // this.cart.splice(index, 1, this.eachCart)
    //     this.cart.splice(index, 1)
    //     console.log(data.each)
    //     data.each = this.eachCart
    //     // data = this.eachCart
    //     // return ; 
    //     // this.cart.push(data);
    //     console.log(data)


    //     //  return this.cart.push(data);

    //   })
    //   this.cart.push(data);
    //   console.log(this.cart)

    // },
    deleteCart(index) {
      this.cart.splice(index, 1);
    },
    deleteAllCart() {
      this.cart.splice(0, this.cart.length);
    },
    update(name, index){
      const find = this.products.find((each)=>{
        if(each.name == name) return each
      })
      find.addCarts = true 
      this.products.splice(index, 1, find) 
    },
    checkOut(){
      if(this.cart.length != 0 || this.cart.length != null || this.cart.length != undefined) {
        this.cart.forEach((each)=>{
          const find = this.products.find((item)=>{
            if(each.name == item.name) return item
          })
          const index = this.products.findIndex((item)=>{
            if(each.name == item.name) return item
          })
          find.each = find.each - each.each 
          this.products.splice(index, 1, find) 
        })
      }
    },
    deleteTheProd(index) {
      this.products.splice(index, 1);
    },
    increaseCount(index) {
      this.cart.forEach((each)=>{
        const find = this.products.find((item)=>{
          if(each.name == item.name) return item
        })
        if(this.cart[index].each >= find.each) {}
        else this.cart[index].each++
      })
    },
    decreaseCount(index) {
      if(this.cart[index].each == 1) {}
      else this.cart[index].each--
    },
    filterByCategory(category) {
      const response = this.products.filter((element) => {
        return element.category == category
      })
      return response
    },
    filterByType(type) {
      const response = this.products.filter((element) => {
        return element.type == type
      })
      return response
    },
    filterByName() {
      return this.msg.value
    },
    updateNewBestBtn(button) {
      if (button == 'new') {
        this.newBestBtn = false
        return this.newBestBtn
      }
      else if (button == 'best') {
        this.newBestBtn = true
        return this.newBestBtn
      }
    }
    
  },
});