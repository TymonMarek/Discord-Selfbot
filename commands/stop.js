const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "stop",
  description: "Stop the bot",
  run: async (client, message, args) => {
    client.destroy();
  },
};
