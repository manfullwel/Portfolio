import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Backend Lead: Integrating Jurisprudence search for Deepfakes/Frauds
        const legalData = [
            {
                caseTitle: "TJ-SP: Acórdão sobre Prova Pericial em Deepfake",
                summary: "Decisão histórica mantendo validade de perícia digital em crimes de calúnia via IA.",
                type: "Jurisprudência"
            },
            {
                caseTitle: "STJ: Recurso em Fraude Eletrônica Bancária",
                summary: "Entendimento sobre a responsabilidade objetiva e o papel do perito assistente.",
                type: "Tribunal Superior"
            }
        ];

        return NextResponse.json(legalData);
    } catch (error) {
        return NextResponse.json({ error: "Legal service unavailable" }, { status: 500 });
    }
}
