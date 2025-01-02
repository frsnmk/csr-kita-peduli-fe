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
      <head>
        <link rel="icon" type="ico" href="/kitapeduli.ico" sizes="12x12"/>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1157883505776028');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1157883505776028&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
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
