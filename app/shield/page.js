import Link from 'next/link';
import { FaShieldAlt, FaLock, FaServer, FaUserSecret, FaCheck, FaWhatsapp } from 'react-icons/fa';

export const metadata = {
    title: 'Forensic Shield™ | Infraestrutura de Elite',
    description: 'Protocolo de Blindagem Digital para Peritos e Advogados.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function ShieldPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">

            {/* Header Minimalista */}
            <nav className="border-b border-slate-800 p-6 flex justify-between items-center">
                <div className="font-serif font-bold text-xl tracking-wider text-blue-500">
                    FORENSIC SHIELD™
                </div>
                <Link href="/" className="text-xs font-mono text-slate-500 hover:text-white transition-colors uppercase">
                    Voltar ao Portal Público
                </Link>
            </nav>

            <main className="max-w-5xl mx-auto px-6 py-20 text-center">

                {/* Hero Section */}
                <span className="inline-block py-1 px-3 rounded-full bg-red-900/30 text-red-400 text-xs font-bold border border-red-900/50 mb-6 animate-pulse">
                    ALERTA DE SEGURANÇA JURÍDICA
                </span>

                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                    Sua "Sala de Arquivos" Digital <br />
                    <span className="text-blue-500">Está com a Porta Aberta?</span>
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    95% dos sites de peritos no Brasil são construídos em WordPress vulnerável, vazando dados de clientes e comprometendo o <span className="text-white font-bold">Client-Attorney Privilege</span>.
                </p>

                {/* The Tech Stack Grid */}
                <div className="grid md:grid-cols-3 gap-6 text-left mb-20">
                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                        <FaLock className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2">Transporte Militar</h3>
                        <p className="text-slate-400 text-sm">
                            Criptografia TLS 1.3 de ponta a ponta. Seus formulários trafegam em túneis seguros, não em texto simples.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                        <FaUserSecret className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2">Sanitização Industrial</h3>
                        <p className="text-slate-400 text-sm">
                            "Firewall" Client-Side (DOMPurify) que neutraliza injeções de scripts maliciosos antes do envio.
                        </p>
                    </div>

                    <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                        <FaServer className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-2">Infra Serverless</h3>
                        <p className="text-slate-400 text-sm">
                            Sem banco de dados para ser hackeado. Sem painel admin para sofrer brute-force. A nuvem intocável.
                        </p>
                    </div>
                </div>

                {/* Authority Section */}
                <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl border border-blue-800/50 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-6">Eleve sua Autoridade Pericial</h2>
                        <ul className="text-left max-w-md mx-auto space-y-4 mb-10 text-slate-300">
                            <li className="flex items-center gap-3">
                                <FaCheck className="text-green-400 flex-shrink-0" /> Conformidade Técnica LGPD & ISO 27037
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheck className="text-green-400 flex-shrink-0" /> Zero Manutenção (Site Imutável)
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheck className="text-green-400 flex-shrink-0" /> Design Forense "High Court"
                            </li>
                        </ul>

                        <a
                            href="https://wa.me/5571999999999?text=Olá,%20Igor.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Forensic%20Shield."
                            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
                        >
                            <FaWhatsapp className="text-xl" />
                            Blindar Meu Escritório Digital
                        </a>
                        <p className="mt-4 text-xs text-blue-200 opacity-70">Consultoria exclusiva para Peritos e Advogados.</p>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="w-96 h-96 bg-blue-500 rounded-full blur-[120px] absolute -top-20 -left-20"></div>
                        <div className="w-96 h-96 bg-purple-500 rounded-full blur-[120px] absolute -bottom-20 -right-20"></div>
                    </div>
                </div>

            </main>

            <footer className="border-t border-slate-800 py-10 text-center text-slate-600 text-sm font-mono">
                <p>&copy; 2026 Protocolo Forensic Shield™. Todos os direitos reservados.</p>
                <div className="flex justify-center gap-4 mt-4">
                    <span className="flex items-center gap-1"><FaShieldAlt /> Security First</span>
                    <span className="flex items-center gap-1"><FaLock /> Privacy by Design</span>
                </div>
            </footer>
        </div>
    );
}
