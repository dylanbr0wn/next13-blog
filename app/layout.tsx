import '@/styles/dist.css';
import '@/styles/twind.css';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">{children}</body>
    </html>
  );
}
