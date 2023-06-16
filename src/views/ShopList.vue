<template>

    <div>
        <section class="hero">
            <div class="hero-text container">
                    <h1 class="list-h">Lista zakupów</h1>
                <ul>
                    <li v-for="product of products" :key="product.id">
                        {{ product.name }}
                    </li>
                </ul>
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
            products: []
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
    margin: auto;
}
.list-h{
    font-size: 50px;
    margin-bottom: 10px;
}
</style>