import classNames from "classnames/bind";
import styles from './Footer.module.scss'


const cx = classNames.bind(styles)
function Footer() {
    return (
        <div className={cx('wrapper-footer')}>
            <div className={cx('socialFoot')}>

            </div>
            <div className={cx('copyRight')}>

            </div>
            <div className={cx('linkFooter')}>

            </div>
            <div className={cx('linkMb')}>

            </div>
        </div>);
}

export default Footer;