import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { checkOutAction, clearAction } from "../redux/action";
import Cart from "./shared/Cart";
import styles from './ShoppingCart.module.css'

const ShoppingCart = () => {
  const { selectItem, total, checkout, itemCounter } = useSelector(
    (x) => x.getCart
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
        
      <div className={styles.cartContainer} >
        {selectItem.map((item) => (
          <Cart key={item.id} selectItem={item} />
        ))}
      </div>
           
           
                    {itemCounter > 0 &&  !checkout && <div className={styles.payments}>
        
          <p>
            <span>total Items</span> :{itemCounter}
          </p>
          <p>
            <span>total Payments</span> :{total} $
          </p>
          <div className={styles.buttonContainer}>
            <button
            className={styles.clear}
              onClick={() => {
                dispatch(clearAction());
              }}
            >
              clear
            </button>
            <button
             className={styles.checkout}
              onClick={() => {
                dispatch(checkOutAction());
              }}
            >
              checkout
            </button>
          </div>
        </div>
}

{itemCounter===0 &&  !checkout &&  <div className={styles.complete}>
  <h3>Want to buy?</h3>
  <Link to="/products">Go to shop</Link>
  </div>}


       {checkout && 
       
       <div className={styles.complete}>
       <h3>checked out successFully</h3>

       <Link to="/products"
       >
         Buy More
       </Link>
     </div>
       }
      
            </div>
          
      
   
  );
};

export default ShoppingCart;
