<template>
  <div class="display">
    <div v-if="display === ''">0</div>
    <div v-else>{{ display }}</div>
  </div>
</template>

<script>
export default {
  props: ["display"],
};
</script>

<style scoped>
.display {
  margin: 0px 57px;
  width: 76.5%;
  background-color: #5afd0e;
  block-size: 53px;
  font-size: 53px;
  text-indent: 0.75em;
  direction: rtl;
  overflow: hidden;
  text-overflow: clip;
  color: black;
  border-radius: 5px;
  box-shadow: 1px 1px 10px 5px #000 inset;
}

.display:hover {
  overflow: overlay;
}
</style>
