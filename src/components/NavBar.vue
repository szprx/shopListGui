<template>
    <div v-if="isPL">
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <nav id="myTopnav">
            <ul>
                <li>
                    <router-link to="/">Strona Główna</router-link>
                </li>
                <li>
                    <router-link to="/shoplist">Lista zakupów</router-link>
                </li>
                <li>
                    <router-link to="/bought">Kupione</router-link>
                </li>
                <li>
                    <router-link to="/tobuy">Do kupienia</router-link>
                </li>
                <li @click="active = !active"><a class="dropdown-toggle">
                    <i class="fa fa-language"></i>
                </a></li>
                <ul v-if="active">
                    <li><a @click="isPL = true" class="language">Polski</a></li>
                    <li><a @click="isPL = false" class="language">Angielski</a></li>
                </ul>
            </ul>
        </nav>
    </div>
    <div v-else>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <nav id="myTopnav">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/shoplist">ShopList</router-link>
                </li>
                <li>
                    <router-link to="/bought">Bought</router-link>
                </li>
                <li>
                    <router-link to="/tobuy">ToBuy</router-link>
                </li>
                <li @click="active = !active"><a class="dropdown-toggle">
                    <i class="fa fa-language"></i>
                </a></li>
                <ul v-if="active">
                    <li><a @click="isPL = true" class="language">Polish</a></li>
                    <li><a @click="isPL = false" class="language">English</a></li>
                </ul>
            </ul>
        </nav>
    </div>
</template>


<script>
export default {
    name: "NavBar",
    data() {
        return {
            active: false,
            isPL: true
        };
    },
    methods: {}
};
</script>

<style scoped>


nav {
    position: sticky;
    background-color: #747bff;
    overflow: hidden;
}

nav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 23px;
    text-decoration: none;
    font-size: 25px;
}

nav a:hover {
    background-color: #ddd;
    color: black;
}

.dropdown-toggle {
    cursor: pointer;
}


</style>
