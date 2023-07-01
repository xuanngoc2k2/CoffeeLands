import images from '~/assets/images';
import MenuItem from '../MenuItem';
import Poper from '../MenuItem/Poper';
import styles from './Menu.module.scss'
import classNames from "classnames/bind";

const dataTd = [{
    title: "CÀ Phê",
    items: [
        "Cà Phê Phin",
        "PhinDi",
        "Cà Phê Espressp"
    ]
},
{
    title: "FREEZE",
    items: [
        "Freeze Cà Phê Phin",
        "Freeze Không Cà Phê"
    ]
},
{
    title: "TRà",
    items: [
        "Trà Sen Vàng Mới",
        "Trà Thạch Đào",
        "Trà Thạch Đào",
        "Trà Thạch Vải",
        "TRÀ NHIỆT ĐỚI (MỚII)"
    ]
},
{
    title: "KHÁC",
    items: [
        "Bánh Ngọt",
        "Merchandise",
        "Cà Phê Đóng Gói",
        "Thực Đơn Giao Hàng",
    ]
}];

const dataAboutMe = [{
    title: "Nguồn gốc"
},
{
    title: "Dịch vụ"
},
{
    title: "Nghề Nghiệp"
}]
const cx = classNames.bind(styles);
function Menu() {
    return (<nav className={cx('wrapper')}>
        <MenuItem title="Quán cà phê" />
        <MenuItem title="Thực đơn">
            <Poper datas={dataTd} desc={{ title: "Phin Sữa Đá Đậm Đà Chất Phin", img: images.PHIN_SUA_DA }} />
        </MenuItem>
        <MenuItem title="Tin tức" />
        <MenuItem title="Cộng đồng" />
        <MenuItem title="Về chúng tôi">
            <Poper datas={dataAboutMe} desc={{ title: "Phin Sữa Đá Đậm Đà Chất Phin", img: images.PHIN_SUA_DA }} />
        </MenuItem>
        <MenuItem title="Nghề nghiệp" />
        <MenuItem title="Mua ngay" />
    </nav>);
}

export default Menu;