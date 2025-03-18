import React from "react";
import Champion from "@/components/Champion";
import { fetchChampionList } from "../../utils/serverApi";
import { ChampionType } from "@/types/champion";
const page = async () => {
  const championList: ChampionType[] = await fetchChampionList();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">챔피언 목록</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {championList.map((champion) => (
          <Champion key={champion.id} data={champion} />
        ))}
      </div>
    </div>
  );
};

export default page;
