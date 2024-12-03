import './App.css';
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { IoStatsChart } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

function App() {
  const Allproducts = [
    {
      url: "https://i.postimg.cc/5jdz0LkD/O-yin-konsoli-Sony-Play-Station-5-Slim-CD-1-TB-from-U-A-E.jpg",
      title: "O‘yin konsoli Sony PlayStation 5 Slim CD ,1TB (from U.A.E)",
      nowPrice: "5 999 000",
      oldPrice: "8 800 000",
      muddatTolov: "703 000",
    },
    {
      url: "https://i.postimg.cc/TwsmzZjd/Apple-i-Phone-15-Pro-128-GB-Black-titanium.jpg",
      title: "Apple iPhone 15 Pro 128GB Black titanium",
      nowPrice: "14 571 943",
      muddatTolov: "1 707 000",
    },
    {
      url: "https://i.postimg.cc/3x3BFQnV/Samsung-Galaxy-A15.jpg",
      title: "Samsung Galaxy A15 Qora 6/128 GB",
      nowPrice: "2 380 000",
      muddatTolov: "279 000",
    },
    {
      url: "https://i.postimg.cc/sDr93Rdx/Xiaomi-Redmi-Note-13.jpg",
      title: "Xiaomi Redmi Note 13",
      nowPrice: "2 850 000",
      muddatTolov: "334 000",
    },
    {
      url: "https://i.postimg.cc/J7bZ6dDL/Samsung-Galaxy-S24.jpg",
      title: "Samsung Galaxy S24",
      nowPrice: "8 798 000",
      muddatTolov: "1 031 000",
    },
    {
      url: "https://i.postimg.cc/kgZ2Xx6s/Xiaomi-Redmi-13-C-Midnight-Black.jpg",
      title: "Xiaomi Redmi 13C Midnight Black 8/256 GB",
      nowPrice: "1 772 396",
      muddatTolov: "208 000",
    },
    {
      url: "https://i.postimg.cc/KzbvRQZP/O-yin-konsoli-Sony-Play-Station-5-Pro-2-TB-from-U-A-E.jpg",
      title: "O‘yin konsoli Sony PlayStation 5 Pro 2TB (from U.A.E)",
      nowPrice: "11 576 700",
      oldPrice: "12 863 000",
      muddatTolov: "1 356 000",
    },
    {
      url: "https://i.postimg.cc/76XDbkt4/Honor-X8b-Qora.jpg",
      title: "Honor X8b Qora 8/256 GB",
      nowPrice: "3 069 000",
      muddatTolov: "360 000",
    },
  ]
  return (
    <div className="App">
      <header>
        <div className="olcha">
        <h1>olcha</h1>
        <div className="katalog">
        <button className="menu"><IoMenu className="menu_btn"/> <a href="">Katalog</a></button>
        </div>
        <div className="input_search">
        <input type="text" placeholder="Katalog bo'yicha qidirish"/>
        <button><CiSearch /></button>
        </div>
        </div>
        <div className="icons">
        <div className="chart">
          <IoStatsChart className="chart_icon"/>
          <h4>Taqqoslash</h4>
        </div>
        <div className="like">
        <FcLike className="lice_icon"/>
        <h4>Sevimlilar</h4>
        </div>
        <div className="backet">
        <SlBasket className="basket_icon"/>
        <h4>Savatcha</h4>
        <button className="backet_number">O</button>
        </div>
        <div className="profil">
        <GoPerson className="profil_icon"/>
        <h4>Kirish</h4>
        </div>
        </div>
      </header>
      <div className="card_box">
        {Allproducts.map((product) => (
          <div className="card">
            <div className="card_header">
              <img src={product.url} alt="" />
              <h2>{product.title}</h2>
              <div className="textlar">
              <div className="text">
              <div className="h3_lar">
              <h3 className="now">{product.nowPrice} so'm</h3>
              <h4 className="old"><s>{product.oldPrice}</s></h4>
              </div>
              <h5 className="h4_footer">{product.muddatTolov} * 12 oy</h5>
              </div>
              <div className="btn">
              <div className="backet">
                <SlBasket />
              </div>
              <div className="rassrochka">
                <h1>В рассрочку</h1>
              </div>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;