<template>
  <div>
    <ul>
      <li>
        {{ historial }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["historial"],
};
</script>

<style scoped>
div {
  box-shadow: 40px 7px 30px 1px rgb(0 0 0);
  border-radius: 5px;
  backdrop-filter: blur(5px);
  animation: carga 150ms ease-out forwards;
  margin-bottom: 40px;
}
ul {
  margin-left: 300px;
}
li {
  font-family: Arial;
  font-size: 18px;
  letter-spacing: 1pt;
  display: inline-block;
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
