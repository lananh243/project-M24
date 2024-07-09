import React, { useEffect, useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllUser } from "../../../store/reducers/usersReducer";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status
  const [userData, setUserData] = useState(null); // State to hold user data
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser())
  })
  // Example function to handle login
  const handleLogin = () => {
   dispatch(g)
  };

  // Example function to handle logout
  const handleLogout = () => {
    // Perform logout logic here
    setUserData(null);
    setLoggedIn(false);
  };
  return (
    <>
      <div className="w-full h-[130px] bg-slate-50 flex justify-around items-center">
        <img
          className="w-36 h-36"
          src="https://beelenhandmade.com/wp-content/uploads/2024/06/Beelenhandmade.png"
          alt=""
        />
        <div className=" h-[35px] border-4 border-gray-400">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-[350px] border-none"
          />
          <i className="fa-solid fa-magnifying-glass justify-end"></i>
        </div>
        <div className="flex gap-8">
          <div className="text-gray-400 h-11 w-1">|</div>
          <div className="flex gap-4">
            <p className="text-xl">Giỏ hàng</p> /
            <div className="relative bottom-2">
              <i className="fa-solid fa-bag-shopping text-3xl"></i>
              <div className="absolute top-1 left-4 w-4 h-4 bg-yellow-100 rounded-full"></div>
            </div>
          </div>
          {loggedIn ? (
            <div className="flex items-center gap-4">
              {userData && (
                <>
                  <img
                    src={userData.image}
                    alt=""
                    className="w-12 h-12 rounded-full border-2 border-black"
                  />
                  <b>{userData.name}</b>
                </>
              )}
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
        <h2 className="text-3xl text-center text-pink-400 m-10">
          DANH MỤC BÁN CHẠY
        </h2>
        <div className="flex justify-center m-10 gap-5">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/2024/06/2-9-300x300.png"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Hoa len bó</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Hoa hồng mix hoa lưu ly
              </Card.Text>
              <Card.Text className="font-bold">100.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/2-8-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Hoa lẻ</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Hoa hồng
              </Card.Text>
              <Card.Text className="font-bold">120.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/4-5-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Móc khóa</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Móc khóa cung hoàng đạo
              </Card.Text>
              <Card.Text className="font-bold">40.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/5-2-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Phụ kiện</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Bánh sinh nhật
              </Card.Text>
              <Card.Text className="font-bold">250.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="flex justify-center m-10 gap-5">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/2-5-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Hoa lẻ</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Hoa thú
              </Card.Text>
              <Card.Text className="font-bold">30.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/3-3-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Hoa len bó</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Hoa lưu ly
              </Card.Text>
              <Card.Text className="font-bold">70.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/2-3-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Hoa len bó</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Hoa sen
              </Card.Text>
              <Card.Text className="font-bold">189.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/2-2-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Phụ kiện</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Túi mini
              </Card.Text>
              <Card.Text className="font-bold">50.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center text-pink-400 m-10">
          SẢN PHẨM MỚI CẬP NHẬT
        </h2>
        <div className="flex justify-center m-10 gap-5">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/2-2-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Áo đan len</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Áo len họa tiết
              </Card.Text>
              <Card.Text className="font-bold">110.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/05/2-2-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Áo đan len</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Áo len hoa
              </Card.Text>
              <Card.Text className="font-bold">121.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/05/3-3-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Áo đan len</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Áo len trắng ngọc
              </Card.Text>
              <Card.Text className="font-bold">111.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/05/1-2-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Áo đan len</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Áo len xanh ngọc
              </Card.Text>
              <Card.Text className="font-bold">99.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="flex justify-center m-10 gap-5">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/5-300x300.png.bv_resized_desktop.png.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Hoa thú</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Chậu hoa đầu thú
              </Card.Text>
              <Card.Text className="font-bold">99.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/Snapinsta.app_436227269_779604164143634_7965383776702395380_n_1080-300x300.jpg.bv_resized_desktop.jpg.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Gấu nhỏ</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Gấu đội mũ
              </Card.Text>
              <Card.Text className="font-bold">22.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/Snapinsta.app_436624946_1159399751737485_503098841301846950_n_1080-300x300.jpg.bv_resized_desktop.jpg.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Thú len</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Gấu nhỏ 5 màu
              </Card.Text>
              <Card.Text className="font-bold">40.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/Snapinsta.app_436472731_830166502460694_5699366756734875508_n_1080-300x300.jpg.bv_resized_desktop.jpg.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Thú len</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Gấu nhỏ nhiều màu
              </Card.Text>
              <Card.Text className="font-bold">55.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="flex justify-center m-10 gap-5">
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/Snapinsta.app_436616783_309579678821451_4980076836134553827_n_1080-1-300x300.jpg.bv_resized_desktop.jpg.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Sét đồ thú vị</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Sét chũi nâu
              </Card.Text>
              <Card.Text className="font-bold">130.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/Snapinsta.app_436380202_772053777962524_6032889301681875682_n_1080-300x300.jpg.bv_resized_desktop.jpg.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Sét đồ thú vị</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Sét ếch
              </Card.Text>
              <Card.Text className="font-bold">100.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/Snapinsta.app_435461200_1609454623133922_3011892420051387273_n_1080-300x300.jpg.bv_resized_desktop.jpg.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Sét đồ thú vị</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Sét kuromi
              </Card.Text>
              <Card.Text className="font-bold">129.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "16rem" }}>
            <Card.Img
              variant="top"
              src="https://beelenhandmade.com/wp-content/uploads/al_opt_content/IMAGE/beelenhandmade.com/wp-content/uploads/2024/06/Snapinsta.app_436227259_386451300961434_227844149117653959_n_1080-300x300.jpg.bv_resized_desktop.jpg.bv.webp"
            />
            <Card.Body>
              <Card.Title className="text-gray-500">Sét đồ thú vị</Card.Title>
              <Card.Text className="font-medium text-red-500">
                Sét loppy hồng
              </Card.Text>
              <Card.Text className="font-bold">140.000 ₫</Card.Text>
              <Button variant="primary">Xem chi tiết</Button>
              <Button className=" bg-orange-500 text-white mx-2">
                Mua ngay
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
