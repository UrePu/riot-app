// app/champions/loading.tsx
import React from "react";

const Loading = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Loading....</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {Array.from({ length: 30 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-gray-300 p-4 animate-pulse"
          >
            <div className="w-[180px] h-[180px] bg-gray-300 rounded" />
            <div className="mt-4 w-3/4 h-6 bg-gray-300 rounded" />
            <div className="mt-2 w-1/2 h-4 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
