<template lang="html">
    <div>
        <div class="promo_catalog my-3" data-aos="zoom-in-up" data-aos-duration="5000">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-1"></div>
                    <h1 class="col-xl-4 my-5">Лучшие по акции</h1>
                </div>
            </div>
            <div class="container">
                <div class="row ms-2">
                    <!-- <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div> -->

                    <ProductItem v-for="product in promoProducts" :key="product.id" :product="product"></ProductItem>

                    <!-- <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import promoProducts from '@/data/mainPromoProducts'
import ProductItem from '@/components/litle-components/ProductItem'



export default {
  name: 'appPromoProducts',
  components: {
    ProductItem,
  },
  data(){
    return{
        promoProducts
    }
  }
}
</script>

<style lang="scss" scoped>
    .promo_margin{
        flex-wrap: wrap;
        margin: 0 126px;
    }
</style>