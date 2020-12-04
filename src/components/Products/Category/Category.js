import React from "react";
import styles from "./Category.module.css";
import { Button } from "@material-ui/core";

const categories = ["all", "edifice", "g-shock", "baby-g", "classic"];

const Category = ({ filter, handleChange }) => {
  const { name, category, price } = filter;
  console.log(filter);
  return (
    <div className={styles.category}>
      <div className={styles.group}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            handleChange({ ...filter, name: e.target.value });
            console.log("you", filter);
          }}
          placeholder="Search by name"
        />
      </div>

      <div className={styles.group}>
        <h3>Category</h3>
        <ul className={styles.series}>
          {categories.map((categor, index) => (
            <li
              key={index}
              onClick={() => handleChange({ ...filter, category: categor })}
              className={category === categor ? styles.active : null}
            >
              {categor}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.group}>
        <h3>Price</h3>
        {/* <h4>From</h4> */}
        <div className={styles.price}>
          <input
            type="text"
            value={price[0]}
            onChange={(e) =>
              handleChange({ ...filter, price: [+e.target.value, price[1]] })
            }
          />
          <h4>→ </h4>
          <input
            type="text"
            value={price[1]}
            onChange={(e) =>
              handleChange({ ...filter, price: [price[0], +e.target.value] })
            }
          />
        </div>
      </div>

      <Button
        size="medium"
        color="secondary"
        variant="contained"
        onClick={() => {
          console.log("Clicked");
          handleChange(null);
        }}
      >
        Clear Filter
      </Button>
    </div>
  );
};

export default Category;
