<template lang="html">
    <div>
        <div class="container-fluid">
            <div class="row py-5">
                <div class="col-xl-1"></div>
                <div class="col-xl-3">
                    <p class="min_font_size"> <router-link tag="span" :to="{name: 'main'}" class="cursor_pointer">Главная</router-link> / <span class="cursor_pointer">Акции</span></p>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-2">
                    <h3>Все акции</h3>
                </div>
            </div>



            <div class="container">
                <div class="row ms-3">
                    <PromoCard v-for="promo in promoInfo" :key="promo.id" :promoInfo="promo"></PromoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PromoCard from '@/components/litle-components/PromoCard'
import promoInfo from '@/data/promoInfo'


export default {
  name: 'appPromoPage',
  data(){
    return{
        promoInfo
    }
  },
  components: {
    PromoCard,
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>