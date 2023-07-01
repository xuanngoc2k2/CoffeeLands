import images from '~/assets/images';
import styles from './Poper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Poper({ datas, desc }) {
    console.log(desc);
    return (
        <div className={cx('menu-wrapper')}>
            <div className={cx('col-1')}>

                {datas.map((data, index) => (
                    <div className={cx('col')} key={index}>
                        <ul>
                            <li className={cx('title')}>
                                <a><span>{data.title}</span></a>
                            </li>
                            {data.items && <ul>
                                {data.items.map((item, itemIndex) => (
                                    <li key={itemIndex}><a><span>{item}</span></a></li>
                                ))}
                            </ul>}
                        </ul>
                    </div>
                ))}
            </div>

            {desc && <div className={cx('col-2')}>
                <div className={cx('txt')}>
                    <p>{desc.title}</p>

                </div>
                <div className={cx('img')}>
                    <img src={desc.img} width={"155px"} />
                </div>
            </div>}
        </div>
    );
}

export default Poper;
