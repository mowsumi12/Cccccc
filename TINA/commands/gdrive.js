const axios = require('axios');

module.exports.config = {
	name: "gdrive",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Jonell Magallanes",
	description: "Get the URL Download from Video, Audio is sent from the group and Get Google Drive Link No Expired Link",
	usePrefix: false,
	commandCategory: "Tool",
	usages: "getLink",
	cooldowns: 5,
};

module.exports.languages = {
	"vi": {
		"invalidFormat": "❌ Tin nhắn bạn phản hồi phải là một audio, video, ảnh nào đó"
	},
	"en": {
		"invalidFormat": "❌ Your need reply a message have contain an audio, video or picture"
	}
}

module.exports.run = async ({ api, event, getText }) => {
	if (event.type !== "message_reply") return api.sendMessage(getText("invalidFormat"), event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length === 0) return api.sendMessage(getText("invalidFormat"), event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invalidFormat"), event.threadID, event.messageID);
     const pro = await api.sendMessage("Uploading Attachment Url.....", event.threadID, event.messageID);
	const attachmentUrl = event.messageReply.attachments[0].url;

	try {
		const apiUrl = `https://google-drive-ccprojects-1.onrender.com/api/upload?url=${attachmentUrl}`;
		
        api.editMessage("Uploading Google Drive......", pro.messageID, event.threadID, event.messageID);
		const response = await axios.get(apiUrl);
		const responseData = response.data;
          api.editMessage("Completed.", pro.messageID, event.threadID, event.messageID);
		
		return api.editMessage(`☁️ 𝗚𝗼𝗼𝗴𝗹𝗲 𝗗𝗿𝗶𝘃𝗲 𝗨𝗽𝗹𝗼𝗮𝗱 𝗙𝗶𝗹𝗲 \n━━━━━━━━━━━━━━━━━━\n${responseData}`, pro.messageID, event.threadID, event.messageID);
	} catch (error) {
		console.error('Error sending request to external API:', error);
		return api.sendMessage(error.message, event.threadID, event.messageID);
	}
}