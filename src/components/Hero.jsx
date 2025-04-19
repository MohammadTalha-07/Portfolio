import React from 'react';

function Hero() {
  return (
    <div className="heroContainer bg-gradient-to-r from-slate-900 to-gray-400" id="home">
      <section className="flex flex-col md:flex-row px-4 items-center md:w-[80%] m-auto min-h-screen text-white">
        
        {/* Left Section */}
        <div className="leftSection w-full md:w-1/2 text-center md:text-left pt-10">
          <h1 className="font-sans">Fullstack Developer</h1>
          <h1 className="text-4xl font-bold my-3">Hello I'm Talha</h1>

          <p className="font-sans mb-6">
            I am a passionate web developer with a strong focus on building clean, efficient, and modern web experiences. I specialize in creating responsive, user-friendly websites that not only look great but also function seamlessly across all devices. With expertise in front-end and back-end technologies, I strive to write code that is both scalable and maintainable, ensuring optimal performance.
          </p>

          <div className="buttoncontainer flex flex-col sm:flex-row justify-center md:justify-start">
            <button className="bg-teal-600 text-white md:p-4 p-2 text-sm hover:bg-black cursor-pointer transition duration-200 ease-in-out m-2 rounded-4xl">
              Download CV
            </button>
            <button className="bg-teal-600 text-white md:p-4 p-2 text-sm hover:bg-black cursor-pointer transition duration-200 ease-in-out m-2 rounded-4xl">
              Contact me
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="rightSection w-full md:w-1/2 mt-6 md:mt-0">
          <div className="imagecontainer flex justify-center">
            <img
              src="/heroimg.jpg"
              className="w-48 h-48 md:w-100 md:h-100 rounded-full object-cover transition duration-300 hover:shadow-lg hover:shadow-teal-500/100 hover:scale-105"
              alt="here is the image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
