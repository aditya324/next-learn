
import Link from "next/link";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       
      >
       <header>
        <nav>
        <Link className="nav-link" href="/">home</Link>
          <Link className="nav-link" href="/dashboard">dashboard</Link>
          <Link className="nav-link" href="/register">register</Link>
        </nav>
        
       </header>
       <main>
          {children}
        </main>

        <footer>
          footer
        </footer>
      </body>
    </html>
  );
}
