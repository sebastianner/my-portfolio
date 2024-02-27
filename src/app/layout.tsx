import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import CanvasStars from "@/components/CanvasStars/CanvasStars";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const Poppins_Font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sebastian M - Portfolio",
  description: "Sebastian Mera Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${Poppins_Font.className} overflow-x-hidden `}
      >
        <div className="relative z-0">
          <div className="absolute z-1">{children}</div>
          <CanvasStars />
        </div>
      </body>
    </html>
  );
}
