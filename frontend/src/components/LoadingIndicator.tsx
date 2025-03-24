import React from 'react';
export const LoadingIndicator = () => {
  return <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-800 mb-4"></div>
      <p className="text-lg text-green-900">
        Creating your perfect itinerary...
      </p>
      <div className="mt-4 text-sm text-green-700 max-w-md text-center">
        Our AI is crafting a personalized travel plan tailored just for you.
      </div>
    </div>;
};