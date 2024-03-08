<template lang="html">
    <div>
        <div class="container-fluid">
            <div class="row py-5">
                <div class="col-xl-1"></div>
                <div class="col-xl-3">
                    <p class="min_font_size">
                        <router-link tag="span" :to="{name: 'main'}" class="cursor_pointer">Главная</router-link> / <span class="cursor_pointer">Результаты поиска</span>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-1"></div>
                <div class="col-xl-5">
                    <h4>Результаты поиска: <span class="font_weight_bolder">"{{ SEARCH }}"</span></h4>
                </div>
            </div>
            <div class="row my-3">
                <div class="col-xl-1"></div>
                <div class="col-xl-5">
                    <p>Найдено: {{ searchProduct.length }} товаров </p>
                </div>
            </div>
        </div>
        <div class="container mb-5 search">
            <div class="row" v-if="searchProduct.length">
                    <ProductItem v-for="product in searchProduct" :key="product.id" :product="product"></ProductItem>
            </div>
                <div v-else>
                    <h4>Товар не найдено</h4>
                </div>
        </div>
    </div>
</template>
<script>
import ProductItem from '@/components/litle-components/ProductItem'
// import promoProducts from '@/data/mainPromoProducts'
import { mapGetters } from 'vuex'

export default {
    name: 'appSearch',
    data() {
        return {
            // promoProducts,
            searchProduct: [],
        }
    },
    components: {
        ProductItem
    },
    methods: {
        searchProducts(value) {
            this.searchProduct = [...this.PRODUCTS_DATA]


            if (value) {
                this.searchProduct = this.searchProduct.filter(product => {
                    return product.title.toLowerCase().includes(value.toLowerCase())
                })
            }
        }
    },
    computed: {
        ...mapGetters([
            'SEARCH',
            'PRODUCTS_DATA'
        ])
    },
    watch: {
        SEARCH() {
            this.searchProducts(this.SEARCH)
        }
    },
    mounted(){
        this.searchProducts(this.SEARCH)
    }
}
</script>
<style lang="scss" scoped>
    .search{
        height: 480px;
    }
</style>