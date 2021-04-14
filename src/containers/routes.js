import HomePage from './Home';
import ShopProfilePage from './ShopProfile';
import AddProductPage from './AddProduct';

const routes =  [
    {
        path: "/profile",
        exact: true,
        component:  ShopProfilePage
    },
    {
        path: "/add-product",
        exact: true,
        component:  AddProductPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    
]

export default routes;