// command to get profile picture
const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "avatar",
  description: "Get a user's avatar",
  run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;

    if (!user) {
      message.channel.send(
        client.displayAvatarURL({ dynamic: true, size: 4096 })
      );
    } else {
      message.channel.send(
        user.displayAvatarURL({ dynamic: true, size: 4096 })
      );
    }
  },
};
