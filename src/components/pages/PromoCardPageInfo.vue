<template lang="html">
  <div>
    <div class="container-fluid pt-5">
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col-xl-10">
          <div v-for="info in PROMO_INFO_PAGE" :key="info.id" class="promo_info_page">
            <img :src="info.promoImage" height="570px" class="w-100" :alt="info.title">
            <div class="promo_info_page_div my-4">
              <h2 class="magnum_color">{{ info.title }}</h2>
              <h4>{{ info.keyword }}</h4>
            </div>

            <p class="w-50 font_weight_bolder mb-5">{{ info.label }}</p>

            <h4 class="font_weight_bolder my-3">Условия акции:</h4>
            <h5>Период акции: <span class="magnum_color">{{ info.startPromo }} - {{ info.endPromo }}</span></h5>

            <div v-if="info.isForYou">
              <h6 class="mt-4 font_weight_bolder">Для Вас:</h6>
              <ul v-for="(promoText , i) in info.forYou" :key="i">
                <li class="my-2">{{ promoText.textOne }}</li>
                <li v-if="promoText.textTwo" class="my-2">{{ promoText.textTwo }}</li>
                <li v-if="promoText.textThree" class="my-2">{{ promoText.textThree }}</li>
                <li v-if="promoText.textFour" class="my-2">{{ promoText.textFour }}</li>
                <li v-if="promoText.textFive" class="my-2">{{ promoText.textFive }}</li>
              </ul>
            </div>


            <h4 class="font_weight_bolder magnum_color my-3">С наилучшими пожеланиями, Ваш Magnum!</h4>

            <h5 v-if="info.isPromoProducts">Товары, участвующие в акции:</h5>
            <div v-if="info.isPromoProducts">
              <div class="container">
                <div class="row">
                  <ProductItem v-for="promoItem in info.promoProducts" :key="promoItem.id" :product="promoItem">
                  </ProductItem>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import ProductItem from '@/components/litle-components/ProductItem'

export default {
  name: 'appPromoCardPage',
  components: {
    ProductItem
  },
  computed: {
    ...mapGetters([
        'PROMO_INFO_PAGE'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .promo_info_page img{
    border-radius: 20px;
    object-fit: contain;
  }
  .promo_info_page_div{
    border: 5px dashed #ccc;
    border-radius: 15px;
    padding: 15px 20px;
    // margin-top: 50px;
  }
</style>