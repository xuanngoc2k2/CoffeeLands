import images from '~/assets/images';
import styles from './Poper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Poper({ datas, desc }) {
    const img = desc.img;
    return (
        <div className={cx('menu-wrapper')}>
            {datas.map((data, index) => (
                <div className={cx(`col${index}`)} key={index}>
                    <ul>
                        <li>
                            <a><span>{data.title}</span></a>
                        </li>
                        <ul>
                            {data.items.map((item, itemIndex) => (
                                <li key={itemIndex}><a><span>{item}</span></a></li>
                            ))}
                        </ul>
                    </ul>
                </div>
            ))}

            {desc && <div>
                <p>{desc.title}</p>

                {/* <img src={images.PHIN_SUA_DA} /> */}
            </div>}
        </div>
    );
}

export default Poper;
