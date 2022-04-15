import { useContext } from 'react';
import { AppContext } from '../context';

export const useCart = () => {
  const { itemsForCard, setCartItem } = useContext(AppContext);
  const totalPrice = itemsForCard.reduce((sum, obj) => obj.price + sum, 0);

  return { itemsForCard, setCartItem, totalPrice };
};