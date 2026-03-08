import mongoose from "mongoose";
import type { IExam } from "../interfaces/IExam.js";
const Schema = mongoose.Schema;

const examSchema = new Schema<IExam>(
  {
    title: {
      required: true,
      type: String,
      minlength: 3,
    },
    desc: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    totalMarks: {
      type: Number,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    optionsPerQuestion: {
      type: Number,
      required: true,
      min: 3,
      max: 6,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    allQuestions: {
      type: [Schema.Types.ObjectId],
      ref: "Question",
      required: true,
      validate: {
        validator: (v) => v.length >= 1,
        message: "Exam must have at least one question",
      },
    },
  },
  { timestamps: true },
);

const Exam = mongoose.model("Exam", examSchema);

export default Exam;
