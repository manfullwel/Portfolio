import { Merriweather, Inter } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-serif",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: 'Igor J. S. Penha | Perito Judicial em Computação Forense',
    description: 'Laudos periciais, auditoria de IA e perícia mobile com rigor jurídico e soberania técnica.',
    manifest: '/manifest.json',
};

export const viewport = {
    themeColor: '#1E293B',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${merriweather.variable} ${inter.variable}`}>
            <body className="font-sans antialiased text-slate-900 bg-slate-50">
                {children}
            </body>
        </html>
    );
}
