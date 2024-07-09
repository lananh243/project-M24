import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getAllProduct,
  getAllUser,
} from "../../../store/reducers/usersReducer";

export default function Home() {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account") || "null")
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data: any = useSelector((state: any) => state.usersReducer.products);
  console.log(data);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  const handleLogin = () => {
    navigate("/login");
  };

  // Example function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    const confirmLogout = confirm("Bạn có chắc chắn đăng xuất không?");
    if (confirmLogout) {
      localStorage.removeItem("account");
      setAccount(null);
      navigate("/login");
    }
  };
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
              <div className="absolute top-1 left-4 w-4 h-4 bg-yellow-100 rounded-full"></div>
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
      <div className="w-full h-[50px] bg-orange-400 flex items-center pl-56 gap-x-24">
        <b>Trang Chủ</b>
        <b>Tất cả sản phẩm</b>
        <b>Giới thiệu</b>
        <b>Tin tức</b>
        <b>Liên hệ</b>
      </div>
      <div>
        <Carousel data-bs-theme="dark" className="h-[670px]">
          <Carousel.Item>
            <img
              className="d-block w-100 h-[670px]"
              src="https://static.wixstatic.com/media/c9ac44_eb2b5589069b4805b063f7883221b01b~mv2.png/v1/fill/w_800,h_670,al_c,q_90/c9ac44_eb2b5589069b4805b063f7883221b01b~mv2.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[670px]"
              src="https://nld.mediacdn.vn/291774122806476800/2024/2/24/11-anh-bao-in-bat-trend-1708778252662647160080.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-[670px]"
              src="https://filebroker-cdn.lazada.vn/kf/Sec17b0641c7d485e97a8ad8ee6110dc2e.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl text-pink-400 text-center">
          Dịch vụ của LANANHHANDMADE
        </h2>
        <div className="mx-auto w-[150px] h-[3px] bg-black mt-4"></div>
        <div className="flex justify-center gap-10 m-10">
          <div className="w-[240px] text-center">
            <img
              className="w-14 h-14 mx-20"
              src="https://beelenhandmade.com/wp-content/uploads/2024/05/snapedit_1716311911981.png"
              alt=""
            />
            <b className="text-xl text-pink-400">Chăm sóc khách hàng</b>
            <p>Hỗ trợ chăm sóc khách hàng 24/7</p>
          </div>
          <div className="w-[240px] text-center">
            <img
              className="w-14 h-14 mx-24"
              src="https://beelenhandmade.com/wp-content/uploads/2024/05/best-price.png"
              alt=""
            />
            <b className="text-xl text-pink-400">Giá cả hợp lý</b>
            <p>Giá tốt nhất thị trường</p>
          </div>
          <div className="w-[240px] text-center">
            <img
              className="w-14 h-14 mx-24"
              src="https://beelenhandmade.com/wp-content/uploads/2024/05/shipped.png"
              alt=""
            />
            <b className="text-xl text-pink-400">Miễn phí giao hàng</b>
            <p>
              Miễn phí giao hàng cho đơn <br />
              &gt; 300k
            </p>
          </div>
          <div className="w-[240px] text-center">
            <img
              className="w-14 h-14 mx-24"
              src="https://beelenhandmade.com/wp-content/uploads/2024/05/return.png"
              alt=""
            />
            <b className="text-xl text-pink-400">Chính sách đổi trả</b>
            <p>Đổi trả miễn phí trong vòng 10 ngày</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center text-pink-400">ĐỒ HANDMADE</h2>
        <div className="mx-auto w-[100px] h-[3px] bg-black m-4"></div>
        <div className="flex justify-center m-10 gap-5">
          <div>
            <img
              src="https://congcutot.vn/uploads/store/page/article/2023/03/anh-bia_5.jpg"
              alt=""
              className="w-96 h-64"
            />
            <h1 className="mt-5 text-xl text-gray-500">Dụng cụ làm</h1>
          </div>
          <div>
            <img
              src="https://media.loveitopcdn.com/2779/kcfinder/upload/images/dung-cu-lam-do-da-handmade%20%283%29%281%29.jpg"
              alt=""
              className="w-96 h-64"
            />
            <h1 className="mt-5 text-xl text-gray-500">Sản phẩm bằng da</h1>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/7a/24/6f/7a246fbdf30b15a47d515e2d4990a5d7.jpg"
              alt=""
              className="w-96 h-64"
            />
            <h1 className="mt-5 text-xl text-gray-500">Sản phẩm bằng len</h1>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center text-pink-400">SẢN PHẨM</h2>
        <div className="mx-auto w-[100px] h-[3px] bg-black mt-4 "></div>
        <div className="grid grid-cols-4 gap-4 m-10">
          {data.map((item: any) => (
            <Card key={item.id} style={{ width: "16rem", margin: "0 auto" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="text-gray-500">{item.name}</Card.Title>
                <Card.Text className="font-medium text-red-500">
                  {item.category}
                </Card.Text>
                <Card.Text className="font-bold">{item.price}</Card.Text>
                <Button variant="primary">Xem chi tiết</Button>
                <Button className="bg-orange-500 text-white mx-2">
                  Mua ngay
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <h2 className="text-3xl text-center text-pink-400">
        PHONG CÁCH HOTTREND
      </h2>
      <div className="mx-auto w-[130px] h-[3px] bg-black mt-4"></div>
      <div className="flex justify-center gap-5 m-11">
        <div>
          <img
            src="https://js0fpsb45jobj.vcdn.cloud/storage/upload/media/nhung-mau-dam-di-bien/nhung-mau-dam-di-bien-nang-tho.jpg"
            alt=""
            className="h-full"
          />
        </div>
        <div>
          <img
            src="https://www.cleanipedia.com/images/5iwkm8ckyw6v/1NjepsAj4C2wBUd3lQmDK3/0b3a54acfd1d7a7370de8690d7b8617e/U2NyZWVuc2hvdF8yMDIxLTA1LTA0XzExMzAyNy5wbmc/600w/ch%E1%BB%93ng-qu%E1%BA%A7n-%C3%A1o-g%E1%BB%8Dn-g%C3%A0ng-tr%C3%AAn-b%C3%A0n-g%E1%BB%97..webp"
            alt=""
            className="h-3/5 w-[600px]"
          />
          <div className="flex gap-6">
            <img
              src="https://i.ytimg.com/vi/5g6L0bteVgo/maxresdefault.jpg"
              alt=""
              className="w-72 h-56 mt-10"
            />
            <img
              src="https://gitana.vn/image/catalog/san-pham/D%C3%89P%20STEELER/ban-dep-da-nam-cao-cap-hang-hieu-steeler-hcm-20.jpg"
              alt=""
              className="w-72 h-56 mt-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
