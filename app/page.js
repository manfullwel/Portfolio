'use client';

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaGithub, FaLock, FaShieldAlt, FaBalanceScale, FaMicrochip, FaChartLine, FaCheckCircle, FaServer } from 'react-icons/fa';

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">

            {/* --- HERO SECTION: Autoridade Imediata --- */}
            <section className="relative pt-20 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center">

                {/* Foto de Perfil com Badge de Status */}
                <div className="relative inline-block mb-6">
                    <div className="w-48 h-48 mx-auto rounded-full p-1 bg-gradient-to-tr from-blue-900 to-slate-400 shadow-2xl">
                        <Image
                            src="/image/profile.png"
                            alt="Igor de Jesus Soares Penha - Perito Judicial"
                            width={192}
                            height={192}
                            priority
                            className="w-full h-full object-cover rounded-full border-4 border-slate-50 relative z-10"
                        />
                    </div>
                    {/* Badge de Status Online/Ativo */}
                    <div className="absolute bottom-4 right-4 z-20 bg-green-500 w-5 h-5 rounded-full border-4 border-white shadow-sm" title="Disponível para Nomeação"></div>
                </div>

                {/* Nome e Títulos */}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-2">
                    Igor de Jesus Soares Penha
                </h1>
                <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6">
                    Perito Judicial em Computação Forense | Auditoria de IA & Fraudes
                </h2>

                {/* --- BADGES DE AUTORIDADE (SENAI LGPD) --- */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    <span className="px-4 py-1 bg-blue-100 text-blue-900 rounded-full text-sm font-semibold border border-blue-200 flex items-center gap-2">
                        <FaShieldAlt /> Certificação Proteção de Dados (LGPD) - SENAI
                    </span>
                    <span className="px-4 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300 flex items-center gap-2">
                        <FaBalanceScale /> ISO 27037 Compliance
                    </span>
                    <span className="px-4 py-1 bg-slate-200 text-slate-800 rounded-full text-sm font-semibold border border-slate-300 flex items-center gap-2">
                        <FaMicrochip /> Hardware Forensics (10+ Anos)
                    </span>
                </div>

                {/* CTA Principal */}
                <div className="flex justify-center gap-4">
                    <a href="#contact" className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-all flex items-center gap-2">
                        <FaWhatsapp /> Solicitar Parecer Técnico
                    </a>
                    <a href="#cases" className="bg-white hover:bg-slate-100 text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-medium transition-all">
                        Ver Metodologia
                    </a>
                </div>
            </section>

            {/* --- SEÇÃO 2: PROVA SOCIAL & MÉTRICAS (Cases) --- */}
            <section id="cases" className="py-16 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-3xl font-serif text-blue-900 mb-2">Estudos de Caso & Laboratório</h3>
                    <p className="text-slate-600 mb-10 max-w-2xl">
                        Aplicações práticas da metodologia forense com métricas de impacto verificadas.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Case 1: Deepfake (IA) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10 text-9xl text-blue-900"><FaMicrochip /></div>
                            <div className="relative z-10">
                                <div className="text-blue-900 text-3xl mb-4"><FaMicrochip /></div>
                                <h4 className="font-bold text-lg mb-2 text-slate-900">Validação de Mídia (Deepfakes)</h4>
                                <p className="text-sm text-slate-600 mb-4 h-20">
                                    Uso de redes neurais convolucionais para detectar manipulação espectral em áudio utilizado como prova trabalhista.
                                </p>

                                {/* Métricas Visuais */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                                        <span>Precisão do Modelo</span>
                                        <span className="text-blue-600">99.4%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                                        <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '99.4%' }}></div>
                                    </div>
                                </div>
                                <span className="text-xs font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block">Laudo Conclusivo</span>
                            </div>
                        </div>

                        {/* Case 2: Fraude Bancária (Expertise Financeira) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10 text-9xl text-green-900"><FaShieldAlt /></div>
                            <div className="relative z-10">
                                <div className="text-blue-900 text-3xl mb-4"><FaShieldAlt /></div>
                                <h4 className="font-bold text-lg mb-2 text-slate-900">Rastreamento de Fraude Financeira</h4>
                                <p className="text-sm text-slate-600 mb-4 h-20">
                                    Auditoria de boletos adulterados e engenharia social. Identificação da origem do ataque via análise de logs bancários.
                                </p>

                                {/* Métricas Visuais */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                                        <span>Ativos Recuperados</span>
                                        <span className="text-green-600">Status: Sucesso</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                                        <div className="bg-green-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                                <span className="text-xs font-mono bg-green-100 text-green-800 px-2 py-1 rounded inline-block">Investigação Financeira</span>
                            </div>
                        </div>

                        {/* Case 3: SQL Injection (Blue Team) */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-10 text-9xl text-purple-900"><FaLock /></div>
                            <div className="relative z-10">
                                <div className="text-blue-900 text-3xl mb-4"><FaLock /></div>
                                <h4 className="font-bold text-lg mb-2 text-slate-900">Auditoria Blue Team (SQLi)</h4>
                                <p className="text-sm text-slate-600 mb-4 h-20">
                                    Hardening de banco de dados corporativo vulnerável a injeção SQL. Implementação de queries parametrizadas.
                                </p>

                                {/* Métricas Visuais */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                                        <span>Mitigação de Risco</span>
                                        <span className="text-purple-600">98%</span>
                                    </div>
                                    <div className="w-full bg-slate-200 rounded-full h-1.5">
                                        <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '98%' }}></div>
                                    </div>
                                </div>
                                <span className="text-xs font-mono bg-purple-100 text-purple-800 px-2 py-1 rounded inline-block">Status: Vulnerabilidade Corrigida</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 3: NOTAS TÉCNICAS (Thought Leadership) --- */}
            <section className="py-16 px-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h3 className="text-3xl font-serif text-blue-900">Artigos Técnicos Recentes</h3>
                        <p className="text-slate-600 text-sm mt-1">Thought Leadership em Cibersegurança Forense</p>
                    </div>
                    <Link href="https://github.com/manfullwel" target="_blank" className="text-blue-900 font-semibold hover:underline text-sm hidden md:block">
                        Ver GitHub Completo →
                    </Link>
                </div>

                <div className="space-y-4">
                    {/* Artigo 1 */}
                    <div className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="md:w-32 text-xs font-mono text-slate-400 mt-1 uppercase tracking-widest">Publicação 2025</div>
                        <div>
                            <h5 className="font-bold text-slate-800 group-hover:text-blue-900 flex items-center gap-2">
                                O Impacto dos Deepfakes em Provas Trabalhistas <FaCheckCircle className="text-blue-500 text-xs" />
                            </h5>
                            <p className="text-sm text-slate-600 mt-1">
                                Análise jurídica e técnica sobre a admissibilidade de áudios gerados por IA como prova em tribunais brasileiros.
                            </p>
                        </div>
                    </div>

                    {/* Artigo 2 */}
                    <div className="group flex flex-col md:flex-row gap-4 p-4 border border-slate-200 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                        <div className="md:w-32 text-xs font-mono text-slate-400 mt-1 uppercase tracking-widest">Tech Paper</div>
                        <div>
                            <h5 className="font-bold text-slate-800 group-hover:text-blue-900 flex items-center gap-2">
                                Cadeia de Custódia em Nuvens AWS: Desafios da ISO 27037 <FaServer className="text-slate-400 text-xs" />
                            </h5>
                            <p className="text-sm text-slate-600 mt-1">
                                Metodologia para preservação de logs voláteis em ambientes serverless e contêineres Docker auditados.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SEÇÃO 4: CONTATO SEGURO (Netlify Forms) --- */}
            <section id="contact" className="py-20 bg-slate-900 text-white">
                <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-3xl font-serif font-bold mb-4">Solicite uma Análise Preliminar</h3>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Utilize o formulário seguro para descrever sua demanda. Nossos peritos analisam a viabilidade técnica e retornam em até 4 horas úteis.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <FaWhatsapp className="text-green-500 text-xl" />
                                <span>Atendimento via WhatsApp Disponível</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <FaShieldAlt className="text-blue-400 text-xl" />
                                <span>Sigilo Absoluto (NDA)</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-2xl">
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            className="space-y-4"
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nome Completo</label>
                                <input type="text" name="name" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all" placeholder="Dr. Nome Sobrenome" required />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">OAB / Instituição</label>
                                <input type="text" name="institution" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all" placeholder="Ex: OAB/SP 00.000 ou Empresa X" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">WhatsApp / Email</label>
                                <input type="text" name="contact_info" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all" placeholder="Para retorno rápido" required />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Descrição do Caso</label>
                                <textarea name="message" rows="3" className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-900 focus:ring-2 focus:ring-blue-900 outline-none transition-all" placeholder="Breve resumo da demanda pericial..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                ENVIAR SOLICITAÇÃO SEGURA
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* --- RODAPÉ DE CONFIANÇA --- */}
            <footer className="bg-slate-950 text-slate-500 py-12 px-6 border-t border-slate-900">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">

                    {/* Coluna 1: Internacional */}
                    <div className="col-span-1">
                        <h5 className="text-white font-serif mb-4">Capacidade Global</h5>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2"><span className="text-xl">🇺🇸</span> Inglês Técnico (Arizona State)</li>
                            <li className="flex items-center gap-2"><span className="text-xl">🇷🇺</span> Russo Avançado (Leste Europeu)</li>
                            <li className="flex items-center gap-2"><span className="text-xl">🇪🇸</span> Espanhol Fluente (LATAM)</li>
                        </ul>
                    </div>

                    {/* Coluna 2: Compliance */}
                    <div className="col-span-2 md:text-center">
                        <h5 className="text-white font-serif mb-4">Segurança & Privacidade</h5>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="border border-slate-800 bg-slate-900 px-3 py-1 rounded-full text-xs hover:border-blue-900 transition-colors">LGPD Compliant (SENAI)</span>
                            <span className="border border-slate-800 bg-slate-900 px-3 py-1 rounded-full text-xs hover:border-blue-900 transition-colors">ISO 27037 Cadeia de Custódia</span>
                            <span className="border border-slate-800 bg-slate-900 px-3 py-1 rounded-full text-xs hover:border-blue-900 transition-colors">Site Estático Seguro</span>
                        </div>
                        <p className="mt-8 text-xs text-slate-600">
                            © 2026 Igor de Jesus Soares Penha. Todos os direitos reservados. Perito Judicial Nomeado.
                        </p>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div className="col-span-1 text-right">
                        <h5 className="text-white font-serif mb-4">Localização</h5>
                        <p>Salvador/BA</p>
                        <p>Atuação em Todo Território Nacional</p>
                        <p className="mt-2 text-blue-500 font-mono text-xs">peritoigor@ispforense.com.br</p>
                    </div>
                </div>
            </footer>

            {/* --- BOTÃO FLUTUANTE WHATSAPP (Conversão) --- */}
            <a
                href="https://wa.me/5561996565437?text=Olá,%20gostaria%20de%20solicitar%20um%20parecer%20técnico."
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition-transform hover:scale-110 flex items-center justify-center w-16 h-16"
                aria-label="Fale conosco no WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
            </a>

        </main>
    );
}
