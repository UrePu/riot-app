// app/champions/[id]/page.tsx

import React from "react";
import Image from "next/image";
import { ChampionType } from "@/types/champion";
import { fetchChampion } from "@/utils/serverApi";

interface ChampionDetailPageProps {
  params: { id: string };
}

type ChampionDetail = Pick<ChampionType, "name" | "blurb" | "info" | "id">;

const ChampionDetailPage = async ({
  params: { id },
}: ChampionDetailPageProps) => {
  const { champion, version } = await fetchChampion(id);
  const championKey = Object.keys(champion.data)[0];
  const {
    id: championId,
    name,
    blurb,
    info,
  }: ChampionDetail = champion.data[championKey];

  return (
    <div className="max-w-lg mx-auto my-10 p-6 rounded-lg shadow-lg">
      <div className="flex justify-center mb-6">
        <Image
          src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championId}.png`}
          alt="champion"
          width={200}
          height={200}
        />
      </div>
      <h1 className="text-3xl font-bold text-center mb-4">{name}</h1>
      <p className="text-center text-gray-600 mb-6">{blurb}</p>
      <ul className="space-y-4">
        <li className="p-3 border border-gray-200 rounded-md">
          공격력: {info.attack}
        </li>
        <li className="p-3 border border-gray-200 rounded-md">
          방어력: {info.defense}
        </li>
        <li className="p-3 border border-gray-200 rounded-md">
          마법: {info.magic}
        </li>
        <li className="p-3 border border-gray-200 rounded-md">
          난이도: {info.difficulty}
        </li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
