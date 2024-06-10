// GABRIEL CAMARGO DE SOUZA BORGES


document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Tentando se conectar ao WebSocket
    const ws = new WebSocket('ws://localhost:8080');

    ws.onopen = () => {
        console.log('Conectado ao servidor WebSocket');
    };

    ws.onmessage = (event) => {
        if (event.data !== 'Bem-vindo à sala de bate-papo!') {
            createMessageBox(event.data);
        } else {
            createWelcomeMessage(event.data);
        }
    };

    ws.onclose = () => {
        console.log('Desconectado do servidor WebSocket');
    };

    ws.onerror = (error) => {
        console.error('Erro no WebSocket:', error);
    };

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;
        if (message && ws.readyState === WebSocket.OPEN) {
            ws.send(message);
            createMessageBox('Você: ' + message);
            messageInput.value = '';
        } else {
            console.log('WebSocket não está aberto');
        }
    });

    messageInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    function createWelcomeMessage(message) {
        const messageBox = document.createElement('div');
        messageBox.className = 'message-box';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message;

        messageBox.appendChild(messageContent);
        chatWindow.appendChild(messageBox);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function createMessageBox(message) {
        const messageBox = document.createElement('div');
        messageBox.className = 'message-box';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message;

        const replyButton = document.createElement('button');
        replyButton.className = 'reply-button';
        replyButton.textContent = 'Responder';
        replyButton.addEventListener('click', () => {
            messageInput.value = `@${messageContent.textContent} `;
            messageInput.focus();
        });

        messageBox.appendChild(messageContent);
        messageBox.appendChild(replyButton);
        chatWindow.appendChild(messageBox);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
