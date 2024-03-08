<template lang="html">
    <div>
        <div class="cart_total">
            <div class="d-flex justify-content-between" v-for="(cartProd , i) in CART_PRODUCTS" :key="i" >
                <h6>{{ cartProd.title }}</h6>
                <p>{{ Math.round((cartProd.price - (cartProd.price * cartProd.discount))) * cartProd.amount }}тг</p>
                <!-- <hr> -->
            </div>
            <hr>
            <h5>Доставка бесплатная</h5>
            <div class="d-flex justify-content-between">
                <h4>Сумма:</h4>
                <h2>{{ CART_TOTAL_PRICE }} тг</h2>
            </div>
            <button class="mt-3">
                Перейти к оплате
            </button>
        </div>
    </div>
</template>
<script>
import {mapGetters , mapActions} from 'vuex'


export default {
    name: 'appPlanProduct',
    methods: {
        ...mapActions([
            'CLOSE_PAY_PAGE'
        ]),
    },
    computed: {
        ...mapGetters([
            'CART_TOTAL_PRICE',
            'CART_PRODUCTS',
        ])
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
</style>