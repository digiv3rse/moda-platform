
export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto px-8 xl:px-5 max-w-screen-xl">
      {children}
    </div>
  );
}
