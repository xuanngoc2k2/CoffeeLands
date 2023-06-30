import MenuItem from '../MenuItem';
import Poper from '../MenuItem/Poper';
import styles from './Menu.module.scss'
import classNames from "classnames/bind";

const dataTd = [{
    title: "CA PHE",
    items: [
        "Ca Phe Phin",
        "PhinDi",
        "Ca Phe Espressp"
    ]
},
{
    title: "FREEZE",
    items: [
        "Freeze Ca Phe Phin",
        "Freeze Khong Ca Phe"
    ]
},
{
    title: "FREEZE",
    items: [
        "Freeze Ca Phe Phin",
        "Freeze Khong Ca Phe"
    ]
},
{
    title: "FREEZE",
    items: [
        "Freeze Ca Phe Phin",
        "Freeze Khong Ca Phe"
    ]
}];
const cx = classNames.bind(styles);
function Menu() {
    return (<nav className={cx('wrapper')}>
        <MenuItem title="Quán cà phê" />
        <MenuItem title="Thực đơn">
            <Poper datas={dataTd} desc={{ title: "Phin Sua Da Dam Da Chat Phin", img: "PHIN_SUA_DA_5.1.png" }} />
        </MenuItem>
        <MenuItem title="Tin tức" />
        <MenuItem title="Cộng đồng" />
        <MenuItem title="Về chúng tôi" />
        <MenuItem title="Nghề nghiệp" />
        <MenuItem title="Mua ngay" />
    </nav>);
}

export default Menu;