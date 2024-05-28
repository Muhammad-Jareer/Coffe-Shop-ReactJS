import React from "react";
import product_1 from '../../assets/shop-img1.jpg'
import product_2 from '../../assets/shop-img2.jpg'
import product_3 from '../../assets/shop-img3.jpg'
import product_4 from '../../assets/shop-img4.jpg'
import product_5 from '../../assets/shop-img5.jpg'
import product_6 from '../../assets/shop-img6.jpg'
import product_7 from '../../assets/shop-img7.jpg'
import product_8 from '../../assets/shop-img8.jpg'



const ShopSection = () => {

    const products = [
        { id: 1, img: product_1, title: 'Cappuccino', price: '19.99' },
        { id: 2, img: product_2, title: 'Latte', price: '29.99' },
        { id: 3, img: product_3, title: 'Caffè macchiato', price: '39.99' },
        { id: 4, img: product_4, title: 'Flat white', price: '49.99' },
        { id: 5, img: product_5, title: 'Affogato', price: '19.99' },
        { id: 6, img: product_6, title: 'Cortado', price: '29.99' },
        { id: 7, img: product_7, title: 'Americano', price: '39.99' },
        { id: 8, img: product_8, title: 'Mocha', price: '49.99' },
      ];

  return (
    <div className="flex flex-col gap-6 min-h-screen justify-center items-center max-w-7xl w-full  mx-auto py-8 space-y-8">
      <h1 className="text-4xl md:text-6xl font-black text-center text-gray-800 pt-12">
        OUR SHOP
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gray-100 p-8 rounded-lg shadow-lg w-full">
        {products.map(({ id, img, title, price }) => (
          <div key={id} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <img src={img} alt={title} className="w-full h-[420] rounded-lg mb-4" />
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              {title}
            </h1>
            <p className="text-xl text-gray-800 mb-4">${price}</p>
            <button className="capitalize text-red-500 border-2 border-red-500 hover:text-white px-6 py-2 rounded-lg hover:bg-red-500 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
