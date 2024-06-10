// GABRIEL CAMARGO DE SOUZA BORGES

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Novo cliente conectado');
    ws.send('Bem-vindo à sala de bate-papo!');

    ws.on('message', (message) => {
        console.log('Mensagem recebida: %s', message);
        // Broadcast the message to all connected clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

console.log('Servidor WebSocket está escutando na porta 8080');
