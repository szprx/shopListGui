<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
            <li @click="toggle">        <a class="dropdown-toggle">
                <i class="fa fa-caret-down"></i>
            </a></li>
            <ul v-if="active">
                <li><a href="#">Element 1</a></li>
                <li><a href="#">Element 2</a></li>
            </ul>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            active: false
        };
    },
    methods: {
        toggle () {
            this.active = !this.active
        },
    }
};
</script>

<style scoped>
/* Add a black background color to the top navigation */
nav {
    position: sticky;
    background-color: #747bff;
    overflow: hidden;
}

/* Style the links inside the navigation bar */
nav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 23px;
    text-decoration: none;
    font-size: 25px;
}

/* Change the color of links on hover */
nav a:hover {
    background-color: #ddd;
    color: black;
}

/* Add an active class to highlight the current page */
nav a.active {
    background-color: #04AA6D;
    color: white;
}

/* Hide the link that should open and close the topnav on small screens */
nav .icon {
    display: none;
}

/* When the screen is less than 600 pixels wide, hide all links, except for the first one ("Home"). Show the link that contains should open and close the topnav (.icon) */
@media screen and (max-width: 600px) {
    nav a:not(:first-child) {
        display: none;
    }

    nav a.icon {
        float: right;
        display: block;
    }
}

/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
@media screen and (max-width: 600px) {
    nav.responsive {
        position: relative;
    }

    nav.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
    }

    nav.responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}

.dropdown-toggle {
    cursor: pointer;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-menu li {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
}

.dropdown-menu li:hover {
    background-color: #f1f1f1;
}

.dropdown-menu li a {
    color: #333;
    text-decoration: none;
}

.show {
    display: block !important;
}
</style>
