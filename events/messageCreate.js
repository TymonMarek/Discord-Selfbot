const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "messageCreate",
  once: false,

  run: async (message, client) => {
    if (message.author.id !== client.user.id) return;
    if (!message.content.startsWith(process.env.PREFIX)) return;

    message.delete();

    const args = message.content
      .slice(process.env.PREFIX.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
      const commandFile = require(`../commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.log(err);
    }
  },
};
