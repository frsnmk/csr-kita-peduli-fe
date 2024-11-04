import type {Metadata} from "next";
import "./globals.css";
import BottomNav from "@/app/ui/bottom-nav";
import {opensans} from "./ui/fonts";
import AppBar from "./ui/app-bar";
import {Toaster} from "react-hot-toast";
import ContextWrapper from "./context-wrapper";

export const metadata: Metadata = {
  title: "Kita Peduli",
  description: "CSR Kita Peduli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <ContextWrapper>
          <Toaster />
          <main className="my-0 mx-auto min-h-screen max-w-[480px] pb-20">
            <AppBar />
            {children}
            <div className="w-[480px]">
              <BottomNav />
            </div>
          </main>
        </ContextWrapper>
      </body>
    </html>
  );
}
