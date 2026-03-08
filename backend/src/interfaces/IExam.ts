import mongoose from "mongoose";

export interface IExam extends Document {
  title: string;
  desc: string;
  duration: number;
  totalMarks: number;
  startTime: Date;
  endTime: Date;
  optionsPerQuestion: number;
  createdBy: mongoose.Types.ObjectId;
  allQuestions: mongoose.Types.ObjectId[];
}
