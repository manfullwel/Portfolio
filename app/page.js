'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Smartphone, Cpu, Search,
    CheckSquare, Mail, Link as LinkIcon,
    ArrowRight, Gavel, Award, Linkedin, Github,
    FileText, Lock, X, Globe2
} from 'lucide-react';
import Image from 'next/image';

// --- Apple-style Design Components ---

const Header = () => (
    <header className="fixed w-full top-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-full flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                    <Shield size={14} className="text-slate-900" />
                </div>
                <div>
                    <span className="font-bold text-sm tracking-tight text-slate-900">ISP Forense</span>
                </div>
            </div>
            <nav className="hidden md:flex gap-8 text-[13px] font-medium text-slate-500">
                <a href="#expertise" className="hover:text-slate-900 transition-colors">Especialidades</a>
                <a href="#bio" className="hover:text-slate-900 transition-colors">Credenciais</a>
                <a href="#contact" className="hover:text-slate-900 transition-colors">Contato</a>
            </nav>
            <a href="mailto:peritoigor@ispforense.com.br" className="px-4 py-2 bg-slate-900 text-white text-[12px] font-semibold rounded-full hover:bg-slate-800 transition-colors">
                Solicitar Parecer
            </a>
        </div>
    </header>
);

const Hero = () => (
    <section className="pt-32 pb-20 px-6 min-h-[90vh] flex items-center justify-center bg-white">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8 order-2 lg:order-1"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                    <span className="text-[11px] font-semibold text-slate-600 tracking-wide uppercase">
                        Perito Judicial em Computação Forense & Auditoria de IA
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-slate-900 leading-[1.1]">
                    Do Hardware Legado <br />
                    à Auditoria de <br />
                    <span className="text-slate-400">Deepfakes.</span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                    A materialidade da prova digital fundamentada em 10 anos de eletrônica e Pós-Graduação em Machine Learning.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                    <a href="mailto:peritoigor@ispforense.com.br" className="btn-primary">
                        Solicitar Parecer Técnico <ArrowRight size={16} className="ml-2" />
                    </a>
                    <a href="#expertise" className="btn-outline">
                        Ver Especialidades
                    </a>
                </div>

                <div className="pt-8 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <CheckSquare size={14} className="text-blue-600" />
                        <span>ISO 27037</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckSquare size={14} className="text-blue-600" />
                        <span>Metodologia Marcos Monteiro</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckSquare size={14} className="text-blue-600" />
                        <span>Pós-Graduação em IA</span>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Hero Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            >
                <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 bg-slate-50">
                    <Image
                        src="/image/profile.png"
                        alt="Igor Penha - Perito Judicial"
                        fill
                        priority
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </motion.div>
        </div>
    </section>
);

const UseCaseModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
            >
                <div className="bg-slate-900 px-8 py-6 flex justify-between items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-900/50 rounded mb-3 border border-blue-800">
                            <Shield size={12} className="text-blue-400" />
                            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-200">Estudo de Caso</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-white tracking-tight">Ameaça à Fé Pública via IA</h3>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors p-1">
                        <span className="sr-only">Fechar</span>
                        <X size={24} />
                    </button>
                </div>

                <div className="p-8 space-y-8">
                    <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-slate-400 flex items-center gap-2">
                            <Lock size={14} /> O Problema (Ameaça)
                        </h4>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Em litígios de alta complexidade, a inserção de um áudio ou vídeo manipulado (deepfake) pode destruir reputações instantaneamente ou induzir o juízo a erro grave. A olho nu, a fraude é invisível.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-50 border border-slate-100 rounded-lg space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-blue-700 flex items-center gap-2">
                            <Search size={14} /> A Metodologia (Minha Ação)
                        </h4>
                        <p className="text-slate-700 leading-relaxed text-sm">
                            Utilizo algoritmos proprietários para detecção de <strong>artifacts</strong> faciais e espectrogramas de voz. Todo o processo é blindado pela <strong>ISO 27037 (Cadeia de Custódia)</strong>, garantindo que a contraprova técnica seja aceita no tribunal.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <h4 className="text-sm font-bold uppercase tracking-wide text-emerald-600 flex items-center gap-2">
                            <CheckSquare size={14} /> O Resultado
                        </h4>
                        <p className="text-slate-900 font-serif font-medium text-lg italic">
                            "Laudo Pericial Conclusivo atestando a manipulação, garantindo a segurança jurídica do cliente."
                        </p>
                    </div>
                </div>

                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg text-sm transition-colors">
                        Fechar Janela
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

const ExpertiseSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cards = [
        {
            icon: Search,
            title: "Investigação de Fraudes Financeiras",
            desc: "Expertise fundamentada em vivência interna como Analista de Processos Financeiros (Sete Capital), auditando contratos e boletos bancários da fonte. Rastreio o 'caminho do dinheiro' e a engenharia social bancária.",
            tag: "Forensic Audit"
        },
        {
            icon: Cpu,
            title: "Auditoria de IA & Deepfakes",
            desc: "Pós-Graduação em Machine Learning aplicada à validação científica de provas audiovisuais. Identificação técnica de manipulações e deepfakes para evitar contaminação dos autos.",
            tag: "AI Verification",
            action: true
        },
        {
            icon: Shield,
            title: "Segurança Ofensiva (Blue Team)",
            desc: "Proteção corporativa baseada em laboratórios práticos de SQL Injection e Firewall. Traduzo vulnerabilidades técnicas complexas em relatórios de risco compreensíveis para a gestão.",
            tag: "Cyber Defense"
        },
    ];

    return (
        <section id="expertise" className="py-24 px-6 bg-slate-50">
            <UseCaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">Competências Técnicas</h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        Eliminação de riscos jurídicos através de prova técnica robusta.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <div key={i} className="glass-panel p-8 rounded-2xl hover:shadow-md transition-all group flex flex-col">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                <card.icon size={24} className="text-slate-900 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <div className="mb-4">
                                <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-full">{card.tag}</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                                {card.desc}
                            </p>

                            {card.action && (
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full mt-auto py-3 px-4 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    <FileText size={14} />
                                    Ler Estudo de Caso
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BioSection = () => (
    <section id="bio" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
                <div className="absolute -inset-4 bg-slate-100 rounded-full opacity-50 blur-3xl"></div>
                <div className="relative glass-panel p-10 rounded-2xl border border-slate-200">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Credenciais Acadêmicas</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                <Award size={18} className="text-slate-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Pós-Graduação em I.A.</h4>
                                <p className="text-sm text-slate-500">Especialização em Inteligência Artificial e Machine Learning.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                <Shield size={18} className="text-slate-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Google Cybersecurity</h4>
                                <p className="text-sm text-slate-500">Certificação Profissional em Defesa de Redes.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                <Gavel size={18} className="text-slate-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Perito Judicial Certificado</h4>
                                <p className="text-sm text-slate-500">Conformidade ISO 27037 e Cadeia de Custódia.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                    Igor J. S. Penha
                </h2>
                <div className="prose prose-slate prose-lg text-slate-500">
                    <p className="font-medium text-slate-800">
                        Minha expertise não começou nos softwares automatizados, mas na bancada de eletrônica.
                    </p>
                    <p>
                        Com início na manutenção de dispositivos legados (arquitetura Nokia e Sony Ericsson), desenvolvi uma capacidade singular de extração física (Chip-off) e recuperação de dados em hardware danificado, onde peritos limitados a software não conseguem atuar.
                    </p>
                    <p>
                        Hoje, uno essa materialidade do hardware à auditoria de Inteligência Artificial, oferecendo uma visão completa da prova digital para o tribunal.
                    </p>
                </div>
                <div className="flex gap-4 pt-4">
                    <a href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-700 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="mailto:peritoigor@ispforense.com.br" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const InternationalFooter = () => (
    <div className="bg-slate-50 border-t border-slate-200 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
            <h3 className="font-serif font-bold text-2xl text-slate-900 mb-10 flex items-center justify-center gap-3">
                <Globe2 className="text-blue-900" /> Capacidade de Análise Global
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-3 p-4">
                    <span className="text-4xl">🇺🇸</span>
                    <h4 className="font-bold text-slate-900">Inglês Técnico (Arizona State)</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Análise de Logs de Provedores Globais</p>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 border-x-0 md:border-x border-slate-200">
                    <span className="text-4xl">🇷🇺</span>
                    <h4 className="font-bold text-slate-900">Russo Avançado</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Rastreamento de Malwares Leste Europeu</p>
                </div>
                <div className="flex flex-col items-center gap-3 p-4">
                    <span className="text-4xl">🇪🇸</span>
                    <h4 className="font-bold text-slate-900">Espanhol Fluente</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Investigações Transnacionais Latam</p>
                </div>
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-2">
                <span className="font-bold text-slate-900 tracking-tight">ISP FORENSE</span>
                <p className="text-xs text-slate-400">© 2026 Igor J. S. Penha. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-8 text-xs font-medium text-slate-500">
                <a href="#" className="hover:text-slate-900">Termos de Uso</a>
                <a href="#" className="hover:text-slate-900">Privacidade</a>
                <a href="#contact" className="hover:text-slate-900">Contato</a>
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-blue-900 selection:text-white">
            <Header />
            <Hero />
            <ExpertiseSection />
            <BioSection />
            <InternationalFooter />
            <Footer />
        </main>
    );
}
