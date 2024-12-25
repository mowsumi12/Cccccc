const axios = require('axios');

const baseApiUrl = async () => {
    const base = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
    return base.data.api;
};

module.exports.config = {
  name: "baby",
  version: "6.9.9",
  credits: "dipto",
  cooldowns: 0,
  hasPermssion: 0,
  description: "better than all sim simi",
  commandCategory: "chat",
  usages: "fun"
};
module.exports.handleEvent = async function ({ api, event, Users }) {
try{
    const body = event.body ? event.body.toLowerCase() : ""
    if(body.startsWith("baby") || body.startsWith("janu") || body.startsWith("bby")){
const name = await Users.getNameUser(events.senderID);
        const arr = body.replace(/^\S+\s*/, "")
      if(!arr) {
       const tina = ["Bolo baby", "hum", "type help baby", "type !baby hi"];
      const r = tina[Math.floor(Math.random() * tina.length)];
      return api.sendMessage(`${namee},\n${r}`, event.threadID, (error, info) => {
          global.client.handleReply.push({
            name: this.config.name,
            type: "reply",
            messageID: info.messageID,
            author: event.senderID
          });
        }, event.messageID,
      )
    }
    const a = (await axios.get(`${await baseApiUrl()}/baby?text=${encodeURIComponent(arr)}&senderID=${event.senderID}&font=1`)).data.reply;     
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
