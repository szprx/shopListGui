<template>
    <div class="site">
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <section class="hero">
            <div class="hero-text container">
                <h1 class="list-h">Lista zakupów</h1>
                <ul>
                    <li v-for="(product, index) in products" :key="index">
                        <label class="form-control">
                            <input class="checkb" type="checkbox" v-model="product.bought" :id="product.id">
                            <input class="inProd" v-model="product.name" placeholder="Dodaj produkt"/>
                            <i class="fa fa-times remove-icon" @click="removeProduct(index)"></i>
                        </label>
                    </li>
                </ul>
                <button @click="addProduct" class="add-btn"><i class="fa fa-plus"></i> Dodaj nowy produkt</button>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Home",
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
    methods: {
        addProduct() {
            const newProduct = {
                id: Date.now(),
                name: "",
                bought: false
            };
            this.products.push(newProduct);
        },
        removeProduct(index) {
            this.products.splice(index, 1);
        }
    },
    beforeRouteLeave(to, from, next) {
        const dataToSend = this.products.map((product) => {
            return {
                name: product.name,
                bought: product.bought,
            };
        });

        axios.post('https://shoplist-tm2s.onrender.com/products/all', dataToSend)
            .then(response => {
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
.add-btn {
    background-color: #ffffff;
    color: #000000;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 4px;
    cursor: pointer;
}

.add-btn:hover {
    background-color: #555555;
}

.add-btn i {
    margin-right: 5px;
}

.remove-icon {
    color: red;
    cursor: pointer;
    margin-left: 10px;
}

li {
    list-style: none;
    margin: 10px;
    font-size: 20px;
}

.inProd {
    font-size: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    padding-left: 50px;
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
    display: grid;
    grid-template-columns: 0 95% 0;
    /*background-color: #2196F3;*/
    padding: 10px;


    input {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        justify-content: center;
        display: flex;
    }

    i {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
        justify-content: center;
        display: flex;
    }


}

/*.form-control + .form-control {*/
/*    margin-top: 1em;*/
/*}*/

input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
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
