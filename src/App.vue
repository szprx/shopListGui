<script setup>
import Navigator from "./components/Navigator.vue";
</script>

<template>
    <div class="app">
        <Navigator/>
        <router-view/>
    </div>
</template>

<style lang="scss">* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
}

.site {
    min-height: 100vh;
}

.app {
    min-height: 100vh;
    position: relative;
    background-color: #f1f1f1;
}

.container {
    padding: 0 20px;
    max-width: 1140px;
    margin: 0 auto;
    min-height: 100vh;
}

.hero {
    background-image: url("./assets/hero-bg.png");
    background-attachment: fixed;
    position: relative;
}

img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.hero-text {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding-top: 80px;
}

@media (min-width: 980px) {
    .hero-text {
        padding-top: 100px;
    }
}

h4 {
    text-transform: uppercase;
    font-size: 22px;
    padding-bottom: 4px;
}

h2 {
    font-size: 50px;
}

@media (min-width: 550px) {
    h2 {
        font-size: 80px;
    }
}

hr:nth-child(2) {
    max-width: 365px;
    margin-bottom: 16px;
}

hr:nth-child(4) {
    height: 6px;
    background-color: #fff;
    border: none;
    max-width: 85px;
    margin-top: 16px;
}

@media (max-width: 768px) {
    .container {
        padding: 0 10px;
        max-width: 100%;
    }

    .hero-text {
        padding-top: 40px;
    }

    h4 {
        font-size: 18px;
    }

    h2 {
        font-size: 40px;
    }
}
</style>
