<template lang="html">
    <div>
        <div class="header-margin-top"></div>
        <header class="header fixed-top">
            <div class="container-fluid mt-5 mb-3">
                <div class="row">
                    <div class="col-xl-1 d-none d-lg-none d-sm-none d-md-none d-xl-block"></div>
                    <div class="col-xl-3 col-lg-3 col-md-1 col-sm-1 col-12  d-flex align-items-center mt-1 header-logo">
                        <div class="d-flex justify-content-between align-items-center mb-2 w-100">
                            <div>
                                <router-link :to="{name: 'main'}" class="d-sm-none d-xl-block d-lg-block d-md-none d-none"><img src="images/main-logo-magnum.svg" alt="magnum" width="221px" height="40"></router-link>
                                <router-link :to="{name: 'main'}" class="d-block d-sm-block d-xl-none d-lg-none d-md-block"><img src="images/logo-mobile.9e0cfa22.svg" alt="magnum" width="45px" height="40"></router-link>
                            </div>
                            <div>
                                <div class="col-9 d-lg-none d-sm-none d-md-none d-xl-none d-block">
                                    <div class="header-location d-flex align-items-center justify-content-between">
                                        <div @click="isModalVisible" class="d-flex align-items-center">
                                            <img class="cursor_pointer" src="images/location.png" alt="location" width="22px">
                                            <p>{{ CITY_SELECTED.substr(0 ,3) }}</p>
                                        </div>
                                        <p>|</p>
                                        <div class="dropdown">
                                            <a class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src="images/user.png" width="30px" class="me-3 cursor_pointer" alt="">
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li v-if="isUserLoggedIn === null ">
                                                    <router-link :to="{name: 'login'}" class="dropdown-item cursor_pointer">Войти</router-link>
                                                </li>
                                                <li v-if="isUserLoggedIn === null ">
                                                    <router-link :to="{name: 'register'}" class="dropdown-item cursor_pointer">Регистрация</router-link>
                                                </li>
                                                <li v-if="isUserLoggedIn" class="d-flex justify-content-between">
                                                    <a class="dropdown-item cursor_pointer">Вы вошли:</a>
                                                    <a class="dropdown-item cursor_pointer">{{userName}}</a>
                                                </li>
                                                <li v-if="isUserLoggedIn">
                                                    <router-link tag="span" :to="{name: 'cart'}" class="dropdown-item cursor_pointer position-relative">Корзина: <span class="toggle_span">{{ CART_PRODUCTS.length }}</span></router-link>
                                                </li>
                                                <li v-if="isUserLoggedIn" @click="onLogOut"><a style="color: red;" class="dropdown-item cursor_pointer">Выйти</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6 col-md-7 col-sm-7 col-12">
                        <div class="header-search d-flex align-items-center justify-content-between">
                            <div class="d-flex align-items-center">
                                <img src="images/search-interface-symbol.png" alt="search-logo" width="16px">
                                <input class="min_font_size" type="text" placeholder="Поиск" v-model.trim="search">
                            </div>
                            <div class="">
                                <button class="px-3">
                                    <span @click="goSearch(search)">Искать</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-1 col-lg-3 col-md-4 col-sm-3  d-none d-sm-block d-md-block d-sm-block d-xl-block d-lg-block">
                        <div class="header-location d-flex align-items-center justify-content-between">
                            <div @click="isModalVisible" class="loca d-flex align-items-center">
                                <img class="cursor_pointer" src="images/location.png" alt="location" width="22px">
                                <p>{{ CITY_SELECTED.substr(0 ,3) }}</p>
                            </div>
                            <p>|</p>
                            <div class="dropdown">
                                <a class="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="images/user.png" width="30px" class="me-3 cursor_pointer" alt="">
                                </a>
                                <ul class="dropdown-menu">
                                    <li v-if="isUserLoggedIn === null ">
                                        <router-link :to="{name: 'login'}" class="dropdown-item cursor_pointer">Войти</router-link>
                                    </li>
                                    <li v-if="isUserLoggedIn === null">
                                        <router-link :to="{name: 'register'}" class="dropdown-item cursor_pointer">Регистрация</router-link>
                                    </li>
                                    <li v-if="isUserLoggedIn" class="d-flex justify-content-between">
                                        <a class="dropdown-item cursor_pointer">Вы вошли:</a>
                                        <a class="dropdown-item cursor_pointer">{{userName || 'admin'}}</a>
                                    </li>
                                    <li v-if="isUserLoggedIn">
                                        <router-link tag="span" :to="{name: 'cart'}" class="dropdown-item cursor_pointer position-relative">Корзина: <span class="toggle_span">{{ CART_PRODUCTS.length }}</span></router-link>
                                    </li>
                                    <li v-if="isUserLoggedIn" @click="onLogOut"><a style="color: red;" class="dropdown-item cursor_pointer">Выйти</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-1 d-lg-none d-sm-none d-md-none d-xl-block d-none"></div>
                </div>
            </div>
            <!-- Navbar links -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div>
                    <div class="col-xl-10 col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="header-navbar navbar-collapse collapse show" id="navbarNavAltMarkup">
                                <div class="col">
                                    <router-link :to="{name: 'catalog-discount'}" class="catalog_pro">Каталог скидок</router-link>
                                </div>
                                <div class="col">
                                    <router-link :to="{name: 'promo'}" class="stocks">Акции</router-link>
                                </div>
                                <div v-if="ADMIN" class="col">
                                    <router-link :to="{name: 'createProduct'}" class="link-hover">Добавить товар</router-link>
                                </div>
                                <div class="col">
                                    <router-link :to="{name: 'our-brands'}" class="link-hover">Наши бренды</router-link>
                                </div>
                                <div class="col">
                                    <router-link :to="{name: 'shops'}" class="link-hover">Магазины</router-link>
                                </div>
                                <div class="col">
                                    <router-link :to="{name: 'contacts'}" class="link-hover">Контакты</router-link>
                                </div>
                                <div class="col">
                                    <router-link :to="{name: 'about'}" class="link-hover">О компании</router-link>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col-xl-1 d-xl-block d-lg-none d-md-none d-sm-none d-none"></div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'appHeader',
    data() {
        return {
            search: '',
        }
    },
    computed: {
        ...mapGetters([
            'IS_LOCATION_VISIBLE',
            'CITY_SELECTED',
            'SEARCH',
            'CART_PRODUCTS',
            'IS_USER_LOGGED_IN',
            'SEARCH',
            'ADMIN'
        ]),
        isUserLoggedIn(){
            return this.IS_USER_LOGGED_IN
        },
        userName(){
            return localStorage.getItem('userName')
        },
    },
    methods: {
        ...mapActions([
            'SET_SEARCH',
            'LOG_OUT',
        ]),
        ...mapMutations([
            'MODAL_VISIBLE',
        ]),
        isModalVisible() {
            this.MODAL_VISIBLE()
        },
        goSearch(search) {
            this.SET_SEARCH(search)
            if(this.SEARCH){
                this.$router.push('/search').catch(() => {})
            }
        },
        onLogOut(){
            this.LOG_OUT()
            if(this.$route.path !== '/'){
                this.$router.push('/')
            }

        }
    }

}
</script>
<style lang="scss" scoped>
.dropdown-toggle::after {
    display: none !important;
}
.toggle_span{
    padding: 2px 8px;
    background-color: #f12066;
    color: #fff;
    border-radius: 50%;
}
</style>