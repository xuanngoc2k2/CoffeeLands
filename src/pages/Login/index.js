import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { faFacebook, faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
function Login() {
    return (
        <div className={cx('container')}>

            <div className={cx("loginform")} >
                <h2 className={cx("headerTitle")} >Log in</h2 >
                <div>
                    <FormInput description="Username" placeholder="Enter your username" type="text" />
                    <FormInput description="Password" placeholder="Enter your password" type="password" />
                    <div className={cx("button", "row")}>
                        <button>Log in</button>
                    </div>
                </div >
                <div className={cx("alternativeLogin")} >
                    <label>Or sign in with:</label>
                    <div className={cx("iconGroup")}>
                        <a href="#" className={cx("facebookIcon")}><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#" className={cx("twitterIcon")}><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#" className={cx("googleIcon")}><FontAwesomeIcon icon={faGoogle} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
const FormInput = props => (
    <div className={cx("row")}>
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);
export default Login;