import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
    display: 'swap',
});

export const metadata = {
    title: 'Perito Judicial | Computação Forense & IA',
    description: 'Especialista em Computação Forense, Mobile Forensics e Auditoria de Deepfakes com IA/ML. Perito Judicial e Extrajudicial.',
    keywords: 'computação forense, perito judicial, mobile forensics, deepfakes, cibersegurança, ia, ml',
    authors: [{ name: 'Expert Portfolio' }],
    openGraph: {
        title: 'Expert em Forense Digital e IA',
        description: 'Laudos periciais, investigação de crimes cibernéticos e prevenção a fraudes.',
        url: 'https://seupontodecontato.com',
        siteName: 'Portfólio Forense',
        locale: 'pt_BR',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${robotoMono.variable}`}>
            <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
