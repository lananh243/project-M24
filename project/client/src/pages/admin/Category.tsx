import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllCategory,
  updateCategory,
} from "../../store/reducers/categoryReducer";
import { Button, Form, Modal } from "react-bootstrap";

export default function Category() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({ id: "", name: "" });
  const handleClose = () => setShow(false);
  const handleShow = (category: any) => {
    setValue(category);
    setShow(true);
  };
  const handleUpdate = () => {
    setShow(false);
    dispatch(updateCategory(value));
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
            <h2 className="text-lg mb-2">Category</h2>
            <div className="flex gap-x-5">
              <div className="relative">
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                <input
                  placeholder="Tìm kiếm"
                  type="text"
                  className="pl-8 border-solid border-2 border-gray-400 rounded h-8 text-sm w-52"
                />
              </div>
              <span className="material-symbols-outlined text-3xl cursor-pointer">
                restart_alt
              </span>
            </div>
          </div>
          <div className="bg-white w-full my-10 p-4">
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
                    <th className="p-3">Id</th>
                    <th className="p-3">Tên danh mục</th>
                    <th className="p-3">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {data.categoryReducer.categorys.map(
                    (category: any, index: number) => (
                      <tr
                        className="border-y border-gray-200 p-3"
                        key={category.id}
                      >
                        <td className=" p-3">{index + 1}</td>
                        <td className=" p-3">{category.name}</td>
                        <td className=" p-3">
                          <div className="flex justify-center gap-3">
                            <button
                              className="text-sm p-1 border border-slate-300 w-14 bg-orange-300 rounded-md text-white"
                              onClick={() => handleShow(category)}
                            >
                              Edit
                            </button>
                            <button className="text-sm p-1 border border-slate-300 w-14 bg-red-400 rounded-md text-white">
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
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sửa danh mục</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                  value={value.name}
                  onChange={(e) => {
                    setValue({ ...value, name: e.target.value });
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
