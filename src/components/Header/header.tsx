import React from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__list list">
          <li className="list__item item">
            <NavLink
              className={({ isActive }) => (isActive ? "item__active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              className={({ isActive }) => (isActive ? "item__active" : "")}
              to="/shopping-cart"
            >
              Shopping Cart
            </NavLink>
          </li>
          <li className="list__item">
            <NavLink
              className={({ isActive }) => (isActive ? "item__active" : "")}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
