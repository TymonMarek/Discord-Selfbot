const Discord = require('discord.js-selfbot-v13');

module.exports = {
    name: 'command name',
    description: 'command description',
    run: async (client, message, args) => {
        const fetch = require('node-fetch');
        const res = await fetch('https://api.ipify.org?format=json');
        const json = await res.json();
        
        message.channel.send("```json\n" + JSON.stringify(json, null, 2) + "```");
    }   
}