import Vue from "vue";
import VueRouter from "vue-router";
import Calculadora from "../components/Calculadora.vue";
import Entrar from "../components/Entrar.vue";
import Registrarse from "../components/Registrarse.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Calculadora",
    component: Calculadora,
    meta: { necesitaAutorizacion: true }
  },
  {
    path: "/entrar",
    name: "Entrar",
    component: Entrar,
    meta: { necesitaSerInvitado: true }
  },
  {
    path: "/registrarse",
    name: "Registrarse",
    component: Registrarse,
    meta: { necesitaSerInvitado: true }
  }
];

const router = new VueRouter({
  routes
});

router.beforeResolve((to, from, next) => {

  if (to.matched.some(trackear => trackear.meta.necesitaAutorizacion)) {

    if (!firebase.auth().currentUser) {
      next({ path: '/entrar' })

    } else {
      next();
    }

  } else if (to.matched.some(trackear => trackear.meta.necesitaSerInvitado)) {

    if (firebase.auth().currentUser) {
      next({ path: '/' })

    } else {
      next();
    }

  } else {
    next();
  }

})

export default router;