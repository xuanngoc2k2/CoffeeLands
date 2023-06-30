import MenuItem from '../MenuItem';
import styles from './Menu.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Menu() {
    return (<nav className={cx('wrapper')}>
        <MenuItem title="Quán cà phê" />
        <MenuItem title="Thực đơn">
            <div>
                <p>CÀ PHÊ</p>
                <p>Cà Phê Phin</p>
                <p>PhinDi</p>
                <p>Cà Phê Espresso</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </MenuItem>
        <MenuItem title="Tin tức" />
        <MenuItem title="Cộng đồng" />
        <MenuItem title="Về chúng tôi" />
        <MenuItem title="Nghề nghiệp" />
        <MenuItem title="Mua ngay" />
    </nav>);
}

export default Menu;