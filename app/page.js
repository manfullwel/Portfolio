'use client';

import React, { useState } from 'react';
import {
    Cpu, Search, Lock, Shield,
    CheckSquare, ChevronRight, FileText,
    Globe2, Award, Smartphone, X, User
} from 'lucide-react';
import Image from 'next/image';

/* --- LEGAL DESIGN SYSTEM (High Court Aesthetic) ---
 * Colors:
 * - Background: bg-slate-50 (Main), bg-white (Sections)
 * - Authority: text-blue-900 (Titles/Buttons)
 * - Text: text-slate-800 (Body)
 * Typography:
 * - Titles: Font-Serif (Merriweather)
 * - Body: Font-Sans (Inter)
 */

const CaseStudyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Content - High Court Style: Sharp corners, Serif headers, White paper look */}
            <div className="relative bg-white w-full max-w-2xl shadow-2xl shadow-slate-900/20 border border-slate-200 animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="bg-slate-50 px-8 py-6 border-b border-slate-200 flex justify-between items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-blue-50 border border-blue-100 mb-3">
                            <Shield size={10} className="text-blue-900" />
                            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-900">Estudo de Caso</span>
                        </div>
                        <h3 className="font-serif font-bold text-2xl text-slate-900 tracking-tight">Ameaça à Fé Pública via IA</h3>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-900 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8 space-y-8 font-sans">
                    <div className="space-y-2">
                        <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-slate-400 flex items-center gap-2">
                            <Lock size={14} /> O Problema
                        </h4>
                        <p className="text-slate-700 leading-relaxed text-sm text-justify">
                            Em litígios de alta complexidade, a inserção de áudio ou vídeo manipulado (deepfake) destrói reputações e induz o juízo a erro grave. A fraude é invisível a olho nu.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-50 border-l-4 border-blue-900 space-y-2">
                        <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-blue-900 flex items-center gap-2">
                            <Search size={14} /> Metodologia Pericial
                        </h4>
                        <p className="text-slate-800 leading-relaxed text-sm text-justify">
                            Aplicação de algoritmos para detecção de <strong>artifacts</strong> faciais e espectrogramas de voz. Processo blindado pela <strong>ISO 27037 (Cadeia de Custódia)</strong>.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-serif font-bold text-sm uppercase tracking-wide text-emerald-700 flex items-center gap-2">
                            <CheckSquare size={14} /> Conclusão
                        </h4>
                        <p className="font-serif italic text-slate-900 text-lg border-b border-slate-100 pb-2">
                            "Laudo Pericial Conclusivo atestando a manipulação, garantindo a segurança jurídica."
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-slate-50 px-8 py-4 border-t border-slate-200 flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm">
                        Fechar Autos
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-900 selection:text-white">
            <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* --- HEADER: Authority & Cleanliness --- */}
            <header className="fixed w-full top-0 z-50 bg-slate-50/95 backdrop-blur-sm border-b border-slate-200">
                <div className="max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
                    <div>
                        <h1 className="font-serif font-bold text-lg text-blue-900 tracking-tight leading-tight">
                            Igor de Jesus Soares Penha
                        </h1>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mt-1">
                            Perito Judicial em Computação Forense & Auditoria de IA
                        </p>
                    </div>

                    {/* Badges: Discrete Authority */}
                    <div className="hidden md:flex gap-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600">
                            <CheckSquare size={10} className="text-blue-900" /> ISO 27037
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600">
                            <Shield size={10} className="text-blue-900" /> Metodologia Marcos Monteiro
                        </span>
                    </div>
                </div>
            </header>

            {/* --- HERO SECTION: The Promise & Evidence --- */}
            <section className="pt-40 pb-24 px-6 md:px-0">
                <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">

                    {/* Column 1: Copy (7 cols) */}
                    <div className="md:col-span-7 space-y-10 text-center md:text-left">
                        <h2 className="font-serif font-black text-4xl md:text-5xl text-blue-900 leading-[1.15]">
                            Da materialidade do hardware <br />
                            à auditoria de Inteligência Artificial.
                        </h2>

                        <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl font-light">
                            Laudos técnicos fundamentados em 10 anos de eletrônica (Chip-off) e auditoria de fraudes bancárias. Traduzo a complexidade técnica em prova jurídica clara.
                        </p>

                        <div className="pt-4 flex justify-center md:justify-start">
                            <a href="mailto:peritoigor@ispforense.com.br" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-900 text-white font-serif font-bold text-sm tracking-wide rounded hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10">
                                Solicitar Parecer Técnico <ChevronRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Profile Image (5 cols) - "Evidence Frame" Style */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="relative w-[280px] md:w-[320px] aspect-[3/4] p-3 bg-white border border-slate-200 shadow-xl shadow-slate-200/50 -rotate-1">
                            <div className="relative w-full h-full border border-slate-100 bg-slate-50 overflow-hidden">
                                <Image
                                    src="/image/profile.png"
                                    alt="Perito Igor Penha"
                                    fill
                                    priority
                                    className="object-cover object-top hover:scale-105 transition-transform duration-1000 saturate-50 hover:saturate-100" // Low saturation for sober look, color on hover
                                    sizes="(max-width: 768px) 100vw, 320px"
                                />
                            </div>
                            <div className="absolute bottom-6 -left-6 bg-blue-900 text-white px-4 py-2 font-serif text-xs font-bold shadow-lg">
                                Perito Judicial
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* --- SERVICES SECTION: Static & Clean Cards --- */}
            <section className="py-24 bg-white border-y border-slate-100 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

                    {/* Card 1: Mobile Forensics */}
                    <article className="bg-slate-50 p-10 border border-slate-200 rounded-sm hover:border-blue-200 transition-colors group">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 mb-6 group-hover:border-blue-900 transition-colors">
                            <Cpu size={24} className="text-blue-900" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-blue-900 mb-4 h-14 flex items-end pb-1">
                            Mobile Forensics & Hardware
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Recuperação de dados em nível físico (Chip-off) em dispositivos modernos e legados (Nokia/Sony). Onde o software falha, a eletrônica resolve.
                        </p>
                    </article>

                    {/* Card 2: Financial Fraud */}
                    <article className="bg-slate-50 p-10 border border-slate-200 rounded-sm hover:border-blue-200 transition-colors group">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 mb-6 group-hover:border-blue-900 transition-colors">
                            <Search size={24} className="text-blue-900" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-blue-900 mb-4 h-14 flex items-end pb-1">
                            Investigação de Fraudes Financeiras
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Auditoria de boletos adulterados e engenharia social bancária. Experiência de 1 ano e 4 meses em análise de risco interna.
                        </p>
                    </article>

                    {/* Card 3: Deepfakes with ACTION */}
                    <article className="bg-slate-50 p-10 border border-slate-200 rounded-sm hover:border-blue-900 transition-colors group relative flex flex-col">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 mb-6 group-hover:bg-blue-900 transition-colors">
                            <Lock size={24} className="text-blue-900 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-blue-900 mb-4 h-14 flex items-end pb-1">
                            Detecção de Deepfakes (IA)
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                            Validação de provas audiovisuais usando Machine Learning para detectar manipulações.
                        </p>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="mt-auto w-full py-3 bg-white border border-blue-900/30 text-blue-900 font-bold text-xs uppercase tracking-widest hover:bg-blue-900 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            <FileText size={12} /> Ler Estudo de Caso
                        </button>
                    </article>

                </div>
            </section>

            {/* --- INTERNATIONAL AUTHORITY FOOTER --- */}
            <footer className="bg-slate-50 py-16 px-6 border-t border-slate-200 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 text-blue-900/40">
                        <Globe2 size={24} />
                    </div>
                    <p className="font-serif font-bold text-slate-900 text-lg">
                        Capacidade de Análise Global
                    </p>
                    <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
                        Inglês Técnico (Arizona State University)  •  Russo Avançado  •  Espanhol Fluente
                    </p>
                    <div className="pt-8 text-[10px] text-slate-400 font-mono">
                        © 2026 ISP FORENSE. TODOS OS DIREITOS RESERVADOS.
                    </div>
                </div>
            </footer>

        </main>
    );
}
