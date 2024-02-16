import type { Metadata } from "next";
import "@/styles/globals.css";
import Progressbar from "@/providers/Progressbar";

export const metadata: Metadata = {
  title: "Imaginate",
  description: "Imaginate - Ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Progressbar>{children}</Progressbar>
      </body>
    </html>
  );
}
