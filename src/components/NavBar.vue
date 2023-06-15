<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/shoplist">ShopList</router-link></li>
            <li><router-link to="/bought">Bought</router-link></li>
            <li><router-link to="/tobuy">ToBuy</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar"
}
</script>

<style scoped>
nav {
    background-color: #f2f2f2;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    display: inline-block;
    margin-right: 10px;
}

a {
    text-decoration: none;
    color: #333;
    padding: 5px;
}

a:hover {
    color: #000;
    font-weight: bold;
}
</style>