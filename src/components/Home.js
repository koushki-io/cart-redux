import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dataAction } from '../redux/action';
import Product from './shared/Product';
import styles from './Home.module.css'



const Home = () => {
   const {data,loading,error}= useSelector(x=>x.getdata)
   const dispatch= useDispatch()
 const navigate=  useNavigate()

   useEffect(() => {
      dispatch(dataAction())
      
   }, [])
   
  
  return (
    <div className={styles.container} >
      {data.map((item)=><Product key={item.id}   productData={item}  />)}
    {loading &&  <h3 style={{color:"green"}}>Loding...</h3>}
    {error &&  <h3 style={{color:"red"}}>{error}</h3>}
    </div>
  )
}


export default Home