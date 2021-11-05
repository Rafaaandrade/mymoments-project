import Auth from "../../components/Auth";
import Home from "../../pages/Home";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/auth',
        exact: true,
        component: Auth
    }
];

export default routes;