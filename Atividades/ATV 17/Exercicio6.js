let http = require('http');

let server = http.createServer(function(req, res){
    res.end(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FATEC Sorocaba</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
            }
            
            body::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
                background-size: 50px 50px;
                animation: float 20s infinite linear;
                z-index: 1;
            }
            
            @keyframes float {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
            
            .container {
                text-align: center;
                z-index: 2;
                position: relative;
            }
            
            .logo-container {
                margin-bottom: 2rem;
                animation: fadeInDown 1s ease-out;
            }
            
            .logo {
                width: 120px;
                height: 120px;
                background: linear-gradient(45deg, #ff6b6b, #feca57);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                animation: pulse 2s infinite;
            }
            
            .logo::before {
                content: '🎓';
                font-size: 3rem;
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes fadeInDown {
                from {
                    opacity: 0;
                    transform: translateY(-50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            h1 {
                color: #ffffff;
                font-size: 3.5rem;
                font-weight: bold;
                text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
                margin-bottom: 1rem;
                animation: fadeInUp 1s ease-out 0.3s both;
                background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
                background-size: 300% 300%;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: gradient 3s ease infinite, fadeInUp 1s ease-out 0.3s both;
            }
            
            @keyframes gradient {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .subtitle {
                color: rgba(255,255,255,0.9);
                font-size: 1.3rem;
                margin-bottom: 2rem;
                animation: fadeInUp 1s ease-out 0.6s both;
            }
            
            .card {
                background: rgba(255,255,255,0.15);
                backdrop-filter: blur(20px);
                border-radius: 20px;
                padding: 3rem;
                max-width: 600px;
                margin: 0 auto;
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                border: 1px solid rgba(255,255,255,0.2);
                animation: fadeIn 1s ease-out 0.9s both;
                transform: perspective(1000px) rotateX(5deg);
                transition: transform 0.3s ease;
            }
            
            .card:hover {
                transform: perspective(1000px) rotateX(0deg) translateY(-10px);
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .welcome-text {
                color: #ffffff;
                font-size: 1.1rem;
                line-height: 1.6;
                margin-bottom: 2rem;
            }
            
            .stats {
                display: flex;
                justify-content: space-around;
                margin-top: 2rem;
            }
            
            .stat {
                text-align: center;
                color: #ffffff;
            }
            
            .stat-number {
                font-size: 2rem;
                font-weight: bold;
                display: block;
                color: #feca57;
            }
            
            .floating-elements {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 0;
                pointer-events: none;
            }
            
            .floating-element {
                position: absolute;
                color: rgba(255,255,255,0.1);
                font-size: 2rem;
                animation: float-random 15s infinite ease-in-out;
            }
            
            .floating-element:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
            .floating-element:nth-child(2) { top: 60%; right: 15%; animation-delay: 3s; }
            .floating-element:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 6s; }
            .floating-element:nth-child(4) { top: 30%; right: 30%; animation-delay: 9s; }
            
            @keyframes float-random {
                0%, 100% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-30px) rotate(180deg); }
            }
            
            @media (max-width: 768px) {
                h1 { font-size: 2.5rem; }
                .card { padding: 2rem; margin: 1rem; }
                .stats { flex-direction: column; gap: 1rem; }
            }
        </style>
    </head>
    <body>
        <div class="floating-elements">
            <div class="floating-element">📚</div>
            <div class="floating-element">💻</div>
            <div class="floating-element">🔬</div>
            <div class="floating-element">⚡</div>
        </div>
        
        <div class="container">
            <div class="logo-container">
                <div class="logo"></div>
            </div>
            
            <div class="card">
                <h1>FATEC Sorocaba</h1>
                <p class="subtitle">Faculdade de Tecnologia de Sorocaba</p>
                
                <div class="welcome-text">
                    Bem-vindos ao portal oficial da FATEC Sorocaba! 
                    Formando os melhores profissionais de tecnologia 
                    com excelência acadêmica e inovação.
                </div>
                
                <div class="stats">
                    <div class="stat">
                        <span class="stat-number">15+</span>
                        <span>Cursos</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">3000+</span>
                        <span>Alunos</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">20+</span>
                        <span>Anos</span>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `);
});

server.listen(3000, function() {
    console.log('🚀 Servidor rodando na porta 3000');
    console.log('🌐 Acesse: http://localhost:3000');
});

console.log('🎓 Site da FATEC Sorocaba iniciado com sucesso!');