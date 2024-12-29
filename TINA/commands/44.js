module.exports.config = {
  name: "tools",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Islamick Chat",
  description: "tools",
  commandCategory: "pvt",
  usages: "tools",
  cooldowns: 0
};
const totalPath = __dirname + '/cache/totalChat.json';
const _24hours = 86400000;
const fs = require("fs-extra");
function handleByte(byte) {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let i = 0, usage = parseInt(byte, 10) || 0;

  while(usage >= 1024 && ++i){
    usage = usage/1024;
  }

  return(usage.toFixed(usage < 10 && i > 0 ? 1 : 0) + ' ' + units[i]);
}

function handleOS(ping) {
  var os = require("os");
  var cpus = os.cpus();
  var speed, chips;
  for (var i of cpus) chips = i.model, speed = i.speed;
  if (cpus == undefined) return;
  else return msg = 
  `[🌺] Ping: ${Date.now() - ping}ms.\n\n`;

}
module.exports.onLoad = function() {
    const { writeFileSync, existsSync } = require('fs-extra');
    const { resolve } = require("path");
    const path = resolve(__dirname, 'cache', 'data.json');
    if (!existsSync(path)) {
        const obj = {
            adminbox: {}
        };
        writeFileSync(path, JSON.stringify(obj, null, 4));
    } else {
        const data = require(path);
        if (!data.hasOwnProperty('adminbox')) data.adminbox = {};
        writeFileSync(path, JSON.stringify(data, null, 4));
    }
}
module.exports.run = async function({ api, args, event, Users,handleReply,permssion, utils, Threads, Currencies, client, __GLOBAL, reminder  }) {
  var moment = require('moment-timezone');
  const gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
    var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
  const axios = require("axios");
  const fs = require('fs-extra');
  const request = require('request');
  const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
  const { threadID, senderID, messageID, type, mentions } = event;
   return api.sendMessage({body: `[🌺]  𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗕𝗼𝘁 [🌺]\n\n[🌺] •—»✨ |𝗔𝗱𝗺𝗶𝗻| ✨«—•[🌺]\n[1] •—»✨ Update box data\n[2] ] •—»✨ Update user data\n[3] ] •—»✨ Rerun bot system\n[4] ] •—»✨ Log out of account Facebook\n[5] ] •—»✨ Filter ornamental fish in boxes\n[6] ] •—»✨ Reload config\n[7] ] •—»✨ Filter boxes with less than 20 members\n[ 8] ] •—»✨ Refresh appstate\n\n[🌺] •—»✨|𝗜𝘀𝗹𝗮𝗺𝗶𝗰𝗸 𝗕𝗼𝘅| ✨«—•[🌺]\n[9] ] •—»✨ Turn on/off Box Only mode\n[10] ] •—»✨ Kick facebook users\n[11] ] •—»✨ Refresh data box\n[12] ] •—»✨ Turn on/off anti-hijacking box\n[13] ] •—»✨ Turn on/off anti-outing\n\n[🌺] •—»✨ |𝗺𝗲𝗺𝗯𝗲𝗿| ✨«—•[🌺]\n[14] ] •—»✨ View your box information\n[15] ] •—»✨ View bot information\n[16] ] •—»✨ View uptime bot activity\n[17] ] •—»✨ View Covid information\n[18] ] •—»✨ View admin-bot list\n[19] ] •—»✨ Get user UID\n[ 20] ] •—»✨ Get UID box and user\n[21] ] •—»✨ View current time\n[22] ] •—»✨ Get interactive top chart\n[23] ] •—»✨ Get your Facebook link\n[24] ] •—»✨ See the list of boxes the bot is participating in\n[25] ] •—»✨ Pair with others\n[26] ] • —»✨ See your lucky odds\•┄┅════❁🌺❁════┅┄•\n[🌺] ] •—»✨ Reply to messages with the number you choose\n\ n`
        }, threadID, (error, info) => {
            global.client.handleReply.push({
               name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "choosee",
            })
        }, event.messageID)
}
module.exports.handleReply = async function({
  args, event, Users,Threads, api, handleReply, permssion, Currencies }) {
  const { threadID, messageID, senderID } = event;
  api.unsendMessage(handleReply.messageID);
  switch (handleReply.type) {
    case "choosee": {
      switch (event.body) {
        case "16": {
           let time = process.uptime();
    let hours = Math.floor(time / (60 * 60));
    let minutes = Math.floor((time % (60 * 60)) / 60);
    let seconds = Math.floor(time % 60);
    const timeStart = Date.now();
    return api.sendMessage('⏳ Downloading, please wait...', event.threadID, (err, info) => {
      setTimeout(() => {
        api.sendMessage(`[🌺] Ping: ${(Date.now() - timeStart)}ms \n[🌺] Uptime: ${hours}:${minutes}:${seconds}`, event.threadID, event.messageID);
      }, 200);
    }, event.messageID);
}break;  
          case "13": {
 var info = await api.getThreadInfo(event.threadID);
 let data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
 else data["antiout"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`[🌺] Did ${(data["antiout"] == true) ? "on" : "off"} successful antiout!`, event.threadID);
}break;
case "25":{
const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});


        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.ibb.co/wC2JJBb/trai-tim-lap-lanh.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];

              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/giflove.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: ` 🥰Successful pairing!\n💌Wish you two a hundred years of happiness\n💕Matching rate: ${tle}%\n`+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}break;         
        case "26":{
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/zVSqQAt.jpg",
    "https://i.imgur.com/oNYC9c6.jpg",
    "https://i.imgur.com/CMAXOKR.jpg",
    "https://i.imgur.com/3Ke6XuN.jpg",
    "https://i.imgur.com/kMThsCe.jpg"
    ];
var callback = () => api.sendMessage({body:`Your luck rate is ${tile}%`, attachment: fs.createReadStream(__dirname + "/cache/tile.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tile.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tile.jpg")).on("close",() => callback());
}break;         
  case "9":{
if (permssion < 1) return api.sendMessage("[🌺] Sorry! This command can only be used by box administrators", threadID, messageID);
const { writeFileSync } = global.nodemodule["fs-extra"];
        const { resolve } = require("path");
        const pathData = resolve(__dirname, 'cache', 'data.json');
        const database = require(pathData);
        const { adminbox } = database;  
        if (adminbox[threadID] == true) {
            adminbox[threadID] = false;
            api.sendMessage("[🌺]  Successfully turned off admin mode so everyone can use the bot ", threadID, messageID);
        } else {
            api.sendMessage("[🌺]  Bật thành công chế độ qtvonly (Successfully enabled qtvonly mode (only admins with qtv box can use the bot) ", threadID, messageID);
            adminbox[threadID] = true;
        }
        writeFileSync(pathData, JSON.stringify(database, null, 4));
}break;         
        case "17": {
          const axios_1 = require("axios");
    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("YYYY");
    let fetchdata = await axios_1.get("https://static.pipezero.com/covid/data.json");
    var jsondata = (await fetchdata.data).total;
    var vn = (await fetchdata.data).overview[6];
    var year = vn.date + '-' + time;
    var world = jsondata.world,
      nhiemtg = world.cases,
      chettg = world.death,
      hoiphuctg = world.recovered,
      //////////////////////////////
      nhiemvn = vn.cases,
      chetvn = vn.death,
      hoiphucvn = vn.recovered,
      dieutrivn = vn.treating,
      //////////////////////////////
      nhiemvn7days = vn.avgCases7day,
      hoiphucvn7days = vn.avgRecovered7day,
      chetvn7days = vn.avgDeath7day,
      //////////////////////////////
      ptchetvn = Math.round((chetvn * 100) / nhiemvn),
      pthoiphucvn = Math.round((hoiphucvn * 100) / nhiemvn),
      ptchettg = Math.round((chettg * 100) / nhiemtg),
      pthoiphuctg = Math.round((hoiphuctg * 100) / nhiemtg),
      pthoiphucvn = pthoiphucvn.toString().split(".")[0],
      ptdieutrivn = (100 - pthoiphucvn - ptchetvn).toString().split(".")[0];
    /////////////////////////////////
    ptchetvn = ptchetvn.toString().split(".")[0];
    pthoiphuctg = pthoiphuctg.toString().split(".")[0];
    ptchettg = ptchettg.toString().split(".")[0];
    return api.sendMessage(
      "[🌍] World [🌍]\n" +
      `😷 Infection: ${nhiemtg}\n` +
      `💚 Recuperte: ${hoiphuctg} (${pthoiphuctg}%)\n` +
      `💀 Dead: ${chettg} (${ptchettg}%)\n` +
      "[🇧🇩] Bangladesh  [🇧🇩]\n"
 `🎃 Infection: ${nhiemvn}\n`
 `💉 Under treatment: ${dieutrivn} (${ptdieutrivn}%)\n`
 `💚 Recovery: ${hoiphucvn} (${pthoiphucvn}%)\n`
 `💀 Death: ${chetvn} (${ptchetvn}%)\n`
 `🤨 Infection 7 days: ${nhiemvn7days}\n`
 `❤ 7-day recovery: ${hoiphucvn7days}\n`
 `☠️ 7-day mortality: ${chetvn7days}\n\n`
 `📝 Updated: ${year}`,
      event.threadID, event.messageID);
}break;            
        case "1": {
          const permission = ["100029115600589"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
          const { threadID } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`[🌺] Update date of box ID: ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`Updated data of ${lengthGroup} box`)
 return api.sendMessage(`[🌺] ${lengthGroup} box data updated`, threadID)
}break;
          case "2": {
            const permission = ["100029115600589"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Border cunt rights?", event.threadID, event.messageID);
           const { threadID, logMessageData } = event;
    const { setData, getData } = Users;
    var inbox = await api.getThreadList(1000, null, ['INBOX']);
    let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
    for (var groupInfo of list) {
        var { participantIDs } = await Threads.getInfo(groupInfo.threadID) || await api.getThreadInfo(groupInfo.threadID);
        for (var id of participantIDs) {
            let data = await api.getUserInfo(id);
            data.name
            let userName = data[id].name
            await Users.setData(id, { name: userName, data: {} });
            console.log(`Updated date of ID: ${id}`)
        }
    }
    console.log(`Update successful!`)
    return api.sendMessage(`[🌺] Updated date of all users`, threadID)
}break;
        case "3": {
          const permission = ["100029115600589"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("Please give me the age to reset?", event.threadID, event.messageID);


  const { threadID, messageID } = event;
  return api.sendMessage(`[🌺] Restarted successfully!!!`, threadID, () => process.exit(1));
}break;
        case "4": {
          const fs = global.nodemodule["fs-extra"];
  const permission = ["100029115600589"];

  if (!permission.includes(event.senderID)) return api.sendMessage("Old age,honey", event.threadID, event.messageID);
api.sendMessage("[🌺] Signing out Facebook...",event.threadID,event.messageID)
api.logout()
}break;
          case "11": {
     const { threadID, messageID } = event;
  const threadInfo = await api.getThreadInfo(threadID);
  await Threads.setData(threadID, { name: threadInfo.name, threadInfo });
  global.data.threadInfo.set(threadID, threadInfo);
  return api.sendMessage(`[🌺] Refreshed box and membership successfully!!!`, threadID, messageID)
}break;
          case "18": {
      const { threadID, messageID } = event;
      const { ADMINBOT } = global.config;
      const { userName } = global.data;
      const { NDH } = global.config;
var i = 1
        var msg = [];
          listAdmin = ADMINBOT || config.ADMINBOT ||  [];
            var msg = [];
            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                  const name = (await Users.getData(idAdmin)).name
                    msg.push(`${i++}. ${name}\n[🌺] Link: fb.me/${idAdmin}`);
                }
            }
          var i = 1
        var msg1 = [];
          listNDH = NDH || config.NDH ||  [];
            var msg1 = [];
            for (const idNDH of listNDH) {
                if (parseInt(idNDH)) {
                  const name1 = (await Users.getData(idNDH)).name
                    msg1.push(`${i++}. ${name1}\n[✨] Link: fb.me/${idNDH}`);
                }
            }
return api.sendMessage(`[🌺] ADMINBOT [🌺]\n»============«\n\n${msg.join("\n")}\n\n————————🕌————————\n\n[🌺] SUPPORTBOT [🌺]\n»============«\n\n${msg1.join("\n\n")}`, event.threadID, event.messageID)
}break;
          case "5": {
            if (event.senderID != 100029115600589) return api.sendMessage(`[❗] Wish you luck next time:))`, event.threadID, event.messageID)
      let number = [];
            let uidAll = await Currencies.getAll(['userID','exp']);
            uidAll.forEach(user => {
            if(user.exp > 1) return;
                Users.delData(user.userID);
                Currencies.delData(user.userID);
                number.push(user.userID);
            })
            return api.sendMessage(`[🌺] filtered ${number.length} aquarium.`,threadID)
}break;
          case "7": {
            if (event.senderID != 100029115600589) return api.sendMessage(`[❗] Wish you luck next time:))`, event.threadID, event.messageID)
     //let number = [];
            api.getThreadList(50, null, ["INBOX"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["OTHER"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["PENDING"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["unread"], (err, list) => getInfo({ list }))
            var getInfo = ({ list }) => {
              list.forEach(info => {
                if (info.name == "" || info.participants < 20 || info.imageSrc == null) { 
                  //number.push(info);
                  api.removeUserFromGroup(api.getCurrentUserID(),info.threadID);
                  api.deleteThread(info.threadID, (err) => {
                    Threads.delData(info.threadID)
                    if(err) return console.error(err);
                    });
                }
              })
            }
           return api.sendMessage(`[🌺] Filtered groups with no name or less than 20 members.`,threadID)

}break;
          case "19": {
          if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}break;
          case "15": {
          const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
        const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  var ping = Date.now();

  var threadInfo = await api.getThreadInfo(event.threadID);
    var time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
  var severInfo = handleOS(ping);
  var msg = `\n\n[🌺] Bot is active:${hours < 10 ? (hours > 0 ? " 0" + hours + " hour" : 
   "") : (hours > 0 ? " " + hours + " giờ" : "")} ${minutes < 10 ? (minutes > 0 ? " 0"  + minutes + " phút" : "") : (minutes > 0 ? " " + minutes + " phút" : 
 "")}${seconds < 10 ? (seconds > 0 ? " 0" + seconds + " second." : "") : (seconds > 0 ? " " + 
 seconds + " second." : "")}\n\n` +
  `[🌺] total group: ${global.data.allThreadID.length} nhóm.\n[🌺] total users: ${global.data.allUserID.length} people.\n
