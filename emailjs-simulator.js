// FERRAMENTA DE SIMULAÇÃO FORENSE - EMAILJS
// Este script simula um envio legítimo via Browser para testar a API.
// Uso: node emailjs-simulator.js

// Usando fetch nativo do Node.js (v18+)
const fs = require('fs');

// CREDENCIAIS
const CONFIG = {
    SERVICE_ID: 'service_vgt1kg6',
    TEMPLATE_ID: 'template_5psha1l',
    PUBLIC_KEY: 'AJet-BX2qqmN8Nc-f',
};

async function runBrowserSimulation() {
    const report = {
        timestamp: new Date().toISOString(),
        test_type: "Forensic Browser Simulation (Header Spoofing)",
        simulated_headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Origin": "http://localhost:3000",
            "Referer": "http://localhost:3000/contact"
        },
        result: {
            success: false,
            http_status: null,
            api_response: null
        }
    };

    console.log("--- 🕵️ INICIANDO SIMULADOR FORENSE DE BROWSER (SPOOFING) ---");

    // Gerar Dados Fictícios Dinâmicos
    const randomID = Math.floor(Math.random() * 9999);
    const time = new Date().toLocaleTimeString();

    // Payload padrão (sem accessToken/Private Key, pois browser não usa isso)
    const data = {
        service_id: CONFIG.SERVICE_ID,
        template_id: CONFIG.TEMPLATE_ID,
        user_id: CONFIG.PUBLIC_KEY,
        template_params: {
            name: `Dr. Perito Teste #${randomID}`,       // Corresponde a {{name}} no template
            email: "igorofyeshua@gmail.com",           // Corresponde a {{email}} no template
            phones: "+55 61 98888-7777",               // Telefone
            message: `[SIMULAÇÃO BROWSER ${time}] Relatório de teste forense automático ID: ${randomID}. Se este texto aparece, as variáveis estão mapeadas corretamente.`
        }
    };

    console.log(`📝 Gerando Payload: ${data.template_params.user_name}`);

    try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                // INJETANDO HEADERS DE NAVEGADOR (Bypass de restrição)
                'User-Agent': report.simulated_headers["User-Agent"],
                'Origin': report.simulated_headers["Origin"],
                'Referer': report.simulated_headers["Referer"]
            }
        });

        report.result.http_status = response.status;

        if (response.ok) {
            report.result.success = true;
            report.result.api_response = "OK - Email aceito (Bypass com sucesso)";
            console.log(`✅ SUCESSO! Email enviado com ID #${randomID}.`);
            console.log("📨 Verifique sua caixa de entrada em igorofyeshua@gmail.com.");
        } else {
            const errorText = await response.text();
            report.result.success = false;
            report.result.api_response = errorText;
            console.error("❌ REQUEST BLOQUEADO MESMO COM SIMULAÇÃO.");
            console.error(`Status: ${response.status} - ${errorText}`);
        }

    } catch (error) {
        report.result.success = false;
        report.result.api_response = error.message;
        console.error("❌ ERRO DE CONEXÃO:", error.message);
    }

    // Salvar Relatório
    fs.writeFileSync('report-sim.json', JSON.stringify(report, null, 4));
    console.log("📄 Relatório técnico salvo em report-sim.json");
}

runBrowserSimulation();
