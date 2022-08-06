export const dataReducer=(state={data:[],loading:false,error:false},action)=>{
    switch (action.type) {
        case "requst":  
     return {...state,loading:true,error:false}

     case "success":  
     return {...state,data:action.payload,loading:false,error:false}

     case "filde":  
     return {...state,data:action.payload,loading:false,error:action.payload}
    
        default:
          return state
    }

}

export const cartReduser=(state={selectItem:[],itemCounter:0,total:0,checkout:false},action)=>{

switch (action.type) {
    case 'add_item':
    
   return {...state,selectItem:[...state.selectItem,action.payload],checkout:false}
        case 'remove_item':
       
          
          return {...state,selectItem:action.payload}
          
          case 'plus_minus_item':
            return {...state,selectItem:action.payload}

            case 'item_total_conter':
              return {...state,itemCounter:action.payload,total:action.total}

              case 'clear':
                return{selectItem:[],itemCounter:0,total:0,checkout:false}
         
                case 'checkOut':
                return{selectItem:[],itemCounter:0,total:0,checkout:true}

    default:
  return state
}
}