import images from '~/assets/images';
import styles from './Banner.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Banner({ datas }) {
    return (<div className={cx('wrapper')}>
        <div className={cx('pre-btn')}>
        </div>
        <div className={cx('container')}>
            {datas.map((data, index) => (
                <div className={cx('item')} key={index}>
                    <a href={data.to}><img src={data.img} alt='' /></a>
                </div>
            ))}
        </div>
        <div className={cx('next-btn')}>

        </div>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>);
}

export default Banner;