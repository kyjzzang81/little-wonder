# Little Wonder Adventure Builder v1

내부 콘텐츠 설계와 품질 검수를 위한 반응형 웹앱입니다.

현재 구현된 기능:

- Adventure Seed 입력
- Big Question, 첫 Trigger, 선택권·재시도, Thinking Journey, Parent Wow·Evidence별 AI 입력 보조
- Little Wonder Fit Check
- Thinking Journey 설계
- Quality Gate와 점수화
- 기존 Adventure의 Archetype 분포 및 중복 경고
- Field Test Log
- 브라우저 로컬 저장 및 JSON 내보내기

`AI Design Critic`과 입력 보조는 현재 리틀원더의 명시적 설계 규칙을 기반으로 한 안전한 폴백을 제공합니다. 각 제안은 자동 반영되지 않으며, 기획자가 검토한 뒤 적용하거나 직접 수정할 수 있습니다.

실제 LLM을 연결할 때는 브라우저에 API 키를 넣지 않고, 서버 측 비밀 환경변수와 `/api/llm-assist` 프록시를 사용해야 합니다. 이 엔드포인트는 `type`과 `adventure`를 받아 `{ "title": "제안 제목", "suggestion": "제안 문장", "target": "question" }` 형식으로 반환하면 됩니다. 응답이 없거나 연결할 수 없을 때에는 로컬 폴백 제안이 표시됩니다.
