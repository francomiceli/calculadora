const app = Vue.createApp({
  data() {
    return {
      teclas: ['sqrt', '^', 'sin', 'cos', 'tan', 'deg', '[', ']', '(', ')', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '/'],
      igual: '=',
      borrarUno: 'DEL',
      borrarTodo: 'AC',
      display: '',
      displayStart: ''
    }
  },
  methods: {
    evaluar(x) {
      this.display = math.evaluate(x);
      this.$refs.resultado.classList.add('resultado');
    },
    agregar(a) {
      this.display += a;
      this.displayStart += a;
      this.$refs.resultado.classList.remove('resultado');
    },
    limpiarUno() {
      this.display = this.display.slice(0, -1)
    },
    limpiarTodo() {
      this.display = '';
    }
  }
});

/* pantalla de la calculadora según el estado:

div1(start):hay dos estados de la calculadora: displayStart y display (agregar displayResult)
se muestra displayStart al principio para que no se repita la animación de aparición
div2: uso con 'borrarTodo'
div3: muestra una string con la que luego se utiliza 'math(evaluate)' (pensar como almacenar el resultado
y como generar una animación que muestre al número expandiéndose hacia arriba cuando se obtiene un resultado)

// explicar el siguiente loop: (el de las teclas)

*/

