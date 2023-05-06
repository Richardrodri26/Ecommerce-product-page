import { cartItem } from '.';
import { CartState } from './CartProvider';

type CartActionType = 
 | { type: 'Cart - update' }
 | { type: 'Cart - delete' }
 | { type: 'Cart - update items', payload: cartItem }


export const CartReducer = (state: CartState, action: CartActionType): CartState => {
 switch (action.type) {
   case 'Cart - update':
     return {
      ...state,
      showCart: !state.showCart
      }

      case 'Cart - update items':
     return {
      ...state,
      cart: action.payload
      }

      case 'Cart - delete':
     return {
      cart: {
        img: '',
        numberOfItems: 0
      },
      showCart: false
      }

   default:
      return state
 }
 
 }