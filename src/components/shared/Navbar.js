import React from 'react'
import cart from '../../icons/shop.svg'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    
    const {itemCounter}=useSelector(x=>x.getCart)
  return (
    <div className={styles.mainContainer}>  
        <div className={styles.container}>
        <Link className={styles.productLink} to="/products" >products</Link> 

            <div className={styles.iconContainer}>
           <Link to="/shoppingCart"> <img style={{width:"50px"}} src={cart} alt="cart" /></Link>
        <span>{itemCounter ? itemCounter : 0 }</span>
            </div>

        </div>
     

    </div>
  )
}

export default Navbar