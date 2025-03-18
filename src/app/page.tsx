// app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  const IMG_URL =
    "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
  return (
    <div className=" p-8">
      {/* 상단 제목 및 설명 */}
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-2">리그 오브 레전드 정보 앱</h1>
        <p className="text-lg">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>

      {/* 카드 섹션 */}
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2  text-white">
        {/* 챔피언 목록 보기 카드 */}
        <Link href="/champions">
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <Image
              src={`${IMG_URL}Aatrox_2.jpg`}
              alt="챔피언 목록"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <p className="text-xl font-bold hover:underline">
                챔피언 목록 보기
              </p>
            </div>
          </div>
        </Link>

        {/* 금주 로테이션 카드 */}
        <Link href="/rotation">
          <div className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <Image
              src={`${IMG_URL}Teemo_2.jpg`} // 실제 이미지 경로로 변경
              alt="금주 로테이션 확인"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
              <p className="text-xl font-bold hover:underline">
                금주 로테이션 확인
              </p>
            </div>
          </div>
        </Link>

        {/* 아이템 목록 보기 카드 */}
        <Link href="/items" className="md:col-span-2">
          <div className="relative w-full h-60 md:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer">
            <Image
              src={`${IMG_URL}Garen_6.jpg`} // 실제 이미지 경로로 변경
              alt="아이템 목록"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <p className="text-xl font-bold hover:underline">
                아이템 목록 보기
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
