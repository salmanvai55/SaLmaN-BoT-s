const fs = require("fs");
module.exports = {
  config:{
	name: "npx3",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
  const NAYAN = ['https://i.imgur.com/LLucP15.mp4',
		 'https://i.imgur.com/DEBRSER.mp4',
		"https://i.imgur.com/8jJJcfA.mp4",
                "https://i.imgur.com/hc8Ed6F.mp4",
                "https://i.imgur.com/9OlKrSQ.mp4",
                "https://i.imgur.com/rPOCiNG.mp4",
                "https://i.imgur.com/LMx3GRL.mp4",
                "https://i.imgur.com/EpSBt3r.mp4",
                "https://i.imgur.com/1iaf4A8.mp4",
                "https://i.imgur.com/36e6ZGT.mp4"
		]
    var rndm = NAYAN[Math.floor(Math.random() * NAYAN.length)];
const media = (
    await axios.get(
      `${rndm}`,
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("🥰")==0 || body.indexOf("🤩")==0 || body.indexOf("😍")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0 || body.indexOf(" ")==0) {
		var msg = {
				body: "🖤🥀",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
