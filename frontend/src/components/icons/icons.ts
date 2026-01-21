import {
  LayoutDashboard,
  GraduationCap,
  UserRoundPen,
  NotebookPen,
  ClipboardList,
  PlusCircle,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Link,
  Play,
  Send,
  User,
  Users,
  LogOut,
  LogIn,
  BookOpen,
  FileText,
  Timer,
  AlertTriangle,
  ArrowRight,
  MonitorUp,
  BookOpenCheck,
  Clock9,
  Computer,
  EyeOff,
  Check,
  ShieldCheck,
  BarChart,
  SquarePen,
  Info,
} from "lucide-react";

export const Icons = {
  // home page
  logo: GraduationCap,
  UserRoundPen: UserRoundPen,
  NotebookPen: NotebookPen,
  ArrowRight: ArrowRight,
  MonitorUp: MonitorUp,
  BookOpenCheck: BookOpenCheck,
  Clock9: Clock9,
  Computer: Computer,
  EyeOff: EyeOff,
  Check: Check,
  ShieldCheck: ShieldCheck,
  BarChart: BarChart,

  // Navigation
  dashboard: LayoutDashboard,
  exams: ClipboardList,
  login: LogIn,
  logout: LogOut,
  profile: User,

  // Teacher actions
  createExam: PlusCircle,
  examList: ClipboardList,
  copyLink: Link,
  scoreboard: BarChart3,
  students: Users,
  editExam: SquarePen,

  // Exam status
  upcoming: Calendar,
  active: Clock,
  ended: CheckCircle,
  blocked: XCircle,

  // Student actions
  startExam: Play,
  submitExam: Send,
  viewResult: BarChart3,
  info: Info,

  // Exam content
  question: FileText,
  exam: BookOpen,
  timer: Timer,

  // Alerts / states
  warning: AlertTriangle,
};
