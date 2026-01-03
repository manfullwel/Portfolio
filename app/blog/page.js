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

            <main className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">Notas Técnicas</h1>
                <p className="text-slate-600 text-lg mb-12">
                    Análises aprofundadas sobre tecnologia, direito e segurança da informação.
                </p>

                <div className="grid gap-8">
                    {allPostsData.map(({ id, date, title, description, tags }) => (
                        <Link href={`/blog/${id}`} key={id} className="group">
                            <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                    <div className="flex gap-2">
                                        {tags && tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-800 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <time className="text-xs font-mono text-slate-400">{date}</time>
                                </div>

                                <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-900 transition-colors mb-2">
                                    {title}
                                </h2>
                                <p className="text-slate-600 leading-relaxed">
                                    {description}
                                </p>
                                <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:underline">
                                    Ler Artigo Completo →
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>

            <footer className="bg-slate-900 text-slate-500 py-12 px-6 border-t-4 border-blue-500 text-center text-sm">
                <p>© 2026 Igor de Jesus Soares Penha. Conteúdo Protegido.</p>
            </footer>
        </div>
    );
}
