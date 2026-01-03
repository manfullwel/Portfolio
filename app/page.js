"use client"; // OBRIGATÓRIO: Permite interatividade (React Hooks)

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Link from "next/link";
import { FaWhatsapp, FaShieldAlt, FaBalanceScale, FaMicrochip, FaLock, FaGlobeAmericas } from 'react-icons/fa';

export default function Home() {
    // SEU ENDPOINT REAL DO FORMSPREE
    const [state, handleSubmit] = useForm("xpqwlkdg");

    // TELA DE SUCESSO (Aparece após o envio sem mudar a URL)
    if (state.succeeded) {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 font-sans">
                <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg border-t-4 border-green-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <span className="text-4xl">✓</span>
                    </div>
                    <h1 className="text-3xl font-serif text-blue-900 mb-4 font-bold">Protocolo Seguro Recebido</h1>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Sua solicitação foi criptografada e encaminhada diretamente ao Perito.<br />
                        <span className="text-sm text-slate-400 mt-2 block">(Cópia de segurança arquivada)</span>
                    </p>
                    <button onClick={() => window.location.reload()} className="text-blue-900 font-bold hover:bg-blue-50 px-6 py-2 rounded transition-colors">
                        Voltar ao Portal
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">

            {/* --- HERO SECTION: Autoridade Atualizada --- */}
            <section className="relative pt-20 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">
                <div className="relative inline-block mb-6">
                    <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-900 to-slate-400 shadow-2xl">
                        <img
                            src="/image/profile.png"
                            alt="Igor Penha - Perito Judicial Forense"
                            className="w-full h-full object-cover rounded-full border-4 border-slate-50"
                        />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-sm" title="Disponível para Nomeação"></div>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-2">
                    Igor de Jesus Soares Penha
                </h1>
                {/* Fonte [3]: Nova Bio Profissional */}
                <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6 max-w-3xl mx-auto">
                    Perito Judicial e Extrajudicial em Computação Forense | Especialista em IA e Machine Learning
                </h2>
                <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm italic">
                    "Especialista com mais de uma década de imersão técnica em arquitetura de hardware e sistemas móveis, consolidado através da metodologia do Prof. Marcos Monteiro."
                </p>

                {/* Badges de Autoridade (Fonte [2]) */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <span className="px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold border border-blue-200 flex items-center gap-2">
                        <FaShieldAlt /> LGPD Compliance
                    </span>
                    <span className="px-4 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300 flex items-center gap-2">
                        <FaBalanceScale /> Perito Judicial
                    </span>
                    <span className="px-4 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300 flex items-center gap-2">
                        <FaMicrochip /> Hardware Forensics (10+ Anos)
                    </span>
                </div>

                <div className="flex justify-center gap-4">
                    <a href="#contato" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all">
                        Solicitar Parecer
                    </a>
                    <a href="#cases" className="bg-white hover:bg-slate-100 text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-medium transition-all">
                        Ver Áreas de Atuação
                    </a>
                </div>
            </section>

            {/* --- SEÇÃO 2: Pilares de Atuação (Fonte [4]) --- */}
            <section id="cases" className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-serif text-blue-900 mb-2">Especialidades Forenses</h3>
                    <p className="text-slate-600 mb-10 max-w-2xl">
                        Atuação técnica fundamentada em ISO 27037 e Cadeia de Custódia para tribunais.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pilar 1: IA & Deepfakes (Fonte [4]) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-900 text-4xl mb-4"><FaMicrochip /></div>
                            <h4 className="font-bold text-lg mb-2">IA & Deepfakes</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Utilização de redes neurais para identificação de manipulações em vídeo e áudio. Auditoria algorítmica de integridade.
                            </p>
                            <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">Alta Complexidade</span>
                        </div>

                        {/* Pilar 2: Fraudes Financeiras (Fonte [4]) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-900 text-4xl mb-4"><FaShieldAlt /></div>
                            <h4 className="font-bold text-lg mb-2">Fraudes Bancárias</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Análise de fluxos financeiros, detecção de fraudes em boletos e engenharia social. Rastreamento de anomalias.
                            </p>
                            <span className="text-xs font-mono bg-green-100 text-green-800 px-2 py-1 rounded">Auditoria Financeira</span>
                        </div>

                        {/* Pilar 3: Mobile & Hardware (Fonte [6]) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-blue-900 text-4xl mb-4"><FaLock /></div>
                            <h4 className="font-bold text-lg mb-2">Mobile Forensics</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Expertise em dispositivos legados (Nokia/Sony) e modernos (Android/iOS). Extração física de dados (Chip-off).
                            </p>
                            <span className="text-xs font-mono bg-purple-100 text-purple-800 px-2 py-1 rounded">Prova Material</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NOTAS TÉCNICAS (Blue Team & Labs - Fontes [7]-[8]) --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <h3 className="text-3xl font-serif text-blue-900 mb-6">Laboratório Técnico (Blue Team)</h3>
                <div className="space-y-4">
                    <Link href="/blog/chip-off-forensics" className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="md:w-32 text-xs font-mono text-slate-400 mt-1">PROJETO</div>
                        <div>
                            <h5 className="font-bold text-slate-800">Extração Física (Chip-off)</h5>
                            <p className="text-sm text-slate-600 mt-1">Recuperação de dados em dispositivos Nokia/Sony onde software falhou.</p>
                        </div>
                    </Link>
                    <Link href="/blog/fraudes-bancarias" className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="md:w-32 text-xs font-mono text-slate-400 mt-1">PYTHON</div>
                        <div>
                            <h5 className="font-bold text-slate-800">Automação de Análise de Logs</h5>
                            <p className="text-sm text-slate-600 mt-1">Desenvolvimento de ferramenta para detecção proativa de Indicadores de Comprometimento (IOCs).</p>
                        </div>
                    </Link>
                    <div className="mt-4 text-center md:text-right">
                        <Link href="/blog" className="text-blue-900 font-bold hover:underline text-sm">
                            Ver Todos os Artigos →
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- FORMULÁRIO BLINDADO (SEM VAZAMENTO DE URL) --- */}
            <section id="contato" className="py-16 px-6 bg-slate-100">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-900">
                    <h3 className="text-2xl font-serif text-blue-900 mb-2 text-center">Solicitar Análise Pericial</h3>
                    <p className="text-center text-slate-500 mb-8 text-sm">Canal criptografado para Advogados e Magistrados.</p>

                    {/* AQUI ESTÁ A CORREÇÃO: onSubmit={handleSubmit} SEM action ou method */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Honeypot Invisível (Classe 'hidden' do Tailwind) */}
                        <input
                            type="text"
                            name="_gotcha"
                            className="hidden"
                            tabIndex="-1"
                            autoComplete="off"
                        />

                        {/* Assunto Interno */}
                        <input type="hidden" name="_subject" value="Novo Lead: Site ISP Forense" />

                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1">Nome Completo / OAB</label>
                            <input id="name" type="text" name="name" required className="w-full p-3 border border-slate-300 rounded focus:border-blue-900 outline-none" placeholder="Dr. João Silva" />
                            <ValidationError prefix="Nome" field="name" errors={state.errors} />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-1">E-mail Corporativo</label>
                            <input id="email" type="email" name="email" required className="w-full p-3 border border-slate-300 rounded focus:border-blue-900 outline-none" placeholder="contato@advocacia.com.br" />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1">WhatsApp</label>
                            <input id="phone" type="tel" name="phone" className="w-full p-3 border border-slate-300 rounded focus:border-blue-900 outline-none" placeholder="(00) 00000-0000" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-1">Resumo do Caso</label>
                            <textarea id="message" name="message" rows="4" required className="w-full p-3 border border-slate-300 rounded focus:border-blue-900 outline-none" placeholder="Breve descrição da necessidade técnica..."></textarea>
                            <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded shadow-lg transition-all disabled:opacity-50 flex justify-center items-center gap-2"
                        >
                            {state.submitting ? 'Enviando Seguro...' : 'Enviar Solicitação Confidencial 🔒'}
                        </button>
                    </form>
                </div>
            </section>

            {/* --- RODAPÉ COM DIFERENCIAL GLOBAL (Fonte [2]) --- */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t-4 border-blue-500 mt-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h5 className="text-white font-serif mb-4 flex items-center gap-2"><FaGlobeAmericas /> Capacidade Global</h5>
                        <ul className="space-y-2">
                            <li>🇺🇸 Inglês Técnico (Certificado Arizona State)</li>
                            <li>🇷🇺 Russo Avançado (Leste Europeu)</li>
                            <li>🇪🇸 Espanhol Fluente (LATAM)</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h5 className="text-white font-serif mb-4">Compliance</h5>
                        <div className="flex justify-center gap-2 flex-wrap">
                            <span className="border border-slate-600 px-2 py-1 rounded text-xs">LGPD</span>
                            <span className="border border-slate-600 px-2 py-1 rounded text-xs">ISO 27037</span>
                            <span className="border border-slate-600 px-2 py-1 rounded text-xs">OWASP (Web Security)</span>
                        </div>
                        <p className="mt-4 text-xs">© 2025 Igor Penha. "Até aqui o Senhor nos ajudou."</p>
                    </div>
                    <div className="text-right">
                        <h5 className="text-white font-serif mb-4">Contato</h5>
                        <p>Salvador/BA - Atuação Nacional</p>
                        <p className="text-xs mt-1">peritoigor@ispforense.com.br</p>
                    </div>
                </div>
            </footer>

            {/* Botão Flutuante */}
            <a href="https://wa.me/5571999999999" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110">
                <FaWhatsapp className="text-3xl" />
            </a>
        </main>
    );
}
