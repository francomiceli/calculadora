const app = Vue.createApp({
  data() {
    return {
      teclas: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '*', '/', '(', ')', '.', '^', 'sqrt', 'sin', 'cos', 'tan', 'deg'],
      igual: '=',
      borrar: 'DEL',
      borrarTodo: 'AC',
      display: ''
    }
  },
  methods: {
    agregar(a) {
      this.display += a;
    },
    evaluar(x) {
      this.display = math.evaluate(x);
    }
  }
});