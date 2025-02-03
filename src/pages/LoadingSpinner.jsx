import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>

      {/* Text below the spinner */}
      <p className="mt-4 text-gray-600 text-center">
        Please wait, the application is launching...<br />
        This may take some time.
      </p>
    </div>
  );
};

export default LoadingSpinner;