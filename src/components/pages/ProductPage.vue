<template lang="html">
    <div @click.self="closeModalProduct" class="w-100 fixed-top d-flex justify-content-end h-100 product_page_bg">
        <div class="bg-white px-4 product_modal h-100 " data-aos="fade-left" >
            <div v-for="product in PRODUCT_INFO" :key="product.id" class="product_page_items">
                <div class="d-flex justify-content-between p-4">
                    <p class="product_page_discout" v-if="product.specialPrice">Соцальная цена</p>
                    <p v-if="product.discount" class="product_page_discout">- {{ product.discount * 100 }}%</p>
                    <a class="close_img cursor_pointer" @click="closeModalProduct"><img width="30px" height="30px" src="images/close.png" alt="close"></a>
                </div>
                <div class="d-flex justify-content-center">
                    <img class="img-fluid" :src="product.image" width="200px" alt="title">
                </div>

                <div class="d-flex justify-content-between my-4">
                    <h4>Акция на товар</h4>
                    <h6 class="min_font_size">до {{ product.lastDate }}</h6>
                </div>
                <h3 class="font_weight_bolder">{{ product.title }}</h3>



                <div>
                    <strike v-if="!product.specialPrice">{{ product.price }} тг</strike>
                    <h2 v-if="product.price" class="magnum_color font_weight_bolder">{{ product.price - Math.round(product.price * product.discount) }} тг</h2>
                    <!-- <h2 v-if="product.specialPrice" class="magnum_color font_weight_bolder">{{ product.price }}</h2> -->
                </div>

                <div class="d-flex justify-content-center h-100 mt-5 mb-3">
                    <button v-if="IS_USER_LOGGED_IN" @click="addToCart(product)">В корзину</button>

                    <div @click="closeModalProduct">
                        <router-link v-if="IS_USER_LOGGED_IN === null" :to="{name: 'login'}" tag="button">Войти или Зарегистироваться</router-link>
                    </div>
                </div>

                <p class="min_font_size mb-5">Точные условия получения скидки уточняйте в магазинах.</p>

            </div>
        </div>
    </div>
</template>

<script>
import {mapActions , mapGetters} from 'vuex'


export default {
  name: 'appProductPage',
  methods: {
    ...mapActions([
        'SET_CHANGE_PRODUCT_PAGE',
        'ADD_TO_CART'
    ]),
    closeModalProduct(){
        this.SET_CHANGE_PRODUCT_PAGE(false)
    },
    addToCart(product){
        this.ADD_TO_CART(product)
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCT_PAGE',
        'PRODUCT_INFO',
        'IS_USER_LOGGED_IN'
    ]),
  }
}
</script>

<style lang="scss" scoped>
    .product_page_bg{
        background-color: rgba(100,100,100,0.5);
    }
    .product_modal{
        border-radius: 25px 0px 0 25px;
        border: 1px solid #ccc;
    }

    .product_page_items h3{
        max-height: 150px;
        max-width: 600px;
    }

    .product_page_items button{
        padding: 10px 15px;
        border: none;
        background-color: #f21066;
        font-weight: 600;
        border-radius: 20px;
        color: #fff;
        width: 80%;
    }

    .product_page_discout{
        padding: 10px;
        border-radius: 15px;
        color: #fff;
        background-color: #f21066;
    }
    .close_img{
        position: relative;
        z-index: 100;
    }
</style>