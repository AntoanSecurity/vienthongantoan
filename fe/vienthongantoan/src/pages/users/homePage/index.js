import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import catImg from "assets/users/images/categories/cat01.jpg";
import cat1Img from "assets/users/images/categories/cat02.png";
import cat2Img from "assets/users/images/categories/cat03.jpg";
import cat3Img from "assets/users/images/categories/cat04.jpg";
import cat4Img from "assets/users/images/categories/cat05.png";
import featuredImg from "assets/users/images/featured/trung-tam-hunonic.jpg";
import featured1Img from "assets/users/images/featured/nha-thong-minh.jpg";
import featured2Img from "assets/users/images/featured/led-p3.png";
import featured3Img from "assets/users/images/featured/trung-tam-hunonic.jpg";
import featured4Img from "assets/users/images/featured/trung-tam-hunonic.jpg";
import "./style.scss";
import { render } from "@testing-library/react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { AiOutlineEye, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatter } from "utils/fomater";
const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const sliderItem = [
        {
          bgImg: catImg,
          name: "Dahua",
        },
        {
          bgImg: cat1Img,
          name: "KBVision",
        },
        {
          bgImg: cat2Img,
          name: "Imou",
        },
        {
          bgImg: cat3Img,
          name: "HKVision",
        },
        {
          bgImg: cat4Img,
          name: "GKGD",
        },
      ];
      const featProducts = {
        all: {
          title: "Toàn bộ",
          products: [
            {
              img: featuredImg,
              name: "Camera quan sát",
              price: 1000000,
            },
            {
              img: featured1Img,
              name: "Nhà thông minh",
              price: 1000000,
            },
            {
              img: featured2Img,
              name: "Tivi màn hình Led",
              price: 1000000,
            },
            {
              img: featured3Img,
              name: "Truyền hình vệ tinh Sattelite",
              price: 1000000,
            },
            {
              img: featured4Img,
              name: "Định vị Ô Tô - Xe máy",
              price: 1000000,
            },
          ],
        },
        camera: {
          title: "Camera quan sát",
          products: [
            {
              img: featuredImg,
              name: "Dahua",
              price: 1500000,
            },
            {
              img: featuredImg,
              name: "KB Vision",
              price: 1500000,
            },
            {
              img: featuredImg,
              name: "HIK Vision",
              price: 1500000,
            },
            {
              img: featuredImg,
              name: "Imou",
              price: 1500000,
            },
          ],
        },
        smarthome: {
          title: "Nhà thông minh",
          products: [
            {
              img: featuredImg,
              name: "lumi",
              price: 1500000,
            },
            {
              img: featuredImg,
              name: "hunonic",
              price: 1500000,
            },
            {
              img: featuredImg,
              name: "Rạng đông",
              price: 1500000,
            },
          ],
        },
        television: {
          title: "Tivi màn hình led",
          products: [
            {
              img: featuredImg,
              name: "GKGD",
              price: 1500000,
            },
            {
              img: featuredImg,
              name: "Cailliang",
              price: 1500000,
            },
            {
              img: featuredImg,
              name: "Huidu",
              price: 1500000,
            },
          ],
        },
      };
      const renderFeaturedProducts = (data) => {
        const tabList = [];
        const tabPanels = [];

        Object.keys(data).forEach((key, index) => {
          // console.log(key, index);
          tabList.push(<Tab key={index}>{data[key].title}</Tab>);
          
          const tabPanel = [];
          data[key].products.forEach((item, j) => {
            tabPanel.push(
            <div className="col-lg-3 col-md-4 col-sm-6 col-sm-12" key={j}>
              <div className="featured__item pl-pr-5">
                <div className="featured__item__pic" style={{backgroundImage: `url(${item.img}`,}}>
                  <ul className="featured__item__pic__hover">
                    <li><AiOutlineEye /></li>
                    <li><AiOutlineShoppingCart /></li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6><Link to="">{item.name}</Link></h6>
                  <h5>{formatter(item.price)}</h5>
                </div>
              </div>
            </div>);
          });
          tabPanels.push(tabPanel);
        });
        return (
          <Tabs>
            <TabList>{tabList}</TabList>
            {tabPanels.map((item, key) => (
              <TabPanel key={key}>
                <div className="row">{item}</div>
              </TabPanel>
            ))}
          </Tabs>
        );
      };
    return (
      <>
      {/*Categories Begin*/}
      <div className="container container__categories__slider">
            <Carousel responsive={responsive} className="categories__slider">
              {sliderItem.map((item, key) => (
                <div className="categories__slider_item" 
                style={{backgroundImage: `url(${item.bgImg})`}} key={key}>
                  <p>{item.name}</p>
                </div>
              ))}
                
            </Carousel>
        </div>
      {/*Categories End*/}
      {/* Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProducts(featProducts)}
        </div>
      </div>
      {/* Featured End */}
      {/* Banner Begin */}
      <div className="container">
        <div className="banner">
          <div className="banner__pic">
            <img src={featured2Img} alt="banner" />
          </div>
          <div className="banner__pic">
            <img src={featured2Img} alt="banner" />
          </div>
        </div>
      </div>
      {/* Banner End */}
      </>
    );
};
export default memo(HomePage);