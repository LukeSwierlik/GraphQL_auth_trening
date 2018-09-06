import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

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
    }
];

export default routes;