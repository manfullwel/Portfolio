import { getAllPostIds } from '../lib/posts';

export default async function sitemap() {
    const posts = getAllPostIds();
    const baseUrl = 'https://ispforense.com.br';

    const blogPosts = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.params.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        ...blogPosts,
    ];
}
