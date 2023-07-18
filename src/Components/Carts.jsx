import React from 'react';
import { useCart } from 'react-use-cart';

const Carts = () => {
  const { items, updateItemQuantity, removeItem } = useCart();

  return (
    <div className='border-4 grid mb-[200px] md:grid-cols-2 text-center xl:grid-cols-3 2xl:grid-cols-4 justify-center border-green-600 rounded-md p-6'>
      {items.map((item) => (
        <div key={item.id} className='border-2 w-[370px] grid justify-center border-green-600 mt-9 p-5 rounded-md '>

          <p className='text-gray-700 font-bold text-4xl'>{item.name}</p>
          <p className='text-green-500 text-4xl mt-3'>{item.price}</p>
          <p className='text-4xl mt-3'>Quantity: {item.quantity}</p>
            <div className='flex justify-center gap-10 mt-7'>
                    <button className='text-6xl bg-red-400 hover:bg-red-600 font- text-white rounded-full w-14 text-center' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                    <button className='text-6xl bg-green-400 hover:bg-green-600 font- text-white rounded-full w-14 text-center' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            </div>
          <button className='mt-8 bg-red-400 text-white hover:bg-red-600 p-2 font-bold' onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Carts;
