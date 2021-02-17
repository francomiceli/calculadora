<template>
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
      @click.native="evaluar(display), agregarAlHistorial(display)"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
