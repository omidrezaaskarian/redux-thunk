import {FETCH_PRODUCTS_FAIELD, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCC} from './actionTypes'


//action creator
export function getAllProducts(dispatch) {
    const apiUrl = "http://apitester.ir/api/Products"
    dispatch(fetchProductsStart());
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dispatch(fetchProductsSucc(data));
    })
    .catch(error => {
        dispatch(fetchProductsFailed(error));
    });
}

export const  getAllProductsAsync = async(dispatch) => {
    const apiUrl = "http://apitester.ir/api/Products"
    dispatch(fetchProductsStart());
    let response = await fetch(apiUrl);
    if(response.status){
        dispatch(fetchProductsSucc(data));
    } else {
        dispatch(fetchProductsFailed(response.errorMessage));
    }
}



export const fetchProductsStart = () => ({
    type:FETCH_PRODUCTS_START
})

export const fetchProductsSucc = (data) => ({
    type:FETCH_PRODUCTS_SUCC,
    payload:data
})

export const fetchProductsFailed = (errorMessage) => ({
    type:FETCH_PRODUCTS_FAIELD,
    payload:errorMessage
})