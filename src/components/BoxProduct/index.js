import styles from './BoxProduct.module.scss'
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

function BoxProduct({ title, productDes, dataProduct, children }) {
    return (
        <div className={cx('box-wrapper')}>
            <div className={cx('title')}>
                <p><strong>{title}</strong></p>
            </div>
            <div className={cx('content')}>
                <span>{productDes}</span>
                <div className={cx('slide-product')}>
                    <button className={cx('pre-btn')}></button>
                    <div className={cx('list-prod')}>
                        {dataProduct.map((product, index) => {
                            return (
                                <div key={index} className={cx('item')}>
                                    <div className={cx('img')}>
                                        <a href='#'>
                                            <img src={product.img} />
                                        </a>
                                    </div>
                                    <div className={cx('tend')}>
                                        <h3>
                                            <a>{product.Name}</a>
                                        </h3>
                                    </div>
                                    <div className={cx('price')}>
                                        "Giá: "<strong>{product.Price}</strong>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className={cx('next-btn')}></button>
                </div>
            </div>

        </div>);
}

export default BoxProduct;