module.exports.config = {
  name: "ajan",
  version: "2.0",
  hasPermssion: 0,
  credits: "Islamick chat",
  description: "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  commandCategory: "AutoTime",
  countDown: 3
};

module.exports.onLoad = async ({ api }) => {
  const timerData = {
    "05:00 AM": {
      message: ".   ╭┄┅══❁🌺❁══┅┄╮\n•—»✨ফজরে আজান✨«—•\n   ╰┄┅══❁🌺❁══┅┄╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      url: "https://i.imgur.com/ExHFW9D.mp4"
    },
"12:55 PM": {
      message: ".   ╭┄┅══❁🌺❁══┅┄╮\n•—»✨জোহরের আজান✨«—•\n  ╰┄┅══❁🌺❁══┅┄╯\n\n•⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      url: "https://i.imgur.com/KC4Nh0u.mp4"
    },
    "03:55 PM": {
      message: ". ╭┄┅══❁🌺❁══┅┄╮\n•—»✨আসর আজান✨«—•\n  ╰┄┅══❁🌺❁══┅┄╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      url: "https://i.imgur.com/aPrzSns.mp4"
    },
    "06:20 PM": {
      message: ".   ╭┄┅══❁🌺❁══┅┄╮\n•—» মাগরিব আজান «—•\n  ╰┄┅══❁🌺❁══┅┄╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      url: "https://i.imgur.com/05HEHuY.mp4"
    },
    "07:25 PM": {
      message: "╭┄┅══❁🌺❁══┅┄╮\n•—» ইশা আজান «—•\n╰┄┅══❁🌺❁══┅┄╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⋆✦⋆",
      url: "https://i.imgur.com/Q26yXXi.mp4"
    }
  };

  const checkTimeAndSendMessage = async () => {
    const currentTime = new Date(Date.now() + 21600000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).split(',').pop().trim();

    if (timerData[currentTime]) {
      console.log(timerData[currentTime].message);
      console.log(timerData[currentTime].url);
      try {
       let messageData = { body: timerData[currentTime].message,attachment:(await require('axios').get(timerData[currentTime].url, { responseType: 'stream' })).data };

        global.data.allThreadID.forEach(i => api.sendMessage(messageData, i));
      } catch (error) {
        console.error(`Failed to send message for time ${currentTime}:`, error);
      }
    }
    setTimeout(checkTimeAndSendMessage, 55000);
  };

  checkTimeAndSendMessage();
};

module.exports.run= ({}) => {};
