import React, { useState } from "react";
import Images from "../../Images";
import Category from "./Category/Category";
import Product from "./Product/Product";
import styles from "./Products.module.css";

function filterItems(items, condition) {
  const { name, category, price } = condition;
  const matchedItems = items.filter((item) => {
    // console.log(item.name.includes(name));
    // console.log(item.category.includes(category));
    // console.log(item.price >= price[0] && item.price <= price[1]);
    const c1 = item.name.includes(name);
    const c2 = item.category.includes(category) || category === "all";
    const c3 =
      (price[0] === 0 && price[1] === 0) ||
      (item.price >= price[0] && item.price <= price[1]);
    return c1 && c2 && c3;
  });

  return matchedItems;
}

const defaultFilter = {
  name: "",
  category: "all",
  price: [0, 0],
};

const Products = (props) => {
  const { onItemClick } = props;
  const [filter, setFilter] = useState(defaultFilter);

  //   const testFilter = {
  //     name: "dan",
  //     category: "all",
  //     price: [200, 500],
  //   };

  const products = filterItems(Images, filter);

  return (
    <div className={styles.container}>
      <Category
        filter={filter}
        handleChange={(filter) => {
          filter || setFilter(defaultFilter);
          filter && setFilter(filter);
        }}
      />
      <div>
        <h2>{products.length} products was found</h2>
        <div className={styles.Products}>
          {products.map((product) => (
            <Product
              key={product.name}
              onItemClick={onItemClick}
              product={product}
            ></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {};

export default Products;
