import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Login() {
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const handleChangeUsername = (e) => {
        const username = e.target.value;
        if (!username.startsWith(' ')) {
            setInputUsername(username);
        }
    };
    const handleChangePassword = (e) => {
        const password = e.target.value;
        if (!password.startsWith(' ')) {
            setInputPassword(password);
        }
    };
    return (
        <div className={cx('container')}>

            <div className={cx("loginform")} >
                <h2 className={cx("headerTitle")} >Log in</h2 >
                <div>
                    <div className={cx("row")}>
                        <label>Username</label>
                        <input
                            value={inputUsername}
                            type="text"
                            placeholder="Enter your username"
                            onChange={handleChangeUsername} />
                    </div>
                    <div className={cx("row")}>
                        <label>Password</label>
                        <input
                            value={inputPassword}
                            type="password"
                            onChange={handleChangePassword}
                            placeholder="Enter your password" />
                    </div>
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
export default Login;