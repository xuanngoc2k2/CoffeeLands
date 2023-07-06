import classNames from "classnames/bind";
import styles from './Product.module.scss'
import DetailProduct from "~/components/DetailProduct";
import ProductSlider from "~/components/ProductSlider";
import images from "~/assets/images";


const dataFreeze = [
    {
        img: images.imgProduct1,
        Name: "Phin Đen Đá",
        Price: "29,000 VNĐ"
    },
    {
        img: images.imgProduct5,
        Name: "Bạc Xỉu Đá",
        Price: "29,000 VNĐ"
    }
]

const cx = classNames.bind(styles);
function Product() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('col')}>
                <DetailProduct />
                <ProductSlider datas={dataFreeze} />
            </div>
        </div>
    );
}

export default Product;