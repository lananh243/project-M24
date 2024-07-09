import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
interface User {
  name: string;
  email: string;
  password: string;
}
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [passwordStatus, setPasswordStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const progress = () => {
    setPasswordStatus(!passwordStatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate("/");
    } else {
      handleShow();
    }
    console.log(user);
  };

  return (
    <div className="login">
      <img
        src="https://png.pngtree.com/background/20230604/original/pngtree-pink-soft-watercolor-pastel-background-for-wedding-invitation-picture-image_2872970.jpg"
        alt=""
        className="login__img"
      />
      <form className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Đăng nhập</h1>
        <div className="login__content">
          <div className="login__box">
            <i className="fa-regular fa-user login__icon"></i>
            <div className="login__box-input">
              <input
                type="text"
                className="login__input"
                required
                placeholder=" "
              />
              <label className="login__label">Họ và tên</label>
            </div>
          </div>
          <div className="login__box">
            <i className="fa-regular fa-envelope login__icon"></i>
            <div className="login__box-input">
              <input
                type="email"
                className="login__input"
                required
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="login__label">Email</label>
            </div>
          </div>
          <div className="login__box">
            <i className="fa-solid fa-lock login__icon"></i>
            <div className="login__box-input">
              <input
                type={passwordStatus ? "text" : "password"}
                className="login__input"
                required
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="login__label">Mật khẩu</label>
              <i
                className={`fa-regular ${
                  passwordStatus ? "fa-eye" : "fa-eye-slash"
                } login__eye`}
                onClick={progress}
              ></i>
            </div>
          </div>
        </div>
        <div className="login__check">
          <div className="login__check-group">
            <input type="checkbox" className="login__check-input" />
            <label className="login__check-label">Remember me</label>
          </div>
        </div>
        <button
          type="submit"
          className="login__button text-xl"
          onClick={handleShow}
        >
          Đăng Nhập
        </button>
        <p className="login__register">
          Bạn chưa có tài khoản ? <Link to="/register">Đăng kí</Link>
        </p>
      </form>
      {/* Modal component for showing error messages */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-red-600">Lỗi</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-red-500">
          <p>Email hoặc mật khẩu không chính xác.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
