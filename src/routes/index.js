import BuyNow from "~/pages/BuyNow"
import Home from "~/pages/Home"
import Menu from "~/pages/Menu"


const publicRoutes = [
    {
        path: '/', component: Home
    },
    { path: '/menu', component: Menu },
    {
        path: '/buynow', component: BuyNow
    }
    ,
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }