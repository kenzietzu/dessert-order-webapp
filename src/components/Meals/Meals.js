import React from 'react';
import { mealList } from './mealList';
import MealItem from './MealItem';
import classes from './Meals.module.css';

const Meals = () => {

  return (
    <div className={classes.container}>{mealList.map((meal) => {
        return <MealItem key={meal.id} id={meal.id} image={meal.image} name={meal.name} description={meal.description} price={meal.price} />})}
    </div>
  )
}

export default Meals;