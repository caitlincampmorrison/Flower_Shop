import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";

//ACTION TYPES
const FETCH_FLOWERS_FROM_SERVER = "FETCH_FLOWERS_FROM_SERVER"
const SELECT_FLOWER = 'SELECT_FLOWER'
const CLEAR_SELECTED_FLOWER = "CLEAR_SELECTED_FLOWER";
const ADD_SALE = "ADD_SALE"
const FETCH_SALES_FROM_SERVER = "FETCH_SALES_FROM_SERVER"
const CHECK_BASKET = "CHECK_BASKET"
const DELETE_SALE = "DELETE_SALE"
const DELETE_ALL_SALES = "DELETE_ALL_SALES"


//ACTION CREATORS
export const selectFlower = (flower) => ({
    type: SELECT_FLOWER,
    flower,
});
  
export const clearSelectedFlower = () => ({
    type: CLEAR_SELECTED_FLOWER,
});
export const checkBasket = (basket) => ({
    type: CHECK_BASKET,
    basket,
})

//THUNK ACTION CREATORS
export const fetchFlowers = () => {
    return async (dispatch) => {
      const { data } = await axios.get("/api/flowers");
      dispatch({ type: FETCH_FLOWERS_FROM_SERVER, flowers: data });
    };
};

export const fetchSales = () => {
    return async (dispatch) => {
      const { data } = await axios.get("/api/flowers/sales");
      dispatch({ type: FETCH_SALES_FROM_SERVER, sales: data });
    };
};

export const deleteSale = (sale) => {
    console.log("deleted sale: " + sale.flowerName)
    return async (dispatch) => {
      const {data} = await axios.delete(`/api/flowers/sales/${sale.id}`, { sale });
      dispatch({ type: DELETE_SALE, sales: data })
    };
};

export const deleteAllSales = () => {
    return async(dispatch) => {
        const {data} = await axios.delete('/api/flowers/sales')
        dispatch({type:DELETE_ALL_SALES, sales: data})
    }
}

export const addSale = (flower) => {
    return async(dispatch) => {
        const flowerId = flower.id
        const flowerName = flower.name
        const flowerImage = flower.image
        const flowerCost = flower.cost
        const flowerColor = flower.color
        const { data } = await axios.post('/api/flowers/sales', {flowerId, flowerName, flowerColor, flowerCost, flowerImage})
        dispatch({ type: ADD_SALE, sales: data })
    }
}

//INITIAL STATE
const initialState = {
    flowers: [],
    selectedFlower: {},
    sales: [],
    checkBasket: 0
};

//REDUCER
const reducer = ( state = initialState, action) => {
    switch(action.type) {
        case FETCH_SALES_FROM_SERVER:
            return { ...state, sales: action.sales}
        case FETCH_FLOWERS_FROM_SERVER:
            return {... state, flowers: action.flowers};
        case SELECT_FLOWER:
            return { ...state, selectedFlower: action.flower};
        case CLEAR_SELECTED_FLOWER:
            return { ...state, selectedFlower: {} }
        case ADD_SALE:
            return { ...state, sales: action.sale}
        case CHECK_BASKET:
            return { ...state, checkBasket: action.basket}
        case DELETE_SALE:
            return { ...store, sales: action.sale}
        case DELETE_ALL_SALES:
            return { ...store, sales: action.sale}
        default: 
            return state
    }
}

//STORE
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, loggerMiddleware)))

export default store