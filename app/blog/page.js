import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';
import { FaArrowLeft } from 'react-icons/fa';

export const metadata = {
    title: 'Blog Técnico Forense | Igor Penha',
    description: 'Artigos sobre Computação Forense, Deepfakes, Fraudes Bancárias e Hardware Hacking.',
};

export default function BlogIndex() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-blue-900 font-serif font-bold text-xl flex items-center gap-2">
                        <FaArrowLeft className="text-sm" /> Voltar ao Portfólio
                    </Link>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                        Hub de Conhecimento Forense
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">Blog & Artigos</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mt-2 mb-6">Minds of Forensics</h1>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Explorando a intersecção entre Direito, Tecnologia e a busca pela Verdade Material.
                        Estudos de caso, análises de deepfakes e tutoriais de compliance.
                    </p>
                </div>

                {/* Busca (Visual Only por enquanto) */}
                <div className="max-w-xl mx-auto mb-16 relative">
                    <input
                        type="text"
                        placeholder="Buscar por tema (ex: Deepfake, Fraude...)"
                        className="w-full p-4 pl-12 rounded-full border border-slate-200 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    />
                    <svg className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allPostsData.map(({ id, date, title, description, tags, image }) => (
                        <Link href={`/blog/${id}`} key={id} className="group flex flex-col h-full">
                            <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex-1 flex flex-col">
                                <div className="h-48 bg-slate-100 relative overflow-hidden">
                                    {/* Placeholder se não tiver imagem, mas ideal ter */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-slate-800 opacity-90 group-hover:scale-105 transition-transform duration-700"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <div className="flex gap-2 flex-wrap mb-2">
                                            {tags && tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <time className="text-xs font-mono text-slate-400 mb-3 block">{date}</time>
                                    <h2 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-3 line-clamp-2">
                                        {title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                                        {description}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-blue-600 font-bold text-sm group-hover:gap-2 transition-all">
                                        Ler Análise <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">→</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>

            <footer className="bg-slate-900 text-slate-500 py-12 px-6 border-t-4 border-blue-500 text-center text-sm">
                <p>© 2026 Igor Soares. Conteúdo Protegido.</p>
            </footer>
        </div>
    );
}
