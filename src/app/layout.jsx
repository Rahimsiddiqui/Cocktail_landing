import "./globals.css";

export const metadata = {
  title: "Mojito Landing Page",
  description: "A stunning landing page using GSAP.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
