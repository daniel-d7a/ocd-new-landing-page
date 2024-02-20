import "./globals.css";
import { recoleta } from "@/lib/fonts";
import { cn } from "@/lib/cn";
import { DotCursor } from "./DotCursor";

export const metadata = {
  title: "OCD",
  description: "OCD marketing agency website",
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
          "max-w-[100vw] md:max-w-full min-h-screen bg-neutral-900 overflow-x-hidden relative",
          recoleta.className
        )}
      >
        {children}
        <DotCursor />
      </body>
    </html>
  );
}
