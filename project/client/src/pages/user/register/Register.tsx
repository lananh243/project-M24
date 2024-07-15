import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUsers } from "../../../store/reducers/usersReducer";

export default function Register() {
  const [passwordStatus, setPasswordStatus] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
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
  const [errors, setErrors] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const validateInput = () => {
    let validate = true;
    const newErrors = {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      address: "",
    };

    if (!fullName.trim()) {
      newErrors.fullname = "Họ và tên không được để trống";
      validate = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email không được để trống";
      validate = false;
    }
    if (!password.trim()) {
      newErrors.password = "Mật khẩu không được để trống";
      validate = false;
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu không khớp";
      validate = false;
    }
    if (!phone.trim()) {
      newErrors.phone = "Số điện thoại không được để trống";
      validate = false;
    }
    if (!address.trim()) {
      newErrors.address = "Địa chỉ không được để trống";
      validate = false;
    }
    setErrors(newErrors);
    return validate;
  };

  const handleCheck = () => {
    if (validateInput()) {
      const newUser = {
        fullname: fullName,
        email: email,
        password: password,
        phone: phone,
        address: address,
        status: true,
        role: "user",
        cart: [],
      };

      dispatch(addUsers(newUser));
      setShowSuccess(true);
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
      setAddress("");
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/login");
      }, 3000);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="login">
      <img
        src="https://img4.thuthuatphanmem.vn/uploads/2020/12/25/background-powerpoint-xanh-trang_060333380.jpg"
        alt=""
        className="login__img"
      />
      <form action="" className="login__form mt-8">
        <h1 className="login__title">Đăng kí</h1>
        <div className="login__content ">
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
          <div className="login__box">
            <i className="fa-solid fa-phone login__icon"></i>
            <div className="login__box-input">
              <input
                type="text"
                className="login__input"
                required
                placeholder=" "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <label htmlFor="" className="login__label">
                Phone
              </label>
            </div>
          </div>
          <div className="login__box">
            <i className="fa-solid fa-location-dot login__icon"></i>
            <div className="login__box-input">
              <input
                type="text"
                className="login__input"
                required
                placeholder=" "
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <label htmlFor="" className="login__label">
                Địa chỉ
              </label>
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
          type="button"
          className="login__button text-xl"
          onClick={handleCheck}
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
          {errors.fullname && <p>{errors.fullname}</p>}
          {errors.email && <p>{errors.email}</p>}
          {errors.password && <p>{errors.password}</p>}
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          {errors.phone && <p>{errors.phone}</p>}
          {errors.address && <p>{errors.address}</p>}
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
