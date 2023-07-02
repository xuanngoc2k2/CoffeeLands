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
                    <li><a><FontAwesomeIcon icon={faFacebookF} /></a></li>
                    <li><a></a></li>
                    <li><a></a></li>
                </ul>
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