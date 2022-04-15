import { useContext } from 'react';
import { AppContext } from '../context';

export const useCart = () => {
  const { itemsForCart, setCartItem } = useContext(AppContext);
  const totalPrice = itemsForCart.reduce((sum, obj) => obj.price + sum, 0);

  return { itemsForCart, setCartItem, totalPrice };
};