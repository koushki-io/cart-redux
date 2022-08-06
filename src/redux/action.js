import axios from "axios";
export const BASE_URL='https://fakestoreapi.com/products'
const getdata=async()=>{
    const {data}=await axios.get(`${BASE_URL}`)
    return data

}

export const dataAction=()=>async(dispatch,getstate)=>{
    dispatch({type:"requst"})

    try {
        const data= await getdata()
        dispatch({type:"success",payload:data})
        
        
        
    } catch (error) {
        dispatch({type:"filde",payload:error.message})

   
        

    }

}

export const cartAction=(image,title,price,id)=>(dispatch,getdata)=>{
    
    const {selectItem}=getdata().getCart;
    const getCart=getdata().getCart;
 
   
    if (!selectItem.find(item=>item.id===id)) {
        dispatch({type:"add_item", payload:{image:image,title:title,price:price,id:id,quantity:1} })
        
    }

    localStorage.setItem("getCart",JSON.stringify(getCart))
     
     
}


export const removeAction=(id)=>(dispatch,getdata)=>{
    const {selectItem}=getdata().getCart;
    const getCart=getdata().getCart;
    if(selectItem.find(item=>item.id===id)){
        const index=selectItem.findIndex(item=>item.id === id)
        selectItem.splice(index,1)
     
            dispatch({type:"remove_item", payload:selectItem})
    
    }
    localStorage.setItem("getCart",JSON.stringify(getCart))

}

export const plusAction=(id)=>(dispatch,getdata)=>{
    const {selectItem}=getdata().getCart;
    const getCart=getdata().getCart;
    const index=selectItem.findIndex(item=>item.id === id)
    selectItem[index].quantity++
    
    dispatch({type:"plus_minus_item", payload:selectItem})
    localStorage.setItem("getCart",JSON.stringify(getCart))

}

export const minusAction=(id)=>(dispatch,getdata)=>{
    const {selectItem}=getdata().getCart;
    
    const index=selectItem.findIndex(item=>item.id === id)
    if(selectItem[index].quantity>1){
    selectItem[index].quantity--
    }
    dispatch({type:"plus_minus_item", payload:selectItem})
    const getCart=getdata().getCart;
    localStorage.setItem("getCart",JSON.stringify(getCart))

}
export const itemCounterAction=()=>(dispatch,getdata)=>{

    const {selectItem}= getdata().getCart
    
    const counter=selectItem.reduce((total,product)=>{
       return total + product.quantity
    },0)
    const total=selectItem.reduce((total,product)=> total + product.quantity * product.price,0).toFixed(2)


    dispatch({type:"item_total_conter", payload:counter,total:total})

    const getCart=getdata().getCart;
    localStorage.setItem("getCart",JSON.stringify(getCart))


}

export const clearAction=()=>(dispatch,getdata)=>{
    dispatch({type:"clear"})
    const getCart=getdata().getCart;
    localStorage.setItem("getCart",JSON.stringify(getCart))

}
export const checkOutAction=()=>(dispatch,getdata)=>{
    dispatch({type:"checkOut"})
    const getCart=getdata().getCart;
    localStorage.setItem("getCart",JSON.stringify(getCart))

}