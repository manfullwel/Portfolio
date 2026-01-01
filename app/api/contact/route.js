import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Backend Lead: Validate and send via SendGrid (Mocked for now)
        console.log("Forensic Contact Received:", { name, email, message });

        return NextResponse.json({ success: true, message: "Mensagem enviada com sucesso ao perito." });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao processar contato" }, { status: 500 });
    }
}
