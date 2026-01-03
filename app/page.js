'use client';

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub, FaLock, FaShieldAlt, FaBalanceScale, FaMicrochip } from 'react-icons/fa';

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">

            {/* --- HERO SECTION: Autoridade Imediata --- */}
            <section className="relative pt-20 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">

                {/* Foto de Perfil com Badge de Status */}
                <div className="relative inline-block mb-6">
                    <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-900 to-slate-400 shadow-2xl">
                        <Image
                            src="/image/profile.png"
                            alt="Igor Soares - Perito Judicial"
                            width={192}
                            height={192}
                            priority
                            className="w-full h-full object-cover rounded-full border-4 border-slate-50"
                        />
                    </div>
                    {/* Badge de Status Online/Ativo */}
                    <div className="absolute bottom-4 right-4 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-sm" title="Disponível para Nomeação"></div>
                </div>

                {/* Nome e Títulos */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-2">
                    Igor Soares
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                    Perito Judicial em Computação Forense | Auditoria de IA & Fraudes
                </h2>

                {/* --- AQUI: AS BADGES DE AUTORIDADE (SENAI LGPD) --- */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <span className="px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold border border-blue-200 flex items-center gap-2">
                        <FaShieldAlt /> Certificação Proteção de Dados (LGPD) - SENAI
                    </span>
                    <span className="px-4 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300 flex items-center gap-2">
                        <FaBalanceScale /> ISO 27037 Compliance
                    </span>
                    <span className="px-4 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300 flex items-center gap-2">
                        <FaMicrochip /> Hardware Forensics (10+ Anos)
                    </span>
                </div>

                {/* CTA Principal */}
                <div className="flex justify-center gap-4">
                    <a href="https://wa.me/556199656-5437?text=Olá perito Igor Soares,%20gostaria%20de%20solicitar%20um%20parecer%20técnico." className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2">
                        <FaWhatsapp /> Solicitar Parecer Técnico
                    </a>
                    <a href="#cases" className="bg-white hover:bg-slate-100 text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-medium transition-all">
                        Ver Casos Reais
                    </a>
                </div>
            </section>

            {/* --- SEÇÃO 2: A PROVA SOCIAL (Estudos de Caso / Cases) --- */}
            <section id="cases" className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-serif text-blue-900 mb-2">Estudos de Caso & Laboratório</h3>
                    <p className="text-slate-600 mb-10 max-w-2xl">
                        Aplicações práticas da metodologia forense em cenários de fraude, manipulação de mídia e recuperação de hardware.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Case 1: Deepfake (Baseado na Pós em IA) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-900 text-4xl mb-4"><FaMicrochip /></div>
                            <h4 className="font-bold text-lg mb-2">Validação de Mídia (Deepfakes)</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Uso de redes neurais para detectar manipulação espectral em áudio utilizado como prova em processo trabalhista.
                            </p>
                            <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">Laudo Conclusivo</span>
                        </div>

                        {/* Case 2: Fraude Bancária (Baseado na Experiência Sete Capital) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-900 text-4xl mb-4"><FaShieldAlt /></div>
                            <h4 className="font-bold text-lg mb-2">Rastreamento de Fraude Financeira</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Auditoria de boletos adulterados e engenharia social. Identificação da origem do ataque via análise de logs bancários.
                            </p>
                            <span className="text-xs font-mono bg-green-100 text-green-800 px-2 py-1 rounded">Recuperação de Ativo</span>
                        </div>

                        {/* Case 3: Hardware (Baseado na Experiência Nokia/Sony) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-900 text-4xl mb-4"><FaLock /></div>
                            <h4 className="font-bold text-lg mb-2">Extração Física (Chip-off)</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Recuperação de evidências em dispositivo legado (arquitetura Nokia) onde softwares de mercado falharam.
                            </p>
                            <span className="text-xs font-mono bg-purple-100 text-purple-800 px-2 py-1 rounded">Prova Material</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 3: NOTAS TÉCNICAS (O "Blog" Dinâmico) --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h3 className="text-3xl font-serif text-blue-900">Notas Técnicas Recentes</h3>
                        <p className="text-slate-600 text-sm mt-1">Atualizações dos meus laboratórios de Cibersegurança e Github.</p>
                    </div>
                    <Link href="https://github.com/manfullwel" target="_blank" className="text-blue-900 font-semibold hover:underline text-sm hidden md:block">
                        Ver Repositório Completo →
                    </Link>
                </div>

                <div className="space-y-4">
                    {/* Nota 1: SQL Injection (Fonte [3]) */}
                    <div className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="md:w-32 text-xs font-mono text-slate-400 mt-1">MAI 2024</div>
                        <div>
                            <h5 className="font-bold text-slate-800 group-hover:text-blue-900">Análise de Mitigação de SQL Injection em Ambientes Corporativos</h5>
                            <p className="text-sm text-slate-600 mt-1">
                                Relatório técnico sobre vulnerabilidades em bancos de dados legados e implementação de queries parametrizadas como defesa (Blue Team).
                            </p>
                        </div>
                    </div>

                    {/* Nota 2: Firewall/Logs (Fonte [4]) */}
                    <div className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="md:w-32 text-xs font-mono text-slate-400 mt-1">ABR 2024</div>
                        <div>
                            <h5 className="font-bold text-slate-800 group-hover:text-blue-900">Configuração de Firewall e Análise de Logs com Python</h5>
                            <p className="text-sm text-slate-600 mt-1">
                                Desenvolvimento de script de automação para leitura de logs de segurança e detecção de anomalias de perímetro em tempo real.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- RODAPÉ DE CONFIANÇA & PWA --- */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t-4 border-blue-500">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">

                    {/* Coluna 1: Internacional */}
                    <div className="col-span-1">
                        <h5 className="text-white font-serif mb-4">Capacidade Global</h5>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><span className="text-xl">🇺🇸</span> Inglês Técnico (Arizona State)</li>
                            <li className="flex items-center gap-2"><span className="text-xl">🇷🇺</span> Russo Avançado (Leste Europeu)</li>
                            <li className="flex items-center gap-2"><span className="text-xl">🇪🇸</span> Espanhol Fluente (LATAM)</li>
                        </ul>
                    </div>

                    {/* Coluna 2: Compliance */}
                    <div className="col-span-2 md:text-center">
                        <h5 className="text-white font-serif mb-4">Segurança & Privacidade</h5>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="border border-slate-600 px-3 py-1 rounded-full text-xs">LGPD Compliant (SENAI)</span>
                            <span className="border border-slate-600 px-3 py-1 rounded-full text-xs">ISO 27037 Cadeia de Custódia</span>
                            <span className="border border-slate-600 px-3 py-1 rounded-full text-xs">Site Estático Seguro</span>
                        </div>
                        <p className="mt-6 text-xs text-slate-500">
                            © 2026 Igor de Jesus Soares Penha. Todos os direitos reservados.<br />
                            "Até aqui o Senhor nos ajudou."
                        </p>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div className="col-span-1 text-right">
                        <h5 className="text-white font-serif mb-4">Contato Oficial</h5>
                        <p>Salvador/BA - Atuação Nacional</p>
                        <p className="mt-2 text-blue-400 font-mono">peritoigor@ispforense.com.br</p>
                    </div>
                </div>
            </footer>

            {/* --- BOTÃO FLUTUANTE WHATSAPP (Conversão) --- */}
            <a
                href="https://wa.me/5561999999999?text=Olá,%20gostaria%20de%20solicitar%20um%20parecer%20técnico."
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 flex items-center justify-center w-16 h-16"
                aria-label="Fale conosco no WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </a>

        </main>
    );
}
