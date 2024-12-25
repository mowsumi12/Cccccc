const moment = require("moment-timezone");
const baseApiUrl = async () => {
    const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
    return base.data.api;
};


module.exports = {
  config: {
    name: "bot",
    version: "1.6.9",
    credits: "Nazrul", // Don't change author
    cooldowns: 5,
    hasPermission: 0,
    description: "Charming and Stylish Bot",
    commandCategory: "fun",
    usage: "Use Bot",
  },

  run: async function () {
    console.log("The bot is online and ready to charm you!");
  },

  handleEvent: async function ({ api, event, Users }) {
    const { threadID, messageID, senderID, body } = event;
    if (!body) return;

    const name = await Users.getNameUser(senderID);
    const currentHour = moment.tz("Asia/Dhaka").hour();
    const greetings = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Evening" : "Good Night";
    
    const messages = [
      `🦋 ei naw bby msg daw 🪄 m.me/ji.la.pi.6`,
      `- কস কি তুমি🙄😒`,
      `- চলো চলে যাই বিদেশ্যে🤥`,
      `এই বলদ কি বলবি বল😾`,
      `হাই জানু, তুমি কি Single😛`,
    ];

    const randMessage = messages[Math.floor(Math.random() * messages.length)];
    const userInput = body.trim().toLowerCase();

    if (["bot"].some((trigger) => userInput.startsWith(trigger))) {
      const msg = {
        body: `✨ ${name} ✨\n\nHello ${name}!\n\n${randMessage}`,
      };event.threadID, (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID
          });
        }, event.messageID,
      )
    }
    const a = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(messages)}&senderID=${event.senderID}&font=1`)).data.reply;     
        await api.sendMessage(a, event.threadID, (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
            lnk: a
          });
        }, event.messageID,
      )}
}catch(err){
    return api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
}};
    }
  },
};
