<template lang="html">
  <div @click.self="closePayPage" class="pay_bg fixed-top w-100 d-flex justify-content-end h-100">
    <div class="container pay_block w-50">
        <h1 class="ms-4 mt-3">Способ оплаты: <span class="magnum_color font_weight_bolder">"{{ payDetail }}"</span></h1>
        <div class="pay_detail d-xl-flex d-lg-flex d-md-flex d-sm-flex d-block justify-content-center align-items-center justify-content-lg-around justify-content-xl-between justify-content-md-between justify-content-sm-center align-items-center ">
            <div @click="payDetail = 'Kaspi Bank'">
                <img src="images/kaspi-bank.png" class="pay_img cursor_pointer" width="80px" alt="">
            </div>
            <div @click="payDetail = 'Halyk Bank'">
                <img src="images/halyk-bank.png" class="pay_img cursor_pointer" width="80px" alt="">
            </div>
            <div @click="payDetail = 'Jusan Bank'">
                <img src="images/jusan-bank.webp" class="pay_img cursor_pointer" width="80px" alt="">
            </div>
        </div>

        <div>
            <div class="d-flex justify-content-center align-items-center mt-3">
                <img v-if="payDetail === 'Kaspi Bank' " src="images/kaspi-qr.png" class="img-fluid" width="250px" alt="">

                <img v-if="payDetail === 'Halyk Bank' " src="images/halyk-qr.jpg" class="img-fluid" width="250px" alt="">

                <img v-if="payDetail === 'Jusan Bank' " src="images/jusan-qr.webp" class="img-fluid" width="250px" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'


export default {
  name: 'appPay',
  data(){
    return{
        closePage: true,
        payDetail: 'Kaspi Bank',
    }
  },
  methods: {
    ...mapActions([
        'CLOSE_PAY_PAGE'
    ]),
    closePayPage(){
        this.CLOSE_PAY_PAGE(false)
    }
  },
}
</script>

<style lang="scss" scoped>
    .pay_bg{
        background-color: rgba(100,100,100,0.5);
    }
    .pay_img{
        border-radius: 15px;
    }

    .pay_detail{
        border-bottom: 5px dashed #f21066;
        padding: 15px 0;
    }

    .pay_block{
        margin-top: 50px;
        margin-bottom: 50px;
        background-color: #fff;
        border-radius: 20px;
    }
</style>