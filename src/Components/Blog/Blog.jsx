import React from "react";

import blog1 from '../../assets/blog-img1.png'
import blog2 from '../../assets/blog-img2.png'

const Blog = () => {

    const blogs = [
        {
          id: 1,
          img: blog1,
          date: '05 APRIL',
          title: 'PREP TECHNIQUES COFFEE',
          description: 'Distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more...'
        },
        {
          id: 2,
          img: blog2,
          date: '05 APRIL',
          title: 'ENJOY BEST COFFEE',
          description: 'Distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more...'
        },
      ];


  return (
    <div className="flex flex-col gap-6 min-h-screen justify-center items-center w-full max-w-7xl mx-auto py-8 space-y-8">
      <h1 className="text-4xl md:text-6xl font-black text-center text-gray-800 mt-12">
        OUR BLOG
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {blogs.map(({ id, img, date, title, description }) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={img} alt={title} className="w-full h-100 object-cover" />
            <div className="p-4">
              <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded absolute top-4 left-4">
                {date}
              </span>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                {title}
              </h2>
              <p className="mt-2 text-gray-600">{description}</p>
              <button className="mt-4 border-2 border-red-600 text-red-500 hover:text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
