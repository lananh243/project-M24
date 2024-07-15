import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../store/reducers/usersReducer";
import { clearCart, getCarts } from "../../../store/reducers/cartReducer";
import { addOrder } from "../../../store/reducers/orderReducer";

export default function FormOrder() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const account = JSON.parse(localStorage.getItem("account") || "null");
  const dispatch = useDispatch();
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
  const handleAddOrder = () => {
    let newOrder = {
      name,
      phone,
      address,
    };
    dispatch(addOrder(newOrder)).then(() => {
      dispatch(clearCart());
    });
    setName("");
    setPhone("");
    setAddress("");
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
      <h1 className="text-4xl text-red-400 m-16 text-center">Đặt hàng</h1>
      <div className="flex justify-evenly">
        <div>
          <h1 className="text-gray-300 text-xl">Danh sách sản phẩm</h1>
          <br />
          <table>
            <tbody>
              {currentUser &&
                currentUser.cart &&
                currentUser.cart.map((cart: any) => (
                  <tr key={cart.id} className="border-y-2 border-gray-200 p-4">
                    <td className="p-4">
                      <img src={cart.image} alt="" className="w-40 h-40" />
                    </td>
                    <td className="p-4">{cart.name}</td>
                    <td className="p-4">{cart.quantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <br />
          <b className="p-4"> Tổng tiền : {formatter.format(totalPrice)} </b>
        </div>
        <div className="w-0.5 h-[500px] bg-gray-300"></div>
        <div>
          <h1 className="text-gray-300 text-xl">THÔNG TIN NHẬN HÀNG</h1>
          <br />
          <br />
          <b>Họ và tên *</b>
          <br />
          <br />
          <input
            type="text"
            placeholder="Nhập họ và tên"
            className="border-solid border-2 border-gray-300 w-[450px] h-8 pl-3 rounded-md"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <br />
          <br />
          <b>Số điện thoại *</b>
          <br />
          <br />
          <input
            type="text"
            placeholder="Nhập số điện thoại"
            className="border-solid border-2 border-gray-300 w-[450px] h-8 pl-3 rounded-md"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
          />
          <br />
          <br />
          <b>Địa chỉ *</b>
          <br />
          <br />
          <input
            type="text"
            placeholder="Nhập địa chỉ"
            className="border-solid border-2 border-gray-300 w-[450px] h-8 pl-3 rounded-md"
            value={address}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(e.target.value)
            }
          />
          <br />
          <br />
          <b>Phương thức thanh toán</b>
          <p>Giao hàng và thu tiền tại nhà(COD)</p>
          <br />
          <br />
          <div className="flex justify-end">
            <button
              className="bg-green-700 w-36 h-9 text-white rounded-md"
              onClick={handleAddOrder}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              Gửi đơn hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
