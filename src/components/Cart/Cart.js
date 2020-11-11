import { Button, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { Fragment } from 'react';
import styles from './Cart.module.css';

function myFunction(total, value) {
    console.log('count');
    return total + value.price * value.quantity;
}

// const useStyles = makeStyles((theme) => ({
//     margin: {
//         margin: theme.spacing(1),
//     },
//     extendedIcon: {
//         marginRight: theme.spacing(1),
//     },
// }));

const Cart = props => {
    const { itemsInCart, onChangeQuantity, onRemoveItem } = props;
    let totalPrice = 0;
    let SummaryDisplay = <h1>You have no items in your Cart.</h1>;

    console.log(itemsInCart);
    if (itemsInCart.length > 0) {
        totalPrice = itemsInCart.reduce(myFunction, 0);
        console.log(totalPrice);

        SummaryDisplay = <Fragment>
            <div>
                {itemsInCart.map(item => {
                    const { name, price, quantity } = { ...item }
                    return (
                        <div className={styles.Item} key={item.name}>
                            <img className={styles.Thumbnail} alt="thumball" src={process.env.PUBLIC_URL + '/images/' + name + '.png'} />
                            <div className={styles.Detail}>
                                <div className={styles.ItemInfor}>
                                    <h3>{name}</h3>
                                    <p>Price: <strong>${price}</strong></p>
                                </div>
                                <div className={styles.Functional}>
                                    <label>
                                        Quantity
                                    <input className={styles.QuantityBtn} type='number' min='1' value={quantity} onChange={(e) => onChangeQuantity(e, item)}></input>
                                    </label>
                                    <IconButton onClick={name => onRemoveItem(name)}>
                                        <Delete />
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
                }
            </div>
            <div className={styles.Summary}>
                <h1>Oder Summary</h1>
                <h2>Total Price: ${totalPrice}</h2>
                <Button variant='contained' color='primary'>Checkout</Button>
            </div>
        </Fragment>
    }
    return (
        <div className={styles.Cart}>
            {SummaryDisplay}
        </div>
    );
};

Cart.propTypes = {

};

export default Cart;