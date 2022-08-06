import React, { useEffect, useState } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { Link ,useNavigate} from 'react-router-dom'
import { shorten } from '../../helper/function'
import { cartAction, itemCounterAction, minusAction, plusAction, removeAction } from '../../redux/action';
import icon from '../../icons/trash.svg'
import styles from './Product.module.css'


const Product = ({productData}) => {
  const navigate=useNavigate();


  const {image,title,price,id}=productData;
  const dispatch=useDispatch()
  const {selectItem}=useSelector(x=>x.getCart)
  const [flag, setflag] = useState(false)
  const [add, setadd] = useState(0)

  useEffect(()=>{
    setflag(selectItem.find(item=>item.id === id))
      
  },[selectItem,flag,add])



  

 

  
  return (
    <div className={styles.container}>
        <img className={styles.cardImage} src={image}  alt="product" />
        <h3>{ shorten(title)}</h3>
        <p>{`${price} $`}</p>
        
        <div className={styles.linkContainer}>
          <Link to={id.toString()}>details</Link>
          
         <div className={styles.buttonContainer}>

          {!flag ?  <button  onClick={()=>{
          dispatch(cartAction(image,title,price,id))
          dispatch(itemCounterAction())
          setadd(p=>p+1)
          

        }}>
            Add to cart
        </button>:
        <div > 
          {flag.quantity && flag.quantity > 1 ? <button
          className={styles.smallButton}
          onClick={()=>{
                 dispatch(minusAction(id))
                 dispatch(itemCounterAction())

               }}
               >-</button> :  <button
               className={styles.smallButton}
        onClick={()=>{
          dispatch(removeAction(id))
          dispatch(itemCounterAction())
          setadd(p=>p+1)

        }}
        > <img  src={icon} alt="trash" />
          </button>}
        
          {flag && flag.quantity && flag.quantity >0 && <span className={styles.counter}>{flag.quantity && flag.quantity}</span> }


               <button
               className={styles.smallButton}
               onClick={()=>{
                 dispatch(plusAction(id))
                 dispatch(itemCounterAction())
               }}
               
               >+</button>
             </div>
        }

       

        
        
        
    </div>

        </div>
    </div>
  )
}

export default Product