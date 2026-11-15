// =====================================================
//  TEMAS POR ERA (compartido por index.html y registro.html)
//  Paletas inspiradas en los álbumes de ATEEZ
// =====================================================
const ERAS = [
  { id: "tacna", nombre: "Edición Tacna",        sub: "Burdeos y cerámica",       bg: "#0e0000", bg2: "#1f0306", ac: "#9c0512", ac2: "#64090c", gold: "#f8d794", tx: "#efeacd", onAc: "#efeacd" },
  { id: "gh1",   nombre: "Golden Hour : Part.1", sub: "Azul petróleo y oro",      bg: "#0c202e", bg2: "#14384d", ac: "#1d5273", ac2: "#123449", gold: "#c9ad7a", tx: "#f3ecd9", onAc: "#f3ecd9" },
  { id: "gh2",   nombre: "Golden Hour : Part.2", sub: "Plata y lavanda",          bg: "#13141f", bg2: "#212337", ac: "#5a6080", ac2: "#2d3048", gold: "#cfd3ee", tx: "#eef0fa", onAc: "#ffffff" },
  { id: "gh3",   nombre: "Golden Hour : Part.3", sub: "Naranja solar",            bg: "#1c0700", bg2: "#351006", ac: "#ff4a0f", ac2: "#b8330a", gold: "#ffc93c", tx: "#fff1e3", onAc: "#1c0700" },
  { id: "ityf",  nombre: "Part.3 · In Your Fantasy", sub: "Rojo teatro y negro",  bg: "#060405", bg2: "#1c0508", ac: "#d4121c", ac2: "#7d0a10", gold: "#f4c6c6", tx: "#ffffff", onAc: "#ffffff" },
  { id: "gh4",   nombre: "Golden Hour : Part.4", sub: "Azul medianoche",          bg: "#060e30", bg2: "#0b1b52", ac: "#1f43bd", ac2: "#0c2270", gold: "#a9c1ff", tx: "#f0f4ff", onAc: "#ffffff" },
  { id: "gh5",   nombre: "Golden Hour : Part.5", sub: "Verde esmeralda y plata",  bg: "#05261c", bg2: "#0b3d2d", ac: "#1f9a6e", ac2: "#0f6a4a", gold: "#d5dcd9", tx: "#eefaf4", onAc: "#04150f" },
  { id: "gh6",   nombre: "Golden Hour : Part.6", sub: "Negro y blanco",           bg: "#000000", bg2: "#161616", ac: "#ededed", ac2: "#5a5a5a", gold: "#ffffff", tx: "#f5f5f5", onAc: "#0a0a0a" },
  { id: "treasure", nombre: "Treasure",           sub: "Negro y oro pirata",       bg: "#0b0906", bg2: "#1e1710", ac: "#8a6a1f", ac2: "#4d3a10", gold: "#e2b857", tx: "#f4ead2", onAc: "#0b0906" },
  { id: "fever", nombre: "Zero : Fever",          sub: "Violeta eléctrico y rosa", bg: "#0d0618", bg2: "#1e0b38", ac: "#7a2cff", ac2: "#4a1799", gold: "#ff6ad5", tx: "#f6eaff", onAc: "#ffffff" },
  { id: "movement", nombre: "The World · Movement", sub: "Azul acero y cian",     bg: "#04101a", bg2: "#0a2233", ac: "#1aa7c9", ac2: "#0e6a82", gold: "#8ee8ff", tx: "#eafaff", onAc: "#04101a" },
  { id: "outlaw", nombre: "The World · Outlaw", sub: "Cuero y desierto",         bg: "#1a0f06", bg2: "#33200d", ac: "#c8741f", ac2: "#864a10", gold: "#f0c27a", tx: "#fbefdc", onAc: "#1a0f06" },
  { id: "will",  nombre: "The World · Will",      sub: "Humo y cobre",             bg: "#0f0f10", bg2: "#232122", ac: "#b4552d", ac2: "#6e301a", gold: "#e9b79a", tx: "#f4efec", onAc: "#ffffff" }
];

let eraActual = "tacna";

function hexRgb(hex) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(",");
}

// Devuelve la era que eligió la persona en este navegador (o null)
function leerEraGuardada() {
  try { return localStorage.getItem("ateezEra"); } catch (err) { return null; }
}

// guardar = false cuando es la era por defecto (así no pisa la elección futura de la persona)
function aplicarTema(id, guardar) {
  const e = ERAS.find((x) => x.id === id) || ERAS[0];
  const r = document.documentElement.style;
  r.setProperty("--bg", e.bg);       r.setProperty("--bg-rgb", hexRgb(e.bg));
  r.setProperty("--bg2", e.bg2);
  r.setProperty("--ac", e.ac);       r.setProperty("--ac-rgb", hexRgb(e.ac));
  r.setProperty("--ac2", e.ac2);
  r.setProperty("--gold", e.gold);   r.setProperty("--gold-rgb", hexRgb(e.gold));
  r.setProperty("--tx", e.tx);       r.setProperty("--tx-rgb", hexRgb(e.tx));
  r.setProperty("--on-ac", e.onAc);
  const meta = document.getElementById("metaTema");
  if (meta) meta.content = e.bg;
  eraActual = e.id;
  if (guardar !== false) {
    try { localStorage.setItem("ateezEra", e.id); } catch (err) {}
  }
}
