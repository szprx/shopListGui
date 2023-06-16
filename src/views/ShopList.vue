<template>

    <div>
        <section class="hero">
            <div class="hero-text container">
                <div id="shopList">
                    <h1>Shopping List</h1>
                </div>
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
#shopList {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

li {
    list-style: none;
}
</style>