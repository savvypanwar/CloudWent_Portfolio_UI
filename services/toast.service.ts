import toast from "react-hot-toast";

class ToastService {
  success(message: string) {
    toast.success(message);
  }

  error(message: string) {
    toast.error(message);
  }

  info(message: string) {
    toast(message);
  }

  loading(message: string) {
    return toast.loading(message);
  }

  dismiss(toastId?: string) {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  }
}

export const Toast = new ToastService();