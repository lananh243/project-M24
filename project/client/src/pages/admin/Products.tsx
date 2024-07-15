import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import {
  deleteProduct,
  getAllProduct,
  searchNameProduct,
  sortNameProduct,
} from "../../store/reducers/productReducer";
import { Modal } from "react-bootstrap";
import { Product } from "../../interfaces";

export default function Products() {
  const navigate = useNavigate();
  const data: any = useSelector((state) => state);
  const [show, setShow] = useState(false);
  const [quickView, setQuickView] = useState<Product | null>(null);
  const handleClose = () => setShow(false);
  const handleShow = (product: any) => {
    setQuickView(product);
    setShow(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const handleDeleteProduct = (id: number) => {
    swal({
      title: "Bạn có muốn xóa sản phẩm này không?",
      icon: "warning",
      // buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProduct(id));
        swal("Sản phẩm của bạn đã bị xóa!", {
          icon: "success",
        });
      } else {
        swal("Sản phẩm của bạn không bị xóa!");
      }
    });
  };
  // Tìm kiếm sản phẩm theo tên
  const [searchName, setSearchName] = useState("");
  const handleSearch = () => {
    dispatch(searchNameProduct(searchName));
  };
  // Sắp xếp theo tên
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    dispatch(sortNameProduct(order));
  };
  return (
    <>
      <div className="flex">
        <div className="w-2/6 h-[700px] bg-red-400 pt-10">
          <img
            className="w-16 h-16 rounded-full border-solid border-3 border-white m-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT90UHcfT3FyPjmGYlOEG0hIgF2gFVHxuSi6wcxkNG-OOWb7DI98m3Jr4lvxY3QIWh_dGQ&usqp=CAU"
            alt=""
          />
          <div className="text-center">
            <b>Lan Anh</b>
            <p>Chào mừng bạn trở lại</p>
          </div>
          <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center bg-slate-400">
            <i className="fa-solid fa-gauge text-white "></i>
            <b className="mx-3 text-white">
              <Link to="/admin/control">Bảng điều khiển</Link>
            </b>
          </div>
          <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center bg-slate-400">
            <i className="fa-solid fa-address-card text-white"></i>
            <b className="mx-3 text-white whitespace-nowrap">
              <Link to="/admin/category">Quản lí danh mục</Link>
            </b>
          </div>
          <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center">
            <i className="fa-solid fa-tag text-white"></i>
            <b className="mx-3 text-white">
              <Link to="/admin/products">Quản lí sản phẩm</Link>
            </b>
          </div>
          <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center">
            <i className="fa-solid fa-calendar-check text-white"></i>
            <b className="mx-3 text-white">
              <Link to="/admin/orders"> Quản lí đơn hàng</Link>
            </b>
          </div>
          <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center">
            <i className="fa-solid fa-users-gear text-white"></i>
            <b className="mx-3 text-white">
              <Link to="/admin/customer">Quản lí khách hàng</Link>{" "}
            </b>
          </div>
        </div>

        <div
          className="w-full bg-gray-200"
          style={{ height: "100vh", overflowY: "scroll", position: "relative" }}
        >
          <div
            className="bg-white shadow-sm h-28 flex items-center w-full justify-between px-4"
            style={{ position: "sticky", top: 0, left: 0, zIndex: 1 }}
          >
            <h2 className="text-lg mb-2">Products</h2>
            <div className="flex gap-x-5">
              <div className="relative">
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                <input
                  placeholder="Tìm kiếm"
                  type="text"
                  className="pl-8 border-solid border-2 border-gray-400 rounded h-8 text-sm w-52"
                  value={searchName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchName(e.target.value)
                  }
                />
              </div>
              <span
                className="material-symbols-outlined text-3xl cursor-pointer"
                onClick={handleSearch}
              >
                restart_alt
              </span>
            </div>
          </div>

          <div className=" bg-white w-full my-10 p-4">
            <div className=" flex justify-between items-center mb-4">
              <Link to="/admin/products/addProduct">
                <button className="border-solid border-2 border-gray-400 py-1 px-2 text-sm">
                  <i className="fa-solid fa-plus"></i>
                  Add Product
                </button>
              </Link>

              <select
                name=""
                id=""
                className="border-solid border-2 border-gray-400 py-1 px-2 text-sm"
                onChange={handleSort}
              >
                <option value="asc">Sort by: Name (Ascending)</option>
                <option value="desc">Sort by: Name (Descending)</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-center">
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Status</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Tồn kho</th>
                    <th className="p-2">Image</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.productReducer.products.map(
                    (product: any, index: number) => (
                      <tr
                        className="border-y border-gray-200 p-3 text-center"
                        key={product.id}
                      >
                        <td className=" p-3">{index + 1}</td>
                        <td className=" p-3">{product.name}</td>
                        <td className=" p-3">{product.status}</td>
                        <td className=" p-3">{product.price}</td>
                        <td className=" p-3">{product.stock_quantity}</td>
                        <td className="p-3 ">
                          <img
                            src={product.image}
                            alt=""
                            className="w-48 h-48"
                          />
                        </td>
                        <td className=" p-3">
                          <div className="flex justify-evenly">
                            <button
                              className="text-sm p-1 border border-slate-300 w-14 bg-blue-400 text-white rounded-md"
                              onClick={() => handleShow(product)}
                            >
                              View
                            </button>

                            <button
                              className="text-sm p-1 border border-slate-300 w-14 bg-orange-300 rounded-md text-white"
                              onClick={() => {
                                localStorage.setItem(
                                  "product_update",
                                  JSON.stringify(product)
                                );
                                navigate("/admin/products/update");
                              }}
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-sm p-1 border border-slate-300 w-14 bg-red-400 rounded-md text-white"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <div className="flex justify-center my-5 gap-2">
              <button className="w-7 bg-gray-200 h-7 rounded-md">1</button>
              <button className="w-7 bg-gray-600 h-7 rounded-md">2</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">3</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">4</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">...</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">10</button>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xem sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {quickView && (
              <div>
                <p>
                  <b>Tên sản phẩm : </b>
                  {quickView.name}
                </p>
                <p>
                  <b>Danh mục sản phẩm : </b>
                  {quickView.category}
                </p>
                <p>
                  <b>Trạng thái : </b>
                  {quickView.status}
                </p>
                <p>
                  <b>Giá : </b>
                  {quickView.price}
                </p>
                <p>
                  <b>Số lượng tồn kho : </b>
                  {quickView.stock_quantity}
                </p>
                <p>
                  <b>Ảnh sản phẩm : </b>
                  <img src={quickView.image} alt="" />
                </p>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
