"use client";

import { getChampionList, getChampionRotation } from "@/utils/RiotApi";
import Champion from "@/components/Champion";
import { useQueries } from "@tanstack/react-query";
import { ChampionType } from "@/types/champion";
import Loading from "../loading";

const RotationPage = () => {
  const queryResults = useQueries({
    queries: [
      {
        queryKey: ["rotation"],
        queryFn: getChampionRotation,
      },
      {
        queryKey: ["champion"],
        queryFn: getChampionList,
      },
    ],
  });

  // 배열의 각 항목은 해당 쿼리의 결과를 담고 있습니다.
  const [
    { isLoading: rotationLoading, isError: rotationError, data: rotationData },
    {
      isLoading: allChampionsLoading,
      isError: allChampionsError,
      data: allChampionsData,
    },
  ] = queryResults;

  if (rotationLoading || allChampionsLoading) return <Loading />;
  if (rotationError || allChampionsError) return <div>Error...</div>;

  // 이후 rotationData와 allChampionsData를 활용할 수 있습니다.
  const rotationChampions: ChampionType[] = allChampionsData.filter(
    (champ: ChampionType) =>
      rotationData.freeChampionIds.includes(Number(champ.key))
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">이번 주 무료 챔피언 로테이션</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        {rotationChampions.map((champ: ChampionType) => (
          <Champion key={champ.id} data={champ} />
        ))}
      </div>
    </div>
  );
};

export default RotationPage;
