module.exports.config = {
  name: "রিয়া",
  version: "0.0.2",
  hasPermssion: 0,
  credits: "nazrul",
  description: "fun",
  commandCategory: "admin",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Users }) {
    const axios = require("axios");
    const request = require("request");
    const fs = require("fs-extra");
    const prompt = args.join(" ");
    var id = event.senderID;
    var name = await Users.getNameUser(event.senderID);
    var tl = ["🍒)⎯⃝লিৃ্ঁপৃ্ঁ কিৃ্ঁসৃ্ঁ কৃ্ঁরুৃ্ঁমৃ্ঁ আৃ্ঁয়ৃ্ঁ🥺","⎯͢⎯⃝🩵 খাৃ্ঁলি্ঁ ডাৃ্ঁকেঁ দেৃ্ঁখ্ঁ তো্ঁ কে্ঁম্ঁন্ঁ ডা্ঁ লা্ঁগে্ঁ😒🌚🔪⎯͢⎯⃝💚","≛⃝🌺উ্ঁফ্ঁস্ঁ জা্ঁনস্ঁ✿︎'ন্ঁক্ঁ দি্ঁও্ঁ কি্ঁন্তুু্ঁ༉༐༐🌺🥺","🙄🙄★≛⃝🌸🍂◄──⃜⃜͢͢⎼⎼⎼⃡⃝⃨ ছ্যাকা খাইলে নক দিছ শান্তনা দিবো 🙄🙄★≛⃝🌸🍂","༎⎯͢⎯⃝দেৃ্ঁখৃ্ঁতেৃ্ঁ কিৃ্ঁ কৃ্ঁমৃ্ঁ সুৃ্ঁন্দৃ্ঁরৃ্ঁ ছিৃ্ঁলাৃ্ঁমৃ্ঁ রেৃ্ঁ প্রৃ্ঁপোৃ্ঁজৃ্ঁ কৃ্ঁরৃ্ঁলিৃ্ঁ নাৃ্ঁ যেৃ্ঁ•⎯͢⎯⃝🩷😾🪽🪄","┉❈🐰⋆⃝চলো রিলেশন সিপ স্ট্যাটাস দেয়🙈❈┄","•⎯͢⎯⃝🩷  ꙰আ্ঁসো্ঁ সো্ঁনা্ঁ ⋆⃝প্রে্ঁম্ঁ 𝄞⋆⃝ক্ঁরি্ঁ༎🐰ক্ঁরি্ঁ 🙊"," উপস সোনা তুমি এত কিউট কেন🙈💋","𝄞⋆⃝🥵খাৃঁখাৃঁ আৃঁমাৃঁয়ৃঁ 𝄞⋆⃝চুৃঁইৃঁষা 𝄞⋆⃝চুৃঁঁইৃঁষা খাৃঁ❥᭄🤤 ⑅⃝🌺","𝄞⋆⃝🥵⋆⃝বা্ঁবু্ঁতো্ঁমা্ঁর্ঁ𝄞⋆⃝অ্ঁলি্ঁতে্ঁ গ্ঁলি্ঁতে্ঁ লা্ঁভ্ঁ ই্ঁউ্ঁ🥵⋆⃝𝄞⋆⃝","𝄞⋆⃝🥵⋆⃝বা্ঁবু্ঁ এ্ঁই্ঁতো্ঁ 𝄞⋆⃝আ্ঁমি্ঁ দে্ঁখা্ঁ যা্ঁয়্ঁ🥵⋆⃝𝄞⋆⃝","𝄞⋆⃝🥵ওঁগোৃ্ঁ𝄞⋆⃝ কিৃ্ঁ রাৃ্ঁন্না্ৃঁ 𝄞⋆⃝ক্ঁর্ঁছো্ঁ𝄞⋆⃝ আ্ঁজ্ঁকে্ঁ.𝄞⋆⃝😝","𝄞⋆⃝🥵চু্ঁম্মা্ঁ𝄞⋆⃝চু্ঁম্মি্ঁ 𝄞⋆⃝স্কু্ঁল্ঁ 𝄞⋆⃝থে্ঁকে্ঁ 𝄞⋆⃝অ্ঁটো্ঁ𝄞⋆⃝পা্ঁস্ঁ𝄞⋆⃝ ক্ঁর্ঁছি্ঁ𝄞⋆⃝🥵","𝄞⋆⃝🥵জা্ঁন্স্ঁ 𝄞⋆⃝কোৃঁলেৃঁ 𝄞⋆⃝নাৃঁওৃঁ❥᭄ ⑅⃝🌺😻","❥᭄ ⑅⃝🌺উৃঁম্মাৃঁ𝄞⋆⃝দিৃঁলেৃঁ𝄞⋆⃝চৃঁকৃঁলেৃঁটৃঁ দিৃঁমুৃঁ❥᭄🤤 ⑅⃝🌺" ,];
    var rand = tl[Math.floor(Math.random() * tl.length)];
const body = event.body ? event.body.toLowerCase() : ""
    if(body.startsWith("baby") || body.startsWith("bby") || body.startsWith("janu")){
    if (!prompt) return api.sendMessage(`${name}\n ${rand}`, event.threadID, event.messageID);
    const res = await axios.get(`https://www.noobs-api.000.pe/dipto/baby?text=${prompt}`);
    const respond = res.data.reply;
    return api.sendMessage( respond, event.threadID, event.messageID);
};
