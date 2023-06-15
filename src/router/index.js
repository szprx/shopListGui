import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '',
        name: 'Home',
        component: ()=>import('../views/Home.vue'),
    },
    {
        path: '/shopList',
        name: 'ShopList',
        component: ()=>import('../views/ShopList.vue'),
    },
    {
        path: '/bought',
        name: 'Bought',
        component: ()=>import('../views/Bought.vue'),
    },
    {
        path: '/toBuy',
        name: 'ToBuy',
        component: ()=>import('../views/ToBuy.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory('/shopListGui/'),
    routes,
});

export default router;