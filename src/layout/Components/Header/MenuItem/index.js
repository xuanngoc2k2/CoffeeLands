import styles from './MenuItem.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuItem({ title, to, children }) {
    return (
        <div className={cx('menu-item')}>
            <a className={cx('item-link')} href='#'>{title}</a>
            {children && <div className={cx('menu-list')}>{children}</div>}
        </div>
        // <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
        //     <span className={cx('title')}>{title}</span>
        // </NavLink>
    );
}

export default MenuItem;