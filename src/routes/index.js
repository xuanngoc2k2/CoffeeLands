import BuyNow from "~/pages/BuyNow"
import Home from "~/pages/Home"
import Login from "~/pages/Login"
import Menu from "~/pages/Menu"
import Product from "~/pages/Product"


const publicRoutes = [
    {
        path: '/', component: Home
    },
    { path: '/menu', component: Menu },
    {
        path: '/buynow', component: BuyNow
    }
    ,
    {
        path: '/career', component: BuyNow, layout: null
    },
    {
        path: '/product', component: Product
    }
    , {
        path: '/login', component: Login, layout: null
    }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }