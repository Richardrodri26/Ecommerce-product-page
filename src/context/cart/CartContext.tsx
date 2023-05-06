import { createContext } from 'react';

export type cartItem = {
  img: string | '';
  numberOfItems: number
}

interface ContextProps {
  cart: cartItem
  showCart: boolean

  //methods

  onShowCart: () => void
  updateCart: (cart: cartItem) => void
  deletedCart: () => void
}

export const CartContext = createContext({} as ContextProps)