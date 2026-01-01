'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Fingerprint, Cpu, Search, Globe, Mail, FileText,
    Award, BookOpen, Smartphone, AlertTriangle, ChevronRight,
    Github, Linkedin, ExternalLink, Menu, X, Terminal, ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Trajetória', href: '#resume' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter flex items-center gap-2"
                >
                    <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                        <Shield className="text-slate-950 w-5 h-5" />
                    </div>
                    <span className="hidden sm:block">ISP FORENSE</span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-200" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg text-slate-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-[-1] opacity-20"
            style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
        >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-6 accent-glow">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                DISPONÍVEL PARA PERÍCIAS JUDICIAIS
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 heading-gradient tracking-tight">
                Computação Forense <br />
                <span className="text-emerald-500">Digital & Inteligência Artificial</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Perito Judicial especializado em crimes cibernéticos, mobile forensics e auditoria de
                <span className="text-slate-200"> Deepfakes</span>. Transformando evidências digitais em provas incontestáveis.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2">
                    Solicitar Laudo Pericial <ChevronRight className="w-4 h-4" />
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-bold transition-all border border-slate-700">
                    Ver Credenciais
                </button>
            </div>

            {/* Fake Console Header */}
            <div className="mt-20 glass-panel rounded-xl p-4 text-left max-w-2xl mx-auto border-emerald-500/20">
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
                <div className="font-mono text-sm text-slate-500">
                    <p><span className="text-emerald-500">$</span> forensics --analyze ./evidencia_digital</p>
                    <p className="text-emerald-400/70 animate-pulse-slow mt-1">[ANALYZING] Metodologia ISO 27037 / Prof. Marcos Monteiro...</p>
                </div>
            </div>
        </motion.div>
    </section>
);

const Expertise = () => {
    const skills = [
        {
            icon: Search,
            title: "Computação Forense",
            desc: "Elaboração de laudos periciais para crimes cibernéticos e fraudes financeiras complexas.",
            details: ["Metodologia Prof. Marcos Monteiro", "ISO 27037", "Cadeia de Custódia"]
        },
        {
            icon: Smartphone,
            title: "Mobile Forensics",
            desc: "Coletas avançadas em Android/iOS, extração de dados e análise de firmware legacy.",
            details: ["Physical Extraction (Chip-off)", "Evidence Acquisition", "Firmware Analysis"]
        },
        {
            icon: Cpu,
            title: "Inteligência Artificial",
            desc: "Auditoria e detecção de mídias sintéticas (Deepfakes) em investigações criminais.",
            details: ["ML Fraud Detection", "Synthetic Media Audit", "IA Generativa Oversight"]
        },
        {
            icon: AlertTriangle,
            title: "Prevenção a Fraudes",
            desc: "Análise de engenharia social, boletos adulterados e fraudes bancárias internacionais.",
            details: ["Business Correspondence", "Anti-Fraud Protocols", "International Negotiation"]
        }
    ];

    return (
        <section id="expertise" className="py-24 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4 heading-gradient">Expertise Técnica</h2>
                    <div className="h-1 w-20 bg-emerald-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <skill.icon size={60} />
                            </div>
                            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
                                <skill.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">{skill.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {skill.details.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const experiences = [
        {
            period: "Dez 2025 - Presente",
            role: "Perito Judicial e Extrajudicial",
            company: "ISP Forense",
            desc: "Especialista em Computação Forense e IA aplicada à identificação de fraudes e deepfakes.",
            tags: ["Laudos Judiciais", "ISO 27037", "Mobile Forensics"]
        },
        {
            period: "Anterior (1 ano 4 meses)",
            role: "Analista de Processos e Negociação Financeira",
            company: "Setor Bancário",
            desc: "Prevenção de fraudes financeiras e atendimento internacional em espanhol/inglês.",
            tags: ["Anti-Fraud", "International Business", "Enforcement"]
        },
        {
            period: "10+ Anos",
            role: "Especialista em Infraestrutura e Hardware Mobile",
            company: "Autônomo / Consultoria",
            desc: "Manutenção avançada, atualizações de firmware e coleta de evidências físicas (Chip-off).",
            tags: ["Hardware Specialist", "Firmware", "Electronics Forensics"]
        },
        {
            period: "5+ Anos",
            role: "Instrutor de Idiomas e Comunicação Técnica",
            company: "Consultoria Educacional",
            desc: "Ensino de inglês técnico e correspondência de negócios internacionais.",
            tags: ["Professional Networking (ASU)", "Business English"]
        }
    ];

    return (
        <section id="resume" className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4 heading-gradient">Trajetória Profissional</h2>
                    <p className="text-slate-400">Uma base sólida que une hardware, software e investigação.</p>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex gap-6 relative"
                        >
                            <div className="hidden sm:flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full border-2 border-emerald-500 bg-slate-950 z-10" />
                                <div className="w-0.5 h-full bg-slate-800 absolute top-4" />
                            </div>
                            <div className="glass-card p-6 rounded-xl flex-1 border-emerald-500/10 hover:border-emerald-500/20">
                                <span className="text-xs font-mono text-emerald-500 mb-2 block">{exp.period}</span>
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <p className="text-slate-200 font-medium mb-3">{exp.company}</p>
                                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{exp.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="text-[11px] bg-slate-800 text-slate-300 px-2 py-1 rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EducationAndLanguages = () => (
    <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <BookOpen className="text-emerald-500" /> Formação & Certificações
                </h2>
                <div className="space-y-6">
                    <div className="p-5 border-l-2 border-emerald-500 bg-slate-900/50 rounded-r-xl">
                        <h4 className="font-bold">Pós-graduação em Inteligência Artificial</h4>
                        <p className="text-sm text-slate-400">Especialização em detecção de Deepfakes e Fraudes.</p>
                    </div>
                    <div className="p-5 border-l-2 border-slate-700 bg-slate-900/30 rounded-r-xl">
                        <h4 className="font-bold">Graduação em ADS</h4>
                        <p className="text-sm text-slate-400">Análise e Desenvolvimento de Sistemas.</p>
                    </div>
                    <div className="p-5 border-l-2 border-slate-700 bg-slate-900/30 rounded-r-xl">
                        <h4 className="font-bold">Certificação Prof. Marcos Monteiro</h4>
                        <p className="text-sm text-slate-400">Especialização em Computação Forense e Perícias.</p>
                    </div>
                    <div className="p-5 border-l-2 border-slate-700 bg-slate-900/30 rounded-r-xl">
                        <h4 className="font-bold">Google Cybersecurity Certificate</h4>
                        <p className="text-sm text-slate-400">Fundamentos e operações de segurança cibernética.</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Globe className="text-emerald-500" /> Domínio Linguístico
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        { lang: 'Espanhol', level: 'Fluente / Nativo' },
                        { lang: 'Inglês', level: 'Fluente (ASU Professional)' },
                        { lang: 'Russo', level: 'Avançado' },
                        { lang: 'Português', level: 'Nativo' }
                    ].map((item) => (
                        <div key={item.lang} className="glass-card p-4 rounded-xl border-emerald-500/5 hover:border-emerald-500/20 transition-all">
                            <span className="text-emerald-500 font-mono text-sm block mb-1">■ {item.lang}</span>
                            <span className="text-slate-200 font-bold">{item.level}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 p-6 glass-panel rounded-2xl border-emerald-500/10">
                    <p className="text-sm italic text-slate-400">
                        "Capacidade de atuar em perícias internacionais e negociações globais com proficiência técnica e cultural."
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// --- Dynamic Sections ---

const BlogSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/blog').then(res => res.json()).then(data => setPosts(data));
    }, []);

    return (
        <section id="blog" className="py-24">
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold heading-gradient mb-4">Insights Forenses</h2>
                    <p className="text-soft max-w-2xl text-slate-400">Artigos técnicos e análises sobre o futuro da prova pericial e inteligência artificial.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map(post => (
                        <motion.div
                            key={post.id}
                            whileHover={{ y: -5 }}
                            className="glass-card p-8 rounded-3xl group cursor-pointer"
                        >
                            <span className="text-xs font-mono text-emerald-500 mb-4 block tracking-widest uppercase">{post.date}</span>
                            <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">{post.title}</h3>
                            <p className="text-slate-400 text-sm mb-6">{post.excerpt}</p>
                            <div className="flex items-center text-emerald-500 text-sm font-medium">
                                Ler artigo completo <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LegalIntegration = () => {
    const [legalData, setLegalData] = useState([]);

    useEffect(() => {
        fetch('/api/legal').then(res => res.json()).then(data => setLegalData(data));
    }, []);

    return (
        <section className="py-24 bg-slate-900/30">
            <div className="max-w-6xl mx-auto px-4">
                <div className="glass-panel p-10 rounded-[2.5rem] border-emerald-500/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Terminal size={120} />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <Search className="mr-3 text-emerald-500" /> Jurisprudência de Interesse
                        </h2>
                        <div className="space-y-6">
                            {legalData.map((item, i) => (
                                <div key={i} className="border-l-2 border-emerald-500/30 pl-6 py-2">
                                    <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-tighter mb-1 block">{item.type}</span>
                                    <h4 className="text-slate-200 font-medium mb-1">{item.caseTitle}</h4>
                                    <p className="text-xs text-slate-400">{item.summary}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });
            if (res.ok) setStatus('success');
            else setStatus('error');
        } catch (e) {
            setStatus('error');
        }
    };

    return (
        <section id="contato" className="py-24">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold heading-gradient mb-6">Solicitar Perícia</h2>
                <p className="text-slate-400 mb-12">Atendimento especializado para tribunais, escritórios de advocacia e empresas.</p>

                <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-12 rounded-[3rem] text-left">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-xs font-mono text-slate-500 uppercase mb-2 ml-4">Nome Completo</label>
                            <input name="name" required className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-emerald-500/50 focus:outline-none transition-all" />
                        </div>
                        <div>
                            <label className="block text-xs font-mono text-slate-500 uppercase mb-2 ml-4">E-mail Profissional</label>
                            <input name="email" type="email" required className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-emerald-500/50 focus:outline-none transition-all" />
                        </div>
                    </div>
                    <div className="mb-8">
                        <label className="block text-xs font-mono text-slate-500 uppercase mb-2 ml-4">Mensagem / Resumo do Caso</label>
                        <textarea name="message" rows="4" required className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:border-emerald-500/50 focus:outline-none transition-all resize-none"></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full glass-card py-5 rounded-2xl text-emerald-400 font-bold tracking-widest uppercase hover:bg-emerald-500 hover:text-white transition-all duration-500 group"
                    >
                        {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Enviado com Sucesso!' : (
                            <span className="flex items-center justify-center">
                                Enviar Solicitação <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </span>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer id="contact" className="py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold heading-gradient mb-2">ISP FORENSE</h3>
                <p className="text-slate-500 text-xs">Perícia Digital • Auditoria IA • Mobile Hardware</p>
            </div>

            <div className="flex gap-6">
                <a href="#" className="text-slate-400 hover:text-emerald-500"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-emerald-500"><Github size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-emerald-500"><Mail size={20} /></a>
            </div>

            <p className="text-slate-600 text-[10px] font-mono">
                © 2025 • PROXIMA GENERATIO FORENSICS
            </p>
        </div>
    </footer>
);

<main className="bg-slate-950 min-h-screen">
    <Navbar />
    <Hero />
    <Expertise />
    <Experience />
    <BlogSection />
    <LegalIntegration />
    <EducationAndLanguages />
    <ContactSection />
    <Footer />
</main>
