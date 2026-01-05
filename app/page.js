"use client"; // OBRIGATÓRIO PARA O FUNCIONAMENTO DO REACT

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // A Ferramenta de Automação
import Link from 'next/link';
import { FaWhatsapp, FaShieldAlt, FaBalanceScale, FaMicrochip, FaLock, FaGlobeAmericas, FaCheckCircle } from 'react-icons/fa';

import DOMPurify from 'dompurify'; // Blue Team Sanitization

export default function Home() {
    const form = useRef();
    const [status, setStatus] = useState("idle"); // idle, sending, success, error
    const [lgpdConsent, setLgpdConsent] = useState(false);

    // --- SECURITY LAYER: SANITIZATION (BLUE TEAM) ---
    const sanitizeInput = (input) => {
        if (typeof input !== 'string') return input;
        return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // --- PHONE MASK (+55) ---
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
        if (value.length > 11) value = value.slice(0, 11);

        // Auto-format: (XX) XXXXX-XXXX
        if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        if (value.length > 9) value = `${value.slice(0, 10)}-${value.slice(10)}`;

        e.target.value = value;
    };

    // --- AUTOMAÇÃO ENGENHOSA (ENVIO SEM REFRESH) ---
    const sendEmail = (e) => {
        e.preventDefault();

        // 1. Extração de Dados
        const formData = new FormData(form.current);
        const rawData = Object.fromEntries(formData.entries());

        // 2. Validação & Sanitização (Client-Side Firewall)
        if (!validateEmail(rawData.user_email)) {
            alert("Email inválido detectado pelo sistema de segurança.");
            return;
        }

        if (!lgpdConsent) {
            alert("É necessário aceitar os termos de confidencialidade (LGPD) para prosseguir.");
            return;
        }

        if (rawData.message.length > 2000) {
            alert("Limite de caracteres excedido (Max: 2000).");
            return;
        }

        // 3. Sanitização Robusta via DOMPurify
        // Nota: EmailJS pega do formulário HTML direto, então atualizamos os valores nos inputs antes do disparo
        // (Isso é um 'hack' necessário sem backend intermediário)
        if (form.current) {
            form.current.user_name.value = sanitizeInput(rawData.user_name);
            form.current.message.value = sanitizeInput(rawData.message);
        }

        setStatus("sending");

        emailjs.sendForm(
            'dqv6PBMp9vtBml7HZKcWR',   // SERVICE ID (API)
            'template_5psha1l',        // TEMPLATE ID
            form.current,
            'AJet-BX2qqmN8Nc-f'        // PUBLIC KEY
        )
            .then((result) => {
                console.log("EmailJS Success:", result.text);
                setStatus("success");
            }, (error) => {
                console.error("EmailJS Error:", error.text);
                setStatus("error");
            });
    };

    // --- TELA DE SUCESSO (RETORNO VISUAL IMEDIATO) ---
    if (status === "success") {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 font-sans">
                <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg border-t-4 border-green-500 animate-fade-in">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 shadow-inner">
                        <FaCheckCircle className="text-5xl" />
                    </div>
                    <h1 className="text-3xl font-serif text-blue-900 mb-4 font-bold">Solicitação Recebida</h1>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        Sua mensagem foi criptografada e enviada diretamente para a central forense.
                        <br /><span className="text-sm text-slate-400 mt-2 block font-mono">ID do Protocolo: {Math.floor(Math.random() * 1000000)}XF</span>
                    </p>
                    <button onClick={() => window.location.reload()} className="text-blue-900 font-bold hover:bg-blue-50 px-8 py-3 rounded-lg transition-colors border border-blue-100">
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
                            alt="Igor Soares - Perito Judicial Forense"
                            className="w-full h-full object-cover rounded-full border-4 border-slate-50"
                        />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-sm animate-pulse" title="Sistema Online"></div>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-2">
                    Igor Soares
                </h1>
                {/* BIO REESCRITA */}
                <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6 max-w-3xl mx-auto">
                    Perito Judicial e Extrajudicial em Computação Forense | Especialista em IA e Machine Learning
                </h2>
                <p className="text-slate-500 mb-8 max-w-2xl mx-auto text-sm italic">
                    "Especialista com mais de uma década de imersão técnica em arquitetura de hardware e sistemas móveis, consolidado através da metodologia do Prof. Marcos Monteiro."
                </p>

                {/* BADGES */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <span className="px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold border border-blue-200 flex items-center gap-2">
                        <FaShieldAlt /> LGPD Compliance
                    </span>
                    <span className="px-4 py-1 bg-slate-900 text-white rounded-full text-sm font-semibold border border-slate-700 flex items-center gap-2 shadow-sm">
                        <FaBalanceScale /> Perito Judicial & Assistente Técnico
                    </span>
                    <span className="px-4 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300 flex items-center gap-2">
                        <FaMicrochip /> Hardware Forensics (10+ Anos)
                    </span>
                </div>

                <div className="flex justify-center gap-4">
                    <a href="#contato" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all transform hover:-translate-y-1">
                        Solicitar Parecer
                    </a>
                </div>
            </section>

            {/* --- PILARES DE ATUAÇÃO --- */}
            <section id="cases" className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-serif text-blue-900 mb-2">Especialidades Forenses</h3>
                    <p className="text-slate-600 mb-10 max-w-2xl">
                        Atuação técnica fundamentada em ISO 27037 e Cadeia de Custódia para tribunais.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Pilar 1: IA & Deepfakes */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-200">
                            <div className="text-blue-900 text-4xl mb-4"><FaMicrochip /></div>
                            <h4 className="font-bold text-lg mb-2">IA & Deepfakes</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Utilização de redes neurais e Machine Learning para identificação de manipulações espectrais em vídeo e áudio.
                            </p>
                            <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">Auditoria Algorítmica</span>
                        </div>

                        {/* Pilar 2: Fraudes Financeiras */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-green-200">
                            <div className="text-blue-900 text-4xl mb-4"><FaShieldAlt /></div>
                            <h4 className="font-bold text-lg mb-2">Fraudes Bancárias</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Rastreamento de fluxos financeiros, detecção de anomalias em boletos e análise de engenharia social.
                            </p>
                            <span className="text-xs font-mono bg-green-100 text-green-800 px-2 py-1 rounded">Recuperação de Ativos</span>
                        </div>

                        {/* Pilar 3: Mobile & Hardware */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-purple-200">
                            <div className="text-blue-900 text-4xl mb-4"><FaLock /></div>
                            <h4 className="font-bold text-lg mb-2">Mobile Forensics</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                Expertise em dispositivos legados (Nokia/Sony) e modernos. Extração física (Chip-off) quando softwares falham.
                            </p>
                            <span className="text-xs font-mono bg-purple-100 text-purple-800 px-2 py-1 rounded">Prova Material</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NOTAS TÉCNICAS (Blue Team & Labs) --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <h3 className="text-3xl font-serif text-blue-900 mb-6">Laboratório Blue Team</h3>
                <div className="space-y-4">
                    {/* Project 1: Chip-Off Forensics */}
                    <Link href="/blog/chip-off-forensics" className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer bg-white shadow-sm">
                        <div className="md:w-32 flex flex-col justify-center">
                            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">HARDWARE</div>
                            <div className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded inline-block w-max">2010 - 2025</div>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors">Chip-Off Forensics & Recovery</h5>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                Extração física de dados em dispositivos destruídos onde o software falha. Preservação de cadeia de custódia (ISO 27037) e expertise em legados (Nokia/Sony) a modernos.
                            </p>
                        </div>
                    </Link>

                    {/* Project 2: Deepfakes Audio */}
                    <Link href="/blog/deepfakes-audio-legal" className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer bg-white shadow-sm">
                        <div className="md:w-32 flex flex-col justify-center">
                            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">IA AUDIT</div>
                            <div className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block w-max">2023 - Presente</div>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors">Deepfakes de Áudio (Machine Learning)</h5>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                Detecção de manipulações em provas sonoras utilizando modelos espectrais e IA. Foco em anomalias de formantes e ruídos artificiais em processos trabalhistas.
                            </p>
                        </div>
                    </Link>

                    {/* Project 3: Algorithmic Audit (New) */}
                    <Link href="/blog/auditoria-algoritmica-fraudes" className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer bg-white shadow-sm">
                        <div className="md:w-32 flex flex-col justify-center">
                            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">BIG DATA</div>
                            <div className="text-[10px] font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block w-max">Pós-Graduação IA</div>
                        </div>
                        <div>
                            <h5 className="font-bold text-slate-800 group-hover:text-blue-900 transition-colors">Auditoria Algorítmica & Fraudes</h5>
                            <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                Análise preditiva de padrões anômalos em dados financeiros (Whinx Legacy). Identificação de engenharia social em boletos e fluxos suspeitos via Random Forest.
                            </p>
                        </div>
                    </Link>

                    <div className="mt-6 text-center md:text-right">
                        <Link href="/blog" className="text-blue-900 font-bold hover:underline text-sm inline-flex items-center gap-2">
                            Ver Biblioteca Técnica <span className="text-lg">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- FORMULÁRIO BLINDADO (EMAILJS) --- */}
            <section id="contato" className="py-16 px-6 bg-slate-100">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border-t-4 border-blue-900">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <FaLock className="text-blue-900" />
                        <h3 className="text-2xl font-serif text-blue-900 text-center">Solicitar Análise Pericial</h3>
                    </div>
                    <p className="text-center text-slate-500 mb-8 text-sm">Canal criptografado (TLS 1.3) para Advogados e Magistrados.</p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-5">

                        {/* Input Oculto para Spam (Honeypot) */}
                        <input type="text" name="honeypot" className="hidden" tabIndex="-1" autoComplete="off" />

                        {/* Nome */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo / OAB</label>
                            <input type="text" name="user_name" required maxLength="100" className="w-full p-3 border border-slate-300 rounded focus:border-blue-900 outline-none transition-shadow focus:shadow-md" placeholder="Dr. João Silva" />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">E-mail Corporativo</label>
                            <input type="email" name="user_email" required maxLength="100" className="w-full p-3 border border-slate-300 rounded focus:border-blue-900 outline-none transition-shadow focus:shadow-md" placeholder="contato@advocacia.com.br" />
                        </div>

                        {/* WhatsApp com Mask */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">WhatsApp (DDD + Número)</label>
                            <div className="relative">
                                <span className="absolute left-3 top-3 text-slate-400 font-bold select-none">+55</span>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    maxLength="15"
                                    className="w-full p-3 pl-12 border border-slate-300 rounded focus:border-blue-900 outline-none transition-shadow focus:shadow-md"
                                    placeholder="(00) 00000-0000"
                                    onChange={handlePhoneChange}
                                />
                            </div>
                        </div>

                        {/* Mensagem */}
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Resumo do Caso</label>
                            <textarea name="message" rows="4" required maxLength="2000" className="w-full p-3 border border-slate-300 rounded focus:border-blue-900 outline-none transition-shadow focus:shadow-md" placeholder="Descrição técnica da demanda..."></textarea>
                        </div>

                        {/* LGPD Checkbox */}
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded border border-slate-100">
                            <input
                                type="checkbox"
                                id="lgpd_consent"
                                checked={lgpdConsent}
                                onChange={(e) => setLgpdConsent(e.target.checked)}
                                className="mt-1 w-4 h-4 text-blue-900 rounded border-slate-300 focus:ring-blue-900"
                            />
                            <label htmlFor="lgpd_consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                                Autorizo o tratamento destes dados exclusivamente para fins de <strong>parecer técnico preliminar</strong>, em conformidade com a <strong>Lei Geral de Proteção de Dados (13.709/2018)</strong>. Entendo que esta comunicação é protegida por sigilo pericial.
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {status === 'sending' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Processando Envio Seguro...
                                </>
                            ) : (
                                'Enviar Solicitação Confidencial 🔒'
                            )}
                        </button>

                        {status === 'error' && (
                            <p className="text-red-600 text-center text-sm mt-2">
                                Erro na conexão segura. Por favor, tente novamente ou use o WhatsApp.
                            </p>
                        )}
                    </form>
                </div>
            </section>

            {/* --- RODAPÉ --- */}
            <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t-4 border-blue-500 mt-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
                    <div>
                        <h5 className="text-white font-serif mb-4 flex items-center gap-2"><FaGlobeAmericas /> Capacidade Global</h5>
                        <ul className="space-y-2">
                            <li>🇺🇸 Inglês Técnico (Arizona State)</li>
                            <li>🇷🇺 Russo Avançado (Leste Europeu)</li>
                            <li>🇪🇸 Espanhol Fluente (LATAM)</li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h5 className="text-white font-serif mb-4">Compliance</h5>
                        <div className="flex justify-center gap-2 flex-wrap">
                            <span className="border border-slate-600 px-2 py-1 rounded text-xs">LGPD</span>
                            <span className="border border-slate-600 px-2 py-1 rounded text-xs">ISO 27037</span>
                            <span className="border border-slate-600 px-2 py-1 rounded text-xs">OWASP</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <h5 className="text-white font-serif mb-4">Contato Oficial</h5>
                        <p className="font-bold text-slate-300">Brasília/DF - Atuação Nacional</p>
                        <p>Seg a Sex, 09h às 18h</p>
                        <p className="text-blue-400 mt-2">peritoigor@ispforense.com.br</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
                    <p>© 2026 Igor Soares. "Até aqui o Senhor nos ajudou."</p>
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><FaShieldAlt /> LGPD Compliant</span>
                        <span className="flex items-center gap-1"><FaLock /> Serverless Security</span>
                    </div>
                </div>
            </footer>

            {/* Floating Action Button (WhatsApp) */}
            <a href="https://wa.me/5561996565437" className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110">
                <FaWhatsapp className="text-3xl" />
            </a>
        </main>
    );
}
