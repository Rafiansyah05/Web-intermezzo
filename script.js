const soal = [
  {
    question: '	Siapa dikelas yang dijuluki sebagai raja tidur? ',
    answer: ['nazwa', 'jelin', 'dede', 'mikel'],
  },
  {
    question: 'Siapa yang paling cantikk ? ',
    answer: ['citra', 'sasa', 'nazwa', 'raoda'],
  },
  {
    question: 'Siapa yang menjadi primadona atau bintang intermezzo ? ',
    answer: ['iyung', 'akbar', 'rama', 'dika'],
  },
  {
    question: 'Siapa pemilik kendaraan DT 3671 RH ? ',
    answer: ['ucup', 'gerald', 'rafi', 'rio'],
  },
  {
    question: 'Siapa best couple yang paling cucok?',
    answer: ['wawa dan gerald', 'rio dan sasa', 'rohyd dan zalda', 'agung dan najwa'],
  },
  {
    question: 'Mata pelajaran favorit INTERMEZZO?',
    answer: ['ekonomi', 'Matematika', 'kimia', 'fisika'],
  },
  {
    question: 'siapa orang yang perna dilempar kursi?',
    answer: ['qabil', 'rafi', 'gerald', 'dede'],
  },
  {
    question: 'apa genre musiknya rafi?',
    answer: ['timur', 'korea', 'barat', 'jawa'],
  },
  {
    question: 'siapa yang nomor  absennya 17?',
    answer: ['kabil', 'mikel', 'dede', 'dika'],
  },
  {
    question: 'lanjuttann ini apa yaa, INTERMEZZOO....?',
    answer: ['majuu', 'sukses', 'solid', 'ewako'],
  },
];
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP

const jawabanBenar = [1, 0, 2, 1, 2, 1, 3, 0, 1, 3];

let curentQ = 0;
let totalScore = 0;
let saved_answer = [];
const namaUser = document.getElementById('nama');

document.addEventListener('DOMContentLoaded', function (event) {
  setupQuestion();
});

function setupQuestion() {
  document.getElementById('pertanyaan').innerText = soal[curentQ]['question'];
  document.getElementById('text1').innerText = soal[curentQ]['answer'][0];
  document.getElementById('text2').innerText = soal[curentQ]['answer'][1];
  document.getElementById('text3').innerText = soal[curentQ]['answer'][2];
  document.getElementById('text4').innerText = soal[curentQ]['answer'][3];
}

function lanjutSoal() {
  curentQ++;

  saveAnaswer();

  if (curentQ > soal.length - 1) {
    stopQuis();
  }
  resetStaet();
  setupQuestion();
}

var info = alert('INFOOO, Quiz ini dibuat hanya untuk bersenang-senang yaa, jadi tidak ada maksud untuk menyudutkan pihak manapun okeee??');

function resetStaet() {
  const choosedAnswer = document.querySelector('input[name="pilih"]:checked');
  if (choosedAnswer != null) {
    choosedAnswer.checked = false;
  }
}

let A = 'Sangat Menjiwai';
let B = 'Cukup Menjiwai';
let c = 'Tidak Menjiwai';
let D = 'Bukan Golongan Intermezzo';

let sangatBaik = 'WIDIHHHH, kerennnn tetapp menjadii bagian darii INTERMEZZO YAA...';
let baik = 'Kerennn, kaloo bisaa dapat predikat sangat menjiwai yaa.. ';
let jelek = 'Kenapa begini kau ini?? adoohhh tingkatkan lagi...';
let sangatJelek = 'WUUUUUUU, PERGI SANAA KAU BUKAN ANAK INTERMEZZOO HUSSHH!!';

let absen = document.getElementById('absen');

var gambar1 = new Image(150, 200);
gambar1.src = 'img/Agung.jpg';
let TEMPAT_G1 = document.getElementById('gambar');

var gambar2 = new Image(150, 200);
gambar2.src = 'img/Ahmad Rafiansyah.jpg';
let TEMPAT_G2 = document.getElementById('gambar');

var gambar3 = new Image(150, 200);
gambar3.src = 'img/Akbar.jpg';
let TEMPAT_G3 = document.getElementById('gambar');

var gambar4 = new Image(150, 200);
gambar4.src = 'img/Aldi Trifaldi.jpg';
let TEMPAT_G4 = document.getElementById('gambar');

var gambar5 = new Image(150, 200);
gambar5.src = 'img/Anggun.jpg';
let TEMPAT_G5 = document.getElementById('gambar');

var gambar6 = new Image(150, 200);
gambar6.src = 'img/Audia Suci.jpg';
let TEMPAT_G6 = document.getElementById('gambar');

var gambar7 = new Image(150, 200);
gambar7.src = 'img/BungaAtaDilla.jpg';
let TEMPAT_G7 = document.getElementById('gambar');

