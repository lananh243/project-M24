import { Link } from "react-router-dom";

export default function DetailOrder() {
  return (
    <>
      <div className="flex">
        <div className="w-2/6 h-svh bg-red-400 pt-10">
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
            <h1>Thông tin đơn hàng</h1>
            <div className="space-y-2 ml-44">
              <div className="flex items-center">
                <b className="w-40">Sản phẩm</b>
                <p className="ml-20">00000</p>
              </div>
              <div className="flex items-center">
                <b className="w-40">Tổng tiền</b>
                <p className="ml-20">00000 đ</p>
              </div>
              <div className="flex items-center">
                <b className="w-40">Id người đặt</b>
                <p className="ml-20">ATS123</p>
              </div>
              <div className="flex items-center">
                <b className="w-40">Tên người đặt</b>
                <p className="ml-20">Lan Anh</p>
              </div>
              <div className="flex items-center">
                <b className="w-40">Ghi chú</b>
                <p className="ml-20">Giao đến Hà Nội</p>
              </div>
              <div className="flex items-center">
                <b className="w-40">Trạng thái</b>
                <select name="" id="" className="ml-20">
                  <option value="">Đang xác thực</option>
                  <option value="">Đã xác thực</option>
                  <option value="">Đang giao hàng</option>
                  <option value="">Đã giao hàng</option>
                  <option value="">Đơn hàng mới</option>
                </select>
              </div>

              <div className="flex items-center">
                <b className="w-40">Thời gian đặt hàng</b>
                <p className="ml-20">12/3/2024</p>
              </div>
              <button className="border border-gray-500 m-96 w-24 p-1 rounded-sm bg-blue-400 text-white">
                Update
              </button>
            </div>
            <table className="border-collapse border border-gray-600 w-11/12 mx-auto my-10 text-center">
              <thead>
                <tr className="bg-gray-300">
                  <th className="border border-gray-600 p-2 ">STT</th>
                  <th className="border border-gray-600 p-2">Mã sản phẩm</th>
                  <th className="border border-gray-600 p-2">Số lượng</th>
                  <th className="border border-gray-600 p-2">Đơn giá</th>
                  <th className="border border-gray-600 p-2">
                    Tổng giá sản phẩm
                  </th>
                  <th className="border border-gray-500 p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-600 p-2 ">1</td>
                  <td className="border border-gray-600 p-2 ">Đồ tự làm</td>
                  <td className="border border-gray-600 p-2 ">12</td>
                  <td className="border border-gray-600 p-2 ">30000 đ</td>
                  <td className="border border-gray-600 p-2 ">70000 đ</td>
                  <td className="border border-gray-600 p-2 ">
                    <button className="border border-gray-600 p-1 w-24 bg-red-400 rounded-md text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
