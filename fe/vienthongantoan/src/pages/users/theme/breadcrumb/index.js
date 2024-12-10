import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { ROUTERS } from "utils/router";

const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__text">
                <h1>VIỄN THÔNG AN TOÀN</h1>
                <div className="breadcrumb__option">
                    <ul>
                        <li className="link">
                            <Link to={ROUTERS.USER.HOME}>Trang chủ</Link>
                        </li>
                        <li>{props.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default memo(Breadcrumb);