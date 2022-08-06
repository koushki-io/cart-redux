import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { BASE_URL } from '../redux/action'
import Product from './shared/Product'
import styles from './ProductId.module.css'

const ProductID = () => {
  const params= useParams(x=>x.id)
  const [data, setdata] = useState({})


  useEffect(() => {
    const getdata=async()=>{
      const {data} =await axios.get(`${BASE_URL}/${params.id}`)
      setdata(data)
   }
    getdata()
 
  }, [])
  const{id,category,description,image,price,title,rating}=data

   
  
  return (
    <>
        { id && <div className={styles.container}>
          <img  className={styles.image} src={image} alt="product" />
          <div className={styles.textContainer}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.category}> <span>category</span>{category}</p>
         <div className={styles.buttonContainer}>
         <span className={styles.price}>{price} $</span>
          <Link to='products'>Back to shop</Link>
         </div>
         
          </div>
          
        </div> }

        
    </>
  )
}

export default ProductID