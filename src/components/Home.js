// Home.js
import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	const divStyle = {
		backgroundImage: "url('https://source.unsplash.com/random/640x480')",
		backgroundPosition: "center center",
		backgroundBlendMode: "multiply",
		backgroundSize: "cover",
	  };
  return (
   <>
    <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container h-auto flex flex-col justify-center p-2 mx-auto sm:py-10 lg:py-20 lg:flex-row lg:justify-between">
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="https://echo-tech.com/EchoBusV3.0/SystemAssets/Complaint%20MS/89de60f4-26c2-41bf-8a75-703d77665a35_wael-01.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hover:animate-bounce" />
      {/* <img src={require("./i3.gif")} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hover:animate-bounce" /> */}

    </div>
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-2xl font-bold leading-none sm:text-6xl">Feedback management Software
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 text-blue-900 font-semibold">Dictum aliquam porta in condimentum ac integer
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="/cregister" className="px-5 py-2 text-lg font-semibold border  border-black rounded dark:border-gray-100">POST</a>
			</div>
		</div>
	</div>

</section>
<section>
	
</section>
</>
  );

};

export default Home;

