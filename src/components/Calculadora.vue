<template>
  <div id="app">
    <div class="container calculadora">
      <display :display="display" />

      <div class="button-container">
        <borraruno :borraruno="borraruno" @click.native="limpiarUno" />

        <borrartodo :borrartodo="borrartodo" @click.native="limpiarTodo" />

        <teclas
          :tecla="tecla"
          v-for="tecla in teclas"
          :key="tecla.id"
          @click.native="agregar(`${tecla}`)"
        />

        <igual
          :igual="igual"
          @click.native="evaluarYAgregarAHistorial(display)"
        />
      </div>
    </div>
    <div class="container">
      <historial
        :historial="historial"
        v-for="historial in historials"
        :key="historial.id"
      />

      <borrarhistorial
        :borrarhistorial="borrarhistorial"
        @click.native="borrarHistorial"
      />
    </div>
  </div>
</template>

<script>
import Display from "./Display.vue";
import Teclas from "./Teclas.vue";
import Igual from "./Igual.vue";
import Borraruno from "./Borraruno.vue";
import Borrartodo from "./Borrartodo.vue";
import { evaluate } from "mathjs";
import Historial from "./Historial.vue";
import Borrarhistorial from "./Borrarhistorial.vue";
import firebase from "firebase";
import "firebase/auth";
import { db } from "../firebase";

export default {
  data() {
    return {
      teclas: [
        "sqrt",
        "^",
        "sin",
        "cos",
        "tan",
        "deg",
        "[",
        "]",
        "(",
        ")",
        7,
        8,
        9,
        "*",
        4,
        5,
        6,
        "-",
        1,
        2,
        3,
        "+",
        0,
        ".",
        "/",
      ],
      igual: "=",
      borrartodo: "AC",
      borraruno: "DEL",
      borrarhistorial: "Limpiar Historial",
      display: "",
      historials: [],
    };
  },
  components: {
    display: Display,
    teclas: Teclas,
    igual: Igual,
    borraruno: Borraruno,
    borrartodo: Borrartodo,
    historial: Historial,
    borrarhistorial: Borrarhistorial,
  },
  methods: {
    async evaluarYAgregarAHistorial(x) {
      // evaluar la operacion

      if (SyntaxError) {
        this.display = "Err";
      }
      this.display = evaluate(x);

      // guardar la operacion en db

      const operacionCompleta = x + " = " + evaluate(x);
      await db
        .ref("usuarios/" + firebase.auth().currentUser.uid + "/historial")
        .push(operacionCompleta);

      // agregar la operacion desde db al historial

      await db
        .ref("usuarios/" + firebase.auth().currentUser.uid)
        .once("value", (snapshot) => {
          const data = snapshot.child("historial").val();
          this.historials.push(
            data[Object.keys(data)[Object.keys(data).length - 1]]
          );
        });
    },
    agregar(a) {
      this.display += a;
    },
    limpiarUno() {
      if (SyntaxError) {
        return;
      }
      this.display = this.display.slice(0, -1);
    },
    limpiarTodo() {
      this.display = "";
    },
    async borrarHistorial() {
      await db
        .ref("usuarios/" + firebase.auth().currentUser.uid + "/historial")
        .remove();
      this.historials = [];
    },
  },
  firebase: {
    historial: db.ref("historial"),
  },
  async beforeMount() {
    await db
      .ref("usuarios/" + firebase.auth().currentUser.uid)
      .once("value", (snapshot) => {
        const data = snapshot.child("historial").val();
        Object.values(data).forEach((x) => this.historials.push(x));
      });
  },
};
</script>

<style scoped>
.container {
  display: inline-block;
  justify-content: space-evenly;
}

.calculadora {
  padding-top: 45px;
  margin-top: 30px;
  margin-left: 300px;
  zoom: 70%;
  width: 500px;
  box-shadow: 0 8px 32px 0 rgb(0 0 0);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.075);
  backdrop-filter: blur(5px);
  animation: carga 150ms ease-out forwards;
}

.button-container {
  margin: 15px 40.55px;
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
</style>