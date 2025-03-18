import Image from "next/image";
import React from "react";
import { ChampionType } from "@/types/champion";
import Link from "next/link";

type ChampionShow = Pick<
  ChampionType,
  "name" | "title" | "image" | "id" | "version"
>;

const Champion = (data: { data: ChampionType }) => {
  const { name, title, image, id, version }: ChampionShow =
    data.data as ChampionType;
  const CHAMPION_IMAGE_URL = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;
  return (
    <Link
      className="flex flex-col items-center justify-center border border-gray-300 p-4 "
      href={`/champions/${id}`}
    >
      <Image
        src={`${CHAMPION_IMAGE_URL}${image.full}`}
        alt="champion"
        width={180}
        height={180}
      />
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="text-sm">{title}</p>
    </Link>
  );
};

export default Champion;
