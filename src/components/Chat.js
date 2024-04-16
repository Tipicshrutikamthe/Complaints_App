

import React from "react";

const Chat = () => {
  const complaintData = [
    { priority: "High", count: 10, color: "#FF6384" },
    { priority: "Medium", count: 5, color: "#36A2EB" },
    { priority: "Low", count: 3, color: "#FFCE56" },
    // Add more data as needed
  ];

  const total = complaintData.reduce((acc, { count }) => acc + count, 0);
  let cumulativeAngle = -Math.PI / 2; // Start at the top
  const radius = 80; // Increased radius for larger pie chart
  const centerX = 120; // Adjusted center X coordinate
  const centerY = 120; // Adjusted center Y coordinate

  const pieChart = complaintData.map(({ priority, count, color }) => {
    const slicePercentage = (count / total) * 100;
    const endAngle = cumulativeAngle + (slicePercentage / 100) * Math.PI * 2;
    const largeArcFlag = slicePercentage > 50 ? 1 : 0;

    const startX = centerX + Math.cos(cumulativeAngle) * radius;
    const startY = centerY + Math.sin(cumulativeAngle) * radius;
    const endX = centerX + Math.cos(endAngle) * radius;
    const endY = centerY + Math.sin(endAngle) * radius;

    const path = `M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

    cumulativeAngle = endAngle;
    return (
      <g key={priority}>
        <path d={path} fill={color} />
        <text
          x={centerX + Math.cos(cumulativeAngle - Math.PI / 2) * (radius / 2)}
          y={centerY + Math.sin(cumulativeAngle - Math.PI / 2) * (radius / 2)}
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontSize="10"
        >
          {priority} ({slicePercentage.toFixed(2)}%)
        </text>
      </g>
    );
  });

  const complaintsData = [
    { month: "January", count: 20 },
    { month: "February", count: 25 },
    { month: "March", count: 15 },
    { month: "April", count: 30 },
    // Add more data as needed
  ];

  const maxCount = Math.max(...complaintsData.map((item) => item.count));

  const barChart = complaintsData.map((item, index) => (
    <div key={index} className="flex flex-col mr-4">
      <div
        className="bg-blue-500 rounded-md"
        style={{ width: "20px", height: `${(item.count / maxCount) * 120}px` }} // Adjusted height for smaller bars
      ></div>
      <span className="mt-2">{item.month}</span>
    </div>
  ));

  return (
    <div className="container mx-auto py-8 flex flex-wrap ">
      <div className="mr-8">{/* Add some spacing */}</div>
      <div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Complaints by Priority</h2>
          <svg viewBox="0 0 240 240" width="240" height="200">
            {pieChart}
          </svg>
        </div>
      </div>
      <div className="mr-8">{/* Add some spacing */}</div>
      <div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Complaints Over Time</h2>
          <div className="overflow-x-auto flex">
            <svg width="400" height="200">
              {complaintsData.map((item, index) => (
                <rect
                  key={index}
                  x={index * 50} // Adjusting the position of bars along x-axis
                  y={200 - (item.count / maxCount) * 120} // Adjusting the position of bars along y-axis
                  width="40"
                  height={(item.count / maxCount) * 120}
                  fill="#36A2EB" // Adjusting the color of bars
                />
              ))}
              {complaintsData.map((item, index) => (
                <text
                  key={index}
                  x={index * 50 + 20} // Adjusting the position of text labels along x-axis
                  y="200"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fontSize="10"
                >
                  {item.month}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;


