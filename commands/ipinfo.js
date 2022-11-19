const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'ipinfo',
    description: 'Get info about an IP address',
    run: async (client, message, args) => {
        const ip = args[0];
        if (!ip) return message.channel.send('Please provide an IP address');

        const fetch = require('node-fetch');
        const res = await fetch(`http://ip-api.com/json/${ip}`);
        const json = await res.json();

        if (json.status != 'success') return message.channel.send('Invalid IP address');

        message.channel.send("```json\n" + JSON.stringify(json, null, 2) + "```");
    }
}
