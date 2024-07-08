import React from "react";
import { Link } from "react-router-dom";

export default function Admin() {
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
              <Link to="/admin/customer">Quản lí khách hàng</Link>{" "}
            </b>
          </div>
        </div>
        <div className="w-full h-[700px] bg-blue-50">
          <div className="bg-blue-50 w-full">
            <div className="w-full bg-white h-[40px] flex items-center shadow-sm">
              <p className="mx-8 ">BẢNG ĐIỀU KHIỂN</p>
            </div>
            <div className="flex justify-center gap-24">
              <div className="h-[120px] w-[450px] bg-white mx-10 my-10 flex items-center shadow-sm">
                <div className="w-[100px] h-[95px] bg-green-200 flex justify-center rounded-md items-center mx-3">
                  <i className="fa-solid fa-users-rectangle text-3xl text-green-400"></i>
                </div>
                <div className="pt-0">
                  <h2 className="text-red-500">TỔNG KHÁCH HÀNG</h2>
                  <b>56 khách hàng</b>
                  <p>Tổng số khách hàng được quản lý</p>
                </div>
              </div>
              <div className="h-[120px] w-[450px] bg-white mx-10 my-10 flex items-center shadow-sm">
                <div className="w-[100px] h-[95px] bg-blue-200 flex justify-center rounded-md items-center mx-3">
                  <i className="fa-solid fa-database text-3xl text-blue-300"></i>
                </div>
                <div className="pt-0">
                  <h2 className="text-red-500">TỔNG SẢN PHẨM</h2>
                  <b>2000 khách hàng</b>
                  <p>Tổng sản phẩm được quản lý</p>
                </div>
              </div>
            </div>
            <div className="h-60 bg-white w-11/12 my-10 p-4 m-auto shadow-sm">
              <h2 className="text-2xl mx-4">Khách hàng mới</h2>
              <hr />

              <table className="w-full my-6">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="border-r">ID</th>
                    <th className="border-r">Tên khách hàng</th>
                    <th className="border-r">Ngày sinh</th>
                    <th className="border-r">Số điện thoại</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-r">
                    <td>175267</td>
                    <td>Nguyễn Văn C</td>
                    <td>21/09/2005</td>
                    <td>036467737</td>
                  </tr>
                  <tr>
                    <td>123456</td>
                    <td>Nguyễn Văn B</td>
                    <td>13/04/2001</td>
                    <td>037546878</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
