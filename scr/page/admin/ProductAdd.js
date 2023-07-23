import { router, useEffect } from "../../utilities";
// import { products } from "../../data";
import { v4 as uuidv4 } from 'uuid';


const AdminProductAddPage = () => {
  
  const products = JSON.parse(localStorage.getItem('products')) || [];

  useEffect(()=>{
    const form = document.querySelector("#form-add");
    const productName = document.querySelector("#product-name");
    const productPrice = document.querySelector("#product-price");
    const addBtn = document.querySelector(".add-btn");
    form.addEventListener('submit',function(e){
      console.log("duy");
      e.preventDefault();
      const newProduct = {
        id: products.length +1,
        name: productName.value,
        price: productPrice.value
      };
      console.log(newProduct);
    })
    // addBtn.onclick = (e)=>{
    //   e.preventDefault();
    //   const newProduct = {
    //     id: uuidv4(),
    //     name: productName.value,
    //     price: productPrice.value
    //   }
    //   console.log(newProduct);
    //   // thêm vào trong mảng products
    //   products.push(newProduct);

    //   // luu lai storage
    //   localStorage.setItem('products', JSON.stringify(products));

    //   //reirect sang trang admin/products
    //   router.navigate("/admin/products")
    // }
    

  });
  return (
    `<div class="container>
      <h1>Thêm sản phẩm</h1>
      <form action="" id="form-add">
        <div class="form-group mb-3">
          <label for="">Thêm sản phẩm</label>
          <input type="text" id="product-name" class="form-control">
        </div>

        <div class="form-group mb-3">
          <label for="">Giá sản phẩm</label>
          <input type="text" id="product-price" class="form-control">
        </div>

        <div class="form-group">
          <button class="btn btn-primary add-btn" type="submit">Thêm sản phẩm</button>
        </div>
      </form>
    </div>`
    );
};

export default AdminProductAddPage;
