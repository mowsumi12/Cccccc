const config = {
  name: "tag",
  version: "1.6.9",
  credits: "Dipto",
  cooldowns: 2,
  hasPermssion: 0,
  description: "Tag user",
  commandCategory: "tag",
  usePrefix: false,
  guide: "{pn} [reply/mention]",
  usages: "reply or mention"
};

const run = async ({ api, args, event }) => {
 try {
 const ID = event.messageReply.senderID || args[0];
 const mentionedUser = await api.getUserInfo(ID);
 if (mentionedUser && mentionedUser[ID]) {
 const userName = mentionedUser[ID].name;
 const text = args.join(" ");
 await api.sendMessage({
  body: `${userName} ${text}`,
  mentions: [{
      tag: userName,
      id: ID 
   }]
 }, event.threadID, event.messageID);
} else {
 api.sendMessage("Ukii 🐱", event.threadID, event.messageID);
 }
} catch (error) {
  console.log(error);
  api.sendMessage(`Error:  ${error.message}`, event.threadID, event.messageID);
}
};

module.exports = {
config, 
run,
run: run
};
