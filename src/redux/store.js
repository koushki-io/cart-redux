
import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { dataReducer,cartReduser } from "./reducer";



const reducer =combineReducers({
    getdata:dataReducer,
    getCart:cartReduser,
})
 
const getCart=localStorage.getItem("getCart") ? JSON.parse(localStorage.getItem("getCart")) : {selectItem:[],itemCounter:0,total:0,checkout:false}
const initialState={
    getCart:getCart,
    
}

const middleware=[thunk]
const store=createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store