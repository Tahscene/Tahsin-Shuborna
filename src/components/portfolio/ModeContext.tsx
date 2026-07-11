import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Mode = "teacher" | "analyst";

type Ctx = {
  mode: Mode;
  setMode: (m: Mode) => void;
  toggle: () => void;
};

const ModeContext = createContext<Ctx | null>(null);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("teacher");

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("mode-teacher", "mode-analyst");
    root.classList.add(`mode-${mode}`);
  }, [mode]);

  return (
    <ModeContext.Provider
      value={{ mode, setMode, toggle: () => setMode(mode === "teacher" ? "analyst" : "teacher") }}
    >
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
