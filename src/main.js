import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import store from '@/store/store'
import firebase from 'firebase/app';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false

// const firebaseConfig = {
//   apiKey: "AIzaSyCM6cYGcfAesYDA4vPnSi6xA-8Wl-2u03M",
//   authDomain: "magnum-nyrum.firebaseapp.com",
//   projectId: "magnum-nyrum",
//   storageBucket: "magnum-nyrum.appspot.com",
//   messagingSenderId: "784766719022",
//   appId: "1:784766719022:web:94f498793a0c4c141abbbf"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCM6cYGcfAesYDA4vPnSi6xA-8Wl-2u03M",
  authDomain: "magnum-nyrum.firebaseapp.com",
  databaseURL: "https://magnum-nyrum-default-rtdb.firebaseio.com",
  projectId: "magnum-nyrum",
  storageBucket: "magnum-nyrum.appspot.com",
  messagingSenderId: "784766719022",
  appId: "1:784766719022:web:94f498793a0c4c141abbbf"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    firebase.auth().onAuthStateChanged(user => { //Авто localHost
      if(user){
        this.$store.dispatch('AUTO_LOGIN_USER', user)
      }
    })
    this.$store.dispatch('FETCH_PRODUCTS')
  },
  mounted(){
    AOS.init({
      duration: 1100
    })
  }
}).$mount('#app')
