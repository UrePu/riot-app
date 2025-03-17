"use server";

export const fetchChampionList = async () => {
  const version = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versionData: Array<string> = await version.json();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${versionData[0]}/data/ko_KR/champion.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // CORS 정책을 우회하기 위한 코드
      },
      next: {
        revalidate: 86400,
      },
    }
  );
  const data = await response.json();
  return data;
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
