<template>

    <div class="site">
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <section class="hero">
            <div class="hero-text container">
                <h1 class="list-h">Lista zakupów</h1>
                <ul>
                    <li v-for="(product,index) in products" :key="index">
                        <label class="form-control">
                            <input type="checkbox" v-model="product.bought" v-bind:id="product.id">
                            <input class="inProd" v-model="product.name " placeholder="Dodaj produkt"/>
                        </label>
                    </li>
                </ul>
            </div>

        </section>
    </div>

</template>

<script>
import axios from 'axios';
import bought from "./Bought.vue";

export default {
    name: "Home",
    computed: {
        bought() {
            return bought
        }
    },
    data() {
        return {
            products: [],
        };
    },
    async created() {
        try {
            const res = await axios.get(`https://shoplist-tm2s.onrender.com/products/all`);
            this.products = res.data;
        } catch (error) {
            console.log(error);
        }
    },
    beforeRouteLeave(to, from, next) {
        const dataToSend = this.products.map((product) => {
            return {
                name: product.name,
                bought: product.bought,
            };
        });
        console.log(dataToSend)


        axios.post('https://shoplist-tm2s.onrender.com/products/all', dataToSend).then(response => {
            console.log(response.data);
        })
            .catch(error => {
                console.error(error);
            });
        next();
    },
}
</script>

<style scoped>

.shopList {
    text-align: left;
    color: #ffffff;
    margin-top: 60px;
}

li {
    list-style: none;
    margin: 10px;
    font-size: 20px;
}

.list-h {
    font-size: 50px;
    margin-bottom: 10px;
}

.inProd {
    font-size: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    color: #ffffff;
}

:root {
    --form-control-color: rebeccapurple;
    --form-control-disabled: #959495;
}
*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    margin: 0;
}

form {
    display: grid;
    place-content: center;
    min-height: 100vh;
}

.form-control {
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
}

.form-control + .form-control {
    margin-top: 1em;
}

.form-control--disabled {
    color: var(--form-control-disabled);
    cursor: not-allowed;
}

input[type="checkbox"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* Remove most all native input styles */
    appearance: none;
    /* For iOS < 15 */
    background-color: var(--form-background);
    /* Not removed via appearance */
    margin: 0;

    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);

    display: grid;
    place-content: center;
}

input[type="checkbox"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    /* Windows High Contrast Mode */
    background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
    transform: scale(1);
}

input[type="checkbox"]:focus {
    outline: max(2px, 0.15em) solid currentColor;
    outline-offset: max(2px, 0.15em);
}

input[type="checkbox"]:disabled {
    --form-control-color: var(--form-control-disabled);

    color: var(--form-control-disabled);
    cursor: not-allowed;
}

</style>