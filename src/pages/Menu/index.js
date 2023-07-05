import images from '~/assets/images';
import styles from './Menu.module.scss';
import classNames from "classnames/bind";
import Chat from '~/components/Chat';
import ToTop from '~/components/ToTop';

const cx = classNames.bind(styles);

const dataMenu = [
    {
        bgImg: images.bgImgCoffee,
        img: images.PHIN_SUA_DA,
        tend: "cà phê",
        des: "Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.",
        link: "/",
    },
    {
        bgImg: images.bgImgFreeze,
        img: images.FREEZE_TRA_XANH,
        tend: "FREEZE",
        des: "Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.",
        link: "/",
    },
    {
        bgImg: images.bgImgTra,
        img: images.TRA_SEN_VANG,
        tend: "Trà",
        des: "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",
        link: "/",
    },
]
function Menu() {
    return (
        <div className="menu-wrapper">
            {dataMenu.map((menu, index) => {
                return (
                    <div key={index} className={cx('menu')} style={{ backgroundImage: `url(${menu.bgImg})`, }}>
                        <div className={cx('img-wrap')}>
                            <div className={cx('wrapper')} >
                                <div className={cx('img')}>
                                    <a>
                                        <img src={menu.img} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('wrapper')}>
                            <div className={cx('caption')}>
                                <div className={cx('tend')}>
                                    <h3>{menu.tend}</h3>
                                </div>
                                <div className={cx('desc')}>
                                    <p>{menu.des}</p>
                                </div>
                                <div className={cx('link')}>
                                    <a href={menu.link}>Khám phá thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Chat />
            <ToTop />
        </div >);
}

export default Menu;