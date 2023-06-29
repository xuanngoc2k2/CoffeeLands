import classNames from "classnames/bind";
import styles from './Header.module.scss'
import images from "~/assets/Images";
import { SearchIcon } from "~/components/Icon";
import Search from "./Search";
import Menu from "./Menu";
const cx = classNames.bind(styles)
function Header() {
    return (<div className={cx('wrapper-header')}>
        <div className={cx('inner')}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            <div className={cx('menu')}>
                <div className={cx('menu-top')}>
                    <Search />
                    <img className={cx('flag')} src={images.flagVn} alt="flag-vn" />
                    <img className={cx('flag')} src={images.flagEn} alt="flag-en" />
                </div>
                <div className={cx('menu-item')}>
                    <Menu />
                </div>
            </div>
        </div>
    </div>);
}

export default Header;