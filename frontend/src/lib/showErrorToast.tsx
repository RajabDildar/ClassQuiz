import { toast } from "sonner";

export function showErrorToast(message: string) {
  toast.error("Error", {
    description: message || "Something went wrong",
    position: "top-center",
  });
}
