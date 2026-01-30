import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Link } from "react-router-dom";
import { Icons } from "../icons/icons";
interface EmptyInterface {
  icon?: ReactNode;
  title: string;
  desc: string;
  action?: ReactNode;
  width?: string;
  isActionRequired: boolean;
}
const EmptyState = ({
  icon,
  title,
  desc,
  action,
  width = "max-w-3xl",
  isActionRequired,
}: EmptyInterface) => {
  const FileQuestion = Icons.FileQuestion;
  return (
    <Empty className={`border border-dashed bg-white ${width}`}>
      <EmptyHeader>
        <EmptyMedia variant="icon">{icon || <FileQuestion />}</EmptyMedia>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{desc}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        {isActionRequired &&
          (action || (
            <Link to={"/auth/login"}>
              <Button variant={"outline"} size="sm">
                Login
              </Button>
            </Link>
          ))}
      </EmptyContent>
    </Empty>
  );
};

export default EmptyState;
