// Vize %40, final %60; final 50'nin altındaysa ders kalır. "72,5" gibi virgüllü not da kabul edilir.
function sayiOku(metin) {
  return parseFloat(String(metin).replace(",", "."));
}

document.getElementById("hesapla").addEventListener("click", () => {
  const vize = sayiOku(document.getElementById("vize").value);
  const final = sayiOku(document.getElementById("final").value);
  const sonuc = document.getElementById("sonuc");
  if (Number.isNaN(vize) || Number.isNaN(final)) {
    sonuc.textContent = "İki notu da girin.";
    return;
  }
  const ortalama = Math.round(vize * 0.4 + final * 0.6);
  const durum = final < 50 ? "kaldı (final 50'nin altında)" : ortalama >= 50 ? "geçti" : "kaldı";
  sonuc.textContent = `Ortalama ${ortalama}: ${durum}`;
});
