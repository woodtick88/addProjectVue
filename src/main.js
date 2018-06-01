import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import * as firebase from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  created() {

    firebase.initializeApp({
      apiKey: "AIzaSyC35T6_M1nT0DjwEwwW5QgJcsbnv_nWFUY",
      authDomain: "addprojectvue.firebaseapp.com",
      databaseURL: "https://addprojectvue.firebaseio.com",
      projectId: "addprojectvue",
      storageBucket: "addprojectvue.appspot.com",
      messagingSenderId: "985240235712"
    });

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            this.$store.dispatch('autoLoginUser', user)
        }
    })

  }
})
