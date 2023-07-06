import classNames from "classnames/bind";
import styles from './BuyNow.module.scss'
import BoxProduct from "~/components/BoxProduct";
import images from "~/assets/images";


const cx = classNames.bind(styles);
const dataProduct = [
    {
        img: images.imgProduct1,
        Name: "Phin Đen Đá",
        Price: "29,000 VNĐ"
    },
    {
        img: images.imgProduct2,
        Name: "Phin Đen Nóng",
        Price: "29,000 VNĐ"
    },
    {
        img: images.imgProduct3,
        Name: "PhinDi Choco",
        Price: "45,000 VNĐ"
    },
    {
        img: images.imgProduct4,
        Name: "PhinDi Kem Sữa",
        Price: "45,000 VNĐ"
    },
    {
        img: images.imgProduct5,
        Name: "Bạc Xỉu Đá",
        Price: "29,000 VNĐ"
    }
]
function BuyNow() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-main')}>
                <BoxProduct first title={"Cà phê"} productDes={"Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế."} dataProduct={dataProduct} />
                <BoxProduct title={"Freeze"} productDes={"Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế."} dataProduct={dataProduct} />
                <BoxProduct title={"Trà"} productDes={"Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế."} dataProduct={dataProduct} />
            </div>
            {/* <BoxProduct />
            <BoxProduct /> */}
        </div>
    );
}

export default BuyNow;