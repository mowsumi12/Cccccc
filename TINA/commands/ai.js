const axios = require('axios'); 

const aApi = async () => {
  const a = await axios.get(
    "https://raw.githubusercontent.com/nazrul4x/Noobs/main/Apis.json"
  );
  return a.data.api;
};

module.exports.config = {
  name: "ai",
  version: "1.0.0",
  credits: "dipto",
  cooldowns: 0,
hasPermssion: 0,
  commandCategory: "ai",
  description: "talk with ai assistant",
  usages: {
      en: "   {pn} your question"
    }
}

module.exports.onStart = async ({ api, event, args, users }) => { 
  const prompt = args.join(" ");
  if (!prompt) {
    return api.sendMessage("Please Provide a Prompt!", event.threadID, event.messageID);
  }
  var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
  
  try {
    const res = await axios.get(`${await aApi()}/nazrul/hercai?query=${encodeURIComponent(prompt)}`);
    const replyMessage = `${name},🪄\n${res.data.answer}`;
    
    api.sendMessage(replyMessage, event.threadID, (error, info) => {
      if (error) return api.sendMessage("An error occurred!", event.threadID, event.messageID);
      
      global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
        msg: replyMessage,
      });
    }, event.messageID);
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
}

module.exports.onReply = async ({ api, event, args }) => {
  const xPrompt = args.join(" ");
  if (!xPrompt) return;
  
  try {
    const res = await axios.get(`${await aApi()}/nazrul/hercai?query=${encodeURIComponent(xPrompt)}`);
    const xReply = res.data.answer;
    
    api.sendMessage(xReply, event.threadID, (error, info) => {
      if (error) return api.sendMessage("An error occurred!", event.threadID, event.messageID);
      
      global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID,
        msg: xReply,
      });
    }, event.messageID);
  } catch (err) {
    api.sendMessage(`Error: ${err.message}`, event.threadID, event.messageID);
  }
          }
    api.setMessageReaction("✅", event.messageID, () => { }, true);
}
  catch (error) {
    console.error('Error fetching package.json:', error);
  api.sendMessage("An error occurred while fetching data. Please try again later.", event.threadID, event.messageID);
  }
};
