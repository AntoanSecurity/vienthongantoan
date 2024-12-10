import { memo } from "react";
import Breadcrumb from "../theme/breadcrumb";
import "./style.scss";
import { Link } from "react-router-dom";
import { categories } from "../theme/header";
import { ROUTERS } from "utils/router";
import featuredImg from "assets/users/images/featured/trung-tam-hunonic.jpg";
import featured1Img from "assets/users/images/featured/nha-thong-minh.jpg";
import featured2Img from "assets/users/images/featured/led-p3.png";
import featured3Img from "assets/users/images/featured/dahua-h2ae.png";
import featured4Img from "assets/users/images/featured/dahua-h2c.png";
import featured5Img from "assets/users/images/featured/imou-a42p.jpg";
import featured6Img from "assets/users/images/featured/KX-C2007ePN2.png";
import featured7Img from "assets/users/images/featured/HIKVISION SH-KIS6213.jpg";
import { ProductCard } from "component";
const ProductPage = () => {
    const sorts = [
        "Giá thấp đến cao",
        "Giá cao đến thấp",
        "Mới đến củ",
        "Củ đến mới",
        "Bán chạy nhất",
        "Đang giảm giá",
    ];
    const products = [
        {
            img: featuredImg,
            name: "Camera quan sát",
            price: "1000000",
          },
          {
            img: featured1Img,
            name: "Nhà thông minh",
            price: "1800000",
          },
          {
            img: featured2Img,
            name: "Tivi màn hình Led",
            price: "380000",
          },
          {
            img: featured3Img,
            name: "Định vị Ô Tô - Xe máy",
            price: "1600000",
          },
          {
            img: featured4Img,
            name: "Báo Trộm - Báo Cháy",
            price: "1600000",
          },
          {
            img: featured5Img,
            name: "Phụ Kiện Điện Tử Viễn Thông",
            price: "1600000",
          },
          {
            img: featured6Img,
            name: "Truyền hình vệ tinh Sattelite",
            price: "1950000",
          },
          {
            img: featured7Img,
            name: "Bất Động Sản Toàn Quốc",
            price: "1600000",
          },
    ];
    return (
        <>
            <Breadcrumb name="Danh sách sản phẩm" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <div className="sidebar__item">
                                <h2>Tìm kiếm</h2>
                                <input type="text" />
                            </div>
                            <div className="sidebar__item">
                                <h2>Mức giá</h2>
                                <div className="price-range-wrap">
                                    <div>
                                        <p>Từ:</p>
                                        <input type="number" min={0} />
                                    </div>
                                    <div>
                                        <p>Đến:</p>
                                        <input type="number" min={0} />
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar__item">
                                <h2>Sắp xếp</h2>
                                <div className="tags">
                                    {sorts.map((item, key) => (
                                        <div className={`tag ${key === 0 ? "active" : ""}`} key={key}>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="sidebar__item">
                                <h2>Thể loại khác</h2>
                                <ul>
                                    {categories.map((name, key) => (
                                        <li key={key}>
                                            <Link to={ROUTERS.USER.PRODUCTS}>{name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            {products.map((item, key) => (
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={key}>
                                    <ProductCard 
                                        name={item.name} 
                                        img={item.img} 
                                        price={item.price} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default memo(ProductPage);