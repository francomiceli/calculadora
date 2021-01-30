app.component('display', {
  template:
    /*html*/
    `<div> Resultado: {{ resultado }} </div>`,
  data() {
    return {
      resultado: ''
    }
  },
  methods: {
    agregarTecla(a) {
      this.resultado += a;
    },
    evaluar(x) {
      this.resultado = math.evaluate(x)
    }
  }
})