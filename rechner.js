function formatEuro(value) {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  });
}

function berechneKosten() {
  const km = Number(document.getElementById("kmMonat").value || 0);
  const verb = Number(document.getElementById("verbrauch").value || 0);
  const sprit = Number(document.getElementById("sprit").value || 0);
  const maut = Number(document.getElementById("maut").value || 0);

  const fix = Number(document.getElementById("fix").value || 0);
  const vers = Number(document.getElementById("vers").value || 0);
  const stell = Number(document.getElementById("stell").value || 0);
  const lm = Number(document.getElementById("lm").value || 0);
  const sonst = Number(document.getElementById("sonst").value || 0);

  const liter = km * (verb / 100);
  const dieselKosten = liter * sprit;

  const fahrMonat = dieselKosten + maut;
  const weitereMonat = fix + vers + stell + lm + sonst;

  const gesamtMonat = fahrMonat + weitereMonat;
  const gesamtJahr = gesamtMonat * 12;
  const gesamtTag = gesamtJahr / 365;

  document.getElementById("resDiesel").textContent = formatEuro(Math.round(dieselKosten));
  document.getElementById("resFahr").textContent = formatEuro(Math.round(fahrMonat));
  document.getElementById("resMonat").textContent = formatEuro(Math.round(gesamtMonat));
  document.getElementById("resJahr").textContent = formatEuro(Math.round(gesamtJahr));
  document.getElementById("resTag").textContent = formatEuro(Math.round(gesamtTag));
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".calc-input").forEach(el => {
    el.addEventListener("input", berechneKosten);
  });
  berechneKosten();
});