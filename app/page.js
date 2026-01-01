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
                    <div className="icon-app w-10 h-10 rounded-xl bg-blue-600 shadow-lg shadow-blue-500/20 border-none">
                        <Shield className="text-white w-5 h-5" />
                    </div>
                    <span className="hidden sm:block font-bold text-slate-900">ISP <span className="text-blue-600">FORENSE</span></span>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-semibold tracking-wide uppercase hover:scale-105 transform duration-300">{link.name}</a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden z-[110] relative" onClick={() => setIsOpen(!isOpen)}>
                    <div className="icon-app w-10 h-10 bg-white shadow-sm border-slate-200">
                        {isOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-600" />}
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
                        className="fixed inset-0 bg-white/80 md:hidden flex flex-col items-center justify-center z-[105]"
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
                                    className="text-4xl font-bold tracking-tight text-slate-900 hover:text-blue-600 transform transition-all active:scale-90"
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
        {/* Animated Background Mesh (Light) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none opacity-40 animate-pulse" />

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center z-10 px-6 max-w-4xl"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mx-auto icon-app w-24 h-24 mb-10 bg-white border-slate-200"
            >
                <Shield className="text-blue-600 w-12 h-12" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black mb-6 heading-premium leading-[0.9] text-slate-900">
                ISP FORENSE
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                Justiça e Precisão em Prova Digital.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
                <button className="glass-panel border-blue-100 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-3xl font-bold transition-all flex items-center gap-3 group text-lg shadow-xl shadow-blue-500/10">
                    Solicitar Laudo <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="glass-panel border-slate-200 bg-white/50 px-10 py-5 rounded-3xl font-bold transition-all text-lg hover:border-blue-300">
                    Credenciais
                </button>
            </div>

            {/* iOS-Style Terminal Card */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-12 glass-panel rounded-[2rem] p-6 text-left max-w-2xl mx-auto border-slate-200 shadow-2xl bg-white/80"
            >
                <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="font-mono text-sm text-slate-400 space-y-1">
                    <p><span className="text-blue-600">perito@forense:</span><span className="text-slate-600"> ~ forensics --verify-integrity</span></p>
                    <p className="text-blue-500/80 animate-pulse text-xs uppercase tracking-tighter shadow-sm bg-white p-2 rounded-lg mt-2 inline-block">ISO 27037 Principles v4.3 Active</p>
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
            desc: "Verificação de métricas e autenticidade em mídias sintéticas (Deepfakes).",
            tags: ["ML Metrics", "Synthetic Media"]
        }
    ];

    return (
        <section id="expertise" className="relative bg-white/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20">
                    <span className="text-caption">Especialidades Técnicas</span>
                    <h2 className="text-5xl md:text-6xl font-bold heading-premium mb-6">Expertise Forense</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 group bg-white/70 border-slate-200 hover:border-blue-400 h-full flex flex-col"
                        >
                            <div className="icon-app mb-8 group-hover:rotate-6 bg-blue-50 border-blue-100">
                                <skill.icon className="text-blue-600 w-7 h-7" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{skill.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-8 flex-grow">{skill.desc}</p>
                            <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                                {skill.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{tag}</span>
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
            year: "2024 - Presente",
            role: "Especialista Forense Senior",
            company: "ISP Forense",
            desc: "Liderança em investigações cibernéticas e perícias judiciais complexas.",
            icon: Shield
        },
        {
            year: "2020 - 2024",
            role: "Analista de Segurança Digital",
            company: "Consultoria Privada",
            desc: "Prevenção a fraudes financeiras e recuperação de ativos digitais.",
            icon: Fingerprint
        },
        {
            year: "2015 - 2020",
            role: "Técnico em Hardware Móvel",
            company: "Lab Tech",
            desc: "Recuperação de dados e análise física de dispositivos danificados.",
            icon: Cpu
        }
    ];

    return (
        <section id="resume" className="relative border-b border-slate-200/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-caption">Trajetória Profissional</span>
                    <h2 className="text-5xl md:text-7xl font-bold heading-premium">Curriculum Vitae</h2>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 md:p-12 flex flex-col md:flex-row gap-10 items-start md:items-center bg-white/70 border-slate-200"
                        >
                            <div className="text-2xl font-black text-blue-600 font-mono tracking-tighter md:w-48">
                                {exp.year}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-3xl font-bold mb-2 text-slate-900">{exp.role}</h3>
                                <p className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-4">{exp.company}</p>
                                <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">{exp.desc}</p>
                            </div>
                            <div className="icon-app hidden md:flex bg-slate-50 border-slate-200">
                                <exp.icon size={24} className="text-slate-400 group-hover:text-blue-600" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BlogSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/blog').then(res => res.json()).then(data => setPosts(data));
    }, []);

    return (
        <section id="blog" className="bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="text-caption">Artigos e Insights</span>
                        <h2 className="text-5xl md:text-6xl font-bold heading-premium">Doutrina Técnica</h2>
                    </div>
                    <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                        Ver Todos <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            viewport={{ once: true }}
                            className="glass-card overflow-hidden group border-slate-200 bg-white"
                        >
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                                <div className="p-8 flex items-center justify-center h-full">
                                    <FileText className="w-16 h-16 text-slate-200 group-hover:text-blue-500/20 group-hover:scale-110 transition-all duration-700" />
                                </div>
                            </div>
                            <div className="p-10">
                                <span className="text-blue-600 text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-4 block">{post.tag}</span>
                                <h3 className="text-3xl font-bold mb-4 text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed line-clamp-2">{post.excerpt}</p>
                                <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 group/link">
                                    Ler Protocolo <ChevronRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LegalIntegration = () => {
    const [juris, setJuris] = useState([]);

    useEffect(() => {
        fetch('/api/legal').then(res => res.json()).then(data => setJuris(data));
    }, []);

    return (
        <section className="relative overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
                <div>
                    <span className="text-caption">Suporte Jurídico</span>
                    <h2 className="text-5xl md:text-7xl font-bold heading-premium mb-8 leading-tight">Jurisprudência Técnica</h2>
                    <p className="text-slate-600 text-xl leading-relaxed mb-12">
                        Base de dados integrada para consulta de precedentes sobre validade de provas digitais e dispositivos eletrônicos.
                    </p>
                    <div className="flex gap-4">
                        <div className="icon-app bg-blue-50 border-blue-100"><Award className="text-blue-600" /></div>
                        <div className="icon-app bg-slate-50 border-slate-200"><Globe className="text-slate-400" /></div>
                    </div>
                </div>

                <div className="space-y-6">
                    {juris.map((item, i) => (
                        <motion.div
                            key={i}
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 bg-white border-slate-100 flex gap-6 items-center hover:border-blue-200"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                <BookOpen size={20} className="text-slate-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1">{item.case}</h4>
                                <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">{item.court} | {item.status}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EducationAndLanguages = () => {
    const items = [
        { title: "Certificação em Forense Mobile", org: "UF Forensic Lab", date: "2023" },
        { title: "Post-Graduação em IA e ML", org: "Tech Institute", date: "2021" },
        { title: "Sistemas de Informação", org: "Universidade Federal", date: "2018" }
    ];

    return (
        <section className="bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2">
                        <span className="text-caption">Formação Acadêmica</span>
                        <h2 className="text-5xl font-bold heading-premium mb-12">Educação</h2>
                        <div className="grid gap-6">
                            {items.map((item, i) => (
                                <div key={i} className="glass-card p-6 flex justify-between items-center bg-white border-slate-100">
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                                        <p className="text-blue-600 font-medium">{item.org}</p>
                                    </div>
                                    <span className="font-mono text-slate-400">{item.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-panel p-10 rounded-[3rem] border-slate-200 bg-white/80">
                        <span className="text-caption">Comunicação</span>
                        <h3 className="text-3xl font-bold heading-premium mb-10">Idiomas</h3>
                        <div className="space-y-8">
                            {[
                                { lang: "Português", level: "Nativo" },
                                { lang: "Espanhol", level: "Fluente" },
                                { lang: "Inglês", level: "Avançado" },
                                { lang: "Russo", level: "Técnico" }
                            ].map((l, i) => (
                                <div key={i} className="flex justify-between items-end border-b border-slate-100 pb-2">
                                    <span className="text-lg font-bold text-slate-900">{l.lang}</span>
                                    <span className="text-blue-600 text-xs font-mono uppercase tracking-widest">{l.level}</span>
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
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

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
        <section id="contact" className="relative bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <span className="text-caption">Atendimento Judiciário</span>
                <h2 className="text-5xl md:text-6xl font-bold heading-premium mb-16">Solicitar Perícia</h2>

                <form onSubmit={handleSubmit} className="glass-panel p-10 md:p-20 rounded-[4rem] text-left bg-white/90 border-slate-200 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-10 mb-10">
                        <div className="space-y-3">
                            <label className="text-caption mb-0 ml-4">Nome Completo</label>
                            <input name="name" required className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-5 text-slate-900 focus:bg-white focus:border-blue-500/40 focus:outline-none transition-all placeholder-slate-400" placeholder="Nome do Requerente" />
                        </div>
                        <div className="space-y-3">
                            <label className="text-caption mb-0 ml-4">E-mail Corporativo</label>
                            <input name="email" type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-5 text-slate-900 focus:bg-white focus:border-blue-500/40 focus:outline-none transition-all placeholder-slate-400" placeholder="email@escritorio.com" />
                        </div>
                    </div>
                    <div className="space-y-3 mb-12">
                        <label className="text-caption mb-0 ml-4">Resumo do Caso / Objeto da Perícia</label>
                        <textarea name="message" rows="5" required className="w-full bg-slate-50 border border-slate-200 rounded-3xl px-8 py-5 text-slate-900 focus:bg-white focus:border-blue-500/40 focus:outline-none transition-all placeholder-slate-400 resize-none" placeholder="Descreva brevemente a necessidade técnica..."></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full glass-card py-6 rounded-3xl text-blue-600 font-bold tracking-[0.3em] uppercase hover:bg-blue-600 hover:text-white transition-all duration-700 bg-blue-50/50 border-blue-100 group shadow-lg shadow-blue-500/10"
                    >
                        {status === 'sending' ? 'Enviando...' : status === 'success' ? 'Protocolado com Sucesso' : (
                            <span className="flex items-center justify-center gap-4">
                                Enviar Protocolo <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
                            </span>
                        )}
                    </button>
                    {status === 'error' && <p className="text-red-500 mt-4 text-center text-sm font-mono">Falha no servidor. Tente novamente.</p>}
                </form>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="py-20 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-12">
            <div className="text-center md:text-left order-2 md:order-1">
                <h3 className="text-2xl font-bold heading-premium mb-2">ISP FORENSE</h3>
                <p className="text-slate-400 text-xs font-mono tracking-widest uppercase">Justiça e Precisão Digital</p>
            </div>

            <div className="flex justify-center gap-10 order-1 md:order-2">
                {[Linkedin, Github, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="icon-app w-12 h-12 bg-white border-slate-200 hover:border-blue-500/20 group">
                        <Icon size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </a>
                ))}
            </div>

            <div className="text-center md:text-right order-3">
                <p className="text-slate-400 text-[10px] font-mono tracking-widest uppercase mb-1">
                    © 2026 ISP Forense
                </p>
                <div className="flex justify-center md:justify-end gap-1 items-center opacity-30 grayscale hover:grayscale-0 transition-all text-slate-900">
                    <Shield size={10} />
                    <span className="text-[8px] font-mono uppercase">Ambiente de Perícia Seguro</span>
                </div>
            </div>
        </div>
    </footer>
);

export default function Home() {
    return (
        <main className="bg-[#F8F9FA] min-h-screen text-slate-900">
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
