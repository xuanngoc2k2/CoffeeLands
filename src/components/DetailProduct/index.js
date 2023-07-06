import images from '~/assets/images';
import styles from './DetailProduct.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DetailProduct({ data }) {
    return (<div className={cx('content')}>
        <div className={cx('box')}>
            <div className={cx('product')}>
                <div className={cx('product-title')}>
                    <h1>Freeze Trà Xanh</h1>
                </div>
                <div className={cx('grid-product')}>
                    <div className={cx('col')}>
                        <div className={cx('img-product')}>
                            <img src={images.FREEZE_TRA_XANH} />
                        </div>
                    </div>
                    <div className={cx('col')}>
                        <div className={cx('product-des')}>
                            <p>
                                Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!
                            </p>
                            <div>
                                <a><img src={images.dathangngay} /></a>
                            </div>
                            <p>&nbsp;</p>
                        </div>
                        <div className={cx('product-box')}>
                            <div className={cx('title-box')}>
                                Size :
                            </div>
                            <div className={cx('content-box')}>
                                <div className={cx('size')}>
                                    <ul>
                                        <li className={cx('active')}>S</li>
                                        <li>M</li>
                                        <li>L</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={cx('product-price')}>
                            Giá : <strong>55,000 VNĐ</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default DetailProduct;