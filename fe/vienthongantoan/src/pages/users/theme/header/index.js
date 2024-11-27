import { memo, useState } from "react";
import "./style.scss";
import { AiFillInstagram, AiFillLinkedin, AiOutlineFacebook, AiOutlineIe, AiOutlineMail, AiOutlineShoppingCart, AiOutlineTruck, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [Menus, setMenus] = useState([
        {
            name: "Trang chủ",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Cửa hàng",
            path: ROUTERS.USER.PRODUCTS,
        },
        {
            name: "Sản phẩm",
            path: "",
            isShowSubmenu: false,
            child: [
                {
                    name: "Thịt",
                    path: "",
                },
                {
                    name: "Thức ăn nhanh",
                    path: "",
                },
                {
                    name: "Rau củ quả",
                    path: "",
                },
            ],
        },
        {
            name: "Bài viết",
            path: "",
        },
        {
            name: "Liên hệ",
            path: "",
        },
    ])
    return (
    <>
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-6 header__top_left">
                        <ul>
                            <li><AiOutlineMail />Mail</li>
                            <li><AiOutlineTruck />Miễn ship đơn {formatter(2000000)}</li>
                        </ul>
                    </div>
                    <div className="col-6 header__top_right">
                        <ul>
                            <li>
                                <Link to={""}><AiOutlineFacebook /></Link>
                                
                            </li>
                            <li><Link to={""}><AiFillInstagram /></Link></li>
                            <li><Link to={""}><AiFillLinkedin /></Link></li>
                            <li><Link to={""}><AiOutlineIe /></Link></li>
                            <li>
                                <Link to={""}>
                                    <AiOutlineUserAdd />
                                </Link>
                                <span>Đăng nhập</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
            <div className="col-xl-3">
                <div className="header__logo">
                    <h1>VIỄN THÔNG</h1>
                </div>
            </div>
            <div className="col-xl-6">
                <nav className="header__menu">
                    <ul>
                        {
                            Menus?.map((menu, menuKey) =>(
                                <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                    <Link to={menu?.path}>{menu?.name}</Link>
                                </li>

                            ))
                        }
                        {/* <li>
                            
                            <ul>
                                <li>Thịt</li>
                                <li>Lẩu</li>
                                <li>Kho</li>
                            </ul>
                        </li> */}
                    </ul>
                </nav>
            </div>
            <div className="col-xl-3">
                <div className="header__cart">
                    <div className="header__price">
                        <span>{formatter(1000000)}</span>
                    </div>
                    <ul>
                        <li>
                            <Link to="#">
                                <AiOutlineShoppingCart /><span>5</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        
    </>
    );
};
export default memo(Header);