import Navbar from './ components/Navbar'
import ProductsPage from './ components/ProductsPage'
import './App.css'
import { CartProvider } from './context/cart'

function App() {

  return (
    <CartProvider>
      <>
      <Navbar />
      <div className='max-w-7xl mx-auto h-auto md:mt-10'>
        <ProductsPage />

      </div>
      </>
    </CartProvider>
  )
}

export default App
