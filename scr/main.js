// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.css';

const app = document.querySelector('#app');

import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import NotFound from "./page/404NotFound";
import { render, router} from "./utilities";
import ProductsPage from "./page/Products";
import ProductDetailPage from "./page/ProductDetail";
import AdminProductPage from "./page/admin/Products";
import AdminProductAddPage from "./page/admin/ProductAdd";
import AdminProductEditPage from "./page/admin/ProductEdit";

router.on ('/' ,() => render(HomePage , app));
router.on ('/about' ,() => render(AboutPage , app));
router.on ('/products' ,() => render(ProductsPage , app));
router.on ('/product/:id', ({data}) =>render(() => ProductDetailPage(data) , app));

// admin
router.on('/admin/products' ,() => render(AdminProductPage , app));
router.on('/admin/products/add',() => render(AdminProductAddPage , app));
router.notFound (() => render(NotFound , app));
router.on('/admin/products/:id/edit',({data}) => render(() => AdminProductEditPage(data) , app));
router.resolve();