import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons/icons";

const NotFound = () => {
  const ArrowLeft = Icons.ArrowLeft;
  const FileQuestion = Icons.FileQuestion;
  const Home = Icons.Home;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-background px-4 text-center pt-16">
      <div className="relative mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-muted">
        <div className="absolute -right-2 -top-2 h-10 w-10 animate-bounce rounded-full bg-blue-500/20" />
        <FileQuestion className="h-16 w-16 text-muted-foreground" />
      </div>

      <h1 className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
        404
      </h1>
      <h2 className="mb-4 text-2xl font-semibold text-foreground">
        Page Not Found
      </h2>
      <p className="mb-10 max-w-125 text-muted-foreground md:text-lg">
        It seems the page you are looking for has been moved or deleted. Don't
        worry, your exam progress is safe!
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button asChild variant="blue" size="lg" className="h-12 px-8">
          <Link to="/dashboard">
            <Home className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="h-12 px-8"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </div>

      <footer className="mt-20 text-sm text-muted-foreground">
        &copy; 2026 Examino. All rights reserved.
      </footer>
    </div>
  );
};
export default NotFound;
