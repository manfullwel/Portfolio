import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: 'swap',
});

const merriweather = Merriweather({
    subsets: ["latin"],
    weight: ['300', '400', '700', '900'],
    variable: "--font-serif",
    display: 'swap',
});

export const metadata = {
    title: 'Igor J. S. Penha | Perito Judicial em Computação Forense',
    description: 'Laudos periciais, auditoria de IA e perícia mobile com rigor jurídico e soberania técnica.',
    manifest: '/manifest.json',
};

export const viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable} antialiased`}>
            <body className="font-sans text-slate-900 bg-white selection:bg-slate-900 selection:text-white">
                {children}
            </body>
        </html>
    );
}
