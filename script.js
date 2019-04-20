window.onload = function() {
  var jam = 0;
  var menit = 0;
  var detik = 0;
  var mSecs = 0;
  var appendJam = document.getElementById("jam");
  var appendMenit = document.getElementById("menit");
  var appendDetik = document.getElementById("detik");
  var buttonMulai = document.getElementById("button-mulai");
  var buttonJeda = document.getElementById("button-jeda");
  var buttonBerhenti = document.getElementById("button-berhenti");
  var Interval;

  buttonMulai.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonJeda.onclick = function() {
    clearInterval(Interval);
  };

  buttonBerhenti.onclick = function() {
    clearInterval(Interval);
    jam = "00";
    menit = "00";
    mSecs = "00";
    detik = "00";
    appendDetik.innerHTML = detik;
    appendMenit.innerHTML = menit;
    appendJam.innerHTML = jam;
  };

  function startTimer() {
    mSecs++;

    if (mSecs > 99) {
      console.log("detik");
      detik++;
      appendDetik.innerHTML = detik;
      mSecs = 0;
      if (detik < 10) {
        appendDetik.innerHTML = "0" + detik;
      } else {
        appendDetik.innerHTML = detik;
      }
    }
    if (detik >= 60) {
      detik = "0" + 0;
      menit++;
      appendDetik.innerHTML = detik;
      appendMenit.innerHTML = menit;
      if (menit < 10) {
        appendMenit.innerHTML = "0" + menit;
      } else {
        appendMenit.innerHTML = menit;
      }
    }
    if (menit >= 60) {
      menit = "0" + 0;
      jam++;
      appendMenit.innerHTML = menit;
      appendJam.innerHTML = jam;
    }
  }
};
