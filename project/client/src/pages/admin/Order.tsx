import React from "react";
import { Link } from "react-router-dom";

export default function Order() {
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
          <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center">
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
              <Link to="/admin/orders">Quản lí đơn hàng</Link>
            </b>
          </div>
          <div className="mx-14 my-6 hover:bg-slate-400 h-9 flex items-center">
            <i className="fa-solid fa-users-gear text-white"></i>
            <b className="mx-3 text-white">
              <Link to="/admin/customer">Quản lí khách hàng</Link>{" "}
            </b>
          </div>
        </div>
        <div className="w-full bg-gray-200">
          <div className="bg-white shadow-sm h-28 flex items-center w-full justify-between px-4">
            <h2 className="text-lg mb-2">Orders</h2>
            <div className="relative">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              <input
                placeholder="Tìm kiếm"
                type="text"
                className="pl-8 border-solid border-2 border-gray-400 rounded h-8 text-sm w-52"
              />
            </div>
          </div>
          <div className=" bg-white w-full my-10 p-4">
            <div className=" flex justify-end items-center mb-4">
              <select
                name=""
                id=""
                className="border-solid border-2 border-gray-400 py-1 px-2 text-sm"
              >
                <option value="">Sort by : Id</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-center">
                    <th className="p-3">Tên người đặt</th>
                    <th className="p-3">Id User</th>
                    <th className="p-3">Status</th>
                    <th className="p-2">Total Price</th>
                    <th className="p-2">Date</th>
                    <th className="p-2">Note</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-y border-gray-200 p-3 text-center">
                    <td className=" p-3">Hoa hồng</td>
                    <td className=" p-3">345NT</td>
                    <td className=" p-3">Đang giao hàng</td>
                    <td className=" p-3">12.000 đ</td>
                    <td className=" p-3">3/3/2024</td>
                    <td className="p-3">Giao đến Hà Nội</td>
                    <td className=" p-3">
                      <div className="flex justify-evenly">
                        <Link to="/admin/orders/detail">
                          <button className="text-sm p-1 border border-green-400 w-20 bg-green-400 rounded-md text-white">
                            Detail
                          </button>
                        </Link>

                        <button className="text-sm p-1 border border-red-500 w-20 bg-red-500 rounded-md text-white">
                          Update
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center my-5 gap-2">
              <button className="w-7 bg-gray-200 h-7 rounded-md">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="w-7 bg-gray-600 h-7 rounded-md">1</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">2</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">3</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">...</button>
              <button className="w-7 bg-gray-200 h-7 rounded-md">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
