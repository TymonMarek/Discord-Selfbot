const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'ping',
    description: 'Check latency',
    run: async (client, message, args) => {
        message.channel.send("Pinging...").then(m => {
            m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
        });
    }
}


