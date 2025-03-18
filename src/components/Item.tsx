import Image from "next/image";
import React from "react";
import { ItemType } from "@/types/Items";

type ItemProps = {
  item: ItemType;
  version: string;
};

const Item = ({ item, version }: ItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 p-4">
      <Image
        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
        alt={item.name}
        width={120}
        height={120}
        className="mx-auto"
      />
      {/* 아이템 이름: 빨간색 */}
      <h2 className="mt-2 text-lg font-semibold text-red-500 sm:text-xl md:text-2xl">
        {item.name}
      </h2>
      {/* 아이템 설명: 흰색 혹은 회색으로 */}
      <p className="text-gray-500 text-sm sm:text-base md:text-lg">
        {item.plaintext}
      </p>
    </div>
  );
};

export default Item;
