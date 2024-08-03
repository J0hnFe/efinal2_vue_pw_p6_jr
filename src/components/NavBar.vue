<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Principal</router-link>
            </li>
            <li>
                <router-link to="/guardar">Guardar</router-link>
            </li>
            <li>
                <router-link to="/consultar">Consultar</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style scoped>
nav {
    background-color: #f2f2f2;
    padding: 10px;
}

ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
}

li {
    margin: 0 10px;
}

router-link {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

router-link-active {
    color: #ff0000;
}
</style>
</li>