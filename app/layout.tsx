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
      
      <body inmaintabuse="1">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}