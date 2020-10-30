import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ToolBar.module.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';


const ToolBar = props => {
    const { itemsInCart } = props;
    return (
        <header className={styles.Header}>
            <h2>CASIO</h2>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li><Link to='/products'>Shop</Link></li>
                <li>
                    <Link to='/cart'>
                        <Badge badgeContent={itemsInCart.length} color="primary">
                            <ShoppingCartIcon></ShoppingCartIcon>
                        </Badge>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

ToolBar.propTypes = {

};

export default ToolBar;