      const axios = require("axios");

      module.exports.config = {
      name: "gen",
      author: "nazrul", 
      commandCategory: " img",
      category: "realstic",
      prefix: false, 
      usePrefix: false,
      hasPermssion: 0,

      };
      module.exports.run = async function ({api, event, args }) {
const nazrula = args.join(" ");
         try {
      if (!nazrula) return api.sendMessage("[🤍] 𝘱𝘳𝘰𝘷𝘪𝘥𝘦 𝘺𝘰𝘶𝘳 𝘱𝘳𝘰𝘮𝘰𝘵𝘦",event.threadID, event.messageID);
      api.sendMessage("[🤍] 𝘐𝘮𝘢𝘨𝘦 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘪𝘯𝘨,  𝘸𝘢𝘪𝘵...",event.threadID, event.messageID);
      const resp = await axios.get(`https://dall-e-tau-steel.vercel.app/kshitiz?prompt=l${nazrula}`)
      const nazrul = resp.data.response;
      const stream = await axios.get(nazrul,{responseType: "stream"})
         api.sendMessage({attachment:stream.data}, event.threadID, event.messageID);

      }
   catch(err) {
      api.sendMessage(`error:  ${err.message}`,event.threadID, event.messageID)

   }
}
