// src/app/api/champion/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // 최신 데이터를 항상 가져오도록 (선택사항)

export async function GET() {
  try {
    const versionRes = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versions: string[] = await versionRes.json();
    const currentVersion = versions[0];

    const championRes = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${currentVersion}/data/ko_KR/champion.json`,
      { next: { revalidate: 86400 } }
    );

    const championData = await championRes.json();

    const champions = Object.values(championData.data);

    return NextResponse.json(champions);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch champions" },
      { status: 500 }
    );
  }
}
