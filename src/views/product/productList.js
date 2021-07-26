import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { productRemove } from "../../state-management/actions/productAction";
import {getAllProducts} from "../../state-management-thunk/actions/productThunkActions";

export const ProductList = () => {


    //useSelector == mapStateToProps
    //useDispatch == mapDispatchToProps

    // export connect(mapStateToProps, mapDispatchToProps)(Component);

    const products = useSelector(store => store.productThunkState.items);
    const isLoading = useSelector(store => store.productThunkState.isLoading);
    const dispatch = useDispatch();
    React.useEffect(() => {
        getAllProducts(dispatch);
    }, [])
    return (
        <div>
            <h2>Products :</h2>
            {isLoading ? <div>loading data from server ...</div> : null}
            <ul style={{float:'left'}}>
                {products.map(item => 
                    <li key={item.id}>{item.productName} - {item.unitPrice} - 
                    <button onClick={() => dispatch(productRemove(item.id))}>Remove</button></li>
                    )}
            </ul>
        </div>
    )
}
