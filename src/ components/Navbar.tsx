import { useContext, useState } from "react"
import { CartContext } from "../context/cart"

const Navbar = () => {
  const { onShowCart, showCart, cart, deletedCart } = useContext(CartContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className={`${isOpen ? 'left-0 flex opacity-100' : '-left-full opacity-0'} flex-col md:hidden absolute top-0 z-50 h-screen w-1/2 transition-all duration-100`}>
        <ul className="h-full w-full p-5 flex flex-col bg-white gap-5 text-DarkGrayishBlue z-10">
          <li onClick={() => setIsOpen(!open)}><svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd" /></svg></li>
          <li >Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="w-full h-16 bg-white ">
        <div className="flex w-full md:w-[90%] md:mx-auto md:px-5 h-full justify-between items-center p-2 md:py-10 border-b-2 md:mb-2">
          <div className="flex items-center gap-2 md:gap-10">
            <span onClick={() => setIsOpen(!isOpen)} className="md:hidden"> <img src="/src/assets/images/icon-menu.svg" alt="" /> </span>

            <img src="/src/assets/images/logo.svg" alt="" />

            <nav className={`hidden md:flex`}>
              <ul className="flex gap-5 text-DarkGrayishBlue">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
            {/* ${isOpen ? 'left-0' : '-left-10'} */}


          </div>

          <div className="flex items-center gap-2 md:gap-7 relative">
            <span onClick={onShowCart}><img src="/src/assets/images/icon-cart.svg" alt="" /> </span>
            <div 
              className={`bg-white px-5 py-3 min-h-[80px] h-auto w-64 z-10 rounded-xl ${showCart ? 'block' : 'hidden'} absolute  top-14 right-1`}>
              <h1 className=" py-2 mb-2 border-b-2">Cart</h1>
              
              <div className="flex items-center justify-between rounded-lg">
              <div className="aspect-square w-14 rounded-lg">
                <img className="rounded-lg" src={cart.img} alt="" />
              </div>
              <p>No. de items: {cart.numberOfItems}</p>
              </div>

              <button onClick={deletedCart}>Borrar</button>
            </div>
            <img className='h-6 object-cover rounded-full' src="/src/assets/images/image-avatar.png" alt="" />
          </div>
        </div>



      </div>
    </>
  )
}

export default Navbar