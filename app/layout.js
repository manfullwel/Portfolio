import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
    subsets: ["latin"],
    variable: "--font-roboto-mono",
});

export const metadata = {
    title: 'Perito Judicial | Computação Forense & IA | ISP Forense',
    description: 'Especialista em Perícia Computacional, Mobile Forensics e Auditoria de IA (Deepfakes). 10+ anos de experiência em segurança digital.',
    keywords: ['perito judicial', 'computação forense', 'deepfakes', 'segurança da informação', 'isp forense', 'mobile forensics'],
    authors: [{ name: 'ISP Forense' }],
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'ISP Forense',
    },
    icons: {
        apple: '/apple-touch-icon.png',
    },
    openGraph: {
        title: 'Perito Judicial | Computação Forense & IA',
        description: 'Soluções avançadas em prova digital e perícia cibernética.',
        url: 'https://portfolio-ispforense.vercel.app',
        siteName: 'ISP Forense',
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Perito Judicial | Computação Forense',
        description: 'Especialista em prova digital e auditoria de IA.',
    }
};

export const viewport = {
    themeColor: '#007BFF',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={`${roboto.variable} ${robotoMono.variable} font-sans`}>
                {children}
            </body>
        </html>
    );
}
