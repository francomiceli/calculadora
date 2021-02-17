<template>
  <div class="container">
    <form>
      <input type="text" id="email" placeholder="Email" v-model="email" />
      <input
        type="text"
        id="contraseña"
        placeholder="Contraseña"
        v-model="contraseña"
      />
      <button class="button" @click="registrarse">Registrarse</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  name: "registrarse",
  data() {
    return {
      email: "",
      contraseña: "",
    };
  },
  methods: {
    registrarse(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.contraseña)
        .then(
          (usuario) => {
            alert(`Cuenta creada para ${usuario.email}`);
            this.$router.go({ path: this.$router.path });
          },
          (err) => {
            alert(err.message);
          }
        );
      e.preventDefault;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  justify-content: space-evenly;
  margin: 50px 485px;
  padding-top: 45px;
  zoom: 85%;
  width: 600px;
  height: 385px;
  box-shadow: 0 8px 32px 0 rgb(0 0 0);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.075);
  backdrop-filter: blur(5px);
  animation: carga 150ms ease-out forwards;
}

input,
button {
  display: inline-block;
  animation: carga 300ms ease-in;
  margin: 30px 80px;
  background-color: #201e4044;
  font-size: 25px;
  width: 410px;
  height: auto;
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
  margin-top: 40px;
  width: 434px;
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

@keyframes carga {
  0% {
    transform: scale(0.2);
    opacity: 0;
  }
  80% {
    transform: scale(1.05);
  }
  90% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
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