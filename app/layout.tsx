import type { Metadata } from "next";
import "@/styles/globals.css";
import Progressbar from "@/providers/Progressbar";
import Suspense from "@/providers/Suspense";

export const metadata: Metadata = {
  title: "Imaginate",
  description: "Imaginate - Ai",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Progressbar>
          <Suspense>{children}</Suspense>
        </Progressbar>
      </body>
    </html>
  );
}
