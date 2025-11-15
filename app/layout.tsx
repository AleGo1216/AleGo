import "./globals.css";
import { ReactNode } from "react";
import ThemeProvider from "./components/ThemeProvider";
import Header from "./components/Header";

export const metadata = {
  title: "ALeToys Premium Statues"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // layout is a server component, but ThemeProvider is client and will control theme on client
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Pacifico&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Orbitron:wght@500&family=Poppins&display=swap" rel="stylesheet" />
      </head>
      

      <body inmaintabuse="1">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}