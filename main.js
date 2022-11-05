const imgPath = "./images/";
const TOTAL_DOMAINS = 4;

let dayOfTheWeek = new Date().toLocaleDateString('en-us', {weekday:"long"});
document.querySelector(".day").textContent = dayOfTheWeek;

//TODO:
// Factor in server reset time at 3am
// Move this whole thing to a db

// ******* Mon/Thu *******

const freedom = {
    character: ["Aloy", "Amber", "Barbara", "Diona", "Klee", "Sucrose", "Tartaglia", "Traveler"],
    image: ["aloy.webp", "amber.webp", "barbara.webp", "diona.webp", "klee.webp", "sucrose.webp", "tartaglia.webp", "aether.webp"],
    domain: "Forsaken Rift",
    book: "freedom",
    day: ["Monday", "Thursday"]
}

const prosperity = {
    character: ["Keqing", "Ningguang", "Qiqi", "Shenhe", "Traveler", "Xiao", "Yelan"],
    image: ["keqing.webp", "ningguang.webp", "qiqi.webp", "shenhe.webp", "aether.webp", "xiao.webp", "yelan.webp"],
    domain: "Taishan Mansion",
    book: "prosperity",
    day: ["Monday", "Thursday"]
}

const transience = {
    character: ["Kokomi", "Heizou", "Thoma", "Yoimiya"],
    image: ["kokomi.webp", "heizou.webp", "thoma.webp", "yoimiya.webp"],
    domain: "Violet Court",
    book: "transience",
    day: ["Monday", "Thursday"]
}

const admonition = {
    character: ["Candace", "Cyno", "Tighnari", "Traveler"],
    image: ["candace.webp", "cyno.webp", "tighnari.webp", "aether.webp"],
    domain: "Steeple Of Ignorance",
    book: "admonition",
    day: ["Monday", "Thursday"]
}

// ******* Tue/Fri *******

const resistance = {
    character: ["Bennett", "Diluc", "Eula", "Jean", "Mona", "Noelle", "Razor"],
    image: ["bennett.webp", "diluc.webp", "eula.webp", "jean.webp", "mona.webp", "noelle.webp", "razor.webp"],
    domain: "Forsaken Rift",
    book: "resistance",
    day: ["Tuesday", "Friday"]
}

const diligence = {
    character: ["Chongyun", "Ganyu", "Hu Tao", "Kazuha", "Xiangling", "Yun Jin"],
    image: ["chongyun.webp", "ganyu.webp", "hutao.webp", "kazuha.webp", "xiangling.webp", "yunjin.webp"],
    domain: "Taishan Mansion",
    book: "diligence",
    day: ["Tuesday", "Friday"]
}

const elegance = {
    character: ["Itto", "Ayaka", "Ayato", "Kujou Sara", "Kuki Shinobu"],
    image: ["itto.webp", "ayaka.webp", "ayato.webp", "kujousara.webp", "kukishinobu.webp"],
    domain: "Violet Court",
    book: "transience",
    day: ["Tuesday", "Friday"]
}

const ingenuity = {
    character: ["Dori"], // add "Nahida" when in-game portrait available
    image: ["dori.webp"],
    domain: "Steeple Of Ignorance",
    book: "ingenuity",
    day: ["Tuesday", "Friday"]
}

// ******* Wed/Sat *******

const ballad = {
    character: ["Albedo", "Fischl", "Kaeya", "Lisa", "Rosaria", "Venti"],
    image: ["albedo.webp", "fischl.webp", "kaeya.webp", "lisa.webp", "rosaria.webp", "venti.webp"],
    domain: "Forsaken Rift",
    book: "ballad",
    day: ["Wednesday", "Saturday"]
}

const gold = {
    character: ["Beidou", "Xingqiu", "Xinyan", "Yanfei", "Zhongli"],
    image: ["beidou.webp", "xingqiu.webp", "xinyan.webp", "yanfei.webp", "zhongli.webp"],
    domain: "Taishan Mansion",
    book: "gold",
    day: ["Wednesday", "Saturday"]
}

const light = {
    character: ["Gorou", "Raiden", "Sayu", "Yae Miko"],
    image: ["gorou.webp", "raiden.webp", "sayu.webp", "yaemiko.webp"],
    domain: "Violet Court",
    book: "light",
    day: ["Wednesday", "Saturday"]
}

const praxis = {
    character: ["Collei", "Nilou", "Traveler"],
    image: ["collei.webp", "nilou.webp", "aether.webp"],
    domain: "Steeple Of Ignorance",
    book: "praxis",
    day: ["Wednesday", "Saturday"]
}

const charactersSection = document.querySelector(".characters");

// Create divs for each domain section
for (let i = 0; i < TOTAL_DOMAINS; i++) {
    let div = document.createElement("div");
    div.classList.add("char");
    div.classList.add(`sec${i}`);
    charactersSection.appendChild(div);
}

// Take talent book name and section (created above) as arguments, and create character images in that section
function showCharacters(talentBook, section) {
    for (i = 0; i < talentBook.character.length; i++) {
        let sec = document.querySelector(section);
        let figure = document.createElement("figure");
        sec.appendChild(figure);
        let img = document.createElement("img");
        img.src = imgPath + talentBook.image[i];
        img.alt = talentBook.character[i];
        figure.appendChild(img);
        let caption = document.createElement("figcaption");
        figure.appendChild(caption).textContent = talentBook.character[i];
    }
}

function showDomainInfo(talentBook, section) {
    let sec = document.querySelector(section);
    let p = document.createElement("p");
    p.textContent = `${talentBook.book} @ ${talentBook.domain}`;
    sec.appendChild(p);
}

// Check what day it is and loop through characters for each talent book
if (dayOfTheWeek === "Monday" || dayOfTheWeek === "Thursday") {
    showDomainInfo(freedom, ".sec0");
    showCharacters(freedom, ".sec0");
    showDomainInfo(prosperity, ".sec1");
    showCharacters(prosperity, ".sec1");
    showDomainInfo(transience, ".sec2");
    showCharacters(transience, ".sec2");
    showDomainInfo(admonition, ".sec3");
    showCharacters(admonition, ".sec3");
}

if (dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Friday") {
    showDomainInfo(resistance, ".sec0");
    showCharacters(resistance, ".sec0");
    showDomainInfo(diligence, ".sec1");
    showCharacters(diligence, ".sec1");
    showDomainInfo(elegance, ".sec2");
    showCharacters(elegance, ".sec2");
    showDomainInfo(ingenuity, ".sec3");
    showCharacters(ingenuity, ".sec3");
}

if (dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Saturday") {
    showDomainInfo(ballad, ".sec0");
    showCharacters(ballad, ".sec0");
    showDomainInfo(gold, ".sec1");
    showCharacters(gold, ".sec1");
    showDomainInfo(light, ".sec2");
    showCharacters(light, ".sec2");
    showDomainInfo(praxis, ".sec3");
    showCharacters(praxis, ".sec3");
}

if (dayOfTheWeek === "Sunday") {
    let sec = document.querySelector(".sec0");
    let p = document.createElement("p");
    p.classList.add("sunday");
    sec.appendChild(p).textContent = "All of them! 👀";
    img = document.createElement("img");
    img.src = imgPath + "bennett-assemble.gif";
    sec.appendChild(img);
}
