const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_55_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMwLFxuICAgICAgICA1MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkyLFxuICAgICAgICA5OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODMsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk4LFxuICAgICAgICAyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICA0MixcbiAgICAgICAgMTczLFxuICAgICAgICA1OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9XeUJhd2JsNGNFenowNlV1RGkvSjhkY1F4SWd2S0ZMdmJqMTkxSmU0ems9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDQ3NTg0NDc2MDM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDNjk1RDA4QTlCMzhEMTFDRjhCMEEwNEVFMUMzRjQ0N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5MzQxMTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0NDc1ODQ0NzYwMzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU5QjYxNTFCMDI0MzA1MDUzOTMzNTAzOTUyMjRFRDRFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzkzNDExN1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIYV9JZDFFblI5NnRFR0J6WHB6ZmpBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNiOTY5ODYwLTkwMzktNDQyOC04NjBhLTRjMWMzYmZlNWY1N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NCxcbiAgICAgIDU1LFxuICAgICAgMTMzLFxuICAgICAgMjQ4LFxuICAgICAgMTk4LFxuICAgICAgMTY5LFxuICAgICAgMTc2LFxuICAgICAgMTM0LFxuICAgICAgODksXG4gICAgICAxMSxcbiAgICAgIDIzMSxcbiAgICAgIDE1MixcbiAgICAgIDI1MyxcbiAgICAgIDE2MyxcbiAgICAgIDExNCxcbiAgICAgIDk0LFxuICAgICAgMjAzLFxuICAgICAgMTIxLFxuICAgICAgMTU4LFxuICAgICAgM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAxNTEsXG4gICAgICA1NyxcbiAgICAgIDEzLFxuICAgICAgMTA1LFxuICAgICAgMTY4LFxuICAgICAgNzksXG4gICAgICAxNDYsXG4gICAgICAyMTMsXG4gICAgICA2NSxcbiAgICAgIDkxLFxuICAgICAgMTAyLFxuICAgICAgNTUsXG4gICAgICAxODMsXG4gICAgICAxNSxcbiAgICAgIDE0NCxcbiAgICAgIDE2NCxcbiAgICAgIDIzOSxcbiAgICAgIDEwOCxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlkyTjg0RllMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0NDc1ODQ0NzYwMzc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzgwNDg2MTU1MTQyMTk6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJTaGXKiGFhbiA6dlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BuMnB2TUhFSnV3bHJNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWTI2cU8xYUlDdVhYbUpTSzJSM2JjN3JsUTN4ZEpPbG1vOUVLU1l5WThWST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJXWHpQOXFKb0VMUFYyUjFSK1lGN3hxOWdTc1F6ZnVPSDBPaVk5dlF0elJCTmdIZllLKzUvVU11SVhxSWtYc3pIeDdvNjg5bk1zdTI2YTBiMHBvSFNDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkdG5SWmJlN2ZPdmhNSnZhcThFbzQwWU1MQ1FYRDhrdEpHKytwMW1ZR0pDNy9yOU90a2E1MDAzeEpVb2dIQmt5dFNyUXIxSENLMXJwSlhNWmkrVG5pZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0NDc1ODQ0NzYwMzc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc5MzQxMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBZ0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFnTC5qc29uIjogIntcImtleURhdGFcIjpcImZEa3IzMGptUkxKUDhZUVNYd3psdVAxY3UyZGd4SWJwR3RwUlRZb0FIcms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyMDg1ODQ4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3OTMwNzk3NDI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
