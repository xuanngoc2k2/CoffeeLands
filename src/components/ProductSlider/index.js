import styles from './ProductSlider.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ProductSlider({ datas }) {
    return (
        <>
            {datas && <div className={cx('slide-product')}>
                {(datas.length >= 3) && <button className={cx('pre-btn')}></button>}
                <div className={cx('list-prod')}>
                    {datas.map((product, index) => {
                        return (
                            <div key={index} className={cx('item', `item-${index}`)}>
                                <div className={cx('img')}>
                                    <a href='/product/'>
                                        <img src={product.img} />
                                    </a>
                                </div>
                                <div className={cx('tend')}>
                                    <h3>
                                        <a href='/product/'>{product.Name}</a>
                                    </h3>
                                </div>
                                <div className={cx('price')}>
                                    Giá: <strong>{product.Price}</strong>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {(datas.length >= 3) && <button className={cx('next-btn')}></button>}
            </div>}
        </>
    );
}

export default ProductSlider;