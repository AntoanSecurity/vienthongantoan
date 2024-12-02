import { memo, useState } from "react";
import "./style.scss";
import { AiFillInstagram, AiFillLinkedin, AiOutlineDownCircle, AiOutlineFacebook, AiOutlineIe, AiOutlineMail, AiOutlineMenu, AiOutlinePhone, AiOutlineShoppingCart, AiOutlineTruck, AiOutlineUpCircle, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
import { ROUTERS } from "utils/router";

const Header = () => {
    const [isShowCategories, setShowCategories] = useState(false);
    const [isShowHumberger, setShowHumberger] = useState(false);
    const [menus, setMenus] = useState([
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
                    name: "Camera quan sát",
                    path: "",
                },
                {
                    name: "Nhà thông minh",
                    path: "",
                },
                {
                    name: "Tivi màn hình Led",
                    path: "",
                },
                {
                    name: "Định vị [GPS] Ô Tô - Xe Máy",
                    path: "",
                },
                {
                    name: "Truyền hình vệ tinh Satellite",
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
    ]);
    return (
    <>
        <div 
            className={`humberger__menu__overlay ${
                isShowHumberger ? " active" : ""}`} 
                onClick={() => setShowHumberger(false)}
                />
        <div className={`humberger__menu__wrapper ${isShowHumberger ? " show" : ""}`}>
            <div className="header__logo_nho">
                <h2>VIỄN THÔNG AN TOÀN</h2>
            </div>
            <div className="humberger__menu__cart">
                <ul>
                    <li>
                        <Link to={""}>
                            <AiOutlineShoppingCart /> <span>1</span>
                        </Link>
                    </li>
                </ul>
                <div className="header__cart__price">
                    Giỏ hàng: <span>{formatter(1500000)}</span>
                </div>
            </div>
            <div className="humberger__menu__widget">
                <div className="header__top__fight__auth">
                    <Link to={""}>
                        <AiOutlineUser /> Đăng nhập
                    </Link>
                </div>
            </div>
            <div className="humberger__menu__nav">
                <ul>
                    {menus.map((menu, menuKey) => (
                       <li key={menuKey} to={menu.path}>
                        <Link to={menu.path}
                        onClick={() => {
                            const newMenus = [...menus];
                            newMenus[menuKey].isShowSubmenu = !newMenus[menuKey].isShowSubmenu;
                            setMenus(newMenus);
                        }}>
                            {menu.name}
                            {menu.child &&
                            (menu.isShowSubmenu ? (
                                <AiOutlineDownCircle />
                            ) : (
                                <AiOutlineUpCircle />
                            ))}
                        </Link>
                        {menu.child &&
                        (<ul className={`header__menu__dropdown ${
                            menu.isShowSubmenu ? "show__submenu" : ""}`}>
                            {menu.child.map((childItem, childKey) => (
                            <li key={`${menuKey}-${childKey}`}>
                                <Link to={childItem.path}>{childItem.name}</Link>
                            </li>
                            ))}
                        </ul>
                        )}
                       </li> 
                    ))}
                    
                </ul>
            </div>
            <div className="header__top__fight__social">
                <Link to={""}><AiOutlineFacebook /></Link>
                <Link to={""}><AiFillInstagram /></Link>
                <Link to={""}><AiFillLinkedin /></Link>
                <Link to={""}><AiOutlineIe /></Link>
            </div>
            <div className="humberger__menu__contact">
                <ul>
                    <li><MdEmail />vienthongantoan@gmail.com</li>
                    <li>Miễn ship đơn {formatter(2000000)}</li>
                </ul>
            </div>
        </div>

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
                            <li><Link to={""}><AiOutlineFacebook /></Link></li>
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
            <div className="col-lg-3">
                <div className="header__logo"></div>
            </div>
            <div className="col-lg-6">
                <nav className="header__menu">
                    <ul>
                        {menus?.map((menu, menuKey) =>(
                            <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                <Link to={menu?.path}>{menu?.name}</Link>
                                {menu.child && (
                                    <ul className="header__menu__dropdown">
                                        {menu.child.map((childItem, childKey) =>(
                                            <li key={`${menuKey}-${childKey}`}>
                                                <Link to={childItem.path}>{childItem.name}</Link>
                                            </li>  
                                        ))}
                                    </ul>
                                    )
                                }
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
                <div className="humberger__open">
                    <AiOutlineMenu onClick={() => setShowHumberger(true)} />
                </div>
            </div>
            </div>
        </div>
        <div className="container">
            <div className="row hero__categories_container">
                <div className="col-lg-3 col-sm-12 col-xs-12 col-md-12 hero__categories">
                    <div className="hero__categories__all" onClick={() =>setShowCategories(!isShowCategories)}>
                        <AiOutlineMenu />
                        Danh sách sản phẩm
                    </div>
                    {isShowCategories && (
                        <ul className={isShowCategories ? "" : "hidden"}>
                            <li>
                                <Link to={"#"}>Camera quan sát</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Nhà thông minh</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Tivi màn hình Led</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Định vị [GPS] Ô Tô - Xe Máy</Link>
                            </li>
                            <li>
                                <Link to={"#"}>Truyền hình vệ tinh Satellite</Link>
                            </li>
                        </ul>
                    )}
                    
                </div>
                <div className="col-lg-9 col-sm-12 col-xs-12 col-md-12 hero__search_container">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form>
                                <input type="text" name="" value="" placeholder="Gõ sản phẩm cần tìm vào đây" />
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <AiOutlinePhone />
                            </div>
                            <div className="hero__search__phone__text">
                                <p>0918 056677</p>
                                <span>Hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item">
                        <div className="hero__text">
                            <span>Nhà Thông Minh</span>
                            <h2>
                                Lumi <br />
                                Hàng chính hãng
                            </h2>
                            <p>Miễn phí giao hàng tận nơi</p>
                            <Link to="" className="ptimary-btn">
                            Mua ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};
export default memo(Header);