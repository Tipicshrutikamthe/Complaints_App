import React from 'react'

function Status() {
  return (
    <div>
      <section className="p-6 bg-gray-800 h-auto text-gray-100 ">
	<div className="container  h-[50%] mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">2+</p>
			<p className="text-sm sm:text-base">Complaints Registor</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">1</p>
			<p className="text-sm sm:text-base">Solved</p>
		</div>
		<div className="flex flex-col justify-start m-2 lg:m-6">
			<p className="text-4xl font-bold leading-none lg:text-6xl">1</p>
			<p className="text-sm sm:text-base">Pending</p>
		</div>
		
	</div>
</section>
    </div>
  )
}

export default Status


