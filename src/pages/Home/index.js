import Chat from "~/components/Chat";
import ToTop from "~/components/ToTop";
import DefaultLayout from "~/layout/DefaultLayout";
import AddressNews from "~/components/AddressNews";
import images from "~/assets/images";

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

const listNews = [
    {
        img: images.imgNews1,
        caption: "Mới! Trà tuyết highlands coffee",
        date: '17/05/2023'
    },
    {
        img: images.imgNews2,
        caption: "Tri ân khách hàng - highlands coffee",
        date: '04/05/2023'
    },
    {
        img: images.imgNews3,
        caption: "Mạnh mẽ làm điều mình yêu!",
        date: '06/03/2023'
    },

]


function Home() {
    return (<DefaultLayout>
        <AddressNews listAddress={listAddress} listNews={listNews} />
        <Chat />
        <ToTop />
    </DefaultLayout>);
}

export default Home;