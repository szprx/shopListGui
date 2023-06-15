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
    background-color: #535bf2;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    display: inline-block;
    margin-right: 10px;
    padding-left: 60px;
    font-size: 40px;
}

a {
    text-decoration: none;
    color: white;
    padding: 5px;
}

a:hover {
    color: #000;
    /*font-weight: bold;*/
}
</style>