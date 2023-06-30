import styles from './MenuItem.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuItem({ title, to }) {
    return (
        <a className={cx('menu-item')}>{title}</a>
        // <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
        //     <span className={cx('title')}>{title}</span>
        // </NavLink>
    );
}

export default MenuItem;