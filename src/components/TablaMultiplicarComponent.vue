<template>
  <div>
    <h1>Tabla Multiplicar</h1>
    <label for="">Introduzca un numero:</label>
    <input type="number" v-model="numero1" />
    <button @click="generarTabla()">Generar Tabla</button>
    <div class="tabla">
      <table>
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody v-html="tabla1"></tbody>
      </table>
    </div>
    <hr />
    <label for="">Introduzca un numero:</label>
    <input type="number" v-model="numero2" />
    <div class="tabla">
      <table>
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10" :key="n">
            <td>{{ this.numero2 }} * {{ n }}</td>
            <td>{{ this.numero2 * n }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr />
    <label for="">Introduzca un numero:</label>
    <input type="number" v-model="numero3" />
    <div class="tabla">
      <table>
        <thead>
          <tr>
            <th>Operacion</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody v-html="$filters.multiplicarNumero(numero3)"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero1: 0,
      numero2: 0,
      numero3: 0,
      tabla1: "",
    };
  },
  methods: {
    generarTabla() {
      this.tabla1 = "";
      for (let i = 1; i <= 10; i++) {
        this.tabla1 += "<tr><td>" + this.numero1 + " * " + i + "</td>";
        this.tabla1 += "<td>" + this.numero1 * i + "</td></tr>";
      }
    },
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.tabla {
  
  text-align: center;
}
</style>