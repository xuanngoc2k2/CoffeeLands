import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Banner from "~/components/Banner";
import images from "~/assets/images";
const cx = classNames.bind(styles);

const dataBanner = [{
  img: images.imgBanner1,
  to: "#",
},
{
  img: images.imgBanner2,
  to: "#",
},
{
  img: images.imgBanner3,
  to: "#",
},
{
  img: images.imgBanner4,
  to: "#",
},
{
  img: images.imgBanner5,
  to: "#",
},
{
  img: images.imgBanner6,
  to: "#",
}]
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx('header')}>
        <Header />
      </div>
      <div className={cx("container")}>
        <div className={cx("banner")}>
          <Banner datas={dataBanner} />
        </div>
        <div className={cx('img')}>
          <a href='#'>
            <img src={images.imgBannerSale} />
          </a>
        </div>
        <div className={cx("content")}>{children}</div>
      </div>
      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
