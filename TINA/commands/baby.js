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
  usages: `[anyMessage] OR\nteach [YourMessage] - [Reply1], [Reply2], [Reply3]... OR\nteach [react] [YourMessage] - [react1], [react2], [react3]... OR\nremove [YourMessage] OR\nrm [YourMessage] - [indexNumber] OR\nmsg [YourMessage] OR\nlist OR\nall OR\nedit [YourMessage] - [NewMessage]`,
};

module.exports.run = async function ({ api, event, args, Users }) {
  try {
    const link = `${await baseApiUrl()}/baby`;
    const dipto = args.join(" ").toLowerCase();
    const uid = event.senderID;

    if (!args[0]) {
      const ran = ["Bolo baby", "hum", "type help baby", "type !baby hi"];
      const r = ran[Math.floor(Math.random() * ran.length)];
      return api.sendMessage(r, event.threadID, event.messageID);
    }
}}; 
module.exports.handleEvent = async function ({ api, event }) {
try{
    const body = event.body ? event.body.toLowerCase() : ""
    if(body.startsWith("sumi") || body.startsWith("riya") || body.startsWith("সুমি")){
        const arr = body.replace(/^\S+\s*/, "")
      if(!arr) {
                                     await api.sendMessage("টুকি🫣🫣", event.threadID, (error, info) => {
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
