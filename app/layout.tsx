
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='w-96 h-screen'
      >
        {children}
      </body>
    </html>
  );
}
