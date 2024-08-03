import axios from "axios";

const obtenerPorPlaca = async (placa) => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/${placa}`).then(r => r.data);
    console.log(data);
    return data;
}

const obtenerTodos = async () => {
    const data = axios.get(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/`).then(r => r.data);
    console.log(data);
    return data;
}

const guardar = async (vehiculoTOBody) => {
    const data = axios.post(`http://localhost:8080/API/v1.0/Concesionario/vehiculos/`, vehiculoTOBody).then(r => r.data);
    console.log(data);
}

// Metodos fachada
export const obtenerPorPlacaFacahada = async (placa) => {
    return await obtenerPorPlaca(placa);
}

export const guardarFachada = async (vehiculoTOBody) => {
    return await guardar(vehiculoTOBody);
}

export const obtenerTodosFachada = async () => {
    return await obtenerTodos();
}

