# Little Wonder

Little Wonder Wiki와 Adventure Builder를 하나의 저장소에서 운영하는 React/Vite 모노레포입니다. 두 앱은 독립적으로 개발·빌드·배포할 수 있고 Astryx neutral theme과 Tailwind CSS v4 디자인 토큰을 공유합니다.

## 시작하기

```bash
npm install
npm run dev:wiki
npm run dev:builder
```

기본 개발 주소는 Wiki `http://localhost:5173`, Builder `http://localhost:5174`입니다. 두 서버를 동시에 실행할 때는 두 번째 명령에 `-- --port 5174`를 전달하세요.

## 검증과 빌드

```bash
npm run lint
npm run build
```

각 앱의 결과물은 `wiki/dist`와 `builder/dist`에 생성됩니다. Wiki의 `public/research`에 있는 리서치 페이지와 PDF도 Wiki 결과물에 함께 복사됩니다.

## 디자인 시스템

- Astryx core + neutral theme
- Astryx Tailwind token bridge
- Tailwind CSS v4
- Little Wonder 브랜드 토큰: `shared/astryx-brand.css`
- 두 앱에 공통 적용되는 상세 표면 스타일: `astryx-theme.css`

기존 콘텐츠와 브라우저 로컬 저장 데이터 키는 유지되어 마이그레이션 전 초안도 그대로 불러옵니다.
