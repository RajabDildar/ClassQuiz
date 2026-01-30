import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExamInfo from "./ExamInfo";
import ExamTiming from "./ExamTiming";
import ExamStatus from "./ExamStatus";
import TeacherActions from "./TeacherActions";
import StudentActions from "./StudentActions";
import EmptyState from "@/components/layout/EmptyState";

interface Exam {
  title: string;
  totalQuestions: number;
  totalTime: number;
  date: string;
  startTime: string;
  endTime: string;
  status: "active" | "upcoming" | "ended";
}

interface AllExamDetailsInterface {
  examData?: Exam[];
  role: "teacher" | "student";
}

const AllExamsDetails = ({ examData, role }: AllExamDetailsInterface) => {
  return (
    <>
      {examData ? (
        <div className="border rounded-2xl p-3 my-6 bg-white">
          <Table>
            <TableCaption className="caption-top text-left text-2xl font-semibold tracking-tight text-foreground mb-4">
              Your Exams
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-25">EXAM TITLE</TableHead>
                <TableHead>DATE & TIME</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead className="text-right">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {examData.map((exam, index) => (
                <TableRow key={index}>
                  <TableCell className="pr-12 md:pr-24">
                    <ExamInfo
                      title={exam.title}
                      totalQuestions={exam.totalQuestions}
                      totalTime={exam.totalTime}
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <ExamTiming
                      date={exam.date}
                      startTime={exam.startTime}
                      endTime={exam.endTime}
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <ExamStatus status={exam.status} />
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {role === "teacher" ? (
                      <TeacherActions />
                    ) : (
                      <StudentActions status={exam.status} />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>{" "}
        </div>
      ) : (
        <div className="my-6">
          <EmptyState
            title="No Exams Yet"
            desc="All your exam details will appear here."
            width="w-full"
            isActionRequired={false}
          />
        </div>
      )}
    </>
  );
};

export default AllExamsDetails;
