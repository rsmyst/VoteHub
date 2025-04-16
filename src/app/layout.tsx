import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { UserProvider } from "@/contexts/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VoteHub - Anonymous Polling Platform",
  description: "Create and participate in anonymous polls with VoteHub",
  icons: {
    icon: "/poll.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
          <UserProvider>
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
