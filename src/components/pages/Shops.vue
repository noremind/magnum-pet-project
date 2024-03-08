<template lang="html">
  <div>
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-xl-1"></div>
        <div class="col-xl-3">
          <p> <router-link tag="span" :to="{name: 'main'}" class="cursor_pointer">Главная</router-link> / <span class="cursor_pointer">Магазины</span></p>
        </div>
      </div>

      <div class="row my-4">
        <div class="col-xl-1"></div>
        <div class="col-xl-3">
          <h2>Наши магазины</h2>
        </div>
      </div>

      <div class="row my-3">
        <div class="col-xl-1"></div>
        <div class="col-xl-6">
          <!-- Panel -->
          <div class="row">
            <div class="col">
              <p @click="shops = 'all' " :class="shops === 'all' ? 'shops_active_p' : '' " class="cursor_pointer">Все магазины</p>
            </div>
            <div class="col">
              <p @click="shops = 'Magnum24/7'" :class="shops === 'Magnum24/7' ? 'shops_active_p' : '' " class="cursor_pointer">Magnum 24/7</p>
            </div>
            <div class="col">
              <p @click="shops = 'Super'" :class="shops === 'Super' ? 'shops_active_p' : '' " class="cursor_pointer">Super</p>
            </div>
            <div class="col">
              <p @click="shops = 'Express'" :class="shops === 'Express' ? 'shops_active_p' : '' " class="cursor_pointer">Express</p>
            </div>
            <div class="col">
              <p @click="shops = 'Daily'" :class="shops === 'Daily' ? 'shops_active_p' : '' " class="cursor_pointer">Daily</p>
            </div>
          </div>
        </div>
      </div>
      <!-- List -->
      <div class="container">
        <div
          class="row my-4"

          >
          <div
            v-for="shop in shopsData"
            :key="shop.id"
            class="col-xl-7"
          >
            <div v-if="shops === shop.priority && shop.cityId === CITY_SELECTED() || shops === 'all' && shop.cityId === CITY_SELECTED() " class="py-3  shops_style my-3" data-aos="fade-right">
              <h6 class="font_weight_bolder">{{ shop.priority }}</h6>
              <h3 class="font_weight_bolder">{{ shop.title }}</h3>
              <p>{{ shop.address.city }} {{ shop.address.road }} {{ shop.address.microdistrict }} {{ shop.address.street }} {{shop.address.homeNumber}} {{ shop.address.korpus }} {{ shop.address.locality }} {{ shop.address.nearBuilding }}</p>
              <p><span>{{ shop.startWorkTime }} - {{ shop.endWorkTime }}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import shopsData from '@/data/shops'
import {mapGetters} from 'vuex'

export default {
  name: 'appShops',
  data(){
    return{
      shops: 'all',
      shopsData
    }
  },
  methods: {
    ...mapGetters([
      'CITY_SELECTED'
    ])
  },
}
</script>

<style lang="scss" scoped>
  .shops_style{
    border: 1px solid #ccc;
    padding: 15px 20px;
    border-radius: 15px;
    background-color: #f21066;
    color: #fff;
  }
  .shops_style p{
    color: #f8f8f8;
  }
  .shops_active_p{
    color: #f21066;
    font-weight: bolder;
  }
</style>