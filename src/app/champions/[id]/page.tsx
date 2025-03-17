// app/champions/[id]/page.tsx

import React from "react";
import Image from "next/image";

import { ChampionType } from "@/types/champion";
import { fetchChampion } from "@/app/utils/serverApi";

interface ChampionDetailPageProps {
  params: { id: string };
}

const ChampionDetailPage = async ({
  params: { id },
}: ChampionDetailPageProps) => {
  const { champion, version } = await fetchChampion(id);
  const championKey = Object.keys(champion.data)[0];
  const championDetail: ChampionType = champion.data[championKey];

  return (
    <div>
      <Image
        src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championDetail.id}.png`}
        alt="champion"
        width={200}
        height={200}
      />
      <h1>{championDetail.name}</h1>
      <p>{championDetail.blurb}</p>

      <ul>
        <li>공격력: {championDetail.info.attack}</li>
        <li>방어력: {championDetail.info.defense}</li>
        <li>마법: {championDetail.info.magic}</li>
        <li>난이도: {championDetail.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
