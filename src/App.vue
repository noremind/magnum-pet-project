<template>
  <div>

    <Location v-if="IS_LOCATION_VISIBLE"></Location>

    <Header></Header>


    <ProductPage v-if="PRODUCT_PAGE"></ProductPage>


    <Loading v-if="LOADING_PAGE"></Loading>
    <router-view v-else class="router"></router-view>


    <Footer></Footer>

  </div>
</template>

<script>
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

import Loading from '@/components/utilits/Loading'
import Location from '@/components/pages/LocationModal'
import ProductPage from '@/components/pages/ProductPage'

import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
    return{

    }
  },
  computed: {
    ...mapGetters([
      'IS_LOCATION_VISIBLE',
      'LOADING_PAGE',
      'PRODUCT_PAGE'
    ])
  },
  components: {
    Header,
    Footer,
    Location,
    Loading,
    ProductPage,
  },
  methods: {

  },
}
</script>

<style scoped>

</style>