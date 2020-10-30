import Button from '@material-ui/core/Button';
import React from 'react';
import styles from './Product.module.css';

const Product = props => {
    const { onItemClick, product } = props;

    const { name, price } = product;
    return (
        <div className={styles.Card}>
            <img className={styles.Image} alt="product" src={process.env.PUBLIC_URL + '/images/' + name + '.png'} />
            <h2 className={styles.ProductName}>{name}</h2>
            <p className={styles.Label}>Price: <strong>${price}</strong></p>
            <Button onClick={() => onItemClick(product)} variant="contained">Add to cart</Button>
        </div>
    );
};

Product.propTypes = {

};

export default Product;