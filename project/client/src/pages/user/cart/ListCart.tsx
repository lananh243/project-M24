import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../store/reducers/usersReducer";
import {
  decreaseQuantity,
  getCarts,
  increaseQuantity,
  deleteSelectedItems,
} from "../../../store/reducers/cartReducer";
import "./listCart.css";
import { Link } from "react-router-dom";

export default function ListCart() {
  const account = JSON.parse(localStorage.getItem("account") || "null");
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState<any>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  const users = useSelector((state: any) => state.usersReducer.users);
  const carts = useSelector((state: any) => state.cartReducer.carts);

  // Fetch the current user
  const currentUser = users.find((user: any) => user.id === account.id);

  useEffect(() => {
    dispatch(getAllUser());
    if (currentUser) {
      dispatch(getCarts());
    }
  }, [dispatch, currentUser]);

  const handleIncrease = (productId: any) => {
    if (currentUser) {
      dispatch(increaseQuantity({ userId: currentUser.id, productId }));
    }
  };

  const handleDecrease = (productId: any) => {
    if (currentUser) {
      dispatch(decreaseQuantity({ userId: currentUser.id, productId }));
    }
  };

  const handleCheckboxChange = (productId: any) => {
    setSelectedIds((prev: any) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleSelectAllChange = () => {
    if (!isSelectAll) {
      setSelectedIds(currentUser.cart.map((cart: any) => cart.id));
    } else {
      setSelectedIds([]);
    }
    setIsSelectAll(!isSelectAll);
  };

  const handleDeleteSelected = () => {
    if (currentUser) {
      dispatch(deleteSelectedItems({ userId: currentUser.id, selectedIds }));
      setSelectedIds([]);
      setIsSelectAll(false);
    }
  };

  const totalPrice = currentUser?.cart.reduce((total: number, cart: any) => {
    const price = parseFloat(cart.price) || 0;
    const quantity = parseInt(cart.quantity) || 0;
    return total + price * quantity;
  }, 0);

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });

  return (
    <div>
      <h1 className="text-3xl text-center mt-20">Giỏ hàng</h1>
      <div className="mt-16">
        <table className="m-auto w-10/12">
          <thead>
            <tr>
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={isSelectAll}
                  onChange={handleSelectAllChange}
                />
              </th>
              <th className="p-3">STT</th>
              <th className="p-3">Tên sản phẩm</th>
              <th className="p-3">Hình ảnh</th>
              <th className="p-3">Số lượng</th>
              <th className="p-3">Giá</th>
            </tr>
          </thead>
          <tbody>
            {currentUser &&
              currentUser.cart &&
              currentUser.cart.map((cart: any, index: number) => (
                <tr key={index} className="border-y-2 border-gray-200 p-3">
                  <td className=" p-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(cart.id)}
                      onChange={() => handleCheckboxChange(cart.id)}
                    />
                  </td>
                  <td className=" p-3">{index + 1}</td>
                  <td className=" p-3">{cart.name}</td>
                  <td className=" p-3">
                    <img src={cart.image} alt="" className="w-44 h-44" />
                  </td>
                  <td className="p-3 ">
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDecrease(cart.id)}
                        className="w-6 bg-red-500 h-6 rounded-sm"
                      >
                        -
                      </button>
                      <span>{cart.quantity}</span>
                      <button
                        onClick={() => handleIncrease(cart.id)}
                        className="w-6 bg-red-500 h-6 rounded-sm"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className=" p-3">{cart.price}</td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr className="p-3">
              <td colSpan={5} className="text-right pt-5 text-xl">
                Tổng tiền: {formatter.format(totalPrice)}{" "}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center m-20 gap-28">
        <button
          onClick={handleDeleteSelected}
          className="w-52 h-8 bg-red-400 text-white rounded-md"
        >
          Xóa sản phẩm đã chọn
        </button>
        <Link to="/orders">
          <button className="w-44 h-8 bg-orange-400 text-white rounded-md">
            Mua hàng
          </button>
        </Link>
      </div>
      <div className=" mt-12 bg-blue-100 h-auto ">
        <div className="flex justify-evenly">
          <div className="m-8">
            <img
              src="https://beelenhandmade.com/wp-content/uploads/2024/06/Beelenhandmade.png"
              alt=""
              className="w-36"
            />
            <p>
              LAN ANH HANDMADE cung cấp các mặt hàng <br />
              độc đáo , độc nhất trên thị trường
            </p>
            <br />
            <div className="flex">
              <img
                src="https://bizweb.dktcdn.net/100/322/163/themes/894749/assets/i_footer_1.png?1711706920134"
                alt=""
              />
              <p className="mx-4">Tầng 6 Ladeco, 266 Đội Cấn, Hà Nội</p>
            </div>
            <div className="flex">
              <img
                src="https://bizweb.dktcdn.net/100/322/163/themes/894749/assets/i_footer_2.png?1711706920134"
                alt=""
              />
              <p className="mx-4">1900 3748</p>
            </div>
            <div className="flex">
              <img
                src="https://bizweb.dktcdn.net/100/322/163/themes/894749/assets/i_footer_3.png?1711706920134"
                alt=""
              />
              <p className="mx-4">lananh@handmade.vn</p>
            </div>
          </div>
          <div className="w-0.5 h-64 bg-gray-300 mt-14"></div>
          <div className="mt-20">
            <h1 className="text-xl">Tài khoản</h1>
            <br />
            <p className="text-gray-400">Trang chủ</p>
            <p className="text-gray-400">Giới thiệu</p>
            <p className="text-gray-400">Sản phẩm</p>
            <p className="text-gray-400">Tin tức</p>
            <p className="text-gray-400">Liên hệ</p>
          </div>
          <div className="w-0.5 h-64 bg-gray-300 mt-14"></div>
          <div className="mt-20">
            <h1 className="text-xl">Hỗ trợ khách hàng</h1>
            <br />
            <p className="text-gray-400">Trang chủ</p>
            <p className="text-gray-400">Giới thiệu</p>
            <p className="text-gray-400">Sản phẩm</p>
            <p className="text-gray-400">Tin tức</p>
            <p className="text-gray-400">Liên hệ</p>
          </div>
          <div className="w-0.5 h-64 bg-gray-300 mt-14 "></div>
          <div className="mt-20">
            <h1 className="text-xl">Gửi email</h1>
            <br />
            <p className="text-gray-400">Gửi email nhận khuyến mãi</p>
            <br />
            <div>
              <input
                type="text"
                placeholder="Email của bạn"
                className="h-9 rounded-l-md p-3"
              />
              <button className="w-9 h-9 bg-green-400 rounded-r-md">
                <i className="fa-brands fa-telegram text-white"></i>
              </button>
            </div>
            <br />
            <h1 className="text-xl">Kết nối</h1>
            <br />
            <div className="flex gap-3">
              <button className="w-9 h-9 bg-red-400 rounded-xl">
                <i className="fa-brands fa-google text-white"></i>
              </button>
              <button className="w-9 h-9 bg-blue-300 rounded-xl">
                <i className="fa-brands fa-twitter text-white"></i>
              </button>
              <button className="w-9 h-9 bg-sky-800 rounded-xl">
                <i className="fa-brands fa-facebook text-white"></i>
              </button>
              <button className="w-9 h-9 bg-sky-600 rounded-xl">
                <i className="fa-brands fa-linkedin-in text-white"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="px-24">
          <p>© Bản quyền thuộc về Lan Anh Handmade | Cung cấp bởi Lan Anh</p>
        </div>
      </div>
    </div>
  );
}
