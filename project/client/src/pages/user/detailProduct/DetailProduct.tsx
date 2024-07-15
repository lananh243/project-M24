import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllProduct } from "../../../store/reducers/productReducer";
import { addToCart, setCart } from "../../../store/reducers/cartReducer";
import { getAllUser } from "../../../store/reducers/usersReducer";

export default function DetailProduct() {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account") || "null")
  );
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProduct());
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    dispatch(setCart(savedCart));
  }, []);

  const cart: any = useSelector((state: any) => state.cartReducer.carts);
  const products = useSelector((state: any) => state.productReducer.products);
  const product = products.find((el: any) => el.id == id);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Bạn có chắc chắn đăng xuất không?");
    if (confirmLogout) {
      localStorage.removeItem("account");
      setAccount(null);
      navigate("/login");
    }
  };

  const handleAddToCart = (item: any) => {
    if (account) {
      dispatch(addToCart({ userId: account.id, product: item, quantity }));
    } else {
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!");
      navigate("/login");
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  // lấy user
  const users = useSelector((state: any) => {
    return state.usersReducer.users;
  });

  const getUser = users.find((item: any) => item.id === account.id);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <>
      <div className="w-full h-[130px] bg-slate-50 flex justify-around items-center">
        <img
          className="w-36 h-36"
          src="https://beelenhandmade.com/wp-content/uploads/2024/06/Beelenhandmade.png"
          alt=""
        />
        <div className="flex gap-8">
          <div className="text-gray-400 h-11 w-1">|</div>
          <div className="flex gap-4">
            <p className="text-xl">Giỏ hàng</p> /
            <div className="relative bottom-2">
              <i className="fa-solid fa-bag-shopping text-3xl"></i>
              <div className="absolute top-1 left-4 w-4 h-4 bg-yellow-100 rounded-full flex items-center justify-center">
                {getUser?.cart.length}
              </div>
            </div>
          </div>
          {account ? (
            <div className="flex items-center gap-4">
              <p>{account.fullname}</p>
              <Button variant="outline-primary" onClick={handleLogout}>
                ĐĂNG XUẤT
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button variant="outline-primary" onClick={handleLogin}>
                ĐĂNG NHẬP
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full flex items-center whitespace-nowrap gap-3 h-10 pl-20 bg-gray-300">
        <Link to="/">
          <p>TRANG CHỦ </p>
        </Link>
        / <b>Chi Tiết Sản Phẩm</b>
      </div>
      <div className="flex gap-x-32 bg-blue-50">
        <div className="ml-20 mt-14 w-2/6 h-3/4 bg-black">
          <img src={product?.image} alt="" className="h-full w-full" />
        </div>
        <div className="flex gap-6">
          <div className=" mt-14">
            <p>Name : {product?.name}</p>
            <br />
            <div className="text-xl">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <br />
            <p>
              Giá bán :<b className="text-lg text-red-400"> {product?.price}</b>
            </p>
            <br />
            <p>Phân loại : {product?.category}</p>
            <br />
            <ul>
              <li>Sản phẩm mang lại nhiều lợi ích cho người sử dụng</li>
              <li>100 % hàng chất lượng đảm bảo uy tín</li>
              <li>Đồ tự làm , tự sáng chế, chất liệu an toàn</li>
              <li>Giảm stress , tránh tiếp xúc với thiết bị điện tử</li>
            </ul>
            <br />
            <div className="flex gap-3">
              <button
                className="w-7 bg-gray-600 h-7 rounded-sm"
                onClick={handleDecrease}
              >
                -
              </button>
              <b className="text-2xl">{quantity}</b>
              <button
                className=" w-7 bg-gray-600 h-7 rounded-sm"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <br />
            <div>
              <button
                className="text-xl w-60 bg-red-500 h-10 rounded-sm text-white"
                onClick={() => handleAddToCart(product)}
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <b className="ml-5">Thêm vào giỏ hàng</b>
              </button>
            </div>
          </div>
          <div className="h-96 w-0.5 bg-slate-400 mt-14 mr-5"></div>
          <div>
            <div className="text-left mt-14 mr-5">
              <h1 className="text-lg text-red-400">Chính sách và Điều khoản</h1>
              <div className="flex gap-3 mt-8">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8"
                    src="https://beelenhandmade.com/wp-content/uploads/2024/05/snapedit_1716311911981.png"
                    alt=""
                  />
                </div>
                <div className="items-center">
                  <b className="text-lg text-pink-400">Chăm sóc khách hàng</b>
                  <p>Hỗ trợ chăm sóc khách hàng 24/7</p>
                </div>
              </div>
              <div className="w-80 h-0.5 border bg-slate-500"></div>
              <br />
              <div className="flex gap-3">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8"
                    src="https://beelenhandmade.com/wp-content/uploads/2024/05/best-price.png"
                    alt=""
                  />
                </div>
                <div className="items-center">
                  <b className="text-lg text-pink-400">Giá cả hợp lý</b>
                  <p>Giá tốt nhất thị trường</p>
                </div>
              </div>
              <div className="w-80 h-0.5 border bg-slate-500"></div>
              <br />
              <div className="flex gap-3">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8"
                    src="https://beelenhandmade.com/wp-content/uploads/2024/05/shipped.png"
                    alt=""
                  />
                </div>
                <div className="items-center">
                  <b className="text-lg text-pink-400">Miễn phí giao hàng</b>
                  <br />
                  <p>Miễn phí giao hàng cho đơn &gt; 300k</p>
                </div>
              </div>

              <div className="w-80 h-0.5 border bg-slate-500"></div>
              <br />
              <div className="flex gap-3">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8"
                    src="https://beelenhandmade.com/wp-content/uploads/2024/05/return.png"
                    alt=""
                  />
                </div>
                <div className="items-center">
                  <b className="text-lg text-pink-400">Chính sách đổi trả</b>
                  <p>Đổi trả miễn phí trong vòng 10 ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
