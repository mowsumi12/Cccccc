   module.exports.config = {
  name: "bani",
  version: "1.2.8",
  hasPermssion: 0,
  credits: "Islamick Chat", //Don't chinge The credit
  description: "all islamick information",
  commandCategory: "Utilities",
  usages: "bani",
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
  let dirMaterial = __dirname + `/noprefix/amol/`; 
  if (!existsSync(dirMaterial + "noprefix" + "amol")) mkdirSync(dirMaterial, { recursive: true });

  if (!existsSync(dirMaterial + "mm.jpg")) request("https://i.imgur.com/hR0it3b.jpg").pipe(createWriteStream(dirMaterial + "mm.jpg"))

  if (!existsSync(dirMaterial + "tt.jpg")) request("https://i.imgur.com/an55AjS.jpg").pipe(createWriteStream(dirMaterial + "tt.jpg"))

  if (!existsSync(dirMaterial + "gg.jpg")) request("https://i.imgur.com/6cYefRT.jpg").pipe(createWriteStream(dirMaterial + "gg.jpg"))

  if (!existsSync(dirMaterial + "pp.jpg")) request("https://i.imgur.com/Eo3iuiD.jpg").pipe(createWriteStream(dirMaterial + "pp.jpg"))

  if (!existsSync(dirMaterial + "aa.jpg")) request("https://i.imgur.com/2EuxYZu.jpg").pipe(createWriteStream(dirMaterial + "aa.jpg"))

  if (!existsSync(dirMaterial + "kk.jpg")) request("https://i.imgur.com/Cz4A7W4.jpg").pipe(createWriteStream(dirMaterial + "kk.jpg"))

  if (!existsSync(dirMaterial + "yy.jpg")) request("https://i.imgur.com/H3gV5rE.jpg").pipe(createWriteStream(dirMaterial + "yy.jpg"))

  if (!existsSync(dirMaterial + "ss.jpg")) request("https://i.imgur.com/qR4J8PC.jpg").pipe(createWriteStream(dirMaterial + "ss.jpg"))

  if (!existsSync(dirMaterial + "hh.jpg")) request("https://i.imgur.com/nJxtFXI.jpg").pipe(createWriteStream(dirMaterial + "hh.jpg"))

  if (!existsSync(dirMaterial + "nn.jpg")) request("https://i.imgur.com/P1AFWty.jpg").pipe(createWriteStream(dirMaterial + "nn.jpg"))

  if (!existsSync(dirMaterial + "vv.jpg")) request("https://i.imgur.com/6Io2uyW.jpg").pipe(createWriteStream(dirMaterial + "vv.jpg"))

  if (!existsSync(dirMaterial + "cc.jpg")) request("https://i.imgur.com/hJ5nfUa.jpg").pipe(createWriteStream(dirMaterial + "cc.jpg"))

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
        body: "তাহাজ্জুদ নামাজ পড়ে কিছু চেয়েছেন আর ভাবছেন সেটা কবুল হবে নাকি হবে না!\nএমন ভাবনা ভাবাটা বড়ই বোকামী আর তায়াক্কুলের অভাব!!\n\nকারন সবাই তাহাজ্জুদ পড়ার তৌফিক পায় না! আর যেখানে আল্লাহ স্বয়ং শেষরাতে প্রথম আকাশে এসে বলতে থাকেন যে কেউ কি আছে যে আমার কাছে চাইবে, আমি তাকে তাই দিব, সেখানে দোয়া কবুল হবে না কিভাবে? অবশ্যই হবে,\nইনশাল্লাহ ❤\n\n- সংগৃহিত", 
        attachment: createReadStream(__dirname + `/noprefix/amol/mm.jpg`)
      }, threadID, messageID);
      break;

    case "2":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "🚫রিসেন্টলি নওরিন নামের এক টিকটকার এর নোংরা ভিডিও নিয়ে মাতামাতি দেখছি।সে আজ তার পেজে এসে বলল এটা নাকি এআই এডিটেড।এটা নায়ে আরো অনেকে প্রমাণসহ দেখিয়েছে যে সত্যিকারের ভিডিওটি অন্য মেয়ের যেখানে নওরিন এর ফেস এআই দ্বারা প্রতিস্থাপিত করা হয়েছে।\nজাস্ট ইমেজিন কতটা রিয়েলিস্টিক ভাবে এআই শুধুমাত্র আপনার ফেস দিয়ে একটি ভিডিও আনতে পারে।আপনি হিজাব পরে হোক বা হিজাব ছাড়া শুধুমাত্র ফেস টা হলেই হবে। নওরিন এবং তার ফেমিলি এখন খুবই ট্রোমাটাইজ।জাস্ট ইমেজিন,এর ভিক্টিম আপনি ও হতে পারেন কিংবা আপনার স্ত্রী অথবা বোন", 
        attachment: createReadStream(__dirname + `/noprefix/amol/tt.jpg`)
      },threadID, messageID);
      break;

    case "3":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "3. #সূরা_আল_বাকারা\n#আয়াত_নংঃ_২০৮\n\nیٰۤاَیُّهَا الَّذِیْنَ اٰمَنُوا ادْخُلُوْا فِی السِّلْمِ كَآفَّةً۪-وَ لَا تَتَّبِعُوْا خُطُوٰتِ الشَّیْطٰنِؕ-اِنَّهٗ لَكُمْ عَدُوٌّ مُّبِیْنٌ  ﴿٢٠٨﴾\n\nউচ্চারণঃ ইয়াআইয়ুহাল্লাযীনা আ-মানুদ খুলূ ফিছছিলমি কাফফাতাওঁ ওয়ালা-তাত্তাবি‘ঊ\nখুতুওয়া-তিশশাইতা-নি ; ইন্নাহু লাকুম ‘আদুওউম মুবীন।\nঅনুবাদঃ হে মু'মিনগণ! তোমরা সর্বাত্মক ভাবে ইসলামে প্রবেশ কর এবং শয়তানের পদাংক অনুসরণ করিও না। নিশ্চয় সে তোমাদের প্রকাশ্য শত্রু।", 
        attachment: createReadStream(__dirname + `/noprefix/amol/gg.jpg`)
      }, threadID, messageID); 
      break;

    case "4":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "4. কেউ খাবার যোগাতে  কাজের সন্ধানে দৌড়াচ্ছে, আবার কেউ অতিরিক্ত খেয়ে, খাবার হজমের জন্য দৌড়াচ্ছে.\n\nগভীর রাতে কারো বিলাসবহুল গাড়ি থামছে নিষিদ্ধ পল্লীতে, ঘরে অপেক্ষারত স্ত্রী দীর্ঘশ্বাস ফেলছে!\n কেউ ভাঙা ঘরে থেকেও স্ত্রীকে নিয়ে অবিরত সুখের স্বপ্ন বুনছে!\n\nকেউ ভাবছে আর কয়েকটা দিন ডিভোর্স পেপারে সাইন করলেই মুক্তি!! কেউ একটা সম্পর্ক টিকিয়ে রাখার জন্য যুদ্ধ করে চলছে.\n\nকেউ সন্তান ডাস্টবিনে ফেলে দিয়ে দায়মুক্ত হতে চাইছে. কেউ একটা সন্তানের জন্য সারাটা জীবন হাহাকার করছে!\n\nকেউ লাখ টাকার ডাইনিং টেবিলে বসেও তৃপ্তি সহকারে ভাত খেতে পারছেনা!\nকেউ পেঁয়াজ, কাঁচামরিচ কচলিয়ে গোগ্ৰাসে ভাত গিলছে.\n\nকারো দামি খাটে শুয়েও আবার ঘুমের ওষুধ খেতে হচ্ছে! কেউ আবার হিমেল হাওয়ায়,রাস্তায়,ওভার ব্রিজে অঘোরে ঘুমোচ্ছে.\n\nকারো পড়ার টেবিলে নতুন বইয়ের সমারোহ কিন্তু পড়তে ইচ্ছে করছেনা.\nকেউ পুরাতন বইয়ের দোকান চষে বেড়াচ্ছে, পকেট খালি বলে!\n\nকেউ দামী গাড়িতে বসে চিন্তিত, সন্তানগুলো মানুষ হলোনা! এতো সম্পত্তি রাখতে পারবেতো?\nকেউ পায়ে হেঁটে পথ চলছে, মনে মনে ভাবছে সন্তানতো মানুষ করতে পেরেছি! আল্লাহ চাইলে, ওরাই জীবনটা এখন গড়ে নিবে.\n\nসত্যিই নানান রঙের মানুষ, নানান রঙের স্বপ্নের ঘুড়ি...!\nতবে শেষ ঠিকানা সাড়ে তিন হাত মাটি।\n\nআল্লাহ আমাদের সবাইকে বুজার তৌফিক দান করুন আমিন ", 
        attachment: createReadStream(__dirname + `/noprefix/amol/pp.jpg`)
      }, threadID, messageID); 
      break;

    case "5":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "5. ইবাদত অন্তরকে নরম—করে; আর অন্তরটা নরম হলে সেই অন্তরের জন্য ইলম গ্রহণ করা সহজ হয়ে যায়। ইলম সেখানে দৃঢ়ভাবে জায়গা করে নেয় এবং প্রভাব ফেলে! আর অন্তর যদি কঠিন ও শুষ্ক হয়, সেই অন্তরেরর জন্য ইলম; গ্রহণ করা কঠিন হয়ে যায়।\n\nইবনু তাইমিয়্যা (রাহিমাহুল্লাহ)\n[মাজমুউল ফাতাওয়া: ৯/৩১৫]", 
        attachment: createReadStream(__dirname + `/noprefix/amol/kk.jpg`)
      }, threadID, messageID); 
      break;

    case "6":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "6. #সূরা_ইউনুস\n#আয়াত_নংঃ_১০৯\n\nوَ اتَّبِـعْ مَا یُوْحٰۤى اِلَیْكَ وَ اصْبِرْ حَتّٰى یَحْكُمَ اللّٰهُ ۚۖ-وَ هُوَ خَیْرُ الْحٰكِمِیْنَ۠  ﴿١٠٩﴾\n\nউচ্চারণঃ ওয়াত্তাবি‘ মা ইঊহাইলাইকা ওয়াসবির হাত্তা-ইয়াহকুমাল্লা-হু ওয়া হুওয়া খাইরুল হা-কিমীন।\n\nঅনুবাদঃ তোমার প্রতি যে ওহী অবতীর্ণ হইয়াছে তুমি তাহার অনুসরণ কর এবং তুমি ধৈর্য ধারণ কর, যে পর্যন্ত না আল্লাহ্ ফয়সালা করেন এবং আল্লাহ্ই সর্বোত্তম বিধানকর্তা।", 
        attachment: createReadStream(__dirname + `/noprefix/amol/ss.jpg`)
      }, threadID, messageID); 
      break;

    case "7":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: " 7. #সূরা_আল_মুলক\n#আয়াত_নংঃ_২৩\n\nقُلْ هُوَ الَّذِیْۤ اَنْشَاَكُمْ وَ جَعَلَ لَكُمُ السَّمْعَ وَ الْاَبْصَارَ وَ الْاَفْـٕدَةَؕ-قَلِیْلًا مَّا تَشْكُرُوْنَ  ﴿٢٣﴾\n\nউচ্চারণঃ কুল হুওয়াল্লাযীআনশাআকুম ওয়া জা‘আলা লাকুমুছছাম‘আ ওয়াল আবসা-রা ওয়াল আফইদাতা কালীলাম মা-তাশকুরূন।\n\nঅনুবাদঃ বল, তিনিই তোমাদেরকে সৃষ্টি করিয়াছেন এবং তোমাদেরকে দিয়াছেন শ্রবণ শক্তি, দৃষ্টি শক্তি ও অন্তকরণ। তোমরা অল্পই কৃতজ্ঞতা প্রকাশ কর।'", 
        attachment: createReadStream(__dirname + `/noprefix/amol/hh.jpg`)
      }, threadID, messageID); 
      break;

    case "8":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "8. আপনার চরিত্র কেমন? একাকী অবস্থায় আপনার আসল চরিত্রই আপনার প্রকৃত চরিত্র। একাকী থাকা অবস্থায় আপনার কাজকর্ম যেমন,আল্লাহর নিকট আপনার আসল মর্যাদা ও তেমন।\n\n(শায়েখ আব্দুল আজিজ আত-তারিফী)\n© সীরাহ 💖", 
        attachment: createReadStream(__dirname + `/noprefix/amol/nn.jpg`)
      }, threadID, messageID); 
      break;

    case "9":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "9. #সূরা_আয_যুমার\n#আয়াত_নংঃ_৬২\n\nاَللّٰهُ خَالِقُ كُلِّ شَیْءٍ٘-وَّ هُوَ عَلٰى كُلِّ شَیْءٍ وَّكِیْلٌ  ﴿٦٢﴾\n\nউচ্চারণঃ আল্লা-হু খা-লিকুকুল্লি শাইয়িওঁ ওয়া হুওয়া ‘আলা-কুল্লি শাইয়িওঁ ওয়াকীল।\n\nঅনুবাদঃ আল্লাহ্ সমস্ত কিছুর স্রষ্টা এবং তিনি সমস্ত কিছুর কর্মবিধায়ক।", attachment: createReadStream(__dirname + `/noprefix/amol/cc.jpg`)
      }, threadID, messageID); 
      break;

    case "10":
                api.unsendMessage(handleReply.messageID);
      api.sendMessage({
        body: "10. #সূরা_আল_জুমুআ\n#আয়াত_নংঃ_৮\n\nقُلْ اِنَّ الْمَوْتَ الَّذِیْ تَفِرُّوْنَ مِنْهُ فَاِنَّهٗ مُلٰقِیْكُمْ ثُمَّ تُرَدُّوْنَ اِلٰى عٰلِمِ الْغَیْبِ وَ الشَّهَادَةِ فَیُنَبِّئُكُمْ بِمَا كُنْتُمْ تَعْمَلُوْنَ۠  ﴿٨﴾\n\nউচ্চারণঃ কুল ইন্নাল মাওতাল্লাযী তাফিররূনা মিনহু ফাইন্নাহূমুলা-কীকুম ছু ম্মা তুরাদ্দূনা ইলা-‘আলিমিল গাইবি ওয়াশ শাহা-দাতি ফাইউনাব্বিউকুম বিমা-কুনতুম তা‘মালূন।\n\nঅনুবাদঃ বল, তোমরা যে মৃত্যু হইতে পলায়ন কর সেই মৃত্যু তোমাদের সঙ্গে অবশ্যই সাক্ষাৎ করিবে। অতঃপর তোমরা প্রত্যানীত হইবে অদৃশ্য ও দৃশ্যের পরিজ্ঞাতা আল্লাহ্‌র নিকট এবং তিনি তোমাদেরকে জানাইয়া দিবেন যাহা তোমরা করিতে।'", 
        attachment: createReadStream(__dirname + `/noprefix/amol/tuất.jpg`)
      }, threadID, messageID); 
      break;

      case "11":
                api.unsendMessage(handleReply.messageID);
      api.sandmessage({
        body:"11. #সূরা_মারইয়াম\n#আয়াত_নংঃ_৪\n\nقَالَ رَبِّ اِنِّیْ وَهَنَ الْعَظْمُ مِنِّیْ وَ اشْتَعَلَ الرَّاْسُ شَیْبًا وَّ لَمْ اَكُنْۢ بِدُعَآىٕكَ رَبِّ شَقِیًّا  ﴿٤﴾\n\nউচ্চারণঃ কা-লা রাব্বি ইন্নী ওয়াহানাল ‘আজমুমিন্নী ওয়াশতা‘আলার রা’ছুশাইবাওঁ ওয়ালাম আকুম বিদু‘আইকা রাব্বি শাকিইইয়া-।\n\nঅনুবাদঃ সে বলিয়াছিল, হে আমার রব! আমার অস্থি দুর্বল হইয়াছে, বার্ধক্যে আমার মস্তক শুভ্রোজ্জ্বল হইয়াছে; হে আমার প্রতিপালক! তোমাকে আহ্বান করিয়া আমি কখনও ব্যর্থকাম হই নাই।", 
        attachment: createReadStream(__dirname + `/noprefix/amol/hợi.jpg`)
      }, threadID, messageID); 
            break;

          default:
        const choose = parseInt(body);
              if (isNaN(body)) return api.sendMessage("•—»✨ Pleaser enter 1 Number ", threadID, messageID);
              if (choose > 12 || choose < 1) return api.sendMessage("•—»✨ Selections  is not in the list", threadID, messageID); 

      }
    }
  }
}

module.exports.run = async ({ api, event, handleReply }) => {
  let fs = require("fs-extra");
  let { threadID, senderID } = event;
  return api.sendMessage({ body: "╭•┄┅════❁🌺❁════┅┄•╮\n  কিছু সুন্দর আল্লাহর বানি-!!💜\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝟏.তাহাজ্জদ  নামাজ এর-বানি \n𝟐AI এর-বানি\n𝟑.সূরা বাকারার-বানি\n𝟒.শেষ ঠিকানার-বানি\n𝟓.ইবাদত এর-বানি\n𝟔.সূরা ইউনুস এর-বানি\n𝟕.সূরা মুলক এর-বানি\n𝟖.প্রকৃত চরিত্রের-বানি\n𝟗.সূরা যুমার-বানি\nএখানে আল্লাহর পবিত্র কিছু বানি দেওয়া আছে এই বারটা টি নাম্বার সংযোগ করে  রিপ্লাই মেসেজ দিন-!!✨🧡"
            }, threadID, (error, info) => {
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: senderID,
            messageID: info.messageID
        })  
    })
  }
