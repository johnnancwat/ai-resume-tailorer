import "./globals.css";

export const metadata = {
  title: "AI Resume Tailorer",
  description: "Optimize resumes for ATS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}