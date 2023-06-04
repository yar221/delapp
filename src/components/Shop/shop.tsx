import React, { useContext } from "react";
import "./shop.scss";
import { Context } from "../../App";
import { Link } from "react-router-dom";

const Shop: React.FC = () => {
  const { shops } = useContext(Context)
  // const shops: IShop[] = [
  //   {
  //     id: "1",
  //     name: "ShopName1",
  //     img: "",
  //   },
  //   {
  //     id: "2",
  //     name: "ShopName2",
  //     img: "",
  //   },
  //   {
  //     id: "3",
  //     name: "ShopName3",
  //     img: "",
  //   },
  //   {
  //     id: "4",
  //     name: "ShopName4",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  //   {
  //     id: "5",
  //     name: "ShopName5",
  //     img: "",
  //   },
  // ];

  return (
    <ul className="shop">
      {shops.map((item, key) => {
        return (
          <li className="shop__item item" key={key}>
            <Link to={`/shop/${item._id}`} className="item__link">
              <img src={item.img || 'http://localhost:5000/shop.png'} alt="" className="item__img" />
              <h3 className="item__name">{item.name}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Shop;
