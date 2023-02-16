import { Carousel, Button } from "antd";
import { useState, useEffect } from "react";
import style from "./Home.module.scss";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Home() {
  const [size, setSize] = useState("large");
  const nav = useNavigate();
  const contentStyle = {
    height: "80vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  const send = () => {
    nav("/products");
  };
  return (
    <>
      <section className={style.showcase}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?format=jpg&quality=90&v=1614559651"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://m.media-amazon.com/images/G/31/selldot/Images/WebpImages/BannerImage-PopularcategoriestoSellOnline.webp"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://images.everydayhealth.com/images/what-are-natural-skin-care-products-alt-1440x810.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZTvTYTqaTfLF9OpombK0y5EdNDBwgeUbgw&usqp=CAU"
                alt=""
              />
            </h3>
          </div>
        </Carousel>
        <Button
          type="primary"
          size={size}
          className={style.corBtn}
          onClick={send}
        >
          See More
          <i class="fa-solid fa-angle-right" style={{ marginLeft: 10 }}></i>
        </Button>
      </section>

      <Footer />
    </>
  );
}
