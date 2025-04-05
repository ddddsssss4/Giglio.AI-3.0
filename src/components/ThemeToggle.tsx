
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <Toggle
      variant="outline"
      size="sm"
      pressed={theme === "dark"}
      onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-full p-2"
    >
      {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
    </Toggle>
  );
}
