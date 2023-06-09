import { useDispatch} from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  const { title, price, description, id } = props;


  const dispatch = useDispatch();


  const addItemsHandler = () =>{
    dispatch(cartActions.addItems(
      {id: id,
       title: title,
       price: price,
       description: description,
       quantity: 1,
    }));
   
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemsHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
