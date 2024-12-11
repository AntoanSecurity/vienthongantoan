import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { formatter } from "utils/fomater";
import { Quantity } from "component";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ROUTERS } from "utils/router";
const ShoppingCartPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb name="Giỏ hàng" />
      <div className="container">
        <div className="table__cart">
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Thành tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Camera Dahua Wifi DH-IPC-HFW1230DS</td>
                <td className="shopping__cart__item">
                  <img src="https://via.placeholder.com/50" alt="product-pic" />
                </td>
                <td>
                  <Quantity quantity="2" hasAddToCart={false} />
                  {/* <input type="number" min="1" max="100" defaultValue="1" /> */}
                </td>
                <td>{formatter(1250000)}</td>
                <td>{formatter(1250000)}</td>
                <td className="icon_close">
                  <button type="button">Xóa</button>
                  {/* <AiOutlineClose /> */}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="cart__total"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__continue">
              <h3>Mã giảm giá</h3>
              <div className="shopping__discount">
                <input placeholder="Nhập mã giảm giá" />
                <button type="button" className="button-submit">
                  Áp dụng
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12">
            <div className="shopping__checkout">
              <h2>Tổng đơn:</h2>
              <ul>
                <li>
                  Số lượng: <span>2</span>
                </li>
                <li>
                  Thành Tiền: <span>{formatter(2340000)}</span>
                </li>
              </ul>
              <button
                type="button"
                className="button-submit"
                onClick={() => navigate(ROUTERS.USER.CHECKOUT)}
              >
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ShoppingCartPage);
