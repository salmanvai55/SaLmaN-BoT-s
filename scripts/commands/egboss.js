const fs = require("fs");
module.exports = {
  config:{
  name: "farhan",
        version: "1.0.1",
        prefix: false,
  permssion: 0,
  credits: "nayan", 
  description: "Fun",
  category: "no prefix",
  usages: "farhan",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  if (body.indexOf("Salman")==0 || body.indexOf("SALMAN")==0 || body.indexOf("ফারহান")==0 || body.indexOf("farhan")==0) {
    var msg = {
        body: "👉আমার বস♻️ 𓆩𝐒𝐀𝐋𝐌𝐀𝐍𓆪 এখন বিজি আছে । তার ইনবক্সে এ মেসেজ দিয়ে রাখো ‎‎‎‎‎‎‎‎‎https://www.facebook.com/profile.php?id=100001681392427&mibextid=eBUYbo🔰♪√বস ফ্রি হলে আসবে🧡😁😜🐒",
        attachment: fs.createReadStream(__dirname + `/Nayan/boss.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    }
  },
  start: function({ nayan }) {

  }
} 
