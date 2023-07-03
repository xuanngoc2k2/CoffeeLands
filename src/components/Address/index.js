import styles from './Address.module.scss';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Address({ listAddress, listNews }) {
    const [curAddr, setCurAddr] = useState(0);
    const [prevAddr, setPrevAddr] = useState(listAddress.length - 1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurAddr((prevIndex) => (prevIndex + 1) % listAddress.length);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, [curAddr, listAddress.length]);

    return (
        <div className={cx('main')}>
            <div style={{ backgroundImage: `url(${images.imgMainBg})` }} className={cx('col', 'content1')}>
                <div className={cx('desc')}>
                    <div className={cx('title')}>
                        <h2>Quán mới</h2>
                    </div>
                    <div className={cx('list-addr')}>
                        {listAddress.map((addr, index) => (
                            <div
                                className={cx('address', { active: index === curAddr, 'prev-address': index === prevAddr })}
                                key={index}
                            >
                                <div className={cx('addr-t')}>{addr.title}</div>
                                <div className={cx('addr-d')}>{addr.detail}</div>
                                <a href='#'>
                                    Tìm đường <FontAwesomeIcon className={cx('icon-s')} icon={faChevronRight} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${images.imgMainBg2})` }} className={cx('col', 'content2')}>
                <div className={cx('box')}>
                    <div className={cx('title')}>
                        <h2>Tin mới nhất</h2>
                        <a href='#'>Xem toàn bộ <FontAwesomeIcon icon={faChevronRight} /></a>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('list-news')}>
                            {listNews.map((news, index) => (
                                <div className={cx('news')} key={index}>
                                    <div className={cx('img')}>
                                        <img src={news.img} alt={news.caption} />
                                    </div>
                                    <div className={cx('caption')}>
                                        <div className={cx('tend')}>
                                            {news.caption}
                                        </div>
                                        <div className={cx('date')}>
                                            <span>{news.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={cx('form-recive')}>
                            <input />
                            <button type='submit'><span>Gửi</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Address;
