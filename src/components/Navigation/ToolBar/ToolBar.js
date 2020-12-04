import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ToolBar.module.css";

const ToolBar = (props) => {
  const { itemsInCart } = props;
  const style = {
    color: "beige",
  };
  return (
    <header className={styles.Header}>
      <h2>CASIO</h2>
      <ul className={styles.NavigationItems}>
        <li>
          <NavLink activeStyle={style} to="/shopping-cart">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/products">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to="/cart">
            <Badge badgeContent={itemsInCart.length} color="primary">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

ToolBar.propTypes = {};

export default ToolBar;
