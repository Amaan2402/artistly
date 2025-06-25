"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="cursor-pointer"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[0.5rem] w-[0.5rem]" />
      ) : (
        <Moon className="h-[0.5rem] w-[0.5rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
