import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resume Tailorer",
  description: "Optimize your resume for ATS systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Force-load Tailwind Framework Engine to bypass backend configuration conflicts */}
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        {/* Premium Font Pairing */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #020617;
            margin: 0;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}