<template>
    <div class="container">
        <div class="formulario">
            <header>
            </header>
            <nav></nav>
            <section>
                <h2>Guardar Vehículo</h2>
                <p type="Placa:"><input type="text" v-model="placa"></p>
                <p type="Marca:"><input type="text" v-model="marca"></p>
                <p type="Modelo:"><input type="text" v-model="modelo"></p>
                <p type="Color:"><input type="text" v-model="color"></p>
                <p type="Precio:"><input type="text" v-model="precio"></p>
                <div class="boton">
                    <button @click="guardar">Guardar</button>
                </div>
            </section>
            <footer></footer>
        </div>
    </div>
</template>

<script>
import guardarFachada from '../clients/clienteVehiculo'

export default {
    data() {
        return {
            placa: '',
            marca: '',
            modelo: '',
            color: '',
            precio: '',
        }
    },

    methods: {
        async guardar() {
            const vehiculoTOBody = {
                placa: this.placa,
                marca: this.marca,
                modelo: this.modelo,
                color: this.color,
                precio: this.precio
            };
            console.log(vehiculoTOBody)
            await guardarFachada(vehiculoTOBody);
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
}

.formulario {
    width: 350px;
    height: 400px;
    background: rgb(189, 189, 189);
    border-radius: 30px;
    padding: 25px 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

p:before {
    content: attr(type);
    display: block;
    margin: 3px 2px;
    font-size: 15px;
    color: #211C6A;
}

input {
    width: 100%;
    border: none;
    border-bottom: 2px solid #211C6A;
    background: none;
}

input:focus {
    outline: none;
    border-bottom: 2px solid #59B4C3;
}

h2 {
    margin: 10px 2px;
    width: 200px;
    color: #211C6A;
    border-bottom: 2px solid #6f7239;
    text-align: center;
}

.boton {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
}

button {
    background-color: #4CAF50;
    margin-top: 10px;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>