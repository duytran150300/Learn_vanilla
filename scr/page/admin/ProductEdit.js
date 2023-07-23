import { router, useEffect } from "../../utilities";
// import { products } from "../../data";
import { v4 as uuidv4 } from 'uuid';


const AdminProductEditPage = ({id}) => {
  
  const products = JSON.parse(localStorage.getItem('products')) || [];
    const currentProduct = products.find(product => product.id===id);
  useEffect(()=>{
    const form = document.querySelector("#form-add");
    const productName = document.querySelector("#product-name");
    const productPrice = document.querySelector("#product-price");
    const addBtn = document.querySelector(".add-btn");
    // form.addEventListener('submit',function(e){
    //   console.log("duy");
    //   e.preventDefault();
    //   const newProduct = {
    //     id: products.length +1,
    //     name: productName.value,
    //     price: productPrice.value
    //   };
    //   console.log(newProduct);
    // })
    addBtn.onclick = (e)=>{
      e.preventDefault();
      const newProduct = {
        id: id,
        name: productName.value,
        price: productPrice.value
      }
      console.log(newProduct);
      // update phần tử vào trong mảng products
      const newProducts = products.map(product => {
        return product.id === newProduct.id ? newProduct : product;
      })
      console.log(newProducts);
      // luu lai storage
      localStorage.setItem('products', JSON.stringify(newProducts));

      //reirect sang trang admin/products
      router.navigate("/admin/products")
    }
  });
  if (!currentProduct) return null;
    
  return (
    `<div class="container>
      <h1>Cập nhật sản phẩm</h1>
      <form action="" id="form-add">
        <div class="form-group mb-3">
          <label for="">Cập nhật tên sản phẩm</label>
          <input type="text" id="product-name" class="form-control" value = "${currentProduct.name}">
        </div>

        <div class="form-group mb-3">
          <label for="">Cập nhật Giá sản phẩm</label>
          <input type="text" id="product-price" class="form-control" value = "${currentProduct.price}">
        </div>

        <div class="form-group">
          <button class="btn btn-primary add-btn" type="submit">Cập nhật sản phẩm</button>
        </div>
      </form>
    </div>`
    );
};

export default AdminProductEditPage;
