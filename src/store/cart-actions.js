import { cartActions } from "./cartSlice";
import { uiSliceActions } from "./ui-slice";

export const fetchCartData = ()=>{
    return async dispatch =>{
        const fetchData = async () =>{
            const response = await fetch(
                'https://star-project-246ba-default-rtdb.firebaseio.com/cart.json'
                );

            if(!response.ok){
                throw Error('Could not fetch cart data!');
            };
                const data = await response.json();

                return data;
        };

        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        }catch(error){
            dispatch(uiSliceActions.showNotification(
                {
                  status: 'error',
                  title: 'Error...',
                message: 'Fetching cart data failed!',}
              ));

        }
    };
};


export const sendCartData = (cart) =>{
    return async (dispatch) => {
        dispatch(uiSliceActions.showNotification(
            {
              status: 'pending',
              title: 'Sending...',
            message: 'Sending cart data!',}
          ));

        const sendRequest = async ()=>{
            const response = await fetch('https://star-project-246ba-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
    
          if(!response.ok){
            throw new Error("Sending cart data failed")
          };
    
          //const responseData = await response.json();

        };

        try{
            await sendRequest();
            dispatch(uiSliceActions.showNotification(
                {
                  status: 'success',
                  title: 'Success...',
                message: 'Sent cart data successfully!',}
              ));

        }catch(error){
            dispatch(uiSliceActions.showNotification(
                {
                  status: 'error',
                  title: 'Error...',
                message: 'Sending cart data failed!',}
              ));
        }

    };
};