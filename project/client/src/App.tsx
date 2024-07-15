import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/user/home/Home";
import Admin from "./pages/admin/Admin";
import Products from "./pages/admin/Products";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Login from "./pages/user/login/Login";
import Register from "./pages/user/register/Register";
import Order from "./pages/admin/Order";
import DetailOrder from "./pages/admin/DetailOrder";
import Customer from "./pages/admin/Customer";
import Category from "./pages/admin/Category";
import DetailProduct from "./pages/user/detailProduct/DetailProduct";
import ListCart from "./pages/user/cart/ListCart";
import FormOrder from "./pages/user/order/FormOrder";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/admin/control" element={<Admin />}></Route>
      <Route path="/admin/products" element={<Products />}></Route>
      <Route path="/admin/products/addProduct" element={<AddProduct />}></Route>
      <Route path="/admin/products/update" element={<UpdateProduct />}></Route>
      <Route path="/admin/orders" element={<Order />}></Route>
      <Route path="/admin/orders/detail" element={<DetailOrder />}></Route>
      <Route path="/admin/customer" element={<Customer />}></Route>
      <Route path="/admin/category" element={<Category />}></Route>
      <Route path="/detailProduct/:id" element={<DetailProduct />}></Route>
      <Route path="/listCart" element={<ListCart />} />
      <Route path="/orders" element={<FormOrder />}></Route>
    </Routes>
  );
}
