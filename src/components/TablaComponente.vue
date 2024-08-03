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
                <td>
                    <button @click="accion1">Accion 1</button>
                </td>
                <td>
                    <button @click="accion2">Accion 2</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        accion1() {
           
        },
        accion2() {
          
        },
    },
};
</script>

<style>


</style>