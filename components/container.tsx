export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-screen-xl px-8 xl:px-5">
      {children}
    </div>
  );
}