var gambar8 = new Image(150, 200);
gambar8.src = 'img/Cinta.jpg';
let TEMPAT_G8 = document.getElementById('gambar');

var gambar9 = new Image(150, 200);
gambar9.src = 'img/Citra.jpg';
let TEMPAT_G9 = document.getElementById('gambar');

var gambar10 = new Image(150, 200);
gambar10.src = 'img/Farel.jpg';
let TEMPAT_G10 = document.getElementById('gambar');

var gambar11 = new Image(150, 200);
gambar11.src = 'img/Febrian.jpg';
let TEMPAT_G11 = document.getElementById('gambar');

var gambar12 = new Image(150, 200);
gambar12.src = 'img/Gerald.jpg';
let TEMPAT_G12 = document.getElementById('gambar');

var gambar13 = new Image(150, 200);
gambar13.src = 'img/Hijrah.jpg';
let TEMPAT_G13 = document.getElementById('gambar');

var gambar14 = new Image(150, 200);
gambar14.src = 'img/Ilda Safitri.jpg';
let TEMPAT_G14 = document.getElementById('gambar');

var gambar15 = new Image(150, 200);
gambar15.src = 'img/Jelin.jpg';
let TEMPAT_G15 = document.getElementById('gambar');

var gambar16 = new Image(150, 200);
gambar16.src = 'img/Khairul.jpg';
let TEMPAT_G16 = document.getElementById('gambar');

var gambar17 = new Image(150, 200);
gambar17.src = 'img/Michael.jpg';
let TEMPAT_G17 = document.getElementById('gambar');

var gambar18 = new Image(150, 200);
gambar18.src = 'img/M. Yusuf.jpg';
let TEMPAT_G18 = document.getElementById('gambar');

var gambar19 = new Image(150, 200);
gambar19.src = 'img/M. Fauzan.jpg';
let TEMPAT_G19 = document.getElementById('gambar');

var gambar20 = new Image(150, 200);
gambar20.src = 'img/M. Qabil.jpg';
let TEMPAT_G20 = document.getElementById('gambar');

var gambar21 = new Image(150, 200);
gambar21.src = 'img/Rohid.jpg';
let TEMPAT_G21 = document.getElementById('gambar');

var gambar22 = new Image(150, 200);
gambar22.src = 'img/Najwa Diandra.jpg';
let TEMPAT_G22 = document.getElementById('gambar');

var gambar23 = new Image(150, 200);
gambar23.src = 'img/Najwa Dwi.jpg';
let TEMPAT_G23 = document.getElementById('gambar');

var gambar24 = new Image(150, 200);
gambar24.src = 'img/Naufal.jpg';
let TEMPAT_G24 = document.getElementById('gambar');

var gambar25 = new Image(150, 200);
gambar25.src = 'img/Nayla.jpg';
let TEMPAT_G25 = document.getElementById('gambar');

var gambar26 = new Image(150, 200);
gambar26.src = 'img/nazwa.jpg';
let TEMPAT_G26 = document.getElementById('gambar');

var gambar27 = new Image(150, 200);
gambar27.src = 'img/Niarti.jpg';
let TEMPAT_G27 = document.getElementById('gambar');

var gambar28 = new Image(150, 200);
gambar28.src = 'img/Rama.jpg';
let TEMPAT_G28 = document.getElementById('gambar');

var gambar29 = new Image(150, 200);
let TEMPAT_G29 = document.getElementById('gambar');

var gambar30 = new Image(150, 200);
gambar30.src = 'img/Ratna.jpg';
let TEMPAT_G30 = document.getElementById('gambar');

var gambar31 = new Image(150, 200);
gambar31.src = 'img/Rembulan.jpg';
let TEMPAT_G31 = document.getElementById('gambar');

var gambar32 = new Image(150, 200);
gambar32.src = 'img/Salwa.jpg';
let TEMPAT_G32 = document.getElementById('gambar');

var gambar33 = new Image(150, 200);
gambar33.src = 'img/Shanda.jpg';
let TEMPAT_G33 = document.getElementById('gambar');

var gambar34 = new Image(150, 200);
gambar34.src = 'img/Zalda eka rizkiya.jpg';
let TEMPAT_G34 = document.getElementById('gambar');

