import { useEffect, useState } from 'react';
import styles from './ToTop.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ToTop() {
    const [showToTop, setShowToTop] = useState(false);

    const handleScroll = () => {
        // Kiểm tra vị trí cuộn của trang
        const currentScrollPos = window.pageYOffset;
        const threshold = 100; // Ngưỡng để hiển thị thành phần ToTop

        if (currentScrollPos > threshold) {
            setShowToTop(true);
        } else {
            setShowToTop(false);
        }
    };

    useEffect(() => {
        // Thêm lắng nghe sự kiện cuộn trang
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Gỡ lắng nghe khi component bị hủy
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {showToTop && <a className={cx('go-to-top')} onClick={() => handleScrollToTop()}>
            </a>}
        </>
    );
}

export default ToTop;