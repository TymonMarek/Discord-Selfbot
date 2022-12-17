const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "ghostping",
  description: "Ghost ping a user",
  run: async (client, message, args) => {
    const user = message.mentions.users.first();
    if (!user)
      return message.channel.send("Please specify a user to ghost ping.");
    message.channel.send(`<@!${user.id}>`).then((msg) => msg.delete());
  },
};
