import ProductListPage from "../components/ProductList";
import { products } from "../data";
const ProductsPage = () => {
  return ` <div class="container">
        <div class= "row"> 
         ${ProductListPage({products})}
        </div>
    </div>
      
   `;
};

export default ProductsPage;
