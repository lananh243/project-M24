import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getAllProduct } from "../../store/reducers/productReducer";
import { getAllCategory } from "../../store/reducers/categoryReducer";

export default function AddProduct() {
  const [image, setImage] = useState(
    "https://vnsteelthanglong.vn/core/img/default_image.png"
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [stock_quantity, setStock_quantity] = useState("");
  // const [description, setDescription] = useState("");

  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let selectedImage = e.target.files?.[0];
    if (selectedImage) {
      const imageRef = ref(storage, `upload-image/${selectedImage.name}`);
      uploadBytes(imageRef, selectedImage).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImage(url);
        });
      });
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data: any = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleAddProduct = () => {
    let newProduct = {
      name,
      price,
      categoryId,
      status,
      stock_quantity,
      image,
    };

    dispatch(addProduct(newProduct));
    setName("");
    setPrice("");
    setCategoryId(0);
    setStatus("");
    setStock_quantity;
    setImage("https://vnsteelthanglong.vn/core/img/default_image.png");
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
          <i className="fa-solid fa-gauge text-white"></i>
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
          <h2 className="text-lg mb-2">Add Products</h2>
          {/* <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
            <input
              placeholder="Tìm kiếm"
              type="text"
              className="pl-8 border-solid border-2 border-gray-400 rounded h-8 text-sm w-52"
            />
          </div> */}
        </div>
        <div className="w-full bg-white my-10 rounded-3xl">
          <Link to="/admin/products">
            <i className="fa-solid fa-chevron-left icon-spacing mx-2 pl-10 my-3"></i>
            Back
          </Link>

          <div className="px-36">
            <h2 className="text-xl">Thông tin thêm sản phẩm</h2>
            <br />
            <p>Tên sản phẩm</p>
            <input
              type="text"
              className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <br />
            <br />
            <p>Price</p>
            <input
              type="text"
              className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPrice(e.target.value)
              }
            />
            <br />
            <br />
            <p>Category</p>
            <select
              name=""
              id=""
              className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCategoryId(Number(e.target.value))
              }
            >
              <option value={0}>Chọn danh mục</option>
              {data.categoryReducer.categorys.map((category: any) => (
                <option value={category.id}>{category.name}</option>
              ))}
            </select>
            <br />
            <br />
            <p>Số lượng tồn kho</p>
            <input
              type="text"
              className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={stock_quantity}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setStock_quantity(e.target.value)
              }
            />
            <br />
            <br />
            <p>Status</p>
            <select
              name=""
              id=""
              className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              value={status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setStatus(e.target.value)
              }
            >
              <option value="">Lựa chọn trạng thái</option>
              <option value="Còn hàng">Còn hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
            <br />
            <br />
            <p>Image</p>
            <input type="file" onChange={changeImage} />
            <label htmlFor="">
              <img src={image} alt="" className="w-48 h-28" />
            </label>
            <br />
            <br />
            {/* <p>Description</p>
            <textarea
              name=""
              id=""
              className=" border border-indigo-600 w-full h-24 rounded-lg pl-2"
              value={description}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setDescription(e.target.value)
              }
            ></textarea>
            <br />
            <br /> */}
            <div className="flex justify-end">
              <button
                className="border border-indigo-600 w-56 h-10 rounded-lg bg-stone-600 text-white"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
