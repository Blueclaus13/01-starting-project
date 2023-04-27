import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/cart-actions';


let isInitial= true;

function App() {
  const isCart = useSelector(state =>state.ui.isCartShowed);
  const cart = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  const notification = useSelector(state=>state.ui.notification);

  useEffect(()=>{
    dispatch(fetchCartData());
  },[dispatch]);

  useEffect(()=>{

    if(isInitial){
      isInitial = false;
      return;
    };

    dispatch(sendCartData(cart));

   
  },[cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification 
      title={notification.title}
      status={notification.status}
      message={notification.message}/>}
      <Layout>
      {isCart ? <Cart></Cart> : ""}
      <Products />
    </Layout>
    </Fragment>
    
  );
}

export default App;
