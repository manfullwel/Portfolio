'use client';

import React from 'react';
import {
    Cpu, Search, Lock, Shield,
    CheckSquare, ChevronRight, FileText,
    Globe2, Award, Smartphone
} from 'lucide-react';
import Image from 'next/image';

/* --- LEGAL DESIGN SYSTEM (High Court Aesthetic) ---
 * Colors:
 * - Background: bg-slate-50 (Main), bg-white / bg-slate-100 (Sections)
 * - Authority: text-blue-900 (Titles/Buttons)
 * - Text: text-slate-800 (Body)
 * Typography:
 * - Titles: Font-Serif (Merriweather)
 * - Body: Font-Sans (Inter)
 */

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-900 selection:text-white">

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
                            <CheckSquare size={10} className="text-blue-900" /> ISO 27037 Compliance
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600">
                            <Shield size={10} className="text-blue-900" /> Metodologia Marcos Monteiro
                        </span>
                    </div>
                </div>
            </header>

            {/* --- HERO SECTION: The Promise --- */}
            <section className="pt-40 pb-24 px-6 md:px-0">
                <div className="max-w-4xl mx-auto text-center space-y-10">

                    <h2 className="font-serif font-black text-4xl md:text-5xl text-blue-900 leading-[1.15]">
                        Da materialidade do hardware <br />
                        à auditoria de Inteligência Artificial.
                    </h2>

                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto font-light">
                        Laudos técnicos fundamentados em 10 anos de eletrônica (Chip-off) e auditoria de fraudes bancárias. Traduzo a complexidade técnica em prova jurídica clara.
                    </p>

                    <div className="pt-4">
                        <a href="mailto:peritoigor@ispforense.com.br" className="inline-flex items-center gap-3 px-8 py-4 bg-blue-900 text-white font-serif font-bold text-sm tracking-wide rounded hover:bg-blue-800 transition-colors shadow-lg shadow-blue-900/10">
                            Solicitar Parecer Técnico <ChevronRight size={14} />
                        </a>
                    </div>
                </div>
            </section>

            {/* --- SERVICES SECTION: Static & Clean Cards --- */}
            <section className="py-24 bg-white border-y border-slate-100 px-6">
                <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

                    {/* Card 1: Mobile Forensics */}
                    <article className="bg-slate-50 p-10 border border-slate-200 rounded-sm">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 mb-6">
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
                    <article className="bg-slate-50 p-10 border border-slate-200 rounded-sm">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 mb-6">
                            <Search size={24} className="text-blue-900" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-blue-900 mb-4 h-14 flex items-end pb-1">
                            Investigação de Fraudes Financeiras
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Auditoria de boletos adulterados e engenharia social bancária. Experiência de 1 ano e 4 meses em análise de risco interna.
                        </p>
                    </article>

                    {/* Card 3: Deepfakes */}
                    <article className="bg-slate-50 p-10 border border-slate-200 rounded-sm">
                        <div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 mb-6">
                            <Lock size={24} className="text-blue-900" />
                        </div>
                        <h3 className="font-serif font-bold text-xl text-blue-900 mb-4 h-14 flex items-end pb-1">
                            Detecção de Deepfakes (IA)
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Validação de provas audiovisuais usando Machine Learning para detectar manipulações.
                        </p>
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
