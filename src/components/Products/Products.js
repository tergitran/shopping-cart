import React from 'react';
import Images from '../../Images';
import Product from './Product/Product';
import styles from './Products.module.css';
const Products = props => {
    const { onItemClick } = props;
    return (
        <div className={styles.Products}>
            {Images.map(product => <Product key={product.name} onItemClick={onItemClick} product={product}></Product>)}
        </div>
    );
};

Products.propTypes = {

};

export default Products;