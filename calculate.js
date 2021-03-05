"use strict";
function calculateScore() {
  var midtermScore, finalScore, average, message;
  message = "";
  midtermScore = document.getElementById("midterm").value;
  finalScore = document.getElementById("final").value;
  if (isNaN(midtermScore) && isNaN(finalScore)) {
    document.getElementById("verifymidterm").innerHTML =
      "Vize Notu Sayısal Değer Olmalıdır!...";
    document.getElementById("verifyfinal").innerHTML =
      "Final Notu Sayısal Değer Olmalıdır!...";
    document.getElementById("resultScore").innerHTML =
      "Ders notu Hesaplanamadı...";
    document.getElementById("midterm").value = "";
    document.getElementById("final").value = "";
  } else if (isNaN(midtermScore)) {
    document.getElementById("verifymidterm").innerHTML =
      "Vize Notu Sayısal Değer Olmalıdır!...";
    document.getElementById("resultScore").innerHTML =
      "Ders notu Hesaplanamadı...";
    document.getElementById("midterm").value = "";
  } else if (isNaN(finalScore)) {
    document.getElementById("verifyfinal").innerHTML =
      "Final Notu Sayısal Değer Olmalıdır!...";
    document.getElementById("resultScore").innerHTML =
      "Ders notu Hesaplanamadı...";
    document.getElementById("final").value = "";
  } else {
    while (midtermScore =="" && finalScore =="") {
      document.getElementById("verifymidterm").innerHTML =
        "Vize Notu Girişi Yapmadınız!...";
      document.getElementById("verifyfinal").innerHTML =
        "Final Notu Girişi Yapmadınız!...";
      document.getElementById("resultScore").innerHTML =
        "Ders notu Hesaplanamadı!...";
      return false;
    }
    while (midtermScore =="") {
      document.getElementById("verifymidterm").innerHTML =
        "Vize Notu Girişi Yapmadınız!...";
      return false;
    }
    while (finalScore =="") {
      document.getElementById("verifyfinal").innerHTML =
        "Final Notu Girişi Yapmadınız!...";
      return false;
    }
    average = Math.round(Number(midtermScore) * 0.4 + Number(finalScore) * 0.6);
    if (average > 0 && average <= 32) {
      message = "Başarısız";
      document.getElementById("resultScoreLetter").innerHTML = " FF";
    } else if (average <= 39) {
      message = "Başarısız";
      document.getElementById("resultScoreLetter").innerHTML = " DD";
    } else if (average <= 45) {
      message = "Başarısız";
      document.getElementById("resultScoreLetter").innerHTML = " DC";
    } else if (average <= 49) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " CD";
    } else if (average <= 55) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " CC";
    } else if (average <= 60) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " CB";
    } else if (average <= 65) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " BC";
    } else if (average <= 70) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " BB";
    } else if (average <= 76) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " BA";
    } else if (average <= 83) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " AB";
    } else if (average <= 100) {
      message = "Başarılı";
      document.getElementById("resultScoreLetter").innerHTML = " AA";
    } else {
      document.getElementById("resultScore").innerHTML =
        "Ders notu Hesaplanamadı...";
      document.getElementById("resultScoreLetter").innerHTML = "";
    }
  }
  while (midtermScore > 100 && finalScore > 100) {
    document.getElementById("verifymidterm").innerHTML =
      "Girilen vize notu 0-100 aralığında değil!....";
    document.getElementById("midterm").value = "";
    document.getElementById("verifyfinal").innerHTML =
      "Girilen final notu 0-100 aralığında değil!...";
    document.getElementById("final").value = "";
    return false;
  }
  while (midtermScore > 100) {
    document.getElementById("verifymidterm").innerHTML =
      "Girilen vize notu 0-100 aralığında değil!....";
    document.getElementById("midterm").value = "";
    return false;
  }
  while (finalScore > 100) {
    document.getElementById("verifyfinal").innerHTML =
      "Girilen final notu 0-100 aralığında değil!...";
    document.getElementById("final").value = "";
    return false;
  }
  if (average == undefined) {
    document.getElementById("resultScore").innerHTML =
      "Ders notu Hesaplanamadı...";
    document.getElementById("resultScoreLetter").innerHTML = "";
  } else {
    document.getElementById("resultScore").innerHTML = average;
  }
  document.getElementById("result").innerHTML = message;
}
