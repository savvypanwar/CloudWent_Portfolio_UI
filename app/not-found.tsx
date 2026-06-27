import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 transition-colors">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      {/* ✅ Correct way: use asChild with Link */}
      <Button asChild variant="gradient" size="lg">
        <Link href="/">
          Return Home
        </Link>
      </Button>
    </div>
  );
}