import "./globals.scss";
import { Inter, Montserrat } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const Poppins_Font = Montserrat({
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
        className={`${inter.className} ${Poppins_Font.className} overflow-x-hidden`}
      >
        <div>{children} </div>
      </body>
    </html>
  );
}
