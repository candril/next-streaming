import Link from "next/link";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-red-100">
      <div>
        <Link href="/">Go Home</Link>
      </div>
      {children}
    </main>
  );
}
