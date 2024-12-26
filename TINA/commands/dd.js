const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.config = {
  name: "dd",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Nazrul",
  description: "generate image from polination",
  usePrefix: true,
  commandCategory: "image",
  usages: "query",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
    try {
        let chilli = args.join(" ");
        if (!chilli) {
            return api.sendMessage("[ ❗ ] - Missing prompt for the DALL-E command", event.threadID, event.messageID);
        }

        api.sendMessage("Generating image, please wait...", event.threadID, async (err, info) => {
            if (err) {
                console.error(err);
                return api.sendMessage("An error occurred while processing your request.", event.threadID);
            }

            try {
                const pogi = await axios.get(`https://joshweb.click/dalle?prompt=${encodeURIComponent(chilli)}`, { responseType: 'arraybuffer' });
                const imagePath = path.join(__dirname, "dalle_image.png");
                
                fs.writeFileSync(imagePath, pogi.data);

                const poganda = await api.getUserInfo(event.senderID);
                const requesterName = poganda[event.senderID].name;

                api.sendMessage({
                    body: `Here is the image you requested:\n\nPrompt: ${chilli}\n\nRequested by: ${requesterName}`,
                    attachment: fs.createReadStream(imagePath)
                }, event.threadID, () => {
                    fs.unlinkSync(imagePath);
                });
            } catch (mantika) {
                console.error(mantika);
                api.sendMessage("An error occurred while processing your request.", event.threadID);
            }
        });
    } catch (mantika) {
        console.error("Error in DALL-E command:", mantika);
        api.sendMessage("An error occurred while processing your request.", event.threadID);
    }
};
