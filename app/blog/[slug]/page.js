import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostData, getAllPostIds } from '../../../lib/posts';
import { FaArrowLeft, FaCalendar, FaTag } from 'react-icons/fa';

export async function generateStaticParams() {
    const posts = getAllPostIds();
    return posts.map((post) => ({
        slug: post.params.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = params;
    const postData = getPostData(slug);
    return {
        title: `${postData.title} | Igor Penha Forense`,
        description: postData.description,
        openGraph: {
            title: postData.title,
            description: postData.description,
            url: `https://ispforense.com.br/blog/${slug}`,
            type: 'article',
            publishedTime: postData.date,
            authors: ['Igor Penha'],
            images: [
                {
                    url: postData.image || '/image/profile.png', // Fallback to profile
                    width: 1200,
                    height: 630,
                    alt: postData.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: postData.title,
            description: postData.description,
            images: [postData.image || '/image/profile.png'],
        },
    }
}

export default async function Post({ params }) {
    const { slug } = params;
    const postData = getPostData(slug);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
            <nav className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/blog" className="text-blue-900 font-medium text-sm flex items-center gap-2 hover:underline">
                        <FaArrowLeft /> Voltar para Artigos
                    </Link>
                    <div className="h-8 w-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-serif font-bold">
                        IP
                    </div>
                </div>
            </nav>

            <article className="max-w-3xl mx-auto px-6 py-12">
                <header className="mb-10 text-center">
                    <div className="flex justify-center gap-2 mb-4">
                        {postData.tags && postData.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                        {postData.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-slate-500 text-sm border-y border-slate-100 py-4">
                        <div className="flex items-center gap-2">
                            <FaCalendar /> {postData.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Por <strong>Igor Penha</strong></span>
                        </div>
                    </div>
                </header>

                <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-900 prose-a:text-blue-700 hover:prose-a:text-blue-900 prose-img:rounded-xl prose-img:shadow-lg">
                    <MDXRemote source={postData.content} />
                </div>

                <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
                    <h3 className="font-serif text-xl font-bold text-blue-900 mb-2">Precisa de um Parecer Técnico sobre este tema?</h3>
                    <p className="text-slate-600 mb-6">
                        Entre em contato para discutir a viabilidade de perícia em seu processo.
                    </p>
                    <Link href="/#contact" className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                        Falar com o Perito
                    </Link>
                </div>
            </article>
        </div>
    );
}
