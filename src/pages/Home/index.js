import Chat from "~/components/Chat";
import ToTop from "~/components/ToTop";
import DefaultLayout from "~/layout/DefaultLayout";
import AddressNews from "~/components/AddressNews";
import images from "~/assets/images";
import Banner from "~/components/Banner";
import classNames from "classnames/bind";
import styles from './Home.module.scss'

const cx = classNames.bind(styles);
const listAddress = [
    {
        title: "Hàm Cá Mập",
        detail: "Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội"
    },
    {
        title: "721 Huỳnh Tấn Phát",
        detail: "721 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh"
    },
    {
        title: "Hàm Cá Mập",
        detail: "Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội"
    },
]

const listNews = [
    {
        img: images.imgNews1,
        caption: "Mới! Trà tuyết highlands coffee",
        date: '17/05/2023'
    },
    {
        img: images.imgNews2,
        caption: "Tri ân khách hàng - highlands coffee",
        date: '04/05/2023'
    },
    {
        img: images.imgNews3,
        caption: "Mạnh mẽ làm điều mình yêu!",
        date: '06/03/2023'
    },

]

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


function Home() {
    return (
        <>
            <div className={cx("banner")}>
                <Banner datas={dataBanner} />
            </div>
            <div className={cx('img')}>
                <a href='#'>
                    <img src={images.imgBannerSale} />
                </a>
            </div>
            <div className={cx("content")}>
                <AddressNews listAddress={listAddress} listNews={listNews} />
            </div>
            <Chat />
            <ToTop />
        </>);
}

export default Home;