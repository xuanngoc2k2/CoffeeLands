import styles from './Address.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Address({ listAddress }) {
    const [curAddr, setCurAddr] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurAddr((prevIndex) => (prevIndex + 1) % listAddress.length);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    });
    return (
        <div className={cx('main')}>
            <div style={{ backgroundImage: `url(${images.imgMainBg})` }}
                className={cx('col', 'content1')}>
                <div className={cx('desc')}>
                    <div className={cx('title')}>
                        <h2>Quán mới</h2>
                    </div>
                    <div className={cx('list-addr')}>
                        {listAddress.map((addr, index) => (
                            <div className={cx('address', { active: index === curAddr })} key={index}>
                                <div className={cx('addr-t')}>{addr.title}</div>
                                <div className={cx('addr-d')}>{addr.detail}</div>
                                <a href='#'>Tìm đường <FontAwesomeIcon className={cx('icon-s')} icon={faChevronRight} /></a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('col', 'content2')}>

            </div>
        </div>);
}

export default Address;