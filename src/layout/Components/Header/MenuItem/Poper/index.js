import images from '~/assets/images';
import styles from './Poper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Poper({ datas, desc }) {

    return (
        <div className={cx('menu-wrapper')}>
            <div className={cx('col-1')}>

                {datas.map((data, index) => (
                    <div className={cx('col')} key={index}>
                        <ul>
                            <li className={cx('title')}>
                                <a><span>{data.title}</span></a>
                            </li>
                            {data.items && <ul>
                                {data.items.map((item, itemIndex) => (
                                    <li key={itemIndex}><a><span>{item}</span></a></li>
                                ))}
                            </ul>}
                        </ul>
                    </div>
                ))}
            </div>

            {desc && <div className={cx('col-2')}>
                <p>{desc.title}</p>

                {/* <img src={images.n} /> */}
            </div>}
        </div>
    );
}

export default Poper;
