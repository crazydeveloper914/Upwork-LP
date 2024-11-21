import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fiction-app.vercel.app"),
  title: {
    default: 'Aquavie',
    template: `%s - Aquavive`,
  },
  description: "Discover AquaVive - a solution empowering heroes to transform virtual challenges into real-world clean water solutions. Learn more about our mission.",
  keywords: [
    "fiction",
    "fictional app",
    "aquavive",
    "aquavive water",
    "water",
  ],
  authors: [
    {
      name: "Mike Nzabera",
      url: "https://github.com/Mikepn02",
    },
  ],
  creator: "Mike Nzabera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fiction-app.vercel.app/",
    title: "Aqua vive",
    description: "Discover AquaVive - a solution empowering heroes to transform virtual challenges into real-world clean water solutions. Learn more about our mission.",
    siteName: "AquaVive",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua vive",
    description: "Discover AquaVive - a solution empowering heroes to transform virtual challenges into real-world clean water solutions. Learn more about our mission.",
    creator: "@mikenzabera",
  },
  icons: {
    icon: "/icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
