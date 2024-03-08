import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

// import products from '@/data/products'


Vue.use(Vuex)

class Product {
    constructor (title , categoryId , image = '' , price , discount , specialPrice , lastDate , amount , id = null) {
        this.title = title
        this.categoryId = categoryId
        this.image = image
        this.price = price
        this.discount = discount
        this.specialPrice = specialPrice
        this.lastDate = lastDate
        this.amount = amount
        this.id = id
    }
}


class User {
    constructor (id){
        this.id = id
    }
}

export default new Vuex.Store({
    state: {
        userApi: {id: null},
        adminId: 'amTro9GPSDQtbjQ4coA0qcCDJ0N2',
        isAdmin: false,
        isPayPage: false,
        cartProducts: [],
        isAuthUser: false,
        productsData: null,
        searchHeader: '',
        PromoInfoPage: [],
        productInfo: [], //Информация о конкртеном товаре
        isProductPageOpen: false, //Изначальное состояние открыт ли ProductPage
        isLoadingPage: false, //Загрузка анимация
        citySelected: 'Алматы', //Изначальное выбранный Город
        cities: [//Список городов
            {name: 'Алматы'},
            {name: 'Астана'},
            {name: 'Кызылорда'},
        ],
        isLocationVisible: false,//Модалька для города
    },
    mutations: {
        MODAL_VISIBLE(state){
            state.isLocationVisible = !state.isLocationVisible
        },
        SELECTED(state , city){
            state.citySelected = city
        },
        CHANGE_LOAD(state , payload){
            state.isLoadingPage = payload
        },
        CHANGE_PRODUCT_PAGE(state , payload){
            state.isProductPageOpen = payload
        },
        GET_DATA_PRODUCT(state , product){
            if (state.productInfo === null) {
                return state.productInfo.push(product)
            }
            else if(state.productInfo){
                return state.productInfo = product
            }
        },
        GET_PROMO_PAGE_INFO(state , info){
            state.PromoInfoPage = info
        },
        SEARCH_ITEM(state, search){
            if(search){
                state.searchHeader = search
            }
        },
        ADD_PRODUCT(state , product){
            const prod = state.cartProducts.find(item => item.id === product.id)


            if(prod){
                return
            }
            else{
                state.cartProducts.push(product)
            }
        },
        INC_CART_AMOUNT(state , index){
            const increment = state.cartProducts.filter( cartItem => cartItem.id === index )

            // console.log(increment)
            if(increment){
                increment.forEach(product => product.amount++)
            }
            return increment
        },
        DEC_CART_AMOUNT(state, index){
            const decrement = state.cartProducts.filter( cartItem => cartItem.id === index )

            if(decrement){
                decrement.forEach(product => {
                    if(product.amount > 1){
                        product.amount--
                    }
                })
            }
            return decrement
        },
        DELETE_PRODUCT(state, index){
            state.cartProducts = state.cartProducts.filter( item => item.id !== index)
        },
        CLOSE_PAY_PAGE(state , payload){
            state.isPayPage = payload
        },
        SET_USER(state, payload){
            state.userApi = payload
        },
        LOAD_PRODUCTS(state , payload){
            state.productsData = payload
            // console.log(state.productsData)
        }
    },
    actions: {
        SET_LOAD({commit} , payload){
            commit('CHANGE_LOAD' , payload)
        },
        SET_CHANGE_PRODUCT_PAGE({commit} , payload){
            commit('CHANGE_PRODUCT_PAGE' , payload)
        },
        SET_DATA_PRODUCT({commit} , payload){
            commit('GET_DATA_PRODUCT' , payload)
        },
        SET_PROMO_INFO_PAGE({commit} , info){
            commit('GET_PROMO_PAGE_INFO' , info)
        },
        SET_SEARCH({commit} , search){
            commit('SEARCH_ITEM' , search)
        },
        ADD_TO_CART({commit} , product){
            commit('ADD_PRODUCT', product)
        },
        INC_AMOUNT({commit} , index){
            commit('INC_CART_AMOUNT' , index)
        },
        DEC_AMOUNT({commit} , index){
            commit('DEC_CART_AMOUNT' , index)
        },
        DELETE_PRODUCT_FROM_CART({commit} , index){
            commit('DELETE_PRODUCT' , index)
        },
        CLOSE_PAY_PAGE({commit}, payload){
            commit('CLOSE_PAY_PAGE', payload)
        },
        REGISTER_USER({commit} , {email , password}){
            firebase.auth().createUserWithEmailAndPassword(email , password)
            .then(user => {
                // console.log(user.user.uid)
                commit('SET_USER' , new User(user.user.uid)) //user.id - id from firebase
            })
        },
        LOGIN_USER({commit} , {email , password}){
            firebase.auth().signInWithEmailAndPassword(email , password)
            .then(user => {
                // console.log(user.user.uid)
                commit('SET_USER' , new User(user.user.uid)) //user.id - id from firebase
            })
            .catch(e => alert(e))
        },
        AUTO_LOGIN_USER({commit} , payload){
            commit('SET_USER', new User(payload.uid))
        },
        LOG_OUT({commit}){
            firebase.auth().signOut()
            localStorage.removeItem('userName')
            location.reload()
            commit('SET_USER', null)
        },
        async CREATE_PRODUCT({commit} , payload){
            const imageOne = payload.image
            console.log(payload.image , 11111111)
            try {
                const newProduct = new Product(
                    payload.title,
                    payload.categoryId,
                    '', //image
                    payload.price,
                    payload.discount,
                    payload.specialPrice,
                    payload.lastDate,
                    payload.amount
                )
                // console.log(1)
                const product = await firebase.database().ref('products').push(newProduct)

                const imageExt = imageOne.name.slice(imageOne.name.lastIndexOf('.'))
                const fileData = await firebase.storage().ref(`products/${product.key}.${imageExt}`).put(imageOne)
                const image = await firebase.storage().ref().child(fileData.ref.fullPath).getDownloadURL()

                await firebase.database().ref('products').child(product.key).update({ image })


                commit('CREATE_PRODUCT' , {
                    ...newProduct,
                    id: product.key,//key из firebase
                    image
                })
                // console.log(product)
            } catch(e) {
                console.log(e);
            }
        },
        async FETCH_PRODUCTS({commit}){
            const resultProduct = []

            try{
                const productsVal = await firebase.database().ref('products').once('value')
                const products = productsVal.val()
                Object.keys(products).forEach(key => {
                    const product = products[key]//id товара
                    resultProduct.push(
                        new Product (
                            product.title,
                            product.categoryId,
                            product.image,
                            product.price,
                            product.discount,
                            product.specialPrice,
                            product.lastDate,
                            product.amount,
                            key
                        )
                    )
                    commit('LOAD_PRODUCTS' , resultProduct)
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        CITY_SELECTED(state){
            return state.citySelected
        },
        CITIES(state){
            return state.cities
        },
        IS_LOCATION_VISIBLE(state){
            return state.isLocationVisible
        },
        LOADING_PAGE(state){
            return state.isLoadingPage
        },
        PRODUCT_PAGE(state){
            return state.isProductPageOpen
        },
        PRODUCT_INFO(state){
            return state.productInfo
        },
        PROMO_INFO_PAGE(state){
            return state.PromoInfoPage
        },
        SEARCH(state){
            return state.searchHeader
        },
        PRODUCTS_DATA(state){
            return state.productsData
        },
        CART_PRODUCTS(state){
            return state.cartProducts
        },
        IS_PAY_PAGE(state){
          return state.isPayPage
        },
        CART_TOTAL_PRICE(state , getters){
            return getters.CART_PRODUCTS.reduce((acc , item) => ( Math.round((item.price - (item.price * item.discount)))     * item.amount) + acc, 0)
        },
        USER_API(state){
            return state.userApi
        },
        IS_USER_LOGGED_IN(state){
            return state.userApi.id //Если userApi не равен null то пользователь зарегистрован
        },
        ADMIN(state){
            if(state.userApi.id === state.adminId){
                return state.isAdmin = true
            }
        }
    }
})