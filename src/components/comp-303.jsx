import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="relative dark bg-muted text-foreground px-4 py-3">
      <div className="flex items-center justify-center text-sm">
        <span>
          Sign up and get 20% off your first order{" "}
          <span className="text-muted-foreground">·</span>{" "}
          <a href="#" className="font-medium underline hover:no-underline">
            Sign Up Now
          </a>
        </span>
      </div>
      <Button
        variant="ghost"
        className="absolute right-16 top-2 size-8 p-0 hover:bg-transparent"
        aria-label="Close banner"
      >
        <XIcon
          size={16}
          className="opacity-60 transition-opacity  hover:opacity-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
