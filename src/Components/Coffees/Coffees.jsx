import React from 'react';

import image_1 from '../../assets/img-1.png'
import image_2 from '../../assets/img-2.png'
import image_3 from '../../assets/img-3.png'
import image_4 from '../../assets/img-4.png'
import image_5 from '../../assets/shop-img5.jpg'
import image_6 from '../../assets/shop-img6.jpg'
import image_7 from '../../assets/shop-img7.jpg'
import image_8 from '../../assets/shop-img8.jpg'

const Coffees = () => {

    const images = [
        {
            id: 1,  
            img: image_1,
            title: "BEAN VARIETIES",
            para: "looking at its layout. The point of"
        },
        {
            id: 2,  
            img: image_2,
            title: "TYPES OF COFFEE",
            para: "looking at its layout. The point of"
        },
        {
            id: 3,  
            img: image_3,
            title: "COFFEE & PASTRY",
            para: "looking at its layout. The point of"
        },
        {
            id: 4,  
            img: image_4,
            title: "COFFEE TO Think",
            para: "looking at its layout. The point of"
        },
        {
            id: 5,  
            img: image_5,
            title: "COFFEE TO GROW",
            para: "looking at its layout. The point of"
        },
        {
            id: 6,  
            img: image_6,
            title: "COFFEE TO GROW",
            para: "looking at its layout. The point of"
        },
        {
            id: 7,  
            img: image_7,
            title: "COFFEE TO GROW",
            para: "looking at its layout. The point of"
        },
        {
            id: 8,  
            img: image_8,
            title: "COFFEE TO GROW",
            para: "looking at its layout. The point of"
        },

    ]

    return (
    <div className="flex flex-col gap-6 min-h-screen justify-center max-w-7xl items-center w-full  mx-auto py-8 space-y-8">
      <h1 className="text-4xl md:text-6xl font-black text-center text-gray-800 pt-12">
        OUR COFFEE OFFER
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 p-6 rounded-lg shadow-lg w-full">
        {images.map(({ id, img, title, para }) => (
          <div key={id} className="text-white flex flex-col items-center bg-gray-900 rounded-lg pb-8 shadow-md transition-transform transform hover:scale-105 duration-200">
            <img src={img} alt="" className="w-full h-auto rounded-lg mb-4" />
            <h1 className="text-3xl font-black mb-2">
              {title}
            </h1>
            <p className="text-xl mb-2">{para}</p>
            <button className="capitalize border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffees;
