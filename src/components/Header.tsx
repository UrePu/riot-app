"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // localStorage에서 저장된 모드 불러오기 (없으면 system preference 활용 가능)
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  return (
    <div className="bg-layout flex justify-between text-center h-12 items-center mb-4 text-white">
      <div className="flex flex-1">
        <Link
          className="w-full h-full flex justify-center items-center"
          href="/"
        >
          홈
        </Link>
        <Link
          className="w-full h-full flex justify-center items-center"
          href="/champions"
        >
          챔피언 목록
        </Link>
        <Link
          className="w-full h-full flex justify-center items-center"
          href="/items"
        >
          아이템 목록
        </Link>
        <Link
          className="w-full h-full flex justify-center items-center"
          href="/rotation"
        >
          로테이션 목록
        </Link>
      </div>
      <button onClick={toggleDarkMode} className="w-32 text-sm rounded">
        {darkMode ? "라이트 모드" : "다크 모드"}
      </button>
    </div>
  );
};

export default Header;
