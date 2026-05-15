import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // 필수값
      maxLength: 30, // 최대 30자
      validate: {
        validator: function (title) {
          return title.split(" ").length > 1; // 제목이 최소 2단어 이상인지 확인
        },
        message: "Title must contain at least two words.",
      },
    },
    description: {
      type: String,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

const Task = mongoose.model("Task", TaskSchema);

export default Task;