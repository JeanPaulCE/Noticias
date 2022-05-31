import Home from '../views/Home.vue'
import News from '../views/News.vue'
import AdminProfile from '../views/AdminProfile.vue'
import Details from '../views/Details.vue'

export default [
	{
        path: '/',
        component: Home,
    },
	{
        path: '/noticias',
        component: News,
    },
    {
        path: '/admin-perfil',
        component: AdminProfile,
    },
    {
        path: '/detalles',
        component: Details,
    },
];
