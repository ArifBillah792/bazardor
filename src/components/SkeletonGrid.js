import React from "react";

const SkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="border border-base-300 rounded-box p-4 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="skeleton w-11 h-11 rounded-xl" />
            <div className="space-y-2 flex-1">
              <div className="skeleton h-4 w-1/2" />
              <div className="skeleton h-3 w-1/3" />
            </div>
          </div>
          <div className="skeleton h-5 w-2/5" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonGrid;
