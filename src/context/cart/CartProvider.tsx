import { FC, useReducer } from 'react';
import { CartContext, cartItem } from './CartContext';
import { CartReducer } from '.';

export interface CartState{ 
  cart: cartItem;
  showCart: boolean
}

interface Props {
  children:JSX.Element
}

const Cart_INITIAL_STATE: CartState = {
  cart: {
    img: '',
    numberOfItems: 0
  },
  showCart: false

}

export const CartProvider:FC<Props> = ({children}) =>{

const [state, dispatch] = useReducer(CartReducer,Cart_INITIAL_STATE);

const onShowCart = () => {
  dispatch({type: 'Cart - update'})
}

const updateCart = (cart: cartItem) => {
  dispatch({type: 'Cart - update items', payload: cart})
}
const deletedCart = () => {
  dispatch({type: 'Cart - delete'})
}

return (
  <CartContext.Provider value={{
    ...state,
    
    //methods
    onShowCart,
    updateCart,
    deletedCart,
    
  }}>
    {children}
  </CartContext.Provider>
)
}