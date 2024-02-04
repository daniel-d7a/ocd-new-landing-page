import "./globals.css";
import { recoleta } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "OCD",
  description: "OCD landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "max-w-[100vw] md:max-w-full min-h-screen bg-neutral-900 text-white overflow-x-hidden",
          recoleta.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
