import * as React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-screen-xl px-8 xl:px-5">
      {children}
    </div>
  );
}