[🌺] currently available: ${global.config.ADMINBOT.length} Admin.\n
[🌺] currently available: ${global.config.NDH.length} Support Bot.\n` + 
`[🌺] total number of order: ${client.commands.size }\n\n`+`[🌺] total prefix  : ${global.config.PREFIX}\n[🌺] Prefix box: ${prefix}\n${severInfo ? severInfo : `[🌺] Ping: 
${Date.now() - ping}ms.\n\n`}`
    return api.sendMessage(msg, event.threadID)
}break;
          case "6": {
          delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("[🌺] Completed config reload", event.threadID, event.messageID);    
}break;
          case "10 ":{
            if (permssion < 1) return api.sendMessage("⚡️ No permission to use (only for qtv box)", threadID, messageID);
 var { userInfo, adminIDs } = await api.getThreadInfo(event.threadID);
 var success = 0, failure = 0;
 var arr = [];
 for (const e of userInfo) {
 if (e.gender == undefined) {
 arr.push(e.id);
 }
 };

 adminIDs = adminIDs.map(e => e.id).some(e => e == api.getCurrentUserID());
 if (arr.length == 0) {
 return api.sendMessage("Facebook User' does not exist in your group.", event.threadID);
 }
 else {
 api.sendMessage("Your group now has " arr.length " 'Facebook Users'.", event.threadID, function () {
 if (!adminIDs) {
 api.sendMessage("But the bot is not an admin so it can't be filtered.", event.threadID);
 } else {
 api.sendMessage("Starting filtering..", event.threadID, async function() {
 for (const e of arr) {
 try {
 await new Promise(resolve => setTimeout(resolve, 1000));
 await api.removeUserFromGroup(parseInt(e), event.threadID);
 success ;
 }
 catch {
 fail ;
 }
 }

 api.sendMessage("Successfully filtered "success" person.", event.threadID, function() {
 if (fail != 0) return api.sendMessage("Filtering failed " failed " person.", event.threadID);
 });
 })
 }
 })
 }
}break;
 case "8": {
 const permission = ["100029115600589"];
if (!permission.includes(event.senderID)) return api.sendMessage("[🌺] No need to refresh appstate for admin", event.threadID, event.messageID);
 let appstate = api.getAppState();
 // convert JSON object to a string
 const data = JSON.stringify(appstate);
 //write file to disk
 fs.writeFile(`${__dirname}/../../appstate.json`, data, 'utf8', (err) => {
 if (err) {
 return api.sendMessage(`Error writing file: ${err}`, event.threadID);
 } else {
 return api.sendMessage(`Appstate refreshed successfully`, event.threadID);
 }
 });
}break;
 case "20": {
let threadInfo = await api.getThreadInfo(event.threadID);
 let threadName = threadInfo.threadName;
 const fs = require("fs");
 let name = await Users.getNameUser(event.senderID)
 return api.sendMessage(`🎭 Hi ${name}\n📝 Box name: ${threadName}\n💎 BOX ID: ${threadInfo.threadID}\n🏵️ Your Uid: ${event.senderID}`, event .threadID, event.messageID);
}break;
 case "21": {
 const fs = require("fs");
 let name = await Users.getNameUser(event.senderID)
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
 var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
 if (thu == 'Sunday') thu = 'Sunday'
 if (thu == 'Monday') thu = 'Monday'
 if (thu == 'Tuesday') thu = 'Tuesday'
 if (thu == 'Wednesday') thu = 'Wednesday'
 if (thu == "Thursday") thu = 'Thursday'
 if (thu == 'Friday') thu = 'Friday'
 if (thu == 'Saturday') thu = 'Saturday'
 var gio2 = moment.tz("Europe/Lodon").format("HH:mm:ss || D/MM/YYYY");
 var gio1 = moment.tz("America/Brasília").format("HH:mm:ss || D/MM/YYYY");
 var gio3 = moment.tz("Asia/Seoul").format("HH:mm:ss || D/MM/YYYY");
 var gio4 = moment.tz("Asia/Tokyo").format("HH:mm:ss || D/MM/YYYY");
 var gio5 = moment.tz("America/New_York").format("HH:mm:ss || D/MM/YYYY");
 var gio6 = moment.tz("Asia/Kuala_Lumpur").format("HH:mm:ss || D/MM/YYYY");var gio1 = moment.tz("America/New_York").format("HH :mm:ss || D/MM/YYYY");
 var gio7 = moment.tz("Europe/Paris").format("HH:mm:ss || D/MM/YYYY");
let today = new Date();
return api.sendMessage(`[🌺] Hello ${name}\n[🌺] Have a nice day:\n[🌺] Today is: ${thu} || ${gio}\n[🌺 ] Other time zones around the world:\n-🇬🇧 London: ${gio2}\n-🇺🇸 New York: ${gio5}\n-🇰🇷 Seoul: ${gio3}\n-🇯🇵Tokyo: ${gio4}\n-🇧🇷 Brasília: ${gio1}\n-🇲🇾 Kuala Lumpur: ${gio6}\n-🇫🇷 Paris:${gio7}`, event.threadID, event.messageID);
}break;
 case "12": {
 const info = await api.getThreadInfo(event.threadID);
 if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
 return api.sendMessage('[🌺] Need group admin permission, please add and try again!', event.threadID, event.messageID);
 const data = (await Threads.getData(event.threadID)).data || {};
 if (typeof data["guard"] == "guard" || data["guard"] == false) data["guard"] = true;
 else data["guard"] = false;
 await Threads.setData(event.threadID, { data });
 global.data.threadData.set(parseInt(event.threadID), data);
 return api.sendMessage(`[🌺] Was ${(data["guard"] == true) ? "on" : "off"} successful`, event.threadID, event.messageID);
}break;
          case "14": {
    const moment = require("moment-timezone");
    const request = require("request")
    var timeNow = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss");
    if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
    let totalChat = JSON.parse(fs.readFileSync(totalPath));
    let threadInfo = await api.getThreadInfo(event.threadID);
    let timeByMS = Date.now();

    var memLength = threadInfo.participantIDs.length;
    let threadMem = threadInfo.participantIDs.length;
    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    };
    var nam = gendernam.length;
    var nu = gendernu.length;
    let qtv = threadInfo.adminIDs.length;
    let sl = threadInfo.messageCount;
    let u = threadInfo.nicknames;
    let icon = threadInfo.emoji;

    let threadName = threadInfo.threadName;
    let id = threadInfo.threadID;
    let sex = threadInfo.approvalMode;
    var pd = sex == false ? 'turn off' : sex == true ? 'bật' : 'Kh';


    if (!totalChat[event.threadID]) {
      totalChat[event.threadID] = {
        time: timeByMS,
        count: sl,
        ytd: 0
      }
      fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
    }

    let mdtt = "no statistics yet";
    let preCount = totalChat[event.threadID].count || 0;
    let ytd = totalChat[event.threadID].ytd || 0;
    let hnay = (ytd != 0) ? (sl - preCount) : "no statistics yet";
    let hqua = (ytd != 0) ? ytd : "no statistics yet";
    if (timeByMS - totalChat[event.threadID].time > _24hours) {
      if (timeByMS - totalChat[event.threadID].time > (_24hours * 2)) {
        totalChat[event.threadID].count = sl;
        totalChat[event.threadID].time = timeByMS - _24hours;
        totalChat[event.threadID].ytd = sl - preCount;
        fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
      }
      getHour = Math.ceil((timeByMS - totalChat[event.threadID].time - _24hours) / 3600000);
      if (ytd == 0) mdtt = 100;
      else mdtt = ((((hnay) / ((hqua / 24) * getHour))) * 100).toFixed(0);
      mdtt += "%";
    }

    var callback = () =>
      api.sendMessage({
        body: ``» Box name: ${threadName}\n» Box ID: ${id}\n» Approval: ${pd}\n» Emoji: ${icon}\n» Information:\n» Total ${ threadMem} member\n» 👨‍🦰Male: ${male} member\n» 👩‍🦰Female: ${nu} ​​member\n» 🕵️‍♂️With ${qtv} admin\n» 💬 Total: ${sl} messages\n» 📈 Engagement: ${mdtt}\n🌟 Total messages yesterday: ${hqua}\n🌟 Total messages today: ${hnay}\ n === 「${timeNow}」 ===`,
        attachment: fs.createReadStream(__dirname + '/cache/box.png')
      },
        threadID,
        () => fs.unlinkSync(__dirname + '/cache/box.png')
      );
    return request(encodeURI(`${threadInfo.imageSrc}`))
      .pipe(fs.createWriteStream(__dirname + '/cache/box.png'))
      .on('close', () => callback());
}break;    
          case "22": {
           var KMath = (data) => data.reduce((a, b) => a + b, 0);
    var inbox = await api.getThreadList(100, null, ['INBOX']);
    let xx = [...inbox].filter(group => group.isSubscribed && group.isGroup);
         var kho = [],search=[],count = [];
             for (let n of xx) {
          var threadInfo = n.name;
                     var threadye = n.messageCount;
             kho.push({"name" : threadInfo, "exp": (typeof await threadye == "undefined") ? 0 : await threadye});
     }
     kho.sort(function (a, b) { return b.exp - a.exp; });
        for(let num = 0; num < 8; num++) {
             search.push("'" + kho[num].name + "'");
         count.push(kho[num].exp);
     }
     const { createReadStream, unlinkSync, writeFileSync,statSync } = require("fs-extra");
         var axios = require('axios');
             var path = __dirname + `/cache/chart.png`;
                 var full = await KMath(count);
                 var url = `https://quickchart.io/chart?c={type:'doughnut',data:{labels:[${encodeURIComponent(search)}],datasets:[{label:'${encodeURIComponent('interact')}',data:[${encodeURIComponent(count)}]}]},options:{plugins:{doughnutlabel:{labels:[{text:'${full}',font:{size:26}},{text:'${encodeURIComponent('total')}'}]}}}}`;
             const { data: stream } = await axios.get(url, {  method: 'GET',  responseType: 'arraybuffer' });
         writeFileSync(path, Buffer.from(stream, 'utf-8'));
     return api.sendMessage({ body: '[🌺] Top interactive boxes',attachment: createReadStream(path)},event.threadID,event.messageID);
}break;
          case "23": {
           if (Object.keys(event.mentions) == 0) return api.sendMessage(`https://www.facebook.com/profile.php?id=${event.senderID}`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: https://www.facebook.com/profile.php?id=${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}break;
          case "24": {
            let threadInfo = await api.getThreadInfo(event.threadID);
          var inbox = await api.getThreadList(300, null, ["INBOX"]);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

var abc = "[🌺] List of participating bots [🌺]\n\n"; let i = 0;
  for (var groupInfo of list) {
    abc += `${i+=1}. ${groupInfo.name}\n[🌺] ID BOX: ${threadInfo.threadID}\•┄┅════❁🌺❁════┅┄•\n`;
  }
  api.sendMessage(abc, event.threadID);
}break;
  }
   }
 }
}

module.exports.handleEvent = async ({ api, event }) => {
  if (!fs.existsSync(totalPath)) fs.writeFileSync(totalPath, JSON.stringify({}));
  let totalChat = JSON.parse(fs.readFileSync(totalPath));
  if (!totalChat[event.threadID]) return;
  if (Date.now() - totalChat[event.threadID].time > (_24hours * 2)) {
    let sl = (await api.getThreadInfo(event.threadID)).messageCount;
    totalChat[event.threadID] = {
      time: Date.now() - _24hours,
      count: sl,
      ytd: sl - totalChat[event.threadID].count
    }
    fs.writeFileSync(totalPath, JSON.stringify(totalChat, null, 2));
  }
}
