import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { deleteItem } from '../../features/Contents';

const Cart = ({modalOffHandler}) => {
    const contentList = useSelector( (state) => state.contents.value);
    const dispatch = useDispatch();
    console.log(contentList);
    const totalAmount = contentList.reduce((cur, item) => {
        return cur + item.price * item.amount
    }, 0);
    const hasItem = contentList.length > 0;

    const deleteHandler = (e) => {
        dispatch(deleteItem({
            id: e.target.id
        }));
    }

  return (
    <Modal modalOffHandler={modalOffHandler}>
        <div className={classes.container}>
            <div><h3 className={classes.title}>YOUR CART</h3></div>
            <div className={classes['cart-items']}>
                {contentList.map(item => {
                    return <div key={item.id} id={item.id} name={item.name} onClick={deleteHandler} className={classes.delete}>{item.name} x {item.amount} &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faTrashCan} className={classes.trash} id={item.id} /></div>
                })}
            </div>
            {!hasItem && <h3>No order yet!</h3>}
            {hasItem && <div className={classes.total}>
                <span>Total :</span>
                <span> ${totalAmount}</span>
            </div>}
            <div>
                {hasItem && <button onClick={() => {
                    console.log(contentList);
                }}>Order</button>}
            </div>
        </div>
    </Modal>
  );
}

export default Cart;