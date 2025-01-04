   module.exports.config = {
  name: "fork",
  version: "1.2.8",
  hasPermssion: 0,
  credits: "Islamick Chat", //Don't chinge The credit
  description: "See information about the 12 zodiac animals",
  commandCategory: "Utilities",
  usages: "animals",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  } 
}

module.exports.onLoad = () => {
  let { mkdirSync, existsSync, createWriteStream } = require("fs-extra");
  let request = require("request");
  let dirMaterial = __dirname + `/noprefix/12congiap/`; 
  if (!existsSync(dirMaterial + "noprefix" + "12congiap")) mkdirSync(dirMaterial, { recursive: true });

  if (!existsSync(dirMaterial + "dần.jpg")) request("https://i.imgur.com/gSzX7nL.jpg").pipe(createWriteStream(dirMaterial + "dần.jpg"))

  if (!existsSync(dirMaterial + "mão.jpg")) request("https://i.imgur.com/SVcdKJp.jpg").pipe(createWriteStream(dirMaterial + "mão.jpg"))

}

module.exports.handleReply = async ({ api, event, handleReply }) => {
  let { createReadStream } = require("fs-extra");
  let { threadID, messageID, senderID, body } = event;
    switch(handleReply.type) {
        case "choosee": {
            switch(body) {

          case "1":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "হে আমাদের পালনকর্তা, আমাদের গুনাহসমূহ মাফ করে দাও, আমাদের থেকে সকল মন্দ দূর করে দাও এবং আমাদের নেক লোকদের সাহচার্য দান কর।", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/dần.jpg`)
      }, threadID, messageID);
      break;

    case "2":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "ربَّنَا وَلاَ تَحْمِلْ عَلَيْنَا اصْرًا كَمَا حَمَلْتَه عَلَى الَّذِينَ\n\n مِنْ قَبْلِنَا\n\n\nউচ্চারণ : রাব্বানা ওয়ালা, তামিল আ’লাইনা ইস্রান কামা হামালতাহু আলাল্লাযিনা মিন ক্বাবলিনা।\n\nঅর্থ : হে আমাদের রব! আমাদের ওপর সেই ধরনের বোঝা চাপিয়ে দিও না, যেরূপ বোঝা আমাদের পূর্ববর্তী অপরাধী জাতির প্রতি চাপিয়ে দিয়েছিলে ।", 
        attachment: createReadStream(__dirname + `/noprefix/12congiap/mão.jpg`)
      },threadID, messageID);
      break;

          default:
        const choose = parseInt(body);
              if (isNaN(body)) return api.sendMessage("•—»✨ একটি নুম্বারে রিপ্লাই দিন", threadID, messageID);
              if (choose > 12 || choose < 1) return api.sendMessage("•—»✨ নির্বাচনের তালিকা নেই", threadID, messageID); 

      }
    }
  }
}

module.exports.run = async ({ api, event, handleReply }) => {
  let fs = require("fs-extra");
  let { threadID, senderID } = event;
  return api.sendMessage({ body: "╭•┄┅════❁🌺❁════┅┄•╮\n\n   কিছু সহজ ও ছোট দোয়া-!!❤️🤲 \n\n╰•┄┅════❁🌺❁════┅┄•╯=\n\n｢১｣ ঈমানের সাথে মৃত্যু বরণ করার দোয়া-!!🖤🤲 \n｢২｣ উত্তম জীবনসঙ্গী লাভের দোয়া-!!🖤🤲 "
            }, threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        })  
    })
  }
