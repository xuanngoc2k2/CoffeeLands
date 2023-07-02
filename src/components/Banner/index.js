import images from '~/assets/images';
import styles from './Banner.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Banner({ datas }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handClickNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
    }

    const handClickPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + datas.length) % datas.length);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % datas.length);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex, datas.length]);

    return (<div className={cx('wrapper')}>
        <div className={cx('pre-btn')} onClick={handClickPrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className={cx('container')}>
            {datas.map((data, index) => (
                <div className={cx('item', { active: index === currentIndex })} key={index}>
                    <a href={data.to}><img src={data.img} alt='' /></a>
                </div>
            ))}
        </div>
        <div className={cx('next-btn')} onClick={handClickNext}>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
        <ul className={cx('list-btn')}>
            {datas.map((data, index) => (
                <li key={index} className={cx({ active: index === currentIndex })} ><button>.</button></li>
            ))}
        </ul>
    </div >);
}

export default Banner;