"use server";

import { ChampionType } from "@/types/champion";

export const fetchChampionList = async (): Promise<ChampionType[]> => {
  const versionRes = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions: string[] = await versionRes.json();
  const currentVersion = versions[0];

  const championRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${currentVersion}/data/ko_KR/champion.json`,
    {
      next: { revalidate: 86400 },
    }
  );

  const championData = await championRes.json();

  return Object.values(championData.data) as ChampionType[];
};

export const fetchChampion = async (id: string) => {
  const version = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versionData: Array<string> = await version.json();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/champion/${id}.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  const data = await response.json();
  return { champion: data, version: versionData[0] };
};

export const fetchItemList = async () => {
  const version = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versionData: Array<string> = await version.json();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/item.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};
