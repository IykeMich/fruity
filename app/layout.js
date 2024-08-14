import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import { Averia_Serif_Libre } from "next/font/google";

const poppins = Poppins({
  weight: ['100', '200', '300', '400'],
  subsets: ['latin']
})

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fresh Fruits Store",
  description: "Have all your healthy desires met from fruity. your number one shop for fresh and healthy fruits, straight from th farm, inspired by the people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
