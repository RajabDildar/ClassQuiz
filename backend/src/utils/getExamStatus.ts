import type { IExam } from "../interfaces/IExam.js";

const getExamStatus = (exam: IExam) => {
  const now = new Date();
  if (now < exam.startTime) return "upcoming";
  if (now > exam.endTime) return "ended";
  return "active";
};
