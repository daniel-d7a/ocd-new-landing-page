import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const recoleta = localFont({
  src: [
    {
      path: "../font/font/Recoleta-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../font/font/Recoleta-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../font/font/Recoleta-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/font/Recoleta-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/font/Recoleta-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/font/Recoleta-Bold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../font/font/Recoleta-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-recoleta",
});
