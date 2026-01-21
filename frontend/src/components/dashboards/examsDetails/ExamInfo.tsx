interface ExamInfoInterface {
  title: string;
  totalQuestions: number;
  totalTime: number;
}
const ExamInfo = ({ title, totalQuestions, totalTime }: ExamInfoInterface) => {
  return (
    <div>
      <p className="font-semibold">{title}</p>
      <div className="text-sm text-gray-600">
        <span>{totalQuestions} questions </span>
        <span>&bull; {totalTime} minutes </span>
      </div>
    </div>
  );
};

export default ExamInfo;
