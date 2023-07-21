import Header from "./Header";
import Products from "./Products";
import BannerMain from "./BannerMain";
import Atributes from "./Atributes";
import SwiperMain from "../../components/Swiper/SwiperMain";

// Media Queery
import MediaQuery from "react-responsive";
import MobileSwiper from "../../mobile/MobileSwiper/MobileSwiper";

// Products
import Product from "../../components/ProductMain/Product";
import MobileHomeSwiper from "../../mobile/MobileHomeSwiper/MobileHomeSwiper";
import CookiesModal from "../../components/CookiesModal/CookiesModal";

function HomePage() {
  return (
    <div className="home-page">
      <div className="container">
        <MediaQuery minWidth={950}>
          <Header />
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <MobileHomeSwiper />
        </MediaQuery>
      </div>

      <MediaQuery minWidth={401}>
        <Products />
      </MediaQuery>
      <MediaQuery maxWidth={400}>
        <div className="mobile-swiper-wrapper">
          <h1>Popular Items</h1>
          <MobileSwiper
            color={"#262a32"}
            slideNumber={10}
            component={Product}
          />
        </div>
      </MediaQuery>

      <BannerMain />
      <CookiesModal />
      <MediaQuery minWidth={850}>
        <SwiperMain />
      </MediaQuery>

      <Atributes />
    </div>
  );
}

export default HomePage;
