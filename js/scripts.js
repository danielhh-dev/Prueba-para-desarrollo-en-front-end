const navbarTitles = [
  "NOSOTROS",
  "PRODUCTOS",
  "¿POR QUÉ MONTABIT?",
  "CONTACTO",
];

const titles = [
  "DESARROLLO DE SOFTWARE ESPECIALIZADO EN BITCOIN.",
  "Fundado en 2014, actualmente contamos con una red de cajeros de la marca Cryptobox disponibles en varios puntos de la república.",
  "NOSOTROS",
  "VISION",
  "MISION",
];

const arrowText = "DESCUBRRE MÁS";
const headerBtn = "Contacto";

const paragraphs = [
  "Poner al alcance de todo México transacciones de manera rápida y sencilla, con todos los beneficios que ofrece Bitcoin por medio de productos y servicios de primera calidad.",
  "Desarrollar productos y servicios de fácil y rápido uso, para controlar y administrar tus criptomonedas, desde la palma de tu mano gasta retiro de MXN en nuestra red de cajeros.",
];

const createNavbar = () => {
  navbarTitles.forEach((title) => {
    const a = document.createElement("a");
    const text = document.createTextNode(title);
    a.appendChild(text);
    document.getElementById("primary").appendChild(a);
  });
};

const createHeader = () => {
  const headerTitle = document.createTextNode(titles[0]);
  const headerSubtitle = document.createTextNode(titles[1]);
  document.getElementById("header-title").appendChild(headerTitle);
  document.getElementById("header-subtitle").appendChild(headerSubtitle);
};

const createArrow = () => {
  const arrowTitle = document.createTextNode(arrowText);
  document.getElementById("arrow-title").appendChild(arrowTitle);
};

const createContent = () => {
  const nosotrosTitle = document.createTextNode(titles[2]);
  const visionTitle = document.createTextNode(titles[3]);
  const misionTitle = document.createTextNode(titles[4]);
  const visionContent = document.createTextNode(paragraphs[0]);
  const misionContent = document.createTextNode(paragraphs[1]);
  document.getElementById("nosotros-title").appendChild(nosotrosTitle);
  document.getElementById("vision-title").appendChild(visionTitle);
  document.getElementById("mision-title").appendChild(misionTitle);
  document.getElementById("mision-content").appendChild(visionContent);
  document.getElementById("vision-content").appendChild(misionContent);
};

const changeSVGColor = color => {
  document.getElementById("svg").style.fill = color;
}

const createBtn = () => {
  const btn = document.getElementById("header-btn");
  const textBtn = document.createTextNode(headerBtn);
  btn.appendChild(textBtn);
}

createNavbar();
createHeader();
createBtn();
changeSVGColor("#ffff");
createArrow();
createContent();
