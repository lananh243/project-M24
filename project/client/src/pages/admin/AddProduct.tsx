import { useState } from "react";
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../config/config";

export default function AddProduct() {
  const [image, setImage] = useState<any>(
    "https://vnsteelthanglong.vn/core/img/default_image.png"
  );

  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let image: any = e.target.files?.[0];
    const imageRef = ref(storage, `upload-image/${image.name}`);
    uploadBytes(imageRef, image).then((snapShop) => {
      getDownloadURL(snapShop.ref).then((url) => {
        setImage(url);
      });
    });
  };
  // let srcImage = "";
  // if (typeof image != "string") {
  //   srcImage = URL.createObjectURL(image);
  // } else {
  //   srcImage = image;
  // }

  return (
    <>
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
          <div className="mx-14 my-6">
            <i className="fa-solid fa-address-card text-white"></i>
            <b className="mx-3 text-white whitespace-nowrap">
              Quản lí nhân viên
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
        <div className="w-full bg-gray-200">
          <div className="bg-white shadow-sm h-28 flex items-center w-full justify-between px-4">
            <h2 className="text-lg mb-2">Products</h2>
            <div className="relative">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              <input
                placeholder="Tìm kiếm"
                type="text"
                className="pl-8 border-solid border-2 border-gray-400 rounded h-8 text-sm w-52"
              />
            </div>
          </div>
          <div className="w-full bg-white my-10">
            <Link to="/admin/products">
              <i className="fa-solid fa-chevron-left  icon-spacing mx-2 pl-10 my-3"></i>
              Back
            </Link>

            <div className="px-36">
              <h2 className="text-xl">Add Product </h2>
              <br />
              <p>Product Name</p>
              <input
                type="text"
                className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              />
              <br />
              <br />
              <p>Price</p>
              <input
                type="text"
                className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              />
              <br />
              <br />
              <p>Mã sản phẩm</p>
              <input
                type="text"
                className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              />
              <br />
              <br />
              <p>Status</p>
              <input
                type="text"
                className=" border border-indigo-600 w-full h-10 rounded-lg pl-2"
              />
              <br />
              <br />
              <p>Image</p>
              <input type="file" onChange={changeImage} />
              <label htmlFor="">
                <img src={image} alt="" className="w-48 h-28" />
              </label>
              <br />
              <br />
              <p>Description</p>
              <input
                type="text"
                className=" border border-indigo-600 w-full h-24 rounded-lg pl-2"
              />
              <br />
              <br />
              <div className="flex justify-end">
                <button className="border border-indigo-600 w-56 h-10 rounded-lg bg-stone-600 text-white">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
