import Home from '../pages/Home/Home.js'
import Login from '../pages/Login/Login.js'

export const routerConfig = [
   
    {
        path: "/home",
        exact: true,
        Component: Home
    },
    {
        path: "/login",
        exact: false,
        Component: Login
    },
    {
        path: "/",
        exact: true,
        Component: Home
    },
]