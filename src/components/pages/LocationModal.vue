<template lang="html">
    <div class="w-100 fixed-top d-flex modal_bg justify-content-end h-100"  @click.self="closeModal">
        <div data-aos="fade-left" class="bg-white px-4 modal_fixed">
            <h2 class="p-4">Выберите свой <br> город:</h2>
            <p
                v-for="(city , i) in CITIES"
                :key="i"
                class="px-4 cursor_pointer"
                @click="selectCity($event)"
                :class="city.name === CITY_SELECTED ? 'active_color' : '' "
            >{{ city.name }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters , mapMutations } from 'vuex'

export default {
  name: 'appLocationModal',
  data(){
    return{
        isModalVisible: false
    }
  },
  methods: {
    ...mapMutations([
        'MODAL_VISIBLE',
        'SELECTED'
    ]),
    closeModal(){
        this.MODAL_VISIBLE()
    },
    selectCity(event){
        console.log(event.target.innerHTML.value)
        this.SELECTED(event.target.innerHTML)
        this.MODAL_VISIBLE()
    }
  },
  computed: {
    ...mapGetters([
        'CITY_SELECTED',
        'CITIES',
        'IS_LOCATION_VISIBLE',
    ])
  }
}
</script>

<style lang="scss" scoped>
    .modal_bg{
        background-color: rgba(100,100,100,0.5);
    }

    .active_color{
        color: #f12066;
        font-weight: 600;
    }

    .modal_fixed{
        height: 100%;
        border-radius: 25px 0px 0 25px;
        border: 1px solid #ccc;
    }
</style>