const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'ready',
    once: true,

    run: async (client) => {
        console.log(`${client.user.username} is ready!`);
    }
}
