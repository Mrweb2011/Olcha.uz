import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { IoStatsChart } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import './App.css';

function App() {
  const Allproducts = [
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-07-29/uel0TmctQBCuuPqyfNuO3r9TR3kiIrKFxmOtQv1YOeR2wtgDHo1cOYIQGeYc.jpg",
      title: "O‘yin konsoli Sony PlayStation 5 Slim CD ,1TB (from U.A.E)",
      nowPrice: "7 300 000",
      oldPrice: "9 000 000",
      muddatTolov: "855 000",
    },
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-07-24/GXnlCe9OvklS1p0BdVMR0qp9NhQhJQz3ySaRmEnz7XbK8BjnEPLZhKxR2gzw.jpg",
      title: "Apple iPhone 15 Pro",
      nowPrice: "14 726 960",
      muddatTolov: "1 725 000",
    },
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-08-02/bnK9uRgVG9tyAdlxGzfMvaztbKCINaeTWtkYxjnjCGhoFTFRM7skgSOtDddM.jpg",
      title: "Samsung Galaxy A15",
      nowPrice: "1 998 315",
      muddatTolov: "235 000",
    },
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-07-29/U2sN2UcpfFt8DP243Sv7u6qUNi3HcmhfZtRTiQAKFsFRE61RnzZRBcnkMq7B.jpg",
      title: "Xiaomi Redmi Note 13 5G",
      nowPrice: "2 800 000",
      muddatTolov: "328 000",
    },
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-07-29/48HWaawTxY3boTO1JB9NZS0gEK8EbkLaY3QMDjFXrSk3OK62XS9ek9lhkP7Q.jpg",
      title: "Samsung Galaxy S24",
      nowPrice: "8 889 000",
      muddatTolov: "1 041 000",
    },
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-07-24/AK75xdKuWk5l7Q7GJt95BArGIb8YzAxpHeOnxvlzk6zFA16WSmZxDCfxkHIx.jpg",
      title: "Xiaomi Redmi 13C",
      nowPrice: "1 680 000",
      muddatTolov: "197 000",
    },
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-07-29/Eg0izQU1CgoBH9m2PzQyKPq4cFyPy0XKf1fPrB3dD1sFXqSsfv3ofmqU7YKw.jpg",
      title: "O‘yin konsoli Sony PlayStation PS5 Slim, Digital Edition 1 TB (from U.A.E)",
      nowPrice: "6 499 000",
      oldPrice: "8 700 000",
      muddatTolov: "762 000",
    },
    {
      url: "https://olcha.uz/image/266x355/products/cdn_1/supplier/stores/1/2024-10-01/WEWCMNnU7xsc3P2VOB13L7j6wVaLLU3gwEaWOAE2FCUAmfGx32kHmHl7yN0s.jpg",
      title: "Honor X8b",
      nowPrice: "2 936 900",
      muddatTolov: "344 000",
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