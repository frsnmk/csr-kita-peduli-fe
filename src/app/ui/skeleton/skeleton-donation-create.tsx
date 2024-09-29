import React from 'react';

const SkeletonDonationCreate = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md relative space-y-6 animate-pulse">
      {/* Skeleton for back arrow */}
      <div className="h-6 w-6 bg-gray-300 rounded-full"></div>

      {/* Skeleton for header */}
      <div className="h-6 w-1/3 bg-gray-300 rounded"></div>

      {/* Skeleton for amount input */}
      <div className="space-y-2">
        <div className="h-5 w-1/4 bg-gray-300 rounded"></div>
        <div className="h-10 w-full bg-gray-300 rounded"></div>
      </div>

      {/* Skeleton for package selection */}
      <div className="space-y-4">
        <div className="h-5 w-2/3 bg-gray-300 rounded"></div>
        <div className="space-y-2">
          <div className="h-10 w-full bg-gray-300 rounded"></div>
          <div className="h-10 w-full bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skeleton for form fields */}
      <div className="space-y-4">
        <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-10 w-full bg-gray-300 rounded"></div>

        <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-10 w-full bg-gray-300 rounded"></div>

        <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-10 w-full bg-gray-300 rounded"></div>
      </div>

      {/* Skeleton for text area */}
      <div className="space-y-2">
        <div className="h-5 w-1/2 bg-gray-300 rounded"></div>
        <div className="h-24 w-full bg-gray-300 rounded"></div>
      </div>

      {/* Skeleton for checkboxes */}
      <div className="space-y-2">
        <div className="flex items-center">
          <div className="h-4 w-4 bg-gray-300 rounded"></div>
          <div className="h-5 w-3/4 ml-2 bg-gray-300 rounded"></div>
        </div>
        <div className="flex items-center">
          <div className="h-4 w-4 bg-gray-300 rounded"></div>
          <div className="h-5 w-3/4 ml-2 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Skeleton for submit button */}
      <div className="fixed bottom-0 w-full bg-white shadow-lg max-w-[480px] mx-auto left-0 right-0 p-4">
        <div className="h-12 w-full bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default SkeletonDonationCreate;
