import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


export const metadata: Metadata = {
  title: "UGC SIN VISA · Gana en dólares por tus Reels | Creative Diseños Academy",
  description: "Lista de espera del curso UGC SIN VISA. Aprende a trabajar con marcas internacionales desde Venezuela, sin viajar, sin visa. Cobra en dólares por crear Reels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="antialiased dark"
    >
      <body className="min-h-screen bg-black text-white selection:bg-ugc-coral selection:text-white flex flex-col font-sans">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
