import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-header flex justify-between text-center h-12 items-center mb-4">
      <Link
        className="w-full h-full flex justify-center items-center"
        href={"/"}
      >
        홈
      </Link>
      <Link
        className="w-full h-full flex justify-center items-center"
        href={"/champions"}
      >
        챔피언 목록
      </Link>
      <Link
        className="w-full h-full flex justify-center items-center"
        href={"/items"}
      >
        아이템 목록
      </Link>
      <Link
        className="w-full h-full flex justify-center items-center"
        href={"/rotation"}
      >
        로테이션 목록
      </Link>
    </div>
  );
};

export default Header;
