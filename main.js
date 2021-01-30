const app = Vue.createApp({
  data() {
    return {
      teclas: ['sqrt', '^', 'sin', 'cos', 'tan', 'deg', '[', ']', '(', ')', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '/'],
      igual: '=',
      borrar: 'DEL',
      borrarTodo: 'AC',
      display: '',
      displayStart: ''
    }
  },
  methods: {
    evaluar(x) {
      this.display = math.evaluate(x);
    },
    agregar(a) {
      this.display += a;
      this.displayStart += a;
    }
  }
});