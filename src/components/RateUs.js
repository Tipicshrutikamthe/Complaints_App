// import React, { useState } from 'react';

// const RateUs = () => {
//   const [rating, setRating] = useState(null);

//   const handleRatingClick = (value) => {
//     setRating(value);
//     // You can perform additional actions based on the selected rating
//   };

//   return (
//   <>
//   <div className=' w-full'>
//   </div>
//     <div className="bg-gray-300 p-4 flex flex-col items-center justify-center min-h-auto ">
//       <h1 className="text-2xl font-bold mb-4">Rate Your Experience</h1>
//       <div className="flex space-x-4">
//         {[1, 2, 3, 4, 5].map((value) => (
//           <button
//             key={value}
//             className={`text-4xl focus:outline-none ${
//               rating === value ? 'text-yellow-500' : 'text-gray-400'
//             }`}
//             onClick={() => handleRatingClick(value)}
//           >
//             {rating === value ? '⭐️' : '★'}
//           </button>
//         ))}
//       </div>
//       {rating && (
//         <p className="mt-4 text-lg">
//           Thank you for rating! You rated your experience as {rating} star{rating !== 1 && 's'}.
//         </p>
//       )}
//     </div>
//     </>
//   );
// };

// export default RateUs;
import React, { useState } from 'react';

const RateUs = () => {
  const [rating, setRating] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
    // You can perform additional actions based on the selected rating
  };

  return (
    <>
    <div className="bg-gray-300 p-4 flex flex-col items-center justify-center min-h-auto">
      <h1 className="text-2xl font-bold mb-4">Rate Your Experience</h1>
      <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            className={`text-4xl focus:outline-none ${
              rating === value ? 'text-yellow-500' : 'text-gray-400'
            }`}
            onClick={() => handleRatingClick(value)}
          >
            {rating === value ? '⭐️' : '★'}
          </button>
        ))}
      </div>
      {rating && (
        <p className="mt-4 text-lg">
          Thank you for rating! You rated your experience as {rating} star{rating !== 1 && 's'}.
        </p>
      )}
    </div>
    
	
 
    </>
  );
};

export default RateUs;
