import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllProduct } from "../../../store/reducers/productReducer";
import { Product } from "../../../interfaces";
import { getAllUser } from "../../../store/reducers/usersReducer";

export default function Home() {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("account") || "null")
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data: any = useSelector((state: any) => state.productReducer.products);
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

  // Ham chuyen sang trang detail
  const handleDetail = (id: number, product: Product) => {
    navigate(`/detailProduct/${id}`);
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
        <h2 className="text-3xl text-center text-pink-400">
          Giới Thiệu Về Đồ HANDMADE
        </h2>

        <div className="mx-auto w-[135px] h-[2px] bg-black m-4"></div>
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
              <Card.Img variant="top" src={item.image} className="h-64" />
              <Card.Body>
                <Card.Title className="text-gray-500">{item.name}</Card.Title>
                <Card.Text className="font-medium text-red-500">
                  {item.category}
                </Card.Text>
                <Card.Text className="font-bold">{item.price}</Card.Text>
                <a href="" onClick={() => handleDetail(item.id, item)}>
                  <Button variant="primary">Xem chi tiết</Button>
                </a>
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
      <div>
        <h1 className="text-3xl text-pink-400 text-center">Mẹo hay sử dụng</h1>
        <div className="mx-auto w-[130px] h-[3px] bg-black mt-4"></div>
        <div className="h-60 w-10/12 bg-white-50 m-auto mt-5 shadow-sm flex items-center">
          <div className="flex gap-5">
            <div className="ml-10">
              <img
                src="https://hopquatet.vn/wp-content/uploads/2022/08/tu-lam-gio-qua-tet-Handmade.jpg"
                alt=""
                className="w-52 rounded-md"
              />
            </div>
            <div>
              <h1 className="text-red-400 text-lg">Quà tặng ý nghĩa</h1>
              <p className="mt-2">
                Biểu hiện của tình cảm và sự <br />
                quan tâm mà người tặng gửi gắm.
                <br />
                Những món quà được chuẩn bị <br />
                tỉ mỉ,chu đáo sẽ làm người nhận <br />
                thấy đặc biệt và hạnh phúc.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="ml-24">
              <img
                src="https://quatnhua.vn/uploaded/Tin-tuc/tin-tuc-1/cach-lam-do-choi-vai/vai.jpg"
                alt=""
                className="w-52 h-40 rounded-md"
              />
            </div>
            <div>
              <h1 className="text-red-400 text-lg">
                Công dụng của đồ handmade
              </h1>
              <p className="mt-2">
                Đồ handmade làm từ nguyên liệu tự nhiên <br />
                thể hiện sự sáng tạo và tâm huyết
                <br />
                của người làm. sản xuất tỉ mỉ và tinh tế <br />
                từ chính đôi tay của nghệ nhân, <br />
                mang lại giá trị tinh thần to lớn.
              </p>
            </div>
          </div>
        </div>
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
    </>
  );
}
