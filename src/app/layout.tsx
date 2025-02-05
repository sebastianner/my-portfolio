import "./globals.scss";
import { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const Poppins_Font = Montserrat({
  style: "normal",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  description: "Sebastian Mera Frontend developer portfolio",
  title: "Sebastian M - Portfolio",
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
