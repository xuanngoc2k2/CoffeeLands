import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuItem({ title, to = '/', children }) {
    return (
        <div className={cx('menu-item')}>
            <Link to={to} className={cx('item-link')} href='#'>{title}</Link>
            {children && <div className={cx('menu-list')}>{children}</div>}
        </div>
        // <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
        //     <span className={cx('title')}>{title}</span>
        // </NavLink>
    );
}

export default MenuItem;