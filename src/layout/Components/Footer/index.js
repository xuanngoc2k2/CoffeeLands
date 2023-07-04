import classNames from "classnames/bind";
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles)
function Footer() {
    return (
        <div className={cx('wrapper-footer')}>
            <div className={cx('socialFoot')}>
                <ul>
                    <li><a href="#"><span></span></a></li>
                    <li><a href="#"><span></span></a></li>
                    <li><a href=""><span></span></a></li>
                </ul>
            </div>
            <div className={cx('copyRight')}>
                © 2018 Highlands Coffee. All rights reserved
            </div>
            <div className={cx('linkFooter')}>
                <a href="#"><span className={cx('fa-paper-plane-o')}>Đăng ký để nhận bản tin</span></a>
            </div>
            <div className={cx('linkFooter')}>
                <a href="#"><span className={cx('fa-envelope-o', 'linkMb')}>customerservice@highlandscoffee.com.vn</span></a>
            </div>
        </div>);
}

export default Footer;