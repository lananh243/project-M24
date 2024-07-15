import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllUser,
  searchNameUser,
  updateUserStatus,
} from "../../store/reducers/usersReducer";
import { Button, Modal } from "react-bootstrap";
import { Users } from "../../interfaces";

export default function Customer() {
  const dispatch = useDispatch();
  const data: any = useSelector((state) => state);
  const [searchValue, setSearchValue] = useState("");
  console.log(1111, data);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const handleViewDetails = (user: any) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleToggle = (user: any) => {
    const { id, status } = user;
    const shouldConfirm = status;

    if (
      shouldConfirm &&
      !window.confirm("Bạn có chắc chắn muốn chặn user này không?")
    ) {
      return;
    }

    dispatch(updateUserStatus({ id, status: !status }));
  };

  const handleSearch = () => {
    dispatch(searchNameUser(searchValue));
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

        <div
          className="w-full bg-gray-200"
          style={{ height: "100vh", overflowY: "scroll", position: "relative" }}
        >
          <div
            className="bg-white shadow-sm h-28 flex items-center w-full justify-between px-4"
            style={{ position: "sticky", top: 0, left: 0, zIndex: 1 }}
          >
            <h2 className="text-lg mb-2">Orders</h2>
            <div className="flex gap-x-5">
              <div className="relative">
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                <input
                  placeholder="Tìm kiếm"
                  type="text"
                  className="pl-8 border-solid border-2 border-gray-400 rounded h-8 text-sm w-52"
                  value={searchValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchValue(e.target.value)
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
              <table className="w-full text-sm text-center">
                <thead>
                  <tr>
                    <th className="p-3">ID</th>
                    <th className="p-3">Tên đăng nhập</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Role</th>
                    <th className="p-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.usersReducer.users.map((user: any, index: number) => (
                    <tr className="border-y border-gray-200 p-3" key={user.id}>
                      <td className=" p-3">{index + 1}</td>
                      <td className=" p-3">{user.fullname}</td>
                      <td className=" p-3">{user.email}</td>
                      <td className=" p-3 cursor-pointer">{user.role}</td>
                      <td className=" p-3">
                        <div className="flex justify-evenly">
                          <button
                            className="border border-gray-500 w-16 p-1 bg-blue-600 rounded-md text-white"
                            onClick={() => handleViewDetails(user)}
                          >
                            View
                          </button>
                          {user.role === "admin" ? (
                            <button
                              type="button"
                              className="border border-gray-500 w-16 p-1 bg-green-500 rounded-md text-white"
                            >
                              Active
                            </button>
                          ) : (
                            <button
                              onClick={() => handleToggle(user)}
                              className={`relative w-12 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                                user.status ? "bg-green-500" : "bg-red-500"
                              }`}
                            >
                              <span
                                className={`absolute left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                                  user.status
                                    ? "translate-x-0"
                                    : "translate-x-4"
                                }`}
                              ></span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
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
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Chi tiết người dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <div>
              <p>
                <b>Tên đăng nhập:</b> {selectedUser.fullname}
              </p>
              <p>
                <b>Email:</b> {selectedUser.email}
              </p>
              <p>
                <b>Vai trò:</b> {selectedUser.role}
              </p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
