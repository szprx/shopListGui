<template>

    <div>
        <section class="hero">
            <div class="hero-text container">
                <h1 class="list-h">Lista zakupów</h1>
                <ul>
                    <li v-for="product of products" :key="product.id">
                        <input class="inProd" v-model="product.name " placeholder="Dodaj produkt"/>
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
    },beforeRouteLeave(to, from, next) {
        // Przygotowanie danych do wysłania na serwer
        const dataToSend = {
            // Twoje dane do wysłania
        };

        // Wywołanie żądania Axios, aby wysłać dane na serwer
        axios.post('https://shoplist-tm2s.onrender.com/products/all', dataToSend)
            .then(response => {
                // Obsługa odpowiedzi serwera
                console.log(response.data);
                next(); // Kontynuacja przechodzenia do nowej strony
            })
            .catch(error => {
                // Obsługa błędów żądania
                console.error(error);
                next(); // Kontynuacja przechodzenia do nowej strony, nawet w przypadku błędu
            });
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