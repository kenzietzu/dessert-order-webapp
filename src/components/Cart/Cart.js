import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = ({modalOffHandler}) => {
    const cartItems = 
    [{id: '1', name: 'Chocolate Ring', amount: 1, price: 4.5}, { name: 'Your MOM'}];

  return (
    <Modal modalOffHandler={modalOffHandler}>
        <div className={classes.container}>
            <div><h3 className={classes.title}>YOUR CART</h3></div>
            <ul className={classes['cart-items']}>
                {cartItems.map(item => {
                    return <li>{item.name}</li>
                })}
            </ul>
            <div className={classes.total}>
                <span>Total :</span>
                <span> $29.5</span>
            </div>
            <div>
                <button>Order</button>
            </div>
        </div>
    </Modal>
  );
}

export default Cart;