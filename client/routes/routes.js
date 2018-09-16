import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Dashboard from "../components/Dashboard";
import requireAuth from '../hoc/requireAuth';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/login',
        component: LoginForm,
    },
    {
        path: '/signup',
        component: SignupForm
    },
    {
        path: '/dashboard',
        component: requireAuth(Dashboard)
    }
];

export default routes;