이 프로젝트는 Riot Games API를 활용하여 챔피언 로테이션, 아이템 목록 등을 제공하는 Next.js 기반의 웹 애플리케이션입니다.

링크[riot-app-rho.vercel.app]

기술 스택

프론트엔드: Next.js, React

스타일링: Tailwind CSS

API 통신: Riot Games API

상태 관리: Tanstack Query

패키지 매니저: pnpm

설치 및 실행 방법

1. 저장소 클론

git clone <repository-url>
cd <project-directory>

2. 패키지 설치

pnpm install

3. 환경 변수 설정

.env.local 파일을 생성하고 아래와 같은 환경 변수를 추가하세요.

RIOT_API_KEY=your-api-key

4. 개발 서버 실행

pnpm dev

기능 소개

챔피언 로테이션: Riot Games API에서 챔피언 로테이션 정보를 가져와 화면에 표시

챔피언 상세 페이지: 특정 챔피언의 상세 정보를 조회 가능

아이템 목록: 게임 내 아이템 정보를 표시

배포

배포는 Vercel을 활용하여 진행할 수 있습니다.

pnpm build
pnpm start

라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