function stopQuis() {
  checkSkor();

  const ABSEN = absen.value;

  if (ABSEN == 1) {
    TEMPAT_G1.appendChild(gambar1);
  } else if (ABSEN == 2) {
    TEMPAT_G2.appendChild(gambar2);
  } else if (ABSEN == 3) {
    TEMPAT_G3.appendChild(gambar3);
  } else if (ABSEN == 4) {
    TEMPAT_G4.appendChild(gambar4);
  } else if (ABSEN == 5) {
    TEMPAT_G5.appendChild(gambar5);
  } else if (ABSEN == 6) {
    TEMPAT_G6.appendChild(gambar6);
  } else if (ABSEN == 7) {
    TEMPAT_G7.appendChild(gambar7);
  } else if (ABSEN == 8) {
    TEMPAT_G8.appendChild(gambar8);
  } else if (ABSEN == 9) {
    TEMPAT_G9.appendChild(gambar9);
  } else if (ABSEN == 10) {
    TEMPAT_G10.appendChild(gambar10);
  } else if (ABSEN == 11) {
    TEMPAT_G11.appendChild(gambar11);
  } else if (ABSEN == 12) {
    TEMPAT_G12.appendChild(gambar12);
  } else if (ABSEN == 13) {
    TEMPAT_G13.appendChild(gambar13);
  } else if (ABSEN == 14) {
    TEMPAT_G14.appendChild(gambar14);
  } else if (ABSEN == 15) {
    TEMPAT_G15.appendChild(gambar15);
  } else if (ABSEN == 16) {
    TEMPAT_G16.appendChild(gambar16);
  } else if (ABSEN == 17) {
    TEMPAT_G17.appendChild(gambar17);
  } else if (ABSEN == 18) {
    TEMPAT_G18.appendChild(gambar18);
  } else if (ABSEN == 19) {
    TEMPAT_G19.appendChild(gambar19);
  } else if (ABSEN == 20) {
    TEMPAT_G20.appendChild(gambar20);
  } else if (ABSEN == 21) {
    TEMPAT_G21.appendChild(gambar21);
  } else if (ABSEN == 22) {
    TEMPAT_G22.appendChild(gambar22);
  } else if (ABSEN == 23) {
    TEMPAT_G23.appendChild(gambar23);
  } else if (ABSEN == 24) {
    TEMPAT_G24.appendChild(gambar24);
  } else if (ABSEN == 25) {
    TEMPAT_G25.appendChild(gambar25);
  } else if (ABSEN == 26) {
    TEMPAT_G26.appendChild(gambar26);
  } else if (ABSEN == 27) {
    TEMPAT_G27.appendChild(gambar27);
  } else if (ABSEN == 28) {
    TEMPAT_G28.appendChild(gambar28);
  } else if (ABSEN == 29) {
    TEMPAT_G29.innerHTML = 'Tidak Ada';
  } else if (ABSEN == 30) {
    TEMPAT_G30.appendChild(gambar30);
  } else if (ABSEN == 31) {
    TEMPAT_G31.appendChild(gambar31);
  } else if (ABSEN == 32) {
    TEMPAT_G32.appendChild(gambar32);
  } else if (ABSEN == 33) {
    TEMPAT_G33.appendChild(gambar33);
  } else if (ABSEN == 34) {
    TEMPAT_G34.appendChild(gambar34);
  } else {
    innerHTML = 'Tidak Terdaftar';
  }

  document.getElementById('quizWindow').style.display = 'none';
  document.getElementById('tampilanAkhir').style.display = 'block';
  const nm = namaUser.value;

  document.getElementById('namaText1').innerHTML = 'Nama : ' + nm;
  document.getElementById('namaText2').innerHTML = 'Skor : ' + totalScore + '/100';

  if (totalScore <= 29) {
    document.getElementById('namaText3').innerHTML = 'Predikat: ' + D;
    document.getElementById('namaText4').innerHTML = 'Pesan: ' + sangatJelek;
  } else if (totalScore >= 30 && totalScore <= 59) {
    document.getElementById('namaText3').innerHTML = 'Predikat: ' + c;
    document.getElementById('namaText4').innerHTML = 'Pesan: ' + jelek;
  } else if (totalScore >= 60 && totalScore <= 89) {
    document.getElementById('namaText3').innerHTML = 'Predikat: ' + B;
    document.getElementById('namaText4').innerHTML = 'Pesan: ' + baik;
  } else if (totalScore >= 90) {
    document.getElementById('namaText3').innerHTML = 'Predikat: ' + A;
    document.getElementById('namaText4').innerHTML = 'Pesan: ' + sangatBaik;
  } else alert('ERORR');
  return;
}
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
// PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP

function saveAnaswer() {
  const jawab = document.querySelector('input[name="pilih"]:checked');
  if (jawab != null) {
    saved_answer.push(parseInt(jawab.getAttribute('data-id')));
  } else {
    saved_answer.push(0);
  }
}

function checkSkor() {
  for (i = 0; i < saved_answer.length; i++) {
    if (saved_answer[i] == jawabanBenar[i]) totalScore += 10;
  }
}

function starQuiz() {
  document.getElementById('tampilanAwal').style.display = 'none';
  document.getElementById('quizWindow').style.display = 'block';
}
