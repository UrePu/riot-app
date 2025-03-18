// src/app/api/rotation/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.NEXT_PUBLIC_RIOT_API_KEY) {
    return NextResponse.json(
      { error: "RIOT_API_KEY 환경 변수가 설정되지 않았습니다." },
      { status: 500 }
    );
  }

  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY!,
      },
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Riot API 호출 중 오류 발생", status: response.status },
      { status: response.status }
    );
  }

  const data = await response.json();
  return NextResponse.json(data, { status: 200 });
}
