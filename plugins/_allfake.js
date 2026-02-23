import fs from "fs";
import fetch from "node-fetch";
import moment from "moment-timezone";
import axios from "axios";
import speed from "performance-now";

let handler = (m) => m;
handler.all = async function (m) {
  const conn = this;

  let name = await conn.getName(m.sender);
  let pp = "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
  let logo = "https://files.catbox.moe/hnbuh3.jpg";
  let namebot = "SILANA LITE AI";
  let sig = "https://instagram.com/noureddine_ouafy"; // رابط الانستغرام

  try {
    // لو عايز تجيب صورة الشخص
    // pp = await conn.profilePictureUrl(m.sender, "image");
  } catch (e) {
    console.error(e);
  } finally {
    global.emror = logo;

    global.doc = pickRandom([
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/msword",
      "application/pdf",
    ]);

    global.fsizedoc = pickRandom([2000, 3000, 2023000, 2024000]);

    global.axios = (await import("axios")).default;
    global.fetch = (await import("node-fetch")).default;
    global.cheerio = (await import("cheerio")).default;
    global.fs = (await import("fs")).default;

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let ms = await latensi.toFixed(4);
    const _uptime = process.uptime() * 1000;

    global.fkon = {
      key: {
        fromMe: false,
        participant: m.sender,
        ...(m.chat
          ? {
              remoteJid: "status@broadcast",
            }
          : {}),
      },
      message: {
        contactMessage: {
          displayName: `${name}`,
          vcard: `BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
item1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}
item1.X-ABLabel:Ponsel
END:VCARD`,
        },
      },
    };

    global.fVerif = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
      },
      message: {
        conversation: `_${namebot} تم التحقق عن طريق الواتساب_`,
      },
    };

    global.ephemeral = "86400";

    global.ucapan = ucapan();
    global.botdate = date();

    // ✅ التعديل المهم هنا
    global.adReply = {
      contextInfo: {
        forwardingScore: 200,
        isForwarded: true,
        externalAdReply: {
          mediaUrl: sig, // رابط الانستغرام
          mediaType: 2,
          previewType: "PHOTO",
          title: namebot,
          body: global.ucapan,
          thumbnail: await (await fetch(logo)).buffer(), // صورة المعاينة
          sourceUrl: sig, // يفتح القناة عند الضغط
          renderLargerThumbnail: true,
        },
      },
    };

    global.fakeig = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          mediaUrl: sig,
          mediaType: 2,
          previewType: "PHOTO",
          title: namebot,
          body: global.ucapan,
          thumbnail: await (await fetch(pp)).buffer(),
          sourceUrl: sig,
          renderLargerThumbnail: true,
        },
      },
    };
  }
};

export default handler;

function date() {
  let d = new Date(new Date() + 3600000);
  let locale = "id";
  let week = d.toLocaleDateString(locale, { weekday: "long" });
  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return `${week}, ${date}`;
}

function ucapan() {
  const time = moment.tz("Africa/Casablanca").format("HH");
  let res = "اضغط هنا لمتابعة صاحب البوت";
  if (time >= 4) res = "اضغط هنا لمتابعة صاحب البوت";
  if (time > 10) res = "اضغط هنا لمتابعة صاحب البوت";
  if (time >= 15) res = "اضغط هنا لمتابعة صاحب البوت";
  if (time >= 18) res = "اضغط هنا لمتابعة صاحب البوت";
  return res;
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
