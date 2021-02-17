<template>
  <div class="button-grid">
    <button class="button">{{ igual }}</button>
  </div>
</template>

<script>
export default {
  props: ["igual"]
};
</script>

<style scoped>
.button {
  display: inline-block;
  animation: carga 600ms ease-in;
  margin: 17px;
  background-color: #5afd0e;
  font-size: 25px;
  width: 70px;
  height: 50px;
  color: black;
  padding: 9px;
  border-radius: 5px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25),
    inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  cursor: pointer;
}

.button-grid {
  display: inline-flex;
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
