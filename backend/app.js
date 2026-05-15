import express from 'express';
import dotenv from 'dotenv';
import Task from './models/Task.js';
import mongoose from "mongoose";

const app = express();

dotenv.config();

mongoose.connect(process.env.DATABASE_URL).then(() => console.log("Connected to MongoDB"));

// 프론트엔드 코드에서 배포된 API를 사용할 수 있게 하려면 CORS를 허용해야 한다.
app.use(cors());
// 파싱 - JSON 형태로 오는 요청을 자바스크립트 객체로 변환
app.use(express.json());

// 에러 핸들링을 위한 함수
function asyncHandler(handler) {
  return async function (req, res) {
    try {
      await handler(req, res);
    } catch (e) {
      if (e.name === "ValidationError") {
        res.status(400).send({ message: e.message }); // 사용자가 잘못된 값을 넘겼을 때 400 Bad Request 응답
      } else if (e.name === "CastError") {
        res.status(404).send({ message: "Invalid ID format." }); // Id 변환 과정에서 생긴 오류 또는 유효한 Id지만 존재하지 않는 경우 404 Not Found 응답
      } else {
        res.status(500).send({ message: "Internal Server Error." }); // 그 외의 오류는 500 Internal Server Error 응답
      }
    }
  };
}

// 할일 목록 조회
app.get('/tasks', async (req, res) => {
  const sort = req.query.sort;
  const count = Number(req.query.count) || 0;

  const sortOption = {createdAt: sort === 'oldest' ? 'asc' : 'desc'};
  const tasks = await Task.find().sort(sortOption).limit(count);

  res.send(tasks);
});

// 할일 상세 조회
app.get('/tasks/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (task) {
    res.send(task);
  } else {
    res.status(404).send({ error: 'Cannot find given id.' });
  }
}));

// 할일 생성
app.post('/tasks', async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).send(newTask);
});

// 할일 수정
app.patch('/tasks/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (task) {
    Object.keys(req.body).forEach((key) => {
      task[key] = req.body[key];
    });
    task.updatedAt = Date.now();
    await task.save();
    res.send(task);
  } else {
    res.status(404).send({ error: 'Cannot find given id.' });
  }
}));

// 할일 삭제
app.delete('/tasks/:id', asyncHandler(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);

  if (task) {
    res.sendStatus(204);
  } else {
    res.status(404).send({ error: 'Cannot find given id.' });
  }
}));

app.listen(process.env.PORT || 3000, () => console.log("server started"));