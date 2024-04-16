import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-300 min-h-auto py-12 px-2 sm:px-4 lg:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold mb-1">Our Mission</h2>

            <img src="https://th.bing.com/th/id/OIP.ae0xSzggvHfG0gj5CltTFwHaEL?w=311&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="About Us" className="rounded-lg mb-4" />
            <p className="text-lg text-center text-gray-700">
              Our mission is to provide the best customer support experience by addressing your complaints promptly and effectively.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-1">Our Team</h2>
            <img src={require('./i3.gif')} alt="About Us" className="rounded-lg mb-4" />

            <p className="text-lg text-center text-gray-700">
              We are a dedicated team of professionals committed to resolving your issues and ensuring your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
