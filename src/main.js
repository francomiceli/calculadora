import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";
import "firebase/auth"

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      mode: 'history',
      el: "#app",
      render: h => h(App)
    });
  }
});