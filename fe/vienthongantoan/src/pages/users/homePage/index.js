import catImg from "assets/users/images/categories/cat01.jpg";
import cat1Img from "assets/users/images/categories/cat02.png";
import cat2Img from "assets/users/images/categories/cat03.jpg";
import cat3Img from "assets/users/images/categories/cat04.jpg";
import cat4Img from "assets/users/images/categories/cat05.png";
import featuredImg from "assets/users/images/featured/trung-tam-hunonic.jpg";
import featured1Img from "assets/users/images/featured/nha-thong-minh.jpg";
import featured2Img from "assets/users/images/featured/led-p3.png";
import featured3Img from "assets/users/images/featured/dahua-h2ae.png";
import featured4Img from "assets/users/images/featured/dahua-h2c.png";
import featured5Img from "assets/users/images/featured/imou-a42p.jpg";
import featured6Img from "assets/users/images/featured/KX-C2007ePN2.png";
import featured7Img from "assets/users/images/featured/HIKVISION SH-KIS6213.jpg";
import featured8Img from "assets/users/images/featured/lumi trọn bộ.jpg";
import { ProductCard } from "component";
import { memo } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./style.scss";
import { featProducts } from "utils/common";

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
      },
    };
    const sliderItems = [
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
    
    const renderFeaturedProducts = (data) => {
      const tabList = [];
      const tabPanels = [];
  
      Object.keys(data).forEach((key, index) => {
        tabList.push(<Tab key={index}>{data[key].title}</Tab>);
  
        const tabPanel = [];
        data[key].products.forEach((item, j) => {
          tabPanel.push(
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={j}>
              <ProductCard name={item.name} img={item.img} price={item.price} />
            </div>
          );
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
              {sliderItems.map((item, key) => (
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
            <img src={featured1Img} alt="banner" />
          </div>
          <div className="banner__pic">
            <img src={featured1Img} alt="banner" />
          </div>
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