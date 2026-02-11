import type React from "react";

const Layer = ({ id, children }: { id: number; children: React.ReactNode }) => (
  <div style={{ position: "absolute", zIndex: id }}>
    {children}
  </div>
);

export { Layer };