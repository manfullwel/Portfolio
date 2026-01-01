'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield, Scale, Smartphone, Cpu, Search,
    CheckSquare, Globe, Mail, FileText,
    ArrowRight, Gavel, Award, Linkedin, Github
} from 'lucide-react';
import Image from 'next/image';

// --- Legal Components ---

const Header = () => (
    <header className="fixed w-full top-0 z-[100] bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                    <Image
                        src="/images/profile.png"
                        alt="Igor J. S. Penha"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h1 className="font-serif font-black text-lg text-slate-900 leading-none">IGOR J. S. PENHA</h1>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">Perito Judicial Computacional</p>
                </div>
            </div>
            <nav className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                <a href="#expertise" className="hover:text-slate-900">Especialidades</a>
                <a href="#bio" className="hover:text-slate-900">Credenciais</a>
                <a href="#contact" className="hover:text-slate-900">Contato</a>
            </nav>
        </div>
    </header>
);

const Hero = () => (
    <section className="pt-40 pb-20">
        <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-500 rounded-sm text-[10px] uppercase font-bold tracking-tighter">
                <Gavel size={12} /> Soberania Técnica em Prova Digital
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 leading-[0.9]">
                Rigor Científico no <br />
                <span className="text-slate-500 italic">Cenário Jurídico.</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-sans">
                ISP Forense: Elaboração de laudos periciais de alta complexidade, conciliando mais de <span className="font-bold text-slate-900">10 anos de hardware benchmark</span> com especialização avançada em <span className="font-bold text-slate-900">Inteligência Artificial</span>.
            </p>
            <div className="flex gap-4">
                <a href="#contact" className="btn-legal">Solicitar Parecer</a>
                <a href="#expertise" className="px-6 py-3 border border-slate-200 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-colors">Áreas de Atuação</a>
            </div>
        </div>
    </section>
);

const Competencies = () => {
    const cards = [
        {
            icon: Smartphone,
            title: "Perícia Mobile Hardware",
            desc: "Extração física (Chip-off) e análise de dispositivos Android/iOS. Base legada (Nokia/Sony) garantindo domínio total da eletrônica no metal.",
        },
        {
            icon: Search,
            title: "Ciber-Investigação",
            desc: "Rastreio de estelionato digital e engenharia social. Metodologia Prof. Marcos Monteiro e ISO 27037 para garantia da cadeia de custódia.",
        },
        {
            icon: Cpu,
            title: "Auditoria de IA & Fraudes",
            desc: "Detecção técnica de Deepfakes e manipulações audiovisuais. Especialista em identificar boletos falsificados e processos bancários fraudulentos.",
        },
    ];

    return (
        <section id="expertise" className="bg-white border-y border-slate-100">
            <div className="mb-16">
                <span className="label-mono">01. Especialidades Institucionais</span>
                <h3 className="text-4xl font-serif font-black mt-2">Corpo Técnico</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {cards.map((card, i) => (
                    <div key={i} className="report-card">
                        <card.icon className="text-slate-800 mb-6" size={28} />
                        <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed font-sans">{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Biography = () => (
    <section id="bio">
        <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-6">
                <span className="label-mono">02. Registro Profissional</span>
                <h3 className="text-4xl font-serif font-black italic">Igor de Jesus Soares Penha</h3>
                <p className="text-slate-600 leading-relaxed font-sans">
                    Perito Judicial e Extrajudicial focado em transparência absoluta. Com fluência técnica internacional — consolidada pelo <span className="font-bold text-slate-900">Inglês da ASU, Espanhol Fluente e Russo Avançado</span> — atuo na identificação de malwares transnacionais e investigação de crimes digitais complexos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm">
                        <span className="label-mono text-[8px]">Graduação</span>
                        <p className="text-xs font-bold font-sans mt-1">Análise de Sistemas</p>
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-sm">
                        <span className="label-mono text-[8px]">Especialização</span>
                        <p className="text-xs font-bold font-sans mt-1">Inteligência Artificial</p>
                    </div>
                </div>
            </div>
            <div className="space-y-8">
                <div className="p-10 bg-slate-900 text-white rounded-sm">
                    <Award className="text-slate-400 mb-6" size={32} />
                    <h4 className="text-2xl font-serif italic mb-4 text-white">Certificações de Rigor</h4>
                    <ul className="space-y-3 text-xs font-mono tracking-wide text-slate-300">
                        <li className="flex gap-3"><CheckSquare size={14} className="text-white" /> ISO 27037 Principles</li>
                        <li className="flex gap-3"><CheckSquare size={14} className="text-white" /> Metodologia Prof. Marcos Monteiro</li>
                        <li className="flex gap-3"><CheckSquare size={14} className="text-white" /> Google Cybersecurity Specialization</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const Contact = () => (
    <section id="contact" className="bg-slate-50 pb-40">
        <div className="max-w-2xl mx-auto text-center border border-slate-200 p-16 bg-white shadow-xl shadow-slate-100">
            <span className="label-mono">Agendamento de Consulta</span>
            <h3 className="text-3xl font-serif font-black mt-4 mb-6 uppercase tracking-tighter">Protocolo de Comunicação</h3>
            <p className="text-slate-500 mb-10 text-sm leading-relaxed">
                Assegure a integridade da sua prova desde o ato inicial. Solicite assistência técnica preliminar para blindagem jurídica do seu processo.
            </p>
            <div className="flex flex-col gap-4 text-sm text-slate-600 mb-8">
                <p><strong>Email:</strong> igor.soares@ispforense.com.br</p>
                <p><strong>Tel:</strong> (61) 99528-3731</p>
                <p><strong>Web:</strong> www.ispforense.com.br</p>
            </div>
            <div className="flex flex-col gap-4">
                <a href="mailto:igor.soares@ispforense.com.br" className="btn-legal justify-center py-5">Iniciar Protocolo Externo</a>
                <div className="flex justify-center gap-6 mt-6 opacity-30 text-slate-900 grayscale">
                    <Linkedin size={18} />
                    <Mail size={18} />
                    <Shield size={18} />
                </div>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-12 border-t border-slate-100 text-center">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em]">
                © 2026 ISP Forense | Documentação Digital
            </div>
            <div className="flex items-center gap-2 text-[8px] font-mono uppercase tracking-widest">
                <Shield size={10} /> Segurança de Ponta a Ponta
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="bg-slate-50">
            <Header />
            <div className="divide-y divide-slate-100">
                <Hero />
                <Competencies />
                <Biography />
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
