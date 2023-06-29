import { NavLink } from "react-router-dom";
import styles from './MenuItem.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function MenuItem({ title, to }) {
    return (
        <h1>{title}</h1>
        // <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
        //     <span className={cx('title')}>{title}</span>
        // </NavLink>
    );
}

export default MenuItem;