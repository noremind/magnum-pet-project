<template lang="html">
    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 my-3 ">
        <div class="promo_block d-xl-flex d-lg-flex d-md-block d-sm-block d-block justify-content-center  align-items-center">
            <div class="text-center">
                <img :src="promoInfo.promoImage" width="280px" height="145px" :alt="promoInfo.title">
            </div>
            <div>
                <h4 class="pt-2">{{ promoInfo.title }}</h4>
                <p class="min_font_size">{{ promoInfo.keyword }}</p>
                <span><router-link :to="{name: 'promoInfo'}" tag="button" class="mb-4" ><span @click="goPromoInfo(promoInfo)"> Узнать больше </span></router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'appProductCard',
  props: {
    promoInfo: {
        type: Object,
        default: () => {}
    }
  },
  methods: {
    ...mapActions([
        'SET_PROMO_INFO_PAGE'
    ]),
    goPromoInfo(info){
        const infoArray = new Array(info)
        this.SET_PROMO_INFO_PAGE(infoArray)
    }
  }
}
</script>

<style lang="scss" scoped>
	.promo_items_page{
        flex-wrap: wrap;
    }

    .promo_block{
        // width: 47%;
        min-height: 200px;
        border: 1px solid #ccc;
        border-radius: 20px;
        box-shadow: 1px 10px 10px 5px rgba(34, 60, 80, 0.16);
    }

    .promo_block img{
        border-radius: 15px;
        margin: 10px 30px;
        object-fit: cover;
    }

    .promo_block button{
        background-color: #fff;
        color: #f21066;
        border: none;
        font-size: 12px;
    }

    .promo_block p{
        // height: 50px;
        // border: 1px solid blue;
    }

</style>