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

            {desc && <div className={cx('col-2')} style={{ backgroundImage: `url(${images.backGroundMenu})` }}>
                <div className={cx('txt')}>
                    <a href='#'>{desc.title}</a>

                </div>
                <div className={cx('img')}>
                    <img src={desc.img} width={"155px"} alt={desc.title} />
                </div>
            </div>}
        </div >
    );
}

export default Poper;
