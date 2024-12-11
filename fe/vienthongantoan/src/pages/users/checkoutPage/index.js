import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { formatter } from "utils/fomater";
const CheckoutPage = () => {
  return (
    <>
      <Breadcrumb name="Thanh toán" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h2>Địa chỉ giao hàng</h2>
            <div className="checkout__input">
              <label>
                Họ và tên: <span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập họ và tên" />
            </div>
            <div className="checkout__input">
              <label>
                Địa chỉ:<span className="required">*</span>
              </label>
              <input type="text" placeholder="Nhập địa chỉ" />
            </div>
            <div className="checkout__input__group">
              <div className="checkout__input">
                <label>
                  Điện thoại:<span className="required">*</span>
                </label>
                <input type="text" placeholder="Nhập số điện thoại" />
              </div>
              <div className="checkout__input">
                <label>
                  Email:<span className="required">*</span>
                </label>
                <input type="email" placeholder="Nhập email" />
              </div>
            </div>
            <div className="checkout__input">
              <label>Ghi chú:</label>
              <textarea placeholder="Nhập ghi chú đơn hàng" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="checkout__order">
              <h3>Đơn hàng</h3>
              <ul>
                <li>
                  <h4>Camera KB</h4>
                  <span>Xem chi tiết</span>
                  <b>{formatter(1000000)}</b>
                </li>
                <li>
                  <h4>Camera Dahua</h4>
                  <span>Xem chi tiết</span>
                  <b>{formatter(1000000)}</b>
                </li>
                <li>
                  <h4>Số lượng</h4>
                  <b>2</b>
                </li>
                <li>
                  <h4>Mã giảm giá</h4>
                  <b>ANTOAN2025</b>
                </li>
                <li className="checkout__order_subtotal">
                  <h3>Tổng đơn</h3>
                  <b>{formatter(2000000)}</b>
                </li>
              </ul>
              <button type="button" className="button-submit">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(CheckoutPage);
