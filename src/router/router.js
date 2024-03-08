import Vue from 'vue'
import store from '@/store/store'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        name: 'main',
        component: () => import('@/components/pages/Main-2'),
        path: '/',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
    }
    },
    // {
    //  name: 'main',
    //  component: () => import('@/components/pages/Main'),
    //  path: '/'
    // },
    {
        name: 'contacts',
        component: () => import('@/components/pages/Contacts'),
        path: '/contacts',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
    }
    },
    {
        name: 'about',
        component: () => import('@/components/pages/About'),
        path: '/about',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'our-brands',
        component: () => import('@/components/pages/OurBrands'),
        path: '/our-brands',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'shops',
        component: () => import('@/components/pages/Shops'),
        path: '/shops',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'catalog-discount',
        component: () => import('@/components/pages/CatalogDiscount'),
        path: '/catalog-discount',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'magnum-club',
        component: () => import('@/components/pages/MagnumClub'),
        path: '/magnum-club',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    // {
    //     name: 'product-page',
    //     component: () => import('@/components/pages/ProductPage'),
    //     path: 'product',
    //     beforeEnter: (to, from, next) => {
    //         store.commit("CHANGE_LOAD", true);
    //     next();
    //     setTimeout(() => {
    //             store.commit("CHANGE_LOAD", false);
    //     }, 1500);
    //     }
    // },
    {
        name: 'promo',
        component: () => import('@/components/pages/PromoPage'),
        path: '/promo',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'search',
        component: () => import('@/components/pages/SearchResult'),
        path: '/search',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'promoInfo',
        component: () => import('@/components/pages/PromoCardPageInfo'),
        path: '/promoInfo',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'createProduct',
        component: () => import('@/components/pages/NewProduct'),
        path: '/create',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'login',
        component: () => import('@/components/pages/Login'),
        path: '/login',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'register',
        component: () => import('@/components/pages/RegisterPage'),
        path: '/register',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'cart',
        component: () => import('@/components/pages/Cart'),
        path: '/cart',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'address',
        component: () => import('@/components/pages/AddressPage'),
        path: '/address',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
    {
        name: 'redirect',
        component: () => import('@/components/pages/Redirect'),
        path: '/*',
        beforeEnter: (to, from, next) => {
            store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
                store.commit("CHANGE_LOAD", false);
        }, 1500);
        }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    beforeEnter: (to, from, next) => {
        this.$store.commit("CHANGE_LOAD", true);
        next();
        setTimeout(() => {
            this.$store.commit("CHANGE_LOAD", false);
        }, 1500);
    }
})

export default router