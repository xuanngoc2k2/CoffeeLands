import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx('header')}>
        <Header />
      </div>
      <div className={cx("container")}>
        {children}
      </div>
      <div className={cx('footer')}>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
