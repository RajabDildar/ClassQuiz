import { toast } from "sonner";

export function showInfoToast(message: string) {
  toast.info(message, {
    position: "top-center",
  });
}
