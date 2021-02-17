<template>
  <div>
    <header>
      <ul>
        <li id="titulo">Calculadora</li>
        <li v-if="estaLogueado">
          <span>{{ usuarioActual }}</span>
        </li>
        <li v-if="!estaLogueado">
          <router-link to="/entrar">Entrar</router-link>
        </li>
        <li v-if="!estaLogueado">
          <router-link to="/registrarse">Registrarse</router-link>
        </li>
        <li v-if="estaLogueado">
          <button class="button" @click="salir">Salir</button>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  data() {
    return {
      estaLogueado: false,
      usuarioActual: false,
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.estaLogueado = true;
      this.usuarioActual = firebase.auth().currentUser.email;
    }
  },
  methods: {
    salir() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
  },
};
</script>

<style scoped>
header {
  font-size: 150%;
  background-color: transparent;
  margin-top: -50px;
  margin-left: -15px;
  margin-right: -15px;
  padding-top: 45px;
  width: 101.6%;
  box-shadow: 0 0 32px 0 rgb(0 0 0);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.075);
  backdrop-filter: blur(5px);
}
header * {
  display: inline-block;
}
header ul {
  justify-content: center;
}
header li {
  margin: 0px 50px;
  text-decoration: none;
}
#titulo {
  font-size: 110%;
}

span {
  font-family: Arial;
  font-size: 80%;
  align-items: flex-end;
}

button {
  display: inline-block;
  margin-top: -30px;
  margin-bottom: -10px;
  animation: carga 300ms ease-in;
  background-color: #201e4044;
  font-size: 20px;
  width: 310px;
  color: white;
  padding: 9px;
  border-radius: 5px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25),
    inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  cursor: pointer;
}

button {
  width: 150px;
  align-content: flex-end;
}

.button::before {
  content: "";
  position: absolute;
  border-radius: 5px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1.2px;
  opacity: 0.8;
  background-color: #0abe52;
  transition: transform 150ms ease-in;
  transform: scaleX(0);
}

.button:hover::before,
.button:focus::before {
  transform: scaleX(1);
}

.button:active {
  background-color: #2d5e40;
  animation: carga none !important;
  animation: button-active 50ms forwards;
}

@keyframes button-active {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>
