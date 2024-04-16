// import React, { useState } from 'react';

// const predefinedQuestions = [
//   "What is the status of my complaint?",
//   "How can I escalate my complaint?",
//   "Can I get a refund for my purchase?",
//   "how to add complaint??"
//   // Add more predefined questions as needed
// ];

// const predefinedAnswers = {
//   "What is the status of my complaint?": "Your complaint is currently being reviewed by our support team.",
//   "How can I escalate my complaint?": "To escalate your complaint, please contact our support hotline at 1-800-XYZ-1234.",
//   "Can I get a refund for my purchase?": "Refunds are processed according to our refund policy. You can find more information on our website.",
//  "how to add complaint??":"Go on Add complaint and add new complaint their"
// };

// const Help = () => {
//   const [messages, setMessages] = useState([]);

//   const handleQuestionSelect = (question) => {
//     const answer = predefinedAnswers[question];
//     setMessages([...messages, { text: question, sender: 'user' }]);
//     setMessages([...messages, { text: answer, sender: 'bot' }]);
//   };

//   return (
//     <div className="bg-gray-900 p-4 min-h-auto flex flex-col justify-between">
//       <div className="flex flex-col mb-4">
//         <div className="flex flex-wrap  mb-2">
//           {predefinedQuestions.map((question, index) => (
//             <button
//               key={index}
//               onClick={() => handleQuestionSelect(question)}
//               className="m-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-400"
//             >
//               {question}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="flex flex-col justify-end h-full">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`p-2 max-w-lg mx-2 ${
//               msg.sender === 'user' ? 'bg-green-500 self-end' : 'bg-gray-300'
//             } rounded-lg mb-2`}
//           >
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         placeholder="Type your message..."
//         className="p-2 rounded-lg border-none focus:outline-none focus:ring focus:ring-blue-400 w-full"
//         onKeyDown={(e) => {
//           if (e.key === 'Enter') {
//             setMessages([...messages, { text: e.target.value, sender: 'user' }]);
//             e.target.value = '';
//           }
//         }}
//       />
//     </div>
//   );
// };

// export default Help;

import React, { useState } from 'react';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const predefinedQuestions = [
  "What is the status of my complaint?",
  "How can I escalate my complaint?",
  "Can I get a refund for my purchase?",
    "how to add complaint??"

];

const predefinedAnswers = {
  "What is the status of my complaint?": "Your complaint is currently being reviewed by our support team.",
  "How can I escalate my complaint?": "To escalate your complaint, please contact our support hotline at 1-800-XYZ-1234.",
"Can I get a refund for my purchase?": "Refunds are processed according to our refund policy. You can find more information on our website.",

};

const Help = () => {
  const [messages, setMessages] = useState([]);

  const handleQuestionSelect = (question) => {
    const answer = predefinedAnswers[question];
    setMessages([...messages, { text: question, sender: 'user' }]);
    setMessages([...messages, { text: answer, sender: 'bot' }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const userMessage = e.target.value.trim();
      if (userMessage !== '') {
        setMessages([...messages, { text: userMessage, sender: 'user' }]);
        // Provide a positive default response for custom messages
        setMessages([...messages, { text: "Thank you for reaching out! Our team will get back to you as soon as possible.", sender: 'bot' }]);
        e.target.value = '';
      }
    }
  };

  return (
    <div className="bg-black p-4 min-h-auto flex flex-col justify-between">
      <div className="flex flex-col mb-4">
        <div className="flex flex-wrap  mb-2">
        {/* <FontAwesomeIcon icon={fa-comments-question-check}/> */}
       {/* <FontAwesomeIcon icon={faComments} className='text-white '/> */}

          {predefinedQuestions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionSelect(question)}
              className="m-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-400"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-end h-full">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 max-w-lg mx-2 ${
              msg.sender === 'user' ? 'bg-green-500 self-end' : 'bg-gray-300'
            } rounded-lg mb-2`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        className="p-2 rounded-lg border-none focus:outline-none focus:ring focus:ring-blue-400 w-full"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Help;
