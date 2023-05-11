import Home from '../pages/Home';
import Info from '../pages/Info';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/@:id', component: Info },
];
const privateRputes = [];

export { publicRoutes, privateRputes };
