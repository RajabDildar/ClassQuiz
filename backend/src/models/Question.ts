import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  examId: {
    type: Schema.Types.ObjectId,
    ref: "Exam",
    required: true,
  },
  options: {
    type: [
      {
        text: { type: String, required: true },
      },
    ],
    validate: {
      validator: (v: { text: string }[]) => v.length >= 3 && v.length <= 6,
      message: "Options must be between 3 and 6",
    },
  },
  correctAnswerId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
    min: 1,
  },
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
