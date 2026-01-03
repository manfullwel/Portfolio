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
    title: 'Igor Penha | Perito Judicial em Computação Forense & IA',
    description: 'Perito Judicial especializado em Fraudes Bancárias, Detecção de Deepfakes e Hardware Mobile (Chip-off). Laudos técnicos com validade jurídica e conformidade ISO 27037 e LGPD.',
    openGraph: {
        title: 'Igor Penha - Perito Judicial Forense',
        description: 'Auditoria de Deepfakes, Fraudes Financeiras e Recuperação de Hardware (Nokia/Sony Legacy).',
        url: 'https://ispforense.com.br',
        siteName: 'Igor Penha Forense',
        locale: 'pt_BR',
        type: 'website',
    },
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
