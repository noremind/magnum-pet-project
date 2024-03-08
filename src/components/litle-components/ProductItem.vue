<template lang="html">
    <div class="col-xl-3 col-lg-3 col-md-6 mb-3">
        <!-- 1 item promo -->
        <div @click="openModalProduct(product)" class="catalog-promo-items">
            <div class="d-flex align-items-center justify-content-between promos-price">
                <p v-if="product.specialPrice" class="m-2 min_font_size">Соц</p>
                <p v-if="product.discount" class="m-2 min_font_size">-{{ product.discount * 100 }}%</p>
                <span class="min_font_size px-2">До {{product.lastDate}}</span>
            </div>
            <div class="d-flex align-items-center justify-content-center">
                <img class="img-fluid promo-items-img" :src="product.image" width="145px" :alt="product.title">
            </div>
            <p class="product_title px-4">{{ product.title.toUpperCase().substr(0 , 22) }}...</p>
            <div class="mx-3">
                <p class="mb-0" v-if="product.specialPrice">Социальная цена</p>
                <strike v-if="product.price > product.price - Math.round(product.price * product.discount)"> {{ product.price }} тг</strike>
                <h3 class="align-items-end">{{product.price - Math.round(product.price * product.discount)}} тг</h3>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'appProductItem',
  data(){
    return{

    }
  },
  props: {
    product: {
        type: [],
        default: () => []
    }
  },
  methods: {
    ...mapActions([
        'SET_CHANGE_PRODUCT_PAGE',
        'SET_DATA_PRODUCT'
    ]),
    openModalProduct(product){
        const productArray = new Array(product)
        this.SET_DATA_PRODUCT(productArray)
        this.SET_CHANGE_PRODUCT_PAGE(true)
    }
  },
}
</script>

<style lang="scss" scoped>
    .product_title{
        height: 40px;
        font-size: 14px;
        font-weight: 600;
        // border: 1px solid red;

    }
</style>