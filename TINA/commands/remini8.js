const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "remini8",
  version: "1.2",
  hasPermssion: 0,
  credits: "Hazeyy",
  commandCategory: "",
  cooldowns: 3,
  hasPrefix: false,
}; 

module.exports.run = async function ({ api, event, args }) {

  const pathie = __dirname + `/cache/zombie.jpg`;
  const { threadID, messageID } = event;

  const photoUrl = event.messageReply.attachments[0] ? event.messageReply.attachments[0].url : args.join(" ");

  if (!photoUrl) {
    api.sendMessage("📸 𝙿𝚕𝚎𝚊𝚜𝚎 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚙𝚑𝚘𝚝𝚘 𝚝𝚘 𝚙𝚛𝚘𝚌𝚎𝚎𝚍 𝚎𝚗𝚑𝚊𝚗𝚌𝚒𝚗𝚐 𝚒𝚖𝚊𝚐𝚎𝚜.", threadID, messageID);
    return;
  }
  
  api.sendMessage("🕟 | 𝙴𝚗𝚑𝚊𝚗𝚌𝚒𝚗𝚐, 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 𝚏𝚘𝚛 𝚊 𝚖𝚘𝚖𝚎𝚗𝚝..", threadID, async () => {
    try {
      const response = await axios.get(`https://hazeyy-merge-apis-b924b22feb7b.herokuapp.com/api/try/remini?url=${encodeURIComponent(photoUrl)}`);
      const processedImageURL = response.data.image_data;
      const img = (await axios.get(processedImageURL, { responseType: "arraybuffer" })).data;

      fs.writeFileSync(pathie, Buffer.from(img, 'binary'));

      api.sendMessage({
        body: "✨ 𝙴𝚗𝚑𝚊𝚗𝚌𝚎𝚍 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢",
        attachment: fs.createReadStream(pathie)
      }, threadID, () => fs.unlinkSync(pathie), messageID);
    } catch (error) {
      api.sendMessage(`🚫 𝙴𝚛𝚛𝚘𝚛 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐 𝚒𝚖𝚊𝚐𝚎: ${error}`, threadID, messageID);
    }
  });
};
