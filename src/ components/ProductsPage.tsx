import { useState, useContext } from 'react';
import { CartContext } from '../context/cart';

const ProductsPage = () => {
  const {updateCart} = useContext(CartContext)
  const [counter, setCounter] = useState(0)
  const [counterImg, setCounterImg] = useState(0)

  const images = [
    { img: '/src/assets/images/image-product-1.jpg' },
    { img: '/src/assets/images/image-product-2.jpg' },
    { img: '/src/assets/images/image-product-3.jpg' },
    { img: '/src/assets/images/image-product-4.jpg' },
  ]

  return (

    <div className="h-auto ">

      <div className="flex w-full h-auto flex-col md:flex-row gap-5 mb-5">

        <div className="relative md:basis-1/2 md:h-auto">

          <div className="w-full h-auto md:w-11/12 md:mx-auto min-h-[288px] flex md:flex-col md:gap-5">
            <div className="relative w-full aspect-square max-h-[387px] md:mx-auto max-w-[387px] md:rounded-lg md:mb-5 lg:mb-10">
              <img className="h-full w-full object-cover bg-cover transition-all duration-150 md:rounded-lg" src={images[counterImg].img} alt="" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 ">
                <div className={`h-1 w-1 p-2 rounded-full bg-slate-200  ${counterImg === 0 ? '' : 'opacity-50'} `}></div>
                <div className={`h-1 w-1 p-2 rounded-full bg-slate-200  ${counterImg === 1 ? '' : 'opacity-50'} `}></div>
                <div className={`h-1 w-1 p-2 rounded-full bg-slate-200  ${counterImg === 2 ? '' : 'opacity-50'} `}></div>
                <div className={`h-1 w-1 p-2 rounded-full bg-slate-200  ${counterImg === 3 ? '' : 'opacity-50'} `}></div>
              </div>
            </div>


            <div className="h-24 w-full mx-auto gap-2 items-center justify-center hidden md:flex">
              <div onClick={() => setCounterImg(0)} className={`${counterImg === 0 ? 'border-2 border-Orange rounded-xl' : ''} rounded-lg`}><img className={`h-full bg-cover ${counterImg === 0 ? 'opacity-50' : ''} rounded-lg`} src={images[0].img} alt="" /></div>
              <div onClick={() => setCounterImg(1)} className={`${counterImg === 1 ? 'border-2 border-Orange rounded-xl' : ''} rounded-lg`}><img className={`h-full bg-cover ${counterImg === 1 ? 'opacity-50' : ''} rounded-lg`} src={images[1].img} alt="" /></div>
              <div onClick={() => setCounterImg(2)} className={`${counterImg === 2 ? 'border-2 border-Orange rounded-xl' : ''} rounded-lg`}><img className={`h-full bg-cover ${counterImg === 2 ? 'opacity-50' : ''} rounded-lg`} src={images[2].img} alt="" /></div>
              <div onClick={() => setCounterImg(3)} className={`${counterImg === 3 ? 'border-2 border-Orange rounded-xl' : ''} rounded-lg`}><img className={`h-full bg-cover ${counterImg === 3 ? 'opacity-50' : ''} rounded-lg`} src={images[3].img} alt="" /></div>
            </div>

          </div>

          <button
            onClick={() => setCounterImg(counterImg === 0 ? images.length - 1 : counterImg - 1)}
            className="md:hidden bg-white py-2 px-[10px] text-center rounded-full absolute top-1/2 left-2 -translate-y-1/2">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" /></svg>
          </button>

          <button
            onClick={() => setCounterImg(counterImg === images.length - 1 ? 0 : counterImg + 1)}
            className="md:hidden bg-white py-2 px-[10px] text-center rounded-full absolute top-1/2 -translate-y-1/2 right-2">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="md:basis-1/2 md:h-[90%] lg:gap-10 lg:w-[80%] lg:px-24 md:my-auto md:flex md:flex-col md:justify-between">
          <div className="flex flex-col gap-5 px-5 ">
            <p className="uppercase text-Orange font-semibold tracking-wide">sneaker company</p>
            <p className="font-bold text-4xl opacity-90 font-Barlow">Fall Limited Edition Sneakers</p>
            <p className="leading-4 text-DarkGrayishBlue">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          </div>

          <div className="px-5 flex flex-col gap-3">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold opacity-90">$125.00</p>
                <span className="py-2 px-3 rounded-lg bg-PaleOrange text-Orange font-bold">50%</span>
              </div>
              <span className="text-GrayishBlue line-through">$250</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-2">

              <div className="lg:basis-1/3 flex justify-between items-center bg-LightGrayishBlue py-2 px-3 rounded-lg">
                <button onClick={() => setCounter(counter === 0 ? 0 : counter - 1)} className="text-Orange"><span><img src="/src/assets/images/icon-minus.svg" alt="" /></span></button>
                <p>{counter}</p>
                <button onClick={() => setCounter(counter + 1)} className="text-Orange"><span><img src="/src/assets/images/icon-plus.svg" alt="" /></span></button>
              </div>
              <button 
                onClick={() => updateCart({
                  img: images[counterImg].img,
                  numberOfItems: counter
                })}
                className="lg:basis-2/3 text-white bg-Orange w-full flex justify-center gap-2 items-center py-2 px-3 rounded-lg shadow-sm shadow-Orange">
                <span>
                  <svg className="h-4" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                    <path id="btn-icon"
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#FFFFFF" fill-rule="nonzero" />
                  </svg>
                </span>
                Add to cart
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductsPage