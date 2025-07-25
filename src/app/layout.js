import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/Context/LanguageContext";
import { UserProvider } from "@/Context/userContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "PARLA",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: "/logo.png", sizes: "32x32" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <UserProvider>
          <LanguageProvider>
            <Toaster position="top-right" />
            {children}
          </LanguageProvider>
        </UserProvider>
      </body>
    </html>
  );
}
