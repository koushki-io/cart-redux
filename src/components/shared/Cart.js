import React from 'react'
import { useDispatch } from 'react-redux'
import {shorten} from '../../helper/function'
import trash from '../../icons/trash.svg'
import { minusAction,itemCounterAction,removeAction,plusAction } from '../../redux/action'
import styles from './Cart.module.css'

const Cart = ({selectItem}) => {
    const dispatch= useDispatch()
    const{image,price,quantity,title,id}=selectItem
   
  return (
    <div className={styles.container}>
        <img className={styles.productImage} src={selectItem.image} alt="productItem" />

        <div className={styles.data}>
        <h3>{ shorten(title)} </h3>
        <p>{price} $</p>
        </div>

        <div>
        <span className={styles.quantity}>{quantity}</span>
        </div>

        <div className={styles.buttonContainer}>
            {quantity > 1 ? <button
            onClick={()=>{
                dispatch(minusAction(id))
                 dispatch(itemCounterAction())
            }}
            > -</button> :
            <button
            onClick={()=>{
                dispatch(removeAction(id))
          dispatch(itemCounterAction())
            }}
            ><img  src={trash} alt="" /> </button>
            
            }
            
            <button
            onClick={()=>{
                dispatch(plusAction(id))
                dispatch(itemCounterAction())
            }}> +</button>

        
        </div>
    </div>
  );
};

export default Cart