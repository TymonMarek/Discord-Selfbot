const Discord = require("discord.js-selfbot-v13");

module.exports = {
  name: "spam",
  description: "Spam a message",
  run: async (client, message, args) => {
    const amount = args[0];
    const messageToSend = args.slice(1).join(" ");

    if (!amount)
      return message.channel.send(
        "Please specify an amount of messages to send."
      );
    if (!messageToSend)
      return message.channel.send("Please specify a message to send.");

    for (let i = 0; i < amount; i++) {
      message.channel.send(messageToSend);
    }
  },
};
