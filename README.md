## 📝 Todo App
![Vercel](https://img.shields.io/badge/deployed%20on-vercel-purple)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Node Current](https://img.shields.io/badge/Node.js-20.19.1-green)

Express + MongoDB + Next.js으로 만든 Todo 애플리케이션입니다.

### 📱 스크린샷
<img width="492" height="602" alt="todoApp1" src="https://github.com/user-attachments/assets/bfba87b8-f496-474c-981e-211369e0ab7f" />

### ✨ 주요 기능
- ✅ **할 일 관리**: 추가, 삭제, 편집, 완료 체크
- 💾 **데이터 지속성**: 로컬 스토리지 자동 저장
- 🌙 **다크모드**: 시스템 설정에 따른 테마 변경
- ⏰ **날짜별 조회**: 오늘을 기준으로 전일 할 일 확인 (구현 예정)
- 🎯 **드래그 앤 드롭**: 직관적인 순서 변경 (구현 예정)
- 📱 **반응형 디자인**: 모바일 및 데스크톱 지원 (구현 예정)

### 🛠️ 기술 스택
| 카테고리 | 기술 |
|---------|------|
| **프레임워크** | Next.js 15.5.2 (App Router) |
| **언어** | TypeScript 5 |
| **스타일링** | Tailwind CSS 3.4.17 |
| **상태 관리** | Zustand 5.0.8 |
| **UI** | react-spinners |
| **배포** | Vercel |

### 📁 디렉토리 구조
```
📦 todo-app_fullstack
├── 📂 public/                # 정적 파일
├── 📂 src/
│   ├── 📂 app/               # Next.js App Router
│   │   ├── 📄 page.tsx       # 메인 페이지
│   │   ├── 📄 layout.tsx     # 루트 레이아웃
│   │   └── 📄 globals.css    # 글로벌 스타일
│   ├── 📂 components/        # 재사용 컴포넌트
│   │   ├── 📂 UI/           # 공통 UI 컴포넌트
│   │   └── 📂 Todo/         # Todo 관련 컴포넌트
│   ├── 📂 lib/              # 유틸리티 & Store
│   │   └── 📄 useStore.ts   # Zustand 상태 관리
│   ├── 📂 types/            # TypeScript 타입 정의
│   └── 📂 hooks/            # 커스텀 훅
├── 📄 package.json          # 프로젝트 설정
├── 📄 tsconfig.json         # TypeScript 설정
├── 📄 tailwind.config.js    # Tailwind CSS 설정
└── 📄 postcss.config.js     # PostCSS 설정
```

### 🚀 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/devsuzy/todo-app_fullstack.git
cd todo-app_fullstack

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 📊 주요 특징

#### 🎨 사용자 경험
- 로딩 상태 표시로 매끄러운 UX
- 직관적인 편집 모드 (더블클릭 또는 버튼)
- 키보드 단축키 지원 (Enter: 저장, Esc: 취소)

#### 🏗️ 기술적 특징
- **TypeScript**: 타입 안전성 보장
- **App Router**: Next.js 13+ 최신 라우팅 시스템
- **Zustand Persist**: 자동 로컬 스토리지 저장
- **Tailwind CSS**: 유틸리티 우선 스타일링
