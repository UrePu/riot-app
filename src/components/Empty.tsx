import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-white p-4 animate-pulse">
      {/* 이미지 자리 */}
      <div className="w-[180px] h-[180px] bg-loading rounded" />
      {/* 이름 자리 */}
      <div className="mt-4 w-3/4 h-6 bg-loading rounded" />
      {/* 타이틀 자리 */}
      <div className="mt-2 w-1/2 h-4 bg-loading rounded" />
    </div>
  );
};

export default Empty;
