import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { storage } from "../../config/config";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../store/reducers/productReducer";
import { Product } from "../../interfaces";

export default function UpdateProduct() {
  // const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product: Product = JSON.parse(
    localStorage.getItem("product_update") || "{}"
  );
  const [formData, setFormData] = useState({ ...product });

  // const handleInputChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const changeImage = async (e: any) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const imageRef = ref(storage, `upload-image/${selectedImage.name}`);
      const snapshot = await uploadBytes(imageRef, selectedImage);
      const url = await getDownloadURL(snapshot.ref);
      setFormData((prevData: any) => ({
        ...prevData,
        image: url,
      }));
    }
  };

  const handleUpdateProduct = () => {
    dispatch(updateProduct(formData));
    navigate("/admin/products");
  };

  return (
    <div className="flex">
      <div className="w-2/6 bg-red-400 pt-10">
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
        <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center">
          <i className="fa-solid fa-address-card text-white"></i>
          <b className="mx-3 text-white whitespace-nowrap">
            <Link to="/admin/category">Quản lí danh mục</Link>{" "}
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
            <Link to="/admin/orders">Quản lí đơn hàng</Link>
          </b>
        </div>
        <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center">
          <i className="fa-solid fa-users-gear text-white"></i>
          <b className="mx-3 text-white">
            <Link to="/admin/customer">Quản lí khách hàng</Link>
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
          <h2 className="text-lg mb-2">Update Products</h2>
        </div>
        <div className="w-full bg-white my-10 rounded-3xl">
          <Link to="/admin/products">
            <i className="fa-solid fa-chevron-left ml-16 mx-2 pl-10 my-3"></i>
            Back
          </Link>

          <div className="px-36">
            <h2 className="text-xl text-red-400">
              Thông tin sản phẩm cần cập nhật
            </h2>
            <br />
            <p>Product Name</p>
            <input
              type="text"
              name="name"
              className="border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <br />
            <br />
            <p>Price</p>
            <input
              type="text"
              name="price"
              className="border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
            <br />
            <br />
            <p>Category</p>
            <input
              type="text"
              name="category"
              className="border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
            <br />
            <br />
            <p>Số lượng tồn kho</p>
            <input
              type="text"
              name="stock_quantity"
              className="border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={formData.stock_quantity}
              onChange={(e) =>
                setFormData({ ...formData, stock_quantity: e.target.value })
              }
            />
            <br />
            <br />
            <p>Status</p>
            <input
              type="text"
              name="status"
              className="border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            />
            <br />
            <br />
            <p>Image</p>
            <input type="file" onChange={changeImage} />
            <label htmlFor="">
              <img src={formData.image} alt="" className="w-48 h-28" />
            </label>
            <br />
            <br />
            <p>Description</p>
            <textarea
              name="description"
              id=""
              className="border border-indigo-600 w-full h-24 rounded-lg pl-2"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>
            <br />
            <br />
            <div className="flex justify-end">
              <button
                className="border border-indigo-600 w-56 h-10 rounded-lg bg-stone-600 text-white"
                onClick={handleUpdateProduct}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
