import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="w-full h-64 p-2 bg-header bg-no-repeat bg-contain">
      {children}
    </header>
  );
}
