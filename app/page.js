'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Scale, Smartphone, Cpu, Search,
    CheckSquare, Globe, Mail, FileText,
    ArrowRight, Gavel, Award, Linkedin, Github,
    Phone, Globe2
} from 'lucide-react';
import Image from 'next/image';

// --- Legal Components ---

const Header = () => (
    <header className="fixed w-full top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-100 py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 relative rounded-full overflow-hidden border border-slate-200">
                    <Image src="/images/profile.png" alt="Igor Penha" fill className="object-cover" />
                </div>
                <div>
                    <h1 className="font-serif font-black text-sm tracking-tight text-slate-900 leading-none uppercase">Igor J. S. Penha</h1>
                    <p className="text-[8px] font-mono text-slate-400 uppercase tracking-widest mt-1">Perito Judicial Computacional</p>
                </div>
            </div>
            <nav className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                <a href="#expertise" className="hover:text-slate-900 transition-colors">Especialidades</a>
                <a href="#bio" className="hover:text-slate-900 transition-colors">Credenciais</a>
                <a href="#contact" className="hover:text-slate-900 transition-colors">Contato</a>
            </nav>
        </div>
    </header>
);

const Hero = () => (
    <section className="min-h-screen flex items-center pt-20 px-0 md:px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-stretch overflow-hidden">
            {/* Left Column: Large Profile Image (CVCyber Style) */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative bg-slate-100 h-[500px] lg:h-auto min-h-[500px] lg:min-h-[700px]"
            >
                <Image
                    src="/images/profile.png"
                    alt="Igor de Jesus Soares Penha - Perito Judicial"
                    fill
                    priority
                    className="object-cover object-top lg:object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/40 to-transparent lg:hidden">
                    <p className="text-white font-serif italic text-2xl">Igor J. S. Penha</p>
                </div>
            </motion.div>

            {/* Right Column: High-Authority Text */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col justify-center p-10 lg:p-20 bg-white"
            >
                <div className="space-y-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white rounded-none text-[10px] uppercase font-bold tracking-[0.2em]">
                        <Gavel size={12} /> Soberania Técnica em Prova Digital
                    </div>

                    <h2 className="text-6xl md:text-8xl font-serif font-black text-slate-900 leading-[0.85] tracking-tighter">
                        Rigor <br />
                        <span className="text-slate-400 italic font-light">Científico</span> no <br />
                        <span className="text-slate-900">Cenário Jurídico.</span>
                    </h2>

                    <div className="h-1 w-20 bg-slate-900"></div>

                    <p className="text-xl text-slate-600 leading-relaxed font-sans max-w-xl">
                        ISP Forense: Elaboração de laudos periciais de alta complexidade.
                        Domínio absoluto da <span className="text-slate-900 font-bold underline decoration-slate-200 underline-offset-4">eletrônica de precisão</span> e
                        auditoria científica de <span className="text-slate-900 font-bold underline decoration-slate-200 underline-offset-4">Inteligência Artificial</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                        <a href="#contact" className="btn-legal text-center group">
                            SOLICITAR PARECER <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#expertise" className="px-8 py-4 border border-slate-200 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-50 transition-all flex items-center justify-center">
                            ÁREAS DE ATUAÇÃO
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
);

const ExpertiseSection = () => {
    const cards = [
        {
            icon: Smartphone,
            title: "Perícia Mobile Hardware",
            label: "CHIP-OFF & EXTRAÇÃO FÍSICA",
            desc: "Análise avançada no nível do metal. Extração física de dados em dispositivos Android e iOS com base em legado de hardware (Nokia/Sony).",
        },
        {
            icon: Search,
            title: "Ciber-Investigação",
            label: "ISO 27037 & CUSTÓDIA",
            desc: "Rastreio técnico de estelionato digital e fraudes bancárias. Metodologia rigorosa Prof. Marcos Monteiro para blindagem da cadeia de custódia.",
        },
        {
            icon: Cpu,
            title: "Auditoria de IA",
            label: "DEEPFAKE DETECTION",
            desc: "Perícia audiovisual para identificação de deepfakes e manipulações. Especialista em laudos para fraudes complexas em ambientes financeiros.",
        },
    ];

    return (
        <section id="expertise" className="bg-white border-y border-slate-100 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center lg:text-left">
                    <span className="label-mono">Seção 01: ÁREAS DE SOBERANIA</span>
                    <h3 className="text-5xl font-serif font-black mt-4 text-slate-900">Corpo Técnico</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-1px bg-slate-200 border border-slate-200">
                    {cards.map((card, i) => (
                        <div key={i} className="bg-white p-12 hover:bg-slate-50 transition-colors group">
                            <span className="label-mono text-[8px] text-slate-400 mb-6 block tracking-[0.3em]">{card.label}</span>
                            <card.icon className="text-slate-900 mb-8 group-hover:scale-110 transition-transform" size={32} />
                            <h4 className="text-2xl font-serif italic mb-6 text-slate-900 underline decoration-slate-200 underline-offset-8">{card.title}</h4>
                            <p className="text-slate-500 leading-relaxed font-sans text-sm">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BioSection = () => (
    <section id="bio" className="py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 space-y-10">
                <span className="label-mono">Seção 02: PERFIL INSTITUCIONAL</span>
                <h3 className="text-5xl md:text-6xl font-serif font-black text-slate-900 leading-tight">
                    Igor de Jesus <br /> Soares Penha
                </h3>
                <div className="p-1 border-l-4 border-slate-900 pl-8 space-y-6">
                    <p className="text-lg text-slate-600 leading-relaxed font-sans">
                        Perito Judicial e Extrajudicial focado em <span className="font-bold text-slate-900">transparência absoluta</span>.
                        Com fluência técnica internacional consolidada (ASU English, Russian Malware Analysis, Spanish),
                        atua na linha de frente contra o cibercrime transnacional.
                    </p>
                    <p className="text-slate-500 font-sans leading-relaxed">
                        Pós-graduado em Inteligência Artificial, unindo a visão algorítmica moderna ao
                        conhecimento profundo de hardware adquirido em mais de uma década de bancada.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                    <div className="p-6 bg-white border border-slate-200">
                        <span className="label-mono text-[8px] mb-2 block">Formação Superior</span>
                        <p className="font-bold text-slate-900">Análise de Sistemas & Pós em IA</p>
                    </div>
                    <div className="p-6 bg-white border border-slate-200">
                        <span className="label-mono text-[8px] mb-2 block">Metodologia</span>
                        <p className="font-bold text-slate-900">ISO 27037 & Prof. Marcos Monteiro</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="bg-slate-900 text-white p-12 space-y-10 relative overflow-hidden group">
                    <Award className="text-slate-700 group-hover:text-slate-500 transition-colors" size={60} />
                    <div className="relative z-10">
                        <h4 className="text-3xl font-serif italic mb-8">Credenciais de Autoria</h4>
                        <ul className="space-y-6 text-sm font-sans tracking-wide text-slate-300">
                            <li className="flex gap-4 items-start">
                                <CheckSquare size={18} className="text-white mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-white mb-1">ASU TECHNICAL ENGLISH</p>
                                    <p className="text-[10px]">Arizona State University Proficiency</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckSquare size={18} className="text-white mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-white mb-1">GOOGLE CYBERSECURITY</p>
                                    <p className="text-[10px]">Professional Network Defense</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckSquare size={18} className="text-white mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold text-white mb-1">RUSSIAN ADVANCED</p>
                                    <p className="text-[10px]">Malware Investigation Skills</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <Shield size={150} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ContactSection = () => (
    <section id="contact" className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-1px bg-slate-200 border border-slate-200">
            <div className="bg-white p-16 space-y-8">
                <span className="label-mono">PROTOCOLO</span>
                <h3 className="text-4xl font-serif font-black text-slate-900 leading-none">Canais de Engajamento</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                    Inicie o processo de blindagem técnica imediatamente. Atendimento especializado para processos complexos.
                </p>
                <div className="space-y-4 text-sm font-sans font-bold text-slate-800">
                    <div className="flex items-center gap-3">
                        <Mail size={16} className="text-slate-400" /> igor.soares@ispforense.com.br
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone size={16} className="text-slate-400" /> (61) 99528-3731
                    </div>
                    <div className="flex items-center gap-3">
                        <Globe2 size={16} className="text-slate-400" /> www.ispforense.com.br
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 p-16 flex flex-col justify-center items-center text-center space-y-8">
                <Shield size={40} className="text-slate-900 opacity-20" />
                <h4 className="text-xl font-serif italic text-slate-900">Assistência Técnica Preliminar</h4>
                <a href="mailto:igor.soares@ispforense.com.br" className="btn-legal w-full justify-center">
                    INICIAR CHAMADA
                </a>
                <div className="flex gap-6 grayscale opacity-30 mt-4">
                    <Linkedin size={20} />
                    <Mail size={20} />
                    <Github size={20} />
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-4 grayscale opacity-30">
                <Shield size={24} />
                <span className="font-serif font-bold italic tracking-tighter text-2xl">ISP FORENSE</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.3em]">
                © 2026 | SOBERANIA TÉCNICA EM PROVA DIGITAL
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="selection:bg-slate-900 selection:text-white">
            <Header />
            <Hero />
            <ExpertiseSection />
            <BioSection />
            <ContactSection />
            <Footer />
        </main>
    );
}
