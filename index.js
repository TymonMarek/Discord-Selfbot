const Discord = require('discord.js-selfbot-v13');
const Enviroment = require('dotenv')

Enviroment.config();

const client = new Discord.Client();

function sendTemporaryMessage(messageObject, message, time) {
    messageObject.channel.send(message).then(temporaryMessage => {
        setTimeout(() => {
            temporaryMessage.delete();
        }, time);
    });
}

client.on('ready', async () => {    
  console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async (message) => {
    if (message.author.id !== client.user.id) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;

    message.delete();

    const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        sendTemporaryMessage(message, `❌ An error occured, check the console. ❌`, 5000);
        console.log(err)
    }
})

client.login(process.env.TOKEN);