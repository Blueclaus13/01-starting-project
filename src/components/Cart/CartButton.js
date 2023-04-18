import { useDispatch, useSelector} from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';



const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector( state=> state.cart.totalQuantity);

  const toggleCartHandler = () => {
      dispatch(uiSliceActions.toggleCart());
  };

  return (
    <button className={classes.button}
      onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity === 0 ? "" : cartQuantity}</span>
    </button>
  );
};

export default CartButton;
