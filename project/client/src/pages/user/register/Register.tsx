import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUsers } from "../../../store/reducers/usersReducer"; // Adjust the import path if needed

export default function Register() {
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [errorName, setErrorName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrPassword] = useState("");
  const [errCharacterPass, setErrCharacterPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errConfirmPass, setErrConfirmPass] = useState("");
  const [errPass, setErrPass] = useState("");
  const [validEmail, setValidEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [eyeStatus, setEyeStatus] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleCloseSuccess = () => setShowSuccess(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const progress = () => {
    setPasswordStatus(!passwordStatus);
  };

  const changeEye = () => {
    setEyeStatus(!eyeStatus);
  };

  const handleShow = () => {
    setErrorName("");
    setErrorEmail("");
    setErrPassword("");
    setErrConfirmPass("");
    setErrPass("");
    setValidEmail("");
    setErrCharacterPass("");

    if (fullName.trim() === "") {
      setErrorName("Họ và tên không được để trống");
    }
    if (email.trim() === "") {
      setErrorEmail("Email không được để trống");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setValidEmail("Email không đúng định dạng");
    }
    if (password.trim() === "") {
      setErrPassword("Mật khẩu không được để trống");
    } else if (password.length < 5) {
      setErrCharacterPass("Mật khẩu có ít nhất từ 5 ký tự");
    }
    if (confirmPassword.trim() === "") {
      setErrConfirmPass("Nhập lại mật khẩu không được để trống");
    }
    if (password !== confirmPassword) {
      setErrPass("Mật khẩu không khớp");
    }

    if (
      fullName.trim() &&
      email.trim() &&
      /\S+@\S+\.\S+/.test(email) &&
      password.trim() &&
      password.length >= 5 &&
      confirmPassword.trim() &&
      password === confirmPassword
    ) {
      const newUser = {
        fullName,
        email,
        password,
      };
      dispatch(addUsers(newUser));
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/login");
      }, 3000);
    } else {
      setShow(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login">
      <img
        src="https://bizweb.dktcdn.net/100/098/272/files/lam-do-handmade-dep-56e684e8-3add-44f9-8afb-d08218271ceb.jpg?v=1641989622076"
        alt=""
        className="login__img"
      />
      <form action="" className="login__form" onSubmit={handleSubmit}>
        <h1 className="login__title">Đăng kí</h1>
        <div className="login__content">
          <div className="login__box">
            <i className="fa-regular fa-user login__icon"></i>
            <div className="login__box-input">
              <input
                type="text"
                className="login__input"
                required
                placeholder=" "
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <div className="login__box">
            <i className="fa-solid fa-lock login__icon"></i>
            <div className="login__box-input">
              <input
                type={eyeStatus ? "text" : "password"}
                className="login__input"
                required
                id="login-pass"
                placeholder=" "
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="" className="login__label">
                Nhập lại mật khẩu
              </label>
              <i
                className={`fa-regular ${
                  eyeStatus ? "fa-eye" : "fa-eye-slash"
                } login__eye`}
                id="login-eye"
                onClick={changeEye}
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
          Đăng kí
        </button>
        <p className="login__register">
          Bạn đã có tài khoản ? <Link to="/login">Đăng nhập</Link>
        </p>
      </form>

      {/* Error Modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-red-600">Lỗi</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-red-500">
          {errorName && <p>{errorName}</p>}
          {errorEmail && <p>{errorEmail}</p>}
          {errorPassword && <p>{errorPassword}</p>}
          {errConfirmPass && <p>{errConfirmPass}</p>}
          {errPass && <p>{errPass}</p>}
          {validEmail && <p>{validEmail}</p>}
          {errCharacterPass && <p>{errCharacterPass}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Success Modal */}
      <Modal
        show={showSuccess}
        onHide={handleCloseSuccess}
        animation={false}
        className="d-flex justify-content-center align-items-center"
        dialogClassName="modal-90w"
      >
        <div className="flex items-center pl-8">
          <img
            src="https://cdn-icons-png.freepik.com/512/7518/7518748.png"
            alt=""
            className="w-12 h-12"
          />
          <Modal.Body className="text-green-500">
            Đăng kí thành công !!!
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
