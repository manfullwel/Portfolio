// Usando fetch nativo do Node.js (v18+)
const { performance } = require('perf_hooks');

// CREDENCIAIS
const CONFIG = {
    SERVICE_ID: 'service_vgt1kg6',
    TEMPLATE_ID: 'template_5psha1l',
    PUBLIC_KEY: 'AJet-BX2qqmN8Nc-f',
    PRIVATE_KEY: 'dqv6PBMp9vtBml7HZKcWR'
};

async function runDiagnostics() {
    const report = {
        timestamp: new Date().toISOString(),
        environment: "Node.js Terminal",
        test_type: "Complex Debugging & Latency Analysis",
        config_check: {
            service_id_valid: CONFIG.SERVICE_ID.startsWith('service_'),
            template_id_valid: CONFIG.TEMPLATE_ID.startsWith('template_'),
            public_key_present: !!CONFIG.PUBLIC_KEY,
            private_key_present: !!CONFIG.PRIVATE_KEY
        },
        metrics: {
            start_time: null,
            end_time: null,
            latency_ms: 0
        },
        result: {
            success: false,
            http_status: null,
            api_response: null
        },
        diagnostics: {
            points_of_failure: []
        }
    };

    console.log("--- STARTING DIAGNOSTICS ---"); // Log textual para separar do JSON final

    const data = {
        service_id: CONFIG.SERVICE_ID,
        template_id: CONFIG.TEMPLATE_ID,
        user_id: CONFIG.PUBLIC_KEY,
        accessToken: CONFIG.PRIVATE_KEY,
        template_params: {
            user_name: "Diagnostic Bot",
            user_email: "igorofyeshua@gmail.com",
            user_phone: "+55 61 99999-9999",
            message: `[DIAGNOSTICO AVANÇADO] Teste de latência e integridade realizado em ${new Date().toLocaleString()}.`
        }
    };

    try {
        report.metrics.start_time = performance.now();

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });

        report.metrics.end_time = performance.now();
        report.metrics.latency_ms = (report.metrics.end_time - report.metrics.start_time).toFixed(2);
        report.result.http_status = response.status;

        if (response.ok) {
            report.result.success = true;
            report.result.api_response = "OK";
        } else {
            const errorText = await response.text();
            report.result.success = false;
            report.result.api_response = errorText;
            report.diagnostics.points_of_failure.push({
                stage: "API_RESPONSE",
                error: errorText,
                possible_cause: response.status === 400 ? "Dados inválidos ou Template ID incorreto" : "Erro de servidor ou autenticação"
            });
        }

    } catch (error) {
        report.metrics.end_time = performance.now();
        report.result.success = false;
        report.diagnostics.points_of_failure.push({
            stage: "NETWORK_REQUEST",
            error: error.message,
            possible_cause: "Falha de DNS, Bloqueio de Firewall ou Sem Conexão"
        });
    }

    // Análise de Latência
    if (report.metrics.latency_ms > 2000) {
        report.diagnostics.points_of_failure.push({
            stage: "PERFORMANCE",
            warning: "Alta Latência Detectada (>2000ms)",
            possible_cause: "Conexão lenta ou gargalo na API do EmailJS"
        });
    }

    // Análise de Configuração
    if (!report.config_check.service_id_valid) {
        report.diagnostics.points_of_failure.push({
            stage: "CONFIG",
            error: "Service ID parece inválido (não começa com 'service_')",
            possible_cause: "Erro de digitação"
        });
    }

    // SAÍDA FINAL SOMENTE JSON (ESCREVER EM ARQUIVO)
    const fs = require('fs');
    try {
        fs.writeFileSync('report.json', JSON.stringify(report, null, 4));
        console.log("Report saved to report.json");
    } catch (err) {
        console.error("Error writing report:", err);
    }
}

runDiagnostics();
