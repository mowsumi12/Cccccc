module.exports.config = {
  name: "pair5",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nazrul",
  description: "Made by  Nazrul",
  commandCategory: "Love",
  usages: "",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 5
}

module.exports.run = async function ({ args, Users, Threads, api, event, Currencies }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/backgrdg.jpg";
  let pathAvt1 = __dirname + "/cache/Avtmot.png";
  let pathAvt2 = __dirname + "/cache/Avthai.png";

  var id1 = event.senderID;
  var name1 = await Users.getNameUser(id1);
  var ThreadInfo = await api.getThreadInfo(event.threadID);
  var all = ThreadInfo.userInfo
  for (let c of all) {
    if (c.id == id1) var gender1 = c.gender;
  };
  const botID = api.getCurrentUserID();
  let ungvien = [];
  if(gender1 == "FEMALE"){
    for (let u of all) {
      if (u.gender == "MALE") {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
      }
    }
  }
  else if(gender1 == "MALE"){
    for (let u of all) {
      if (u.gender == "FEMALE") {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
      }
    }
  }
  else {
  for (let u of all) {
      if (u.id !== id1 && u.id !== botID) ungvien.push(u.id)
    }
  }
  var id2 = ungvien[Math.floor(Math.random() * ungvien.length)];
  var name2 = await Users.getNameUser(id2);
  var rd1 = Math.floor(Math.random() * 100) + 1;
  var cc = ["0", "-1", "99,99", "-99", "-100", "101", "0,01"];
  var rd2 = cc[Math.floor(Math.random() * cc.length)];
  var djtme = [`${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd2}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`];

  var tile = djtme[Math.floor(Math.random() * djtme.length)];

  var background = [
  "https://i.ibb.co/HBMW219/received-837643270966717.jpg"
  ];
  var rd = background[Math.floor(Math.random() * background.length)];

  let getAvtmot = (
    await axios.get(
      `https://graph.facebook.com/${id1}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

  let getAvthai = (
    await axios.get(
      `https://graph.facebook.com/${id2}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt2, Buffer.from(getAvthai, "utf-8"));

  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));

  let baseImage = await loadImage(pathImg);
  let baseAvt1 = await loadImage(pathAvt1);
  let baseAvt2 = await loadImage(pathAvt2);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 5, 5, canvas.width, canvas.height);
  ctx.drawImage(baseAvt1, 28, 140, 277, 370);
  ctx.drawImage(baseAvt2, 339, 140, 284, 370);
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvt1);
  fs.removeSync(pathAvt2);
  return api.sendMessage({ body: `𝐂𝐎𝐍𝐆𝐑𝐀𝐓𝐔𝐋𝐀𝐓𝐈𝐎𝐍𝐒\n━━━━━━━━━━━━━━━━\nআসসালামু আলাইকুম, \n${name1}\n𝐋𝐎𝐕𝐄 𝐖𝐈𝐓𝐇\n${name2}\nআই  ${tile}% লাব ইউ \n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 ━➢ 𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐡𝐚𝐭`,
            mentions: [{
          tag: `${name2}`,
          id: id2
        }], attachment: fs.createReadStream(pathImg) },
      event.threadID,
      () => fs.unlinkSync(pathImg),
      event.messageID);
    }
