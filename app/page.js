'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Smartphone, Cpu, Search,
    CheckSquare, Mail, Link as LinkIcon,
    ArrowRight, Gavel, Award, Linkedin, Github,
    FileText, Lock
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
            <a href="#contact" className="px-4 py-2 bg-slate-900 text-white text-[12px] font-semibold rounded-full hover:bg-slate-800 transition-colors">
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
                    <span className="text-[11px] font-semibold text-slate-600 tracking-wide uppercase">Perícia Judicial Computacional</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                    Soberania <br />
                    <span className="text-slate-400">Técnica.</span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                    Computação Forense de precisão para advogados e magistrados.
                    Fusão de hardware hacking, análise de vestígios digitais e auditoria de IA.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                    <a href="#contact" className="btn-primary">
                        Iniciar Atendimento <ArrowRight size={16} className="ml-2" />
                    </a>
                    <a href="#expertise" className="btn-outline">
                        Ver Especialidades
                    </a>
                </div>

                <div className="pt-8 flex items-center gap-6 text-xs font-medium text-slate-400 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                        <CheckSquare size={14} className="text-blue-600" />
                        <span>ISO 27037</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckSquare size={14} className="text-blue-600" />
                        <span>Cadeia de Custódia</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckSquare size={14} className="text-blue-600" />
                        <span>Hardware Analysis</span>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Hero Image - Corrected Path and improved display */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-2 h-[500px] lg:h-[700px] w-full bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
            >
                <Image
                    src="/image/profile.png"
                    alt="Igor Penha - Perito Judicial"
                    fill
                    priority
                    className="object-cover object-center hover:scale-105 transition-transform duration-1000"
                />
            </motion.div>
        </div>
    </section>
);

const ExpertiseSection = () => {
    const cards = [
        {
            icon: Smartphone,
            title: "Perícia Mobile & Chip-off",
            desc: "Extração física avançada. Acesso a dados em dispositivos danificados ou bloqueados através de intervenção direta no hardware de memória.",
            tag: "Hardware Level"
        },
        {
            icon: Search,
            title: "Investigação Cibernética",
            desc: "Rastreamento de fraudes digitais, estelionato e crimes financeiros. Produção de prova técnica robusta para litígios complexos.",
            tag: "Digital Forensics"
        },
        {
            icon: Cpu,
            title: "Auditoria de IA & Deepfakes",
            desc: "Análise de autenticidade em mídias (áudio/vídeo). Detecção de manipulação por IA generativa e validação de documentos digitais.",
            tag: "AI Security"
        },
    ];

    return (
        <section id="expertise" className="py-24 px-6 bg-slate-50">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Competências Técnicas</h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                        Atuação focada na materialidade da prova técnica, garantindo integridade desde a coleta até o laudo final.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <div key={i} className="glass-panel p-8 rounded-2xl hover:shadow-md transition-all group">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                                <card.icon size={24} className="text-slate-900 group-hover:text-blue-600 transition-colors" />
                            </div>
                            <div className="mb-4">
                                <span className="text-[10px] font-bold tracking-wider text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded-full">{card.tag}</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                {card.desc}
                            </p>
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
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Credenciais Acadêmicas</h3>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                <Award size={18} className="text-slate-700" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900">Pós-Graduação em I.A.</h4>
                                <p className="text-sm text-slate-500">Especialização em Inteligência Artificial aplicada.</p>
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
                                <p className="text-sm text-slate-500">Aderência estrita à ISO 27037 e cadeia de custódia.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                    Igor J. S. Penha
                </h2>
                <div className="prose prose-slate prose-lg text-slate-500">
                    <p>
                        Atuando na interseção entre o Direito e a Tecnologia. Minha missão é traduzir a complexidade dos dados digitais em provas jurídicas irrefutáveis.
                    </p>
                    <p>
                        Com fluência técnica internacional (Inglês Técnico ASU, Análise de Malware Russa), ofereço uma visão privilegiada sobre cibercrimes transnacionais e fraudes complexas.
                    </p>
                </div>
                <div className="flex gap-4 pt-4">
                    <a href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-blue-700 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com" target="_blank" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="mailto:igor.soares@ispforense.com.br" className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 px-6">
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
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <ExpertiseSection />
            <BioSection />
            <Footer />
        </main>
    );
}
