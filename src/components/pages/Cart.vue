<template lang="html">
  <div>
    <div class="container-fluid">
        <div class="row py-5">
            <div class="col-xl-1"></div>
            <div class="col-xl-5">
                <p> <router-link tag="span" :to="{name: 'main'}" class="cursor_pointer">Главная</router-link> / <span class="cursor_pointer">Корзина</span></p>
            </div>
        </div>

        <div class="row mb-3">
            <div class="col-xl-1"></div>
            <div class="col-xl-3"><h3>Корзина</h3></div>
        </div>

        <div class="row">
            <div class="col-xl-1"></div>
            <div class="col-xl-4">
                <p>В корзине {{productsLength}} товаров:</p>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <div class="row me-1">
                            <CartList v-for="(cartList , i) in CART_PRODUCTS" :key="i" :cartProducts="cartList"></CartList>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="row me-2">
                        <div class="cart_total">
                            <h5>Доставка бесплатная</h5>
                            <div class="d-flex justify-content-between">
                                <h4>Сумма:</h4>
                                <h2>{{ CART_TOTAL_PRICE }} тг</h2>
                            </div>
                            <router-link tag="button" :to="{name: 'address'}" class="mt-3">
                                Оформить заказ
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
// import ProductItem from '@/components/litle-components/ProductItem'
import CartList from '@/components/litle-components/CartList'

import {mapGetters} from 'vuex'

export default {
  name: 'appCart',
  data(){
    return{

    }
  },
  components: {
    CartList,
  },
  computed:{
    ...mapGetters([
        'CART_PRODUCTS',
        'CART_TOTAL_PRICE'
    ]),
    productsLength(){
        return this.CART_PRODUCTS.length
    },
  }
}
</script>

<style lang="scss" scoped>
    .cart_total{
        padding: 10px;
        border: 3.5px dashed #f12066;
        border-radius: 15px;
    }
    .cart_total button{
        width: 100%;
        background-color: #f12066;
        padding: 10px 15px;
        color: #fff;
        border-radius: 15px;
        border: 1px solid #ccc;
        transition: .4s;
    }
    .cart_total button:hover{
        box-shadow: 1px 13px 15px 0px rgba(34, 60, 80, 0.16);
        transition: .4s;
        transform: scale(0.98);
    }

    .plan_product{
        border: 1px solid #f12066;
    }
</style>