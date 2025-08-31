import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-primary-200 rounded-full animate-spin"></div>
          {/* Inner ring */}
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-primary-600 rounded-full animate-spin" style={{animationDuration: '1s'}}></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-600 rounded-full"></div>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-700 mt-6 font-display">
          {message}
        </h2>
        
        <div className="mt-4 flex justify-center space-x-1">
          <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
