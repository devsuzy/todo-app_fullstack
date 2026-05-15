import mongoose from "mongoose";
import Task from "../models/Task.js";
import data from "./mock.js";

mongoose.connect(process.env.DATABASE_URL)

await Task.deleteMany({});
await Task.insertMany(data);

mongoose.connection.close();