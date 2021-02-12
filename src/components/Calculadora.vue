<template>
  <div class="container" id="app">
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

      <igual :igual="igual" @click.native="evaluar(display)" />
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
      display: "",
    };
  },
  components: {
    display: Display,
    teclas: Teclas,
    igual: Igual,
    borraruno: Borraruno,
    borrartodo: Borrartodo,
  },
  methods: {
    evaluar(x) {
      if (SyntaxError) {
        this.display = "Err";
      }
      this.display = evaluate(x);
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
  },
};
</script>

<style scoped>
.container {
  padding-top: 45px;
  zoom: 85%;
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