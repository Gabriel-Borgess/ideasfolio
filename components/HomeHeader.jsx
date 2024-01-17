

import React from 'react';
import Image from 'next/image';
import px from '/public/px.gif';

const HomeHeader = () => {
  return (
    <div className='bg-white dark:bg-slate-800 -min-h-screen flex flex-col items-center justify-center space-y-8 py-16'>
      {/* Card Estilo 1 */}
      <div className="max-w-4xl w-full p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md mb-8">
        <div className="relative overflow-hidden w-full h-48 md:h-64 lg:h-80">
          <Image
            src={px}
            alt="Profile"
            width={498}
            height={280}
            priority
            className="w-full h-full rounded-lg"
          />
        </div>
        <div className="text-center mt-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">/$ whoami?:</h1>
          <p className='text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white mb-4'>@pxis</p>
          <div className="flex flex-wrap justify-center space-x-2 mb-4">
            {['coding', 'indiehacking', 'infosec'].map((tag, index) => (
              <span key={index} className="bg-gradient-to-r from-teal-500 to-teal-800 text-white py-1 px-3 rounded mb-2">
                {tag}
              </span>
            ))}
          </div>
          <p className='text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-white mb-4'>$ Hack the Life.</p>
        </div>
      </div>

      
        </div>
     
  );
};

export default HomeHeader;

