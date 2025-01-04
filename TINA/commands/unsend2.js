const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
	name: "unsend2",
	version: "1.0.0", 
	hasPermssion: 2,
	credits: "nazrul",
	description: "Remove Bot's messages",
	commandCategory: "System", 
   usages: "", 
	cooldowns: 0,
	dependencies: [] 
};
module.exports.languages = { "vi": 
   { "unsendErr1": "Không thể gỡ tin nhắn của người khác.",
 "unsendErr2": "Hãy reply tin nhắn cần gỡ." }, 
"en": { "unsendErr1": "Can't to unsend message from other user.",
        "unsendErr2": "Reply to the message you want to unsend." } }
module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("uns") === 0 || event.body.indexOf("unsend") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText('unsendErr1'), event.threadID, event.messageID);
			if (event.type != "message_reply") return api.sendMessage(getText('unsendErr2'), event.threadID, event.messageID);
			return api.unsendMessage(event.messageReply.messageID, err => (err) ? api.sendMessage(getText('error'), event.threadID, event.messageID) : '');
    }
module.exports.handleReaction = async function({ api, event, client }) {
	const { messageID, reaction, threadID, userID } = event;
	const thread = global.data.threadData.get(parseInt(threadID)) || {};

	if (typeof thread["resend"] === "undefined" || thread["resend"] === false) return;

	if (reaction === "🙏") {
		return api.unsendMessage(messageID, (err) => {
			if (err) return api.sendMessage("Failed to unsend the message", threadID);
		});
	}
};
module.exports.run = async function ({ api, event }) {};
