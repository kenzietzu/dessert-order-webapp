import React from 'react';
import headerImg from '../../assets/header4.jpg';
import classes from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';



const Header = ({modalOnHandler}) => {
    const contentList = useSelector( (state) => state.contents.value);
    const numberOfItems = contentList.reduce((cur, item) => {
        return cur + +item.amount;
    }, 0);

    return (
        <div>
            <div className={classes.header}>
                <h1>A Doughable</h1>
                <div className={classes.cart} onClick={modalOnHandler}>
                    <span><FontAwesomeIcon icon={faCartShopping} /></span>
                    <span>&nbsp;Your Order&nbsp;</span>
                    <span>( {numberOfItems} )</span>
                </div>
            </div>
            <div>
                <img className={classes.bg} src={headerImg} alt='header picture' />
            </div>
        </div>
    )
}

export default Header;