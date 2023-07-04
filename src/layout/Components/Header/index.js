import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "~/assets/images";
import Search from "./Search";
import Menu from "./Menu";
import { Link } from "react-router-dom";


const cx = classNames.bind(styles)
function Header() {
    return (<div className={cx('wrapper-header')}>
        <div className={cx('inner')}>
            <Link to={'/'} style={{ lineHeight: '10px' }}>
                <img className={cx('logo')} src={images.logo} alt="logo" />
            </Link>
            <div className={cx('menu')}>
                <div className={cx('menu-top')}>
                    <Search />
                    <img className={cx('flag')} src={images.flagVn} alt="flag-vn" />
                    <img className={cx('flag')} src={images.flagEn} alt="flag-en" />
                </div>
                <div className={cx('menu-bottom')}>
                    <Menu />
                </div>
            </div>
        </div>
    </div >);
}

export default Header;