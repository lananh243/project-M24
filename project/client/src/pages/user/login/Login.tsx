import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export default function Login() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrEmail] = useState("");
  const navigate = useNavigate();
  const [existEmail, setExistEmail] = useState<any[]>([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    if (existEmail.includes(email)) {
      setErrEmail("Email đã tồn tại. Mời bạn nhập email khác.");
      setShow(true);
    } else {
      setExistEmail([...existEmail, email]);
      navigate("/");
    }
  };

  const [passwordStatus, setPasswordStatus] = useState(false);
  const progress = () => {
    setPasswordStatus(!passwordStatus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <img
        src="https://lh4.googleusercontent.com/proxy/H51ZnIsdWI3y90mwheCgseMuwIj8v0rRCw4Q2s1gsa-er0nIFghwVjQ-kiJH_COgpBidSSsEBBlwnioS50X9UKZ0KKQv4vvnFL3F4V4kkbSkf7j1-JITKnxhjmhB-zC50ueg9L4wSxXXfTlLzA"
        alt=""
        className="login__img"
      />
      <form action="" className="login__form" onSubmit={handleSubmit}>
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
              <label htmlFor="" className="login__label">
                Họ và tên
              </label>
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <label htmlFor="" className="login__label">
                Email
              </label>
            </div>
          </div>
          <div className="login__box">
            <i className="fa-solid fa-lock login__icon"></i>
            <div className="login__box-input">
              <input
                type={passwordStatus ? "text" : "password"}
                className="login__input"
                required
                id="login-pass"
                placeholder=" "
              />
              <label htmlFor="" className="login__label">
                Mật khẩu
              </label>
              <i
                className={`fa-regular ${
                  passwordStatus ? "fa-eye" : "fa-eye-slash"
                } login__eye`}
                id="login-eye"
                onClick={progress}
              ></i>
            </div>
          </div>
        </div>
        <div className="login__check">
          <div className="login__check-group">
            <input type="checkbox" className="login__check-input" />
            <label htmlFor="" className="login__check-label">
              Remember me
            </label>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-red-600">Lỗi</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-red-500">
          {errorEmail && <p>{errorEmail}</p>}
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
