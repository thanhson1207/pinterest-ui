import Home from '../pages/Home';
import Info from '../pages/Info';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/info/:id', component: Info },
    { path: '/search?q=:value', component: Search },
];
const privateRputes = [];

export { publicRoutes, privateRputes };
