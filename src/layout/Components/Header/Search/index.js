import { SearchIcon } from "~/components/Icon";
import styles from './Search.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

function Search() {
    return (<div className={cx('menuSearch')}>
        <input className={cx('input-search')} placeholder="Từ khóa" />
        <button className={cx('btn-search')}>
            <SearchIcon />
        </button>
    </div>
    );
}

export default Search;