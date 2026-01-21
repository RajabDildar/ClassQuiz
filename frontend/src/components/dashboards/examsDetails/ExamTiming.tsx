interface ExamTimingInterface {
  date: string;
  startTime: string;
  endTime: string;
}
const ExamTiming = ({ date, startTime, endTime }: ExamTimingInterface) => {
  return (
    <div>
      <p className="font-semibold">{date}</p>
      <div className="text-sm text-gray-600">
        {startTime} - {endTime}
      </div>
    </div>
  );
};

export default ExamTiming;
