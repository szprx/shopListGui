import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '',
        name: 'App',
        component: ()=>import('../App.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory('/shopListGui/'),
    routes,
});

export default router;