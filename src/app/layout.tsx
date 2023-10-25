import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Love. Deuce. Advantage.",
  description: "A scoring app for Tennis or Padel"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-radial from-indigo-600 to-purple-900 min-h-screen p-10">{children}</body>
    </html>
  );
}
