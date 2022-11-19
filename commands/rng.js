const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'rng',
    description: 'Generate a random number',
    run: async (client, message, args) => {
        const min = args[0];
        const max = args[1];
        if (!min || !max) return message.channel.send('Please provide a minimum and maximum number');

        const random = Math.floor(Math.random() * (max - min + 1)) + min;

        message.channel.send(random);
    }
}
