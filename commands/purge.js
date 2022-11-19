const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'purge',
    description: 'Purge messages',
    run: async (client, message, args) => {
        const amount = args[0];

        if (!amount) return message.channel.send("Please specify an amount of messages to delete.");

        message.channel.bulkDelete(amount);
    }
}
