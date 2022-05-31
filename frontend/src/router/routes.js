import Home from '../views/Home.vue'
import News from '../views/News.vue'
import AdminProfile from '../views/AdminProfile.vue'

export default [
	{
        path: '/',
        component: Home,
    },
	{
        path: '/news',
        component: News,
    },
    {
        path: '/AdminProfile',
        component: AdminProfile,
    },
];
