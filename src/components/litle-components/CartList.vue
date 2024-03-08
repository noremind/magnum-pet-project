<template lang="html">
  <div class="cart_list mb-4">
    <div class="d-flex justify-content-between">
        <div class="">
            <div class="mb-4">
                <span v-if="cartProducts.specialPrice">Соц</span>
                <span v-else>-{{ cartProducts.discount * 100 }}%</span>
            </div>
            <img :src="cartProducts.image" width="80px" alt="image">
        </div>
        <div>
            <h5 class="d-xl-block d-lg-block d-md-block d-sm-none d-none">{{ cartProducts.title }}</h5>
            <h5 class="cart_title d-xl-none d-lg-none d-md-none d-sm-block d-block">{{ cartProducts.title }}</h5>
            <p>до: {{ cartProducts.lastDate }}</p>
        </div>
        <div class="d-xl-block d-lg-block d-md-block d-sm-block d-none">
            <div class="d-flex justify-content-between align-items-center text-center">
                <button class="p-1 mx-2" @click="incAmount(cartProducts.id)">+1</button>
                <h3>{{ (Math.round( cartProducts.price - (cartProducts.price * cartProducts.discount))) * cartProducts.amount  }}</h3>
                <button class="p-1 mx-2" @click="decAmount(cartProducts.id)">-1</button>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <p>x{{ cartProducts.amount }}</p>
                <button class="me-3 mt-2 del" @click="deleteProduct(cartProducts.id)">Удалить</button>
            </div>
        </div>
    </div>
    <div class="d-xl-none d-lg-none d-md-none d-sm-none d-block">
            <div class="d-flex justify-content-between align-items-center text-center">
                <button class="p-1 mx-2" @click="incAmount(cartProducts.id)">+1</button>
                <h3>{{ (Math.round( cartProducts.price - (cartProducts.price * cartProducts.discount))) * cartProducts.amount  }}</h3>
                <button class="p-1 mx-2" @click="decAmount(cartProducts.id)">-1</button>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <p>x{{ cartProducts.amount }}</p>
                <button class="me-3 mt-2 del" @click="deleteProduct(cartProducts.id)">Удалить</button>
            </div>
        </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  name: 'appCartList',
  props: {
    cartProducts: {
        type: Object,
        default: () => {}
    }
  },
  methods: {
    ...mapActions([
        'INC_AMOUNT',
        'DEC_AMOUNT',
        'DELETE_PRODUCT_FROM_CART'
    ]),
    incAmount(index){
        this.INC_AMOUNT(index)
    },
    decAmount(index){
        this.DEC_AMOUNT(index)
    },
    deleteProduct(index){
        this.DELETE_PRODUCT_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss" scoped>
    .cart_list{
        border: 1px solid #ccc;
        border-radius: 15px;
        padding: 10px 15px;
        flex-wrap: wrap;
        // width: 100%;
    }

    .cart_list .del{
        background-color: red;
        color: #fff;
        border-radius: 20px;
        border: 1px solid #ccc;
        font-size: 12px;
    }

    .cart_list button{
        border-radius: 15px;
        background-color: #fff;
        border: 1px solid #000;
    }
    .cart_list span{
        border-radius: 15px;
        padding: 8px;
        color: #fff;
        background-color: #f12066;
    }
    .cart_title{
        max-width: 400px;
        font-size: 14px;
    }
</style>