import styles from './Menu.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Menu() {
    return (<nav className={cx('wrapper')}>
        <ul className={cx('list-menu')}>
            <li><a>Quán cà phê</a></li>
            <li><a>Thực đơn</a></li>
            <li><a>Tin tức</a></li>
            <li><a>Cộng đồng</a></li>
            <li><a>Về chúng tôi</a></li>
            <li><a>Nghề nghiệp</a></li>
            <li><a>Mua ngay</a></li>
        </ul>
    </nav>);
}

export default Menu;