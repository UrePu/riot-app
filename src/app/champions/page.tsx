import React from "react";
import Champion from "@/components/Champion";
import { fetchChampionList } from "../utils/serverApi";
const page = async () => {
  const championList = await fetchChampionList();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {Object.keys(championList.data).map((key, i) => {
        const champion = championList.data[key];
        return <Champion key={i} data={champion} />;
      })}
    </div>
  );
};

export default page;
