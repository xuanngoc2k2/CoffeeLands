import DefaultLayout from './layout/DefaultLayout';
import Address from './components/Address';


const listAddress = [
  {
    title: "Hàm Cá Mập",
    detail: "Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội"
  },
  {
    title: "721 Huỳnh Tấn Phát",
    detail: "721 Huỳnh Tấn Phát, Phường Phú Thuận, Quận 7, Tp. Hồ Chí Minh"
  },
  {
    title: "Hàm Cá Mập",
    detail: "Tầng 3, 1-3-5 Đinh Tiên Hoàng, Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội"
  },
]
function App() {
  return (
    <DefaultLayout>
      <Address listAddress={listAddress} />
    </DefaultLayout>
  );
}

export default App;
