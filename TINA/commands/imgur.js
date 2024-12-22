const axios = require('axios');

module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "nazrul",
    description: "Credit dont change rb badol bot ",
    commandCategory: "rbbadolbot",
    usages: "[rbmcs]",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
  try {
    const links = [
      "https://i.imgur.com/RUMuaL1.jpeg",
      "https://i.imgur.com/RUMuaL1.jpeg"
    ];
    const randomLink = links[Math.floor(Math.random() * links.length)];

    const response = await axios.get(randomLink, { responseType: 'stream' });
    const attachment = response.data;

    const apis = await axios.get('https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json');
    const n = base.data.api;

    const linkanh = event.messageReply.attachments[0]?.url || args.join(" ");
    if (!linkanh) {
      return api.sendMessage('[⚠️] Please provide an image or video link.', event.threadID, event.messageID);
    }

    const allPromise = await Promise.all(event.messageReply.attachments.map(async (item) => {
      const response = await axios.get(`${await baseApiUrl()}/imgur?url=${encodeURIComponent(dip)}`);
      return response.data.uploaded.image;
    }));

    const message = `"${allPromise.join('"\n"')}"`;
    api.sendMessage({ body: message, attachment: attachment }, event.threadID, event.messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage('[⚠️] An error occurred while executing the command.', event.threadID, event.messageID);
  }
};
