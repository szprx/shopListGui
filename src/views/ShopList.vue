<template>

    <div>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <section class="hero">
            <div class="hero-text container">
                <h1 class="list-h">Lista zakupów</h1>
                <ul>
                    <li v-for="(product,index) in products" :key="index">
                        <input class="inProd" v-model="product.name " placeholder="Dodaj produkt"/>
                        <label class="container-check">
                            <input type="checkbox" v-model="product.bought" v-bind:id="product.id">
                            <span class="checkmark"></span>
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
</style>