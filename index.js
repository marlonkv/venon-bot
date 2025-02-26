const { create } = require('venom-bot');

create({
  session: 'sessionName',
  headless: true, // Usar o novo modo Headless
  browserArgs: ['--no-sandbox', '--disable-setuid-sandbox']
})
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    if (!message.isGroupMsg) {
      client.sendText(message.from, 'Oi')
        .then(() => console.log('Mensagem enviada'))
        .catch((err) => console.error('Erro ao enviar mensagem:', err));
    }
  });
}
