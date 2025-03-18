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
    <div>
      <Image
        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championId}.png`}
        alt="champion"
        width={200}
        height={200}
      />
      <h1>{name}</h1>
      <p>{blurb}</p>

      <ul>
        <li>공격력: {info.attack}</li>
        <li>방어력: {info.defense}</li>
        <li>마법: {info.magic}</li>
        <li>난이도: {info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
