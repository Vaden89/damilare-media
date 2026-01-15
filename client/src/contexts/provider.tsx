import ReactLenis from "lenis/react";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.2, duration: 1.5 }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </ReactLenis>
    </>
  );
}
