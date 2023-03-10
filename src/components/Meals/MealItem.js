import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import classes from './MealItem.module.css';

const MealItem = ({ image, name, description, price }) => {
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
                    <input id='amount' type='number' min={0} max={10} step={1} defaultValue={0} />
                    <button className={classes.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default MealItem;