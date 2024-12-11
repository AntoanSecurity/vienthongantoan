import { memo } from "react";
import "./style.scss";
import { ROUTERS } from "utils/router";
import { useNavigate } from "react-router-dom";

const LoginAdPage = () => {
  const navigate = useNavigate();
  const hanldeSubmit = (e) => {
    e.preventDefault();
    navigate(ROUTERS.ADMIN.ORDERS);
  };
  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">ĐĂNG NHẬP HỆ THỐNG QUẢN TRỊ</h2>
        {/* Form login */}
        <form className="login__form" onSubmit={hanldeSubmit}>
          <div className="login__form-group">
            <label htmlFor="username" className="login__label">
              Tên đăng nhập
            </label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="login__form-group">
            <label htmlFor="password" className="login__label">
              Mật khẩu
            </label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="login__form-group">
            <button type="submit" className="login__button">
              ĐĂNG NHẬP
            </button>
            <a href="#" className="login__forgot-password">
              Quên mật khẩu ?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(LoginAdPage);