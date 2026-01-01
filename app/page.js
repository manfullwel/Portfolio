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
        <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold tracking-tighter flex items-center gap-3"
                >
                    <div className="icon-app w-10 h-10 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-500/20">
                        <Shield className="text-slate-950 w-5 h-5" />
                    </div>
                    <span className="hidden sm:block font-bold">ISP <span className="text-emerald-500">FORENSE</span></span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-medium tracking-wide uppercase hover:scale-105 transform duration-300">{link.name}</a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden z-[110] relative" onClick={() => setIsOpen(!isOpen)}>
                    <div className="icon-app w-10 h-10">
                        {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-slate-300" />}
                    </div>
                </button>
            </div>

            {/* iOS-Style Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(40px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 bg-slate-950/80 md:hidden flex flex-col items-center justify-center z-[105]"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col items-center gap-8"
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-4xl font-bold tracking-tight text-white hover:text-emerald-500 transform transition-all active:scale-90"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => (
    <section id="home" className="min-h-screen pt-40 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none opacity-40 animate-pulse" />

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl px-4 z-10"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono mb-8 tracking-[0.2em] uppercase"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponível para perícias em 2026
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 heading-premium leading-[1.1] md:leading-[1.05]">
                Inteligência <br />
                <span className="text-emerald-500">Forense Digital</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Perito Judicial especializado em identificação de <span className="text-white font-medium">Deepfakes</span>,
                investigação de <span className="text-white font-medium">Fraudes Bancárias</span> e Mobile Forensics.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                <button className="glass-panel hover:bg-emerald-500 hover:text-slate-950 px-10 py-5 rounded-2xl font-bold transition-all flex items-center gap-3 group text-lg border-emerald-500/20 hover:border-emerald-500">
                    Solicitar Laudo <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="glass-panel px-10 py-5 rounded-2xl font-bold transition-all border-white/5 hover:border-white/20 text-lg">
                    Credenciais
                </button>
            </div>

            {/* OS-Style Terminal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-24 glass-panel rounded-[2rem] p-6 text-left max-w-2xl mx-auto border-emerald-500/10 shadow-2xl"
            >
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="font-mono text-sm text-slate-500 space-y-1">
                    <p><span className="text-emerald-500">perito@forense:</span><span className="text-slate-300"> ~ forensics --check-deepfake video_evidencia.mp4</span></p>
                    <p className="text-emerald-400/80 animate-pulse">[SCANNING] ISO 27037 Principles via Forensics Core v4.3...</p>
                </div>
            </motion.div>
        </motion.div>
    </section>
);

const Expertise = () => {
    const skills = [
        {
            icon: Search,
            title: "Ciber-Investigação",
            desc: "Identificação técnica de crimes digitais e fraude em transações financeiras.",
            tags: ["ISO 27037", "Cadeia de Custódia"]
        },
        {
            icon: Smartphone,
            title: "Mobile Hardware",
            desc: "Extração física e lógica de dispositivos móveis com análise de firmware.",
            tags: ["Physical Extract", "Firmware Analysis"]
        },
        {
            icon: Cpu,
            title: "Auditoria de IA",
            desc: "Perícia especializada em mídia sintética e detecção avançada de Deepfakes.",
            tags: ["ML Forensics", "Synthetic Media"]
        },
        {
            icon: Globe,
            title: "Forense Global",
            desc: "Atuação em casos internacionais com proficiência em múltiplos idiomas.",
            tags: ["Transnacional", "ASU Standard"]
        }
    ];

    return (
        <section id="expertise" className="relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-20 text-center">
                    <span className="text-caption">Especialização Técnica</span>
                    <h2 className="text-4xl md:text-5xl font-bold heading-premium">Expertise Forense</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 group"
                        >
                            <div className="icon-app mb-8 bg-emerald-500/5 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all">
                                <skill.icon className="w-6 h-6 text-emerald-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                            <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">{skill.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {skill.details?.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono bg-white/5 text-slate-400 px-3 py-1 rounded-full border border-white/5">{tag}</span>
                                )) || skill.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono bg-white/5 text-slate-400 px-3 py-1 rounded-full border border-white/5">{tag}</span>
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
            period: "Presente",
            role: "Perito Judicial",
            company: "ISP Forense",
            desc: "Liderança técnica em perícias de computação forense e detecção de mídias sintéticas via IA.",
            tags: ["Judicial", "Deepfakes"]
        },
        {
            period: "Anterior",
            role: "Analista Financeiro",
            company: "Setor Bancário",
            desc: "Detecção de fraudes eletrônicas e negociações internacionais em ambiente crítico.",
            tags: ["Anti-Fraud", "Baking"]
        },
        {
            period: "10+ Anos",
            role: "Hardware Expert",
            company: "Consultoria Mobile",
            desc: "Especialista em firmware e eletrônica aplicada à recuperação de evidências físicas.",
            tags: ["Chip-off", "Firmware"]
        }
    ];

    return (
        <section id="resume" className="bg-white/[0.01]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-24">
                    <span className="text-caption">Caminho Profissional</span>
                    <h2 className="text-4xl md:text-5xl font-bold heading-premium text-white">Trajetória</h2>
                </div>

                <div className="space-y-16">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="flex flex-col md:flex-row gap-10 items-start md:items-center group"
                        >
                            <div className="w-40 shrink-0">
                                <span className="text-emerald-500 font-mono text-sm tracking-tighter uppercase">{exp.period}</span>
                            </div>
                            <div className="glass-card flex-1 p-10 relative overflow-hidden group-hover:bg-white/[0.05] transition-all">
                                <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:scale-150 transition-transform duration-1000">
                                    <Terminal size={120} />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                                <p className="text-emerald-500/80 font-medium mb-4">{exp.company}</p>
                                <p className="text-slate-400 font-light mb-6 leading-relaxed max-w-2xl">{exp.desc}</p>
                                <div className="flex gap-3">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase tracking-widest bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-lg">{tag}</span>
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
    <section className="relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-12"
            >
                <div>
                    <span className="text-caption">Certificações</span>
                    <h2 className="text-4xl font-bold heading-premium mb-10">Qualificações</h2>
                </div>
                <div className="space-y-6">
                    {[
                        { title: "Pós em Inteligência Artificial", focus: "Deepfakes & Fraudes" },
                        { title: "Graduação em ADS", focus: "Desenvolvimento Forense" },
                        { title: "Metodologia Marcos Monteiro", focus: "Perícia Judicial" },
                        { title: "Google Cybersecurity", focus: "Sec-Ops Standard" }
                    ].map((edu, i) => (
                        <div key={i} className="glass-card p-6 flex items-center justify-between group">
                            <div>
                                <h4 className="font-bold text-lg group-hover:text-emerald-400 transition-colors">{edu.title}</h4>
                                <p className="text-sm text-slate-500">{edu.focus}</p>
                            </div>
                            <div className="icon-app w-10 h-10 group-hover:bg-emerald-500/20">
                                <ChevronRight className="w-4 h-4 text-emerald-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-12"
            >
                <div>
                    <span className="text-caption">Atuação Global</span>
                    <h2 className="text-4xl font-bold heading-premium mb-10">Idiomas</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        { lang: 'Espanhol', level: 'Fluente / Nativo' },
                        { lang: 'Inglês', level: 'ASU Technical' },
                        { lang: 'Russo', level: 'Advanced' },
                        { lang: 'Português', level: 'Nativo' }
                    ].map((item) => (
                        <div key={item.lang} className="glass-card p-8 group">
                            <span className="text-emerald-500 font-mono text-xs mb-3 block">PERITO // {item.lang}</span>
                            <span className="text-xl font-bold group-hover:text-emerald-400 transition-colors">{item.level}</span>
                        </div>
                    ))}
                </div>
                <div className="glass-panel p-10 rounded-[2.5rem] border-white/5 relative bg-emerald-500/5">
                    <p className="text-lg italic text-slate-300 font-light leading-relaxed">
                        "Proficiência linguística validada para laudos e negociações transnacionais."
                    </p>
                </div>
            </motion.div>
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
        <section id="blog">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-16 text-center">
                    <span className="text-caption">Análises Técnicas</span>
                    <h2 className="text-4xl md:text-5xl font-bold heading-premium">Blog Forense</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-10 group cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none" />
                            <span className="text-caption text-emerald-500/60 mb-6">{post.date}</span>
                            <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors leading-tight">{post.title}</h3>
                            <p className="text-slate-400 mb-10 leading-relaxed font-light">{post.excerpt}</p>
                            <div className="flex items-center text-emerald-500 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                Protocolo Completo <ArrowRight className="w-4 h-4" />
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
        <section className="bg-slate-950">
            <div className="max-w-7xl mx-auto px-4">
                <div className="glass-panel p-16 rounded-[3rem] relative shadow-emerald-500/5">
                    <div className="z-10 relative">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="icon-app bg-emerald-500 shadow-xl shadow-emerald-500/20">
                                <BookOpen size={24} className="text-slate-950" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Jurisprudência & Casos</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            {legalData.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="border-l-2 border-emerald-500/20 pl-8"
                                >
                                    <span className="text-caption text-emerald-500/40">{item.type}</span>
                                    <h4 className="text-xl font-bold text-slate-100 mb-3">{item.caseTitle}</h4>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed">{item.summary}</p>
                                </motion.div>
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
        <section id="contact" className="relative">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <span className="text-caption">Atendimento Judiciário</span>
                <h2 className="text-5xl md:text-6xl font-bold heading-premium mb-16">Solicitar Perícia</h2>

                <form onSubmit={handleSubmit} className="glass-panel p-10 md:p-20 rounded-[4rem] text-left">
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                        <div className="space-y-3">
                            <label className="text-caption mb-0 ml-4">Nome Completo</label>
                            <input name="name" required className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 text-white focus:bg-white/10 focus:border-emerald-500/40 focus:outline-none transition-all placeholder-slate-600" placeholder="Nome do Requerente" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-caption mb-0 ml-4">E-mail Corporativo</label>
                            <input name="email" type="email" required className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 text-white focus:bg-white/10 focus:border-emerald-500/40 focus:outline-none transition-all placeholder-slate-600" placeholder="email@escritorio.com" />
                        </div>
                    </div>
                    <div className="space-y-3 mb-12">
                        <label className="text-caption mb-0 ml-4">Resumo do Caso / Objeto da Perícia</label>
                        <textarea name="message" rows="5" required className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 text-white focus:bg-white/10 focus:border-emerald-500/40 focus:outline-none transition-all placeholder-slate-600 resize-none" placeholder="Descreva brevemente a necessidade técnica..."></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full glass-card py-6 rounded-3xl text-emerald-500 font-bold tracking-[0.3em] uppercase hover:bg-emerald-500 hover:text-slate-950 transition-all duration-700 bg-emerald-500/5 group"
                    >
                        {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Protocolado com Sucesso' : (
                            <span className="flex items-center justify-center gap-4">
                                Enviar Protocolo <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                            </span>
                        )}
                    </button>
                    {status === 'error' && <p className="text-red-400 mt-4 text-center text-sm font-mono">Falha no servidor. Tente novamente.</p>}
                </form>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-12">
            <div className="text-center md:text-left order-2 md:order-1">
                <h3 className="text-2xl font-bold heading-premium mb-2">ISP FORENSE</h3>
                <p className="text-slate-500 text-xs font-mono tracking-widest uppercase">Digital Proof Mastery</p>
            </div>

            <div className="flex justify-center gap-10 order-1 md:order-2">
                {[Linkedin, Github, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="icon-app w-12 h-12 bg-white/5 border-white/5 hover:border-emerald-500/20">
                        <Icon size={20} className="text-slate-400 hover:text-emerald-500 transition-colors" />
                    </a>
                ))}
            </div>

            <div className="text-center md:text-right order-3">
                <p className="text-slate-600 text-[10px] font-mono tracking-widest uppercase mb-1">
                    © 2026 ISP Forense
                </p>
                <div className="flex justify-center md:justify-end gap-1 items-center opacity-30 grayscale hover:grayscale-0 transition-all">
                    <Shield size={10} />
                    <span className="text-[8px] font-mono uppercase">Secure Lab Environment</span>
                </div>
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="bg-slate-950 min-h-screen text-slate-50">
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
    );
}
