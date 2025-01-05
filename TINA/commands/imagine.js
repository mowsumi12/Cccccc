const axios = require("axios");

const baseApiUrl = async () => {
  const base = await axios.get(
    `https://raw.githubusercontent.com/MOHAMMAD-NAYAN/Nayan/main/api.json`
  );
  return base.data.api;
};

 module.exports.config = {
   name: "imagedata",
   version: "1.6.9",
   credits: "Nazrul",
   cooldowns: 5,
   hasPermission: 0,
   usePrefix: true,
   prefix: true,
   description: "Get data from Images",
   commandCategory: "image",
   usage: "{pn} reply to an image"
 };
 module.exports.run = async ({ api, event, args }) => {
   try {
     const img = event.messageReply?.attachments[0]?.url;
     if (!img) {
       return api.sendMessage("😡 Please reply to an image!", event.threadID, event.messageID);
     }
     const { data } = await axios.get(`${await baseApiUrl()}/nayan/img?prompt=${encodeURIComponent(prompt)};
     if (!data || data.error) {
       return api.sendMessage("🐸 error while fetching image data!", event.threadID, event.messageID);
 }
  const imgD = {
    body: `✅ Here's your image data✨\n\n♡ Format: ${data.format}\n♡ Width: ${data.width}px\n♡ Height: ${data.height}px\n♡ File Size: ${data.fileSizeInKB} KB (${data.fileSizeInMB} MB)\n♡ Color Space: ${data.colorSpace}\n♡ Channels: ${data.channels}\n♡ Bit Depth: ${data.bitDepth}\n♡ Is Progressive: ${data.isProgressive}\n♡ Has Alpha: ${data.hasAlpha}\n♡ Density: ${data.density} DPI\n`
 };
  return api.sendMessage(imgD, event.threadID, event.messageID);
   } catch (error) {
     api.sendMessage("Error: " + error.message, event.threadID, event.messageID);
   }
 };
