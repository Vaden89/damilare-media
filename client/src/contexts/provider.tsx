import ReactLenis from "lenis/react";
import { ReactNode } from "react";

export default function GlobalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <ReactLenis root options={{ lerp: 0.2, duration: 1.5 }}>
        {children}
      </ReactLenis>
    </>
  );
}
