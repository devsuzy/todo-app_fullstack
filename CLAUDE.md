# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Monorepo containing a Next.js 15 frontend and Express 5 backend for a Todo application. Frontend and backend are developed and deployed independently.

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render (`https://todo-app-fullstack-gn7j.onrender.com`)

## Commands

### Frontend (`frontend/`)
```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build with Turbopack
npm run lint     # Run ESLint
```

### Backend (`backend/`)
```bash
npm run dev      # Start with nodemon (auto-restart on changes)
npm run start    # Start without nodemon
npm run seed     # Seed MongoDB with mock data (destructive: deletes all existing tasks)
```

## Architecture

### Frontend State Management
The frontend uses **Zustand** (no persist middleware) — all state is fetched from the backend API on mount. `TodoComponents.tsx` calls `fetchTodos()` on mount and shows a loading spinner while `isLoading` is true.

All CRUD operations call the backend via `src/lib/api.ts` (`taskApi`), then update local Zustand state on success.

### Frontend Component Structure
```
app/page.tsx              → Root page (layout + ThemeToggle)
components/Todo/          → TodoComponents (loading gate) → TodoList + TodoItem + NewTodo
components/UI/            → Header, LoadingSpinner, TodayDate
components/Theme/         → ThemeToggle (uses next-themes)
lib/useStore.ts           → Single Zustand store for all todo state + API calls
lib/api.ts                → taskApi fetch utilities (getAll, create, update, delete)
types/type.ts             → Todo and StoreState types
```

`fetchTodos` filters tasks client-side to show only today's entries (`createdAt` date matches today).

### Backend API
All routes are defined directly in `backend/app.js` (no separate routes/ or controllers/ directories). The backend uses ES modules (`"type": "module"`).

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tasks?sort=oldest&count=N` | List tasks (sort: oldest/newest, count: limit) |
| GET | `/tasks/:id` | Get single task |
| POST | `/tasks` | Create task |
| PATCH | `/tasks/:id` | Update task fields |
| DELETE | `/tasks/:id` | Delete task |

**Task schema** (`backend/models/Task.js`): `title` (required, max 30 chars), `description` (optional), `isCompleted` (boolean, default false), plus auto `createdAt`/`updatedAt` from Mongoose timestamps.

### Environment Variables

**Backend** (`backend/.env`):
- `DATABASE_URL` — MongoDB Atlas connection string
- `PORT` — Server port (defaults to 3000)

**Frontend** (`frontend/.env.local`):
- `NEXT_PUBLIC_API_URL` — Backend base URL (Render deployment)

## Deploy

**Before every `git push`, run the following in order:**

```bash
# 1. 프론트엔드 빌드 확인
cd frontend && npm run build

# 2. 린트 검사
npm run lint
```

Both commands must pass (no errors) before pushing. Do not push if either step fails.
