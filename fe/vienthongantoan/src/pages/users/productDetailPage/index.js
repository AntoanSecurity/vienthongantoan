import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import cat1Img from "assets/users/images/cat/DH-H2C.png";
import cat2Img from "assets/users/images/cat/DH-H2C-1.png";
import cat3Img from "assets/users/images/cat/DH-H2C-2.png";

import {
  AiOutlineCopy,
  AiOutlineEye,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { formatter } from "utils/fomater";
import { ProductCard, Quantity } from "component";
import { featProducts } from "utils/common";

const ProductDetailPage = () => {
  const imgs = [cat1Img, cat2Img, cat3Img];

  return (
    <>
      <Breadcrumb name="Chi tiết sản phẩm" />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__pic">
            <img src={cat1Img} alt="product-pic" />
            <div className="main">
              {imgs.map((item, key) => (
                <img src={item} alt="product-pic" key={key} />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-xl-12 col-md-12 col-sm-12 col-xs-12 product__detail__text">
            <h2>Camera Dahua Wifi DH-IPC-HFW1230DS </h2>
            <div className="seen-icon">
              <AiOutlineEye />
              {` 10 (lượt đã xem) `}
            </div>
            <h3>{formatter(1250000)}</h3>
            <p>
              – Độ phân giải camera 2.0 Megapixel phù hợp lắp đặt ngoài trời
              <br />
              – Chuẩn nén hình ảnh H.265+.
              <br />
              – Ống kính cố định 3.6mm, tầm xa hồng ngoại thông minh 30m
              <br />
              – Chống ngược sáng DWDR tốt
              <br />
              – Hỗ trợ khe cắm thẻ nhớ 256GB
              <br />
              – Hỗ trợ kết nối Wifi, tích hợp MIC thu âm
              <br />– Chuẩn chống nước IP67
            </p>
            <Quantity />
            <ul>
              <li>
                <b>Tình trạng:</b> <span>Còn hàng</span>
              </li>
              <li>
                <b>Số lượng:</b> <span>20</span>
              </li>
              <li>
                <b>Chia sẻ:</b>{" "}
                <span>
                  <AiOutlineFacebook />
                  <AiOutlineLinkedin />
                  <AiOutlineCopy />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="product__detail__tab">
          <h4>Thông tin chi tiết</h4>
          <div>
            <ul>
              <li>
                <p>
                  DH-IPC-HFW1230DS-SAW hỗ trợ đèn hồng ngoại ban đêm thông
                  minh.&nbsp;
                </p>
              </li>
              <li>
                <p>
                  DAHUA DH-IPC-HFW1230DS-SAW là dòng sản phẩm camera ngoài trời
                  mới được ra mắt vào cuối năm 2022. Sử dụng vật liệu chắc chắn,
                  phát hiện thông báo những bất thường xung quanh, thu tiếng.
                </p>
              </li>
              <li>
                <p>
                  Camera có đèn hồng ngoại ban đêm giúp ta có thể quan sát ban
                  đêm dễ dàng và tầm nhìn của đèn hồng ngoại lên đến 30m, quan
                  sát ngay từ phía xa.
                </p>
              </li>
            </ul>
            <p>
              <strong>Độ phân giải hình ảnh Full HD</strong>
            </p>
            <ul>
              <li>
                <p>
                  Camera Dahua có độ phân giải 2 Megapixel cho bạn hình ảnh sắc
                  nét. Chế độ chống ngược sáng, tự động cân bằng ánh sáng, bù
                  tín hiệu ảnh và chống nhiễu
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>
                    Xem lại lịch sử ghi hình với dung lượng lưu trữ lớn
                  </strong>
                  <br />* Trên thân camera có sẵn khe cắm thẻ nhớ dung lượng tối
                  đa 256GB, thoải mái lưu trữ:
                  <p>– Thẻ nhớ 16Gb, thời gian lưu trữ full 1-2 ngày</p>
                  <p>– Thẻ nhớ 32Gb, thời gian lưu trữ full 3-5 ngày</p>
                  <p>– Thẻ nhớ 64Gb, thời gian lưu trữ full 7-8 ngày</p>
                  <p>– Thẻ nhớ 128Gb, thời gian lưu trữ full 13-15 ngày</p>
                  <p>– Thẻ nhớ 256Gb, thời gian lưu trữ full 30 ngày</p>
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>
                    Thông số kỹ thuật camera IP Wifi 2MP DAHUA
                    DH-IPC-HFW1230DS-SAW
                  </strong>
                  <br />
                  – Độ phân giải 2 Megapixel
                  <br />
                  – Cảm biến CMOS 1/3”, Max 2 MP (1920 × 1080)@25/30 fps
                  <br />
                  – Chuẩn nén hình ảnh H.265+.
                  <br />
                  – Ống kính cố định 3.6mm (tùy chọn 2.8mm)
                  <br />
                  – Tầm xa hồng ngoại 30m với công nghệ hồng ngoại thông minh
                  <br />
                  – Chế độ ngày đêm (ICR), Chống ngược sáng DWDR, tự động cân
                  bằng trắng (AWB), tự động bù tín hiệu ảnh (AGC), bù sáng
                  (BLC), chống nhiễu (3D-DNR)
                  <br />
                  – Hỗ trợ khe cắm thẻ nhớ 256GB
                  <br />
                  – Hỗ trợ kết nối Wifi, tích hợp MIC thu âm
                  <br />
                  – Hỗ trợ xem hình bằng nhiều công cụ: Web, phần mềm CMS
                  (DSS/PSS) và DMSS
                  <br />
                  – Chuẩn tương thích Onvif (Profile S/Profile G)
                  <br />
                  – Chuẩn chống nước IP67
                  <br />
                  – Điện áp DC12V, công suất 4.1W.
                  <br />
                  – Chất liệu kim loại
                  <br />
                  – Kích thước: 166.2 mm × 70.0 mm × 128.6 mm
                  <br />
                  – Trọng lượng: 477.9 g<br />
                  – Xuất xứ: Trung Quốc
                  <br />
                  – Bảo hành: 24 tháng
                  <br />
                </p>
              </li>
              <br />
              <li>
                <p>
                  <strong>
                    Hướng dẫn cài đặt và sử dụng camera trên điện thoại
                  </strong>
                  <br />
                  Với phần mềm DMSS/gDMSS Life, chủ thiết bị sẽ giám sát từ xa,
                  thao tác các tính năng rất nhanh.
                  <br />
                  <br />
                  Bước 1: Tải ứng dụng DMSS/gDMSS Life trên Android hay IOS.
                  <br />
                  Bước 2: Mở App và đăng ký tài khoản sử dụng bằng số điện thoại
                  hoặc email.
                  <br />
                  Bước 3: Quét mã QR bên dưới đế camera để thêm thiết bị.
                  <br />
                  Bước 4: Kết nối Wi-Fi cho thiết bị và đợi cho đến khi cấu hình
                  hoàn tất.
                  <br />
                  Bước 5: Khởi tạo thẻ nhớ.
                  <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-title">
          <h2>Sản phẩm tương tự</h2>
        </div>
        <div className="row">
          {featProducts.all.products.map((item, key) => (
            <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <ProductCard img={item.img} name={item.name} price={item.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(ProductDetailPage);
