const app = Vue.createApp({
  data() {
    return {
      numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '(', ')', '=', ',', 'borrar', 'ultimo'],
      resultado: ''
    }
  },
});
