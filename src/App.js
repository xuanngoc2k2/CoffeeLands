import styles from './App.module.scss';
import images from './assets/images';
import DefaultLayout from './layout/DefaultLayout';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);
const listAddress = [
  // {
  // title: "Hàm Cá Mập",
  // detail: "Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội"
  // },
  {
    title: "721 Huỳnh Tấn Phát",
    detail: "721 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh"
  }]
function App() {
  return (
    <DefaultLayout>
      <div className={cx('main')}>
        <div style={{ backgroundImage: `url(${images.imgMainBg})` }}
          className={cx('col', 'content1')}>
          <div className={cx('desc')}>
            <div className={cx('title')}>
              <h2>Quán mới</h2>
            </div>
            <div className={cx('list-addr')}>
              {listAddress.map((addr, index) => (
                <>
                  <div className={cx('address')} key={index}>
                    <div className={cx('addr-t')}>{addr.title}</div>
                    <div className={cx('addr-d')}>{addr.detail}</div>
                  </div>
                  <a href='#'>Tìm đường <FontAwesomeIcon className={cx('icon-s')} icon={faChevronRight} /></a>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className={cx('col', 'content2')}>

        </div>
      </div>
    </DefaultLayout>
  );
}

export default App;
