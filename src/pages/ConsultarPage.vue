<template>

    <div>
        <button>
            consultar
        </button>

        <table>
            <tr>
                <th>Placa</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Accion</th>
                <th>Accion</th>
            </tr>
            <tr>
                <td>{{ placa }}</td>
                <td>{{ marca }}</td>
                <td>{{ modelo }}</td>
                <td>{{ ver }}</td>
                <td>{{ borrar }}</td>
            </tr>
        </table>
    </div>

    <div class="container">
        <p>Placa:</p>
        <input type="text" id="placa" name="placa">
        <p>Marca:</p>
        <input v-model="marca" type="text" id="marca" name="marca">

        <p>Modelo:</p>
        <input v-model="modelo" type="text" id="modelo" name="modelo">

        <p>Color:</p>
        <input type="text" id="color" name="color">
        <p>Precio:</p>
        <input v-model="precio" type="text" id="precio" name="precio">

        <br>
        <button @click="guardar">Guardar</button>
    </div>

</template>

<script>

import obtenerTodosFachada from '../clients/clienteVehiculo'

 export default {

    methods: {
        async consultar() {
            await obtenerTodosFachada;
        }
    }
 }
</script>

<style>
body {
    background-color: cyan;
}



table {
    background-color: cadetblue;
    margin: 10px;
    padding: 48px;
    margin: 16px;
    margin: 0 auto;
}
</style>