module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100010841740515") {
    var aid = ["100010841740515"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _সালমান বস এর মন মন ভালো নেই আস্কে-!💔🥀", "- আমার বস সালমান এর সাথে কেউ সেক্স করে না থুক্কু টেক্স করে নাহ🫂💔", "আমার বস সালমান এর একটা প্রিয়র খুব দরকার কারন আমার বস সালমান এর চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣","আমার বস সালমান কে এত মেনশন না দিয়ে ইনবক্স এ যাও হট করে দিবো🤷‍ঝাং 😘🥒","আমার বস সালমান কে Mantion_দিলে চুম্মাইয়া ঠুটের কালার change কইরা,লামু 💋😾😾🔨","আমার বস সালমান কে ম্যানশন দেশ কেনো আমার বস সালমান এর মুড ভালো নেই😭😭","সালমান বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া আমার সিংগেল সালমান বস রে একটা গফ দে 😒😏","আমার বস কে Mantion_না দিয়ে সিরিয়াস প্রেম করতে চাইলে ইনবক্স এ যাও🫦💦","আমার বস সালমান কে মেনশন দিসনা পারলে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না সালমান প্রচুর বিজি 🥵🥀🤐","আমার বস সালমান চুমু খাওয়ার বয়স টা  চকলেট🍫খেয়ে উড়িয়ে দিলো🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
