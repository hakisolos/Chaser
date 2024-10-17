//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BKUFNkZE8wTnJ2MDNHVVNHZ3N4YldxU2xDQ3g5TXZCU1djQ0NqS3pIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0lQZjNyd1ZXSjZQQ1pxR3VMWlhtTUxrUmMxNGcxZ3VHYkhoalJpb1ZXaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUHgwSWdXV0ZKS24xYzJUek1tdEV1Z3RDQStqdVVNK0VlZk5mbTQ2YTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzVlVRMHErSkg4TzR1ajVSelg2S05idCsrcHc2ZWdWTjJUeFBRMnFXTlVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldIWHMvd3pJTlZoeVRkRzZsSTN5QmdpM2xHOE1XZ3BnWUpFWnM3dWpXMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJRKzVaa3VoanpIVnV0NmhrTExMMkJzSlNhTWs5N2RsY3VCSktFVGxPU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVAyazNWUU9OaXFVb3JldEJMQk5aSjRZMGxBSjM1QVkvSW1uTExkS0YxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVRoTE5lSlFYRWpNMEY1RE55VTlpczRXdnRXc3JGcUEvVUR0S3d2UndXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxiWnpYSjJQZmUzbmN5aG43bEdFQnVHdjB2OUZ5Rk13WmwrbXFCcU5YSWxGa1NjcEdGWnZjZFRhTWJzQ2x6TVFVWjFqTjdFU0ErVldDUkxEU01mdmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiIyMksyNWlSKzNpZTl5SENQKzVWV0R3T2dKSitUM1BScGtkaXpXRVhNOW40PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5OEtRTFcwMFJRV3BfNWt6ei1fdURBIiwicGhvbmVJZCI6ImFmMWE3YWRiLWJkYTUtNDA0NS04OTA1LWQ2MGEwZjAwMDNhZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJWmRIUUFRUTlsOHpLZ2JycnBxM1ZXMmMvV2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0NWeWNrdU8waEJnNXlCOW43Nmp6bXNYNTRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhIQUI5VFBXIiwibWUiOnsiaWQiOiIyMzQ3MDY4NjcxMDU0OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRHJlYW0gQ2hhc2VyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNM3Z0Y29DRUl1cXdiZ0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIweUNncDdIdlJ0U1NGZkVGUXQ3dW9uajRqRExXb1AzTU5pNUlEOFpCNkNFPSIsImFjY291bnRTaWduYXR1cmUiOiJVUDFaang1SG1FOTRYVyttajByRVMwaE5vUzFrMlRqZGp0ZlBJWEE3Y2ZWY0hPTFhEOWFqaEU3VC9qYkdJZGlZRDZZUnpnbFNvT1JzdjJlT2VLa2FEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ3hLK2krV3NSWGFUYVAyVWIzei9YSmZqZGhPTmdJcTl5eWtvaEg5dDdnR3grc3NyMDhEQTEzN244KzdJQ1g3b0N1a2ZNMTdVaERyZFlIbE0wcE1WZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDY4NjcxMDU0OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZE1nb0tleDcwYlVraFh4QlVMZTdxSjQrSXd5MXFEOXpEWXVTQS9HUWVnaCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTEyMzYwOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDb2wifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
