import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Details from '../views/Details.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import AdminProfile from '../views/AdminProfile.vue'
import Publication from '../views/AdminPublication.vue'
import PageNotFound from '../views/PageNotFound.vue'

export default [
	{
        path: '/',
        name: 'Home',
        component: Home,
    },
	{
        path: '/home',
        redirect: '/',
    },
	{
        path: '/noticias',
        name: 'News',
        component: News,
    },
    {
        path: '/detalles',
        name: 'Details',
        component: Details,
    },
    {
        path: '/registro',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/iniciar-sesion',
        name: 'LogIn',
        component: LogIn,
    },
    {
        path: '/admin-perfil',
        name: 'AdminProfile',
        component: AdminProfile,
    },
    {
        path: '/publicacion',
        name: 'Publication',
        component: Publication,
    },
    {
        path: '/:pathMatch(.*)*',
        component: 'PageNotFound',
        component: PageNotFound,
    },
];
