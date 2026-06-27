let toastIdCounter = 0;
const activeToasts = new Map<string, { dismiss: () => void }>();

class ToastService {
  success(message: string) {
    console.log(`✅ ${message}`);
    this.show(message, "success");
  }

  error(message: string) {
    console.error(`❌ ${message}`);
    this.show(message, "error");
  }

  info(message: string) {
    console.log(`ℹ️ ${message}`);
    this.show(message, "info");
  }

  loading(message: string): string {
    const id = `toast-${++toastIdCounter}`;
    console.log(`⏳ ${message}`);
    activeToasts.set(id, { dismiss: () => activeToasts.delete(id) });
    return id;
  }

  dismiss(toastId?: string) {
    if (toastId) {
      activeToasts.get(toastId)?.dismiss();
    } else {
      activeToasts.clear();
    }
  }

  private show(message: string, type: "success" | "error" | "info") {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("toast", { detail: { message, type } });
      window.dispatchEvent(event);
    }
  }
}

export const Toast = new ToastService();
