<template>
  <calculadora />
</template>

<script>
import Calculadora from "./components/Calculadora.vue";

export default {
  components: {
    calculadora: Calculadora,
  },
};
</script>

<style>
@font-face {
  font-family: "digital7";
  src: url("./fonts/digital-7italic.ttf");
}

* {
  transform: translateZ(0);
}

html {
  background: #100a1c;
  background-image: radial-gradient(
      60% 80% ellipse at center top,
      #242247 0%,
      rgba(0, 0, 0, 0) 100%
    ),
    radial-gradient(60% 60% ellipse at center bottom, #193524 0%, #100a1c 100%);
  background-size: 300%;
  background-attachment: fixed;
  color: #6cacc5;
  animation: background-start 20s infinite alternate;
}

body {
  display: grid;
  justify-content: space-evenly;
  font-family: digital7;
}

@keyframes background-start {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
</style>
