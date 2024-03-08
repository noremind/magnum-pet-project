<template lang="html">
    <div>
        <div class="container pt-5">
            <div class="row">
                <!-- <div class="col-xl-1"></div> -->
                <div class="col-xl-4 mx-4">
                    <p class="min_font_size">
                        <router-link tag="span" :to="{name: 'main'}" class="cursor_pointer">Главная</router-link> / <span class="cursor_pointer">Каталог скидок</span>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5 my-5">
                    <h1>Каталог скидок</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-3"></div>
                <div class="col-xl-9 d-flex justify-content-between align-items-center">
                    <div>
                        <p>Найдено {{filteredProduct.length}}  товаров:</p>
                    </div>
                    <div class="dropdown">
                        <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Сортировка: {{ selectSort }}
                        </button>
                        <ul class="dropdown-menu">
                            <li v-for="(sorting , i) in sorted" :key="i" @click="sortProducts(sorting.value, sorting.name)" ><a class="dropdown-item cursor_pointer">{{ sorting.name }}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-1"></div>
            </div>
            <div class="row">
                <div class="col-xl-3 catalog_category mb-3">
                    <div>
                        <h3>Фильтр</h3>
                        <ul v-for="category in categories" :key="category.id">
                            <li @click="selectCategory(category.id)" :class="category.id === categoryId ? 'category_active' : '' " class="mb-3 cursor_pointer">{{category.title}}</li>
                        </ul>
                        <div class="d-flex justify-content-center mt-4">
              <button @click="resetProducts" class="category_btn">Сбросить</button>
            </div>
                    </div>
                </div>
                <div class="col-xl-9">
                    <div class="row">
                        <ProductItem v-for="product in filteredProduct" :key="product.id" :product="product"></ProductItem>
                    </div>
                    <div>
                        <h2 v-if="filteredProduct.length === 0">Пока что нет продукта</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductItem from '@/components/litle-components/ProductItem'

import categories from '@/data/categories'
// import products from '@/data/mainPromoProducts'
import { mapGetters } from 'vuex'

export default {
    name: 'appDiscount',
    components: {
        ProductItem
    },
    data() {
        return {
            sortedProducts: 1,
            selectSort: 'Не выбрано',
            sorted: [
                {
                    name: 'Не выбрано',
                    value: 1
                },
                {
                    name: 'По убыванию цен',
                    value: 2
                },
                {
                    name: 'По возрастанию цен',
                    value: 3
                },
            ],
            categoryId: 0,
            categories,
            // products
        }
    },
    methods: {
        selectCategory(event) {
            this.categoryId = event
        },
        selectedSort(event) {
            this.selectSort = event
        },
        resetProducts(){
          this.categoryId = 0
          this.filteredProduct
        },
        sortProducts(id , name){
            this.sortedProducts = id
            this.selectSort = name
        }
    },
    computed: {
        ...mapGetters([
            'PRODUCTS_DATA'
        ]),
        filteredProduct() {
            let filteredProduct = []
            if(this.PRODUCTS_DATA) {
                filteredProduct = [...this.PRODUCTS_DATA]
                if (this.categoryId) {
                filteredProduct = filteredProduct.filter(product => +product.categoryId === this.categoryId)
                }

                if (this.sortedProducts === 1) {
                    return filteredProduct
                }

                if (this.sortedProducts === 2) {
                    filteredProduct = filteredProduct.map(item => {
                        return {
                            ...item,
                            discountPrice: Math.round(+item.price - (+item.price * item.discount))
                        }
                    })
                    filteredProduct = filteredProduct.sort((a , b) => {
                         return b.discountPrice - a.discountPrice
                    })
                }

                if (this.sortedProducts === 3) {
                    filteredProduct = filteredProduct.map(item => {
                        return {
                            ...item,
                            discountPrice: Math.round(+item.price - (+item.price * item.discount))
                        }
                    })
                    filteredProduct = filteredProduct.sort((a , b) => {
                         return a.discountPrice - b.discountPrice
                    })
                }
            }
            return filteredProduct
        }
    }
}
</script>
<style lang="scss" scoped>
.catalog_category {
    height: 500px;
    border: 4.2px dashed #f12066;
    border-radius: 15px;
}

.category_active {
    border-bottom: 2px solid #f12066;
    font-weight: 600;
}

.category_btn {
    border-radius: 15px;
    border: none;
    background-color: #f12066;
    color: #fff;
    padding: 10px 35px;
    width: 80%;
}
</style>