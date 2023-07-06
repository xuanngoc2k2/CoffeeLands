import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './BoxProduct.module.scss'
import classNames from 'classnames/bind';
import ProductSlider from '../ProductSlider';

const cx = classNames.bind(styles);

function BoxProduct({ first = false, title, productDes, dataProduct, children }) {
    const [sildeIndex, setSlideIndex] = useState(0);

    // console.log(dataProduct);
    const moveSilde = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % dataProduct.length);
        dataProduct = [...dataProduct.slice(1), dataProduct[0]]
    };
    // useEffect(() => {
    //     const inteval = setInterval(moveSilde, 3000)
    //     return () => clearInterval(inteval)
    // }, [dataProduct.length])
    return (
        <div className={first ? cx('box-main') : null}>
            <div className={cx('box-wrapper')}>
                <div className={cx('text')}>
                    <div className={cx('title')}>
                        <p><strong>{title}</strong></p>
                    </div>
                    <div className={cx('product-des')}>
                        {productDes}
                    </div>
                </div>
                <div className={cx('content')}>
                    <ProductSlider datas={dataProduct} />
                    {/* <div className={cx('slide-product')}>
                        <button className={cx('pre-btn')}></button>
                        <div className={cx('list-prod')}>
                            {dataProduct.map((product, index) => {
                                return (
                                    <div key={index} className={cx('item', `item-${index}`)}>
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
                                            Giá: <strong>{product.Price}</strong>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button className={cx('next-btn')}></button>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default BoxProduct;