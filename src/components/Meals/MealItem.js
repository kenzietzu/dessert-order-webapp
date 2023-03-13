import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../features/Contents';
import { v4 as uuid } from 'uuid';

import React from 'react'
import classes from './MealItem.module.css';

const MealItem = ({image, name, description, price }) => {
    const amountRef = useRef(null);
    const dispatch = useDispatch();
    const unique_id = uuid(); 

    const addItemHandler = () => {
        if (+amountRef.current.value > 0) {
            dispatch(addItem({
                id: unique_id,
                name: name,
                amount: amountRef.current.value,
                price: price,
            }));
            amountRef.current.value = '0';
        }
    }

    return (
        <div>
            <div className={classes.card}>
                <div>
                    <img className={classes['meal-image']} src={image} alt={name} />
                </div>
                <div className={classes.word}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>${price}</h3>
                    <input id='amount' type='number' min={0} max={10} step={1} defaultValue={0} ref={amountRef}/>
                    <button className={classes.button} onClick={addItemHandler}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default MealItem;