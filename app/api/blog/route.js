import { NextResponse } from 'next/server';

// Acting as Backend Lead: Mocking a secure DB call for forensics articles
export async function GET() {
    try {
        const posts = [
            {
                id: 1,
                title: "Identificação de Deepfakes em Provas Judiciais",
                excerpt: "Como as novas ferramentas de ML estão ajudando peritos a validar evidências em vídeo.",
                date: "2025-12-28",
                slug: "deepfake-forensics"
            },
            {
                id: 2,
                title: "Fraudes Bancárias e o Pix: Rastreamento Digital",
                excerpt: "Análise técnica de fluxos transacionais e recuperação de evidências em dispositivos mobile.",
                date: "2025-12-15",
                slug: "fraudes-bancarias-pix"
            }
        ];

        return NextResponse.json(posts);
    } catch (error) {
        // Sentry.captureException(error);
        return NextResponse.json({ error: "Failed to fetch blog posts" }, { status: 500 });
    }
}
