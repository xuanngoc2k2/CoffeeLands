import { ChatIcon } from '../Icon';
import styles from './Chat.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Chat() {
    return (
        <button className={cx('icon-chat')}>
            <div>
                <ChatIcon />
            </div>
        </button>);
}

export default Chat;