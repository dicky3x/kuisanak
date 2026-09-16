// Variable Status Sekolah & Tema
let selectedSchoolType = "general";

function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById("theme-toggle-btn");

  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  if (isDark) {
    if (themeBtn) themeBtn.innerText = "☀️ Tema Terang";
    localStorage.setItem("theme", "dark");
  } else {
    if (themeBtn) themeBtn.innerText = "🌙 Tema Gelap";
    localStorage.setItem("theme", "light");
  }
}

// DATABASE BANK SOAL KELAS 1 GUANG MING (LENGKAP DARI SEMUA PDF GMEC)
const guangMingClass1Bank = [
  // ================= BAHASA INDONESIA GMEC (SMALL TEST 1 & REVIEW MID TEST) =================
  // --- Dari Small Test 1 Bahasa Indonesia ---
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 1. Sikap duduk yang benar saat membaca adalah...", options: ["Duduk tegak dan lurus", "Bungkuk ke depan", "Sambil berbaring"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 2. Huruf vokal pada kata 'buku' adalah...", options: ["u", "b", "k"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 3. Kata yang diawali suku kata ba- adalah...", options: ["batu", "bola", "bebek"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 4. Cara memegang pensil yang benar adalah dijepit di antara...", options: ["Ibu jari, telunjuk, & jari tengah", "Genggaman telapak tangan", "Jari kelingking"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 5. Huruf konsonan pada kata 'mata' adalah...", options: ["m dan t", "a", "a dan t"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 6. Kata yang diawali dengan suku kata bu- adalah...", options: ["buku", "balon", "baju"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 7. Tanda baca yang tepat untuk melengkapi kalimat 'Siapa namamu' adalah...", options: ["Tanda tanya (?)", "Tanda seru (!)", "Tanda titik (.)"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 8. Beni memiliki dua ekor kucing bernama Mimi dan Memo. Siapa nama kucing Beni?", options: ["Mimi dan Memo", "Beni dan Mimi", "Beni dan Memo"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 9. Benda/hewan yang diawali suku kata bo- adalah...", options: ["boneka dan bola", "baju", "bebek"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 10. Kata yang diawali suku kata ha- adalah...", options: ["harimau dan hati", "balon", "hidung"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 11. Huruf vokal pada kata 'sapi' adalah...", options: ["a dan i", "s dan p", "a dan p"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 12. Hewan yang tubuhnya panjang, lunak, tanpa kaki, hidup di tanah lembap, diawali huruf 'c' adalah...", options: ["cacing", "cicak", "capung"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 13. Manakah kata yang memiliki huruf vokal 'u'?", options: ["batu dan buku", "bata dan kata", "bola dan meja"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 14. Apa saja kegiatan Siti pada pagi hari berdasarkan cerita?", options: ["Mandi dan sarapan", "Bermain dan tidur", "Belajar dan membaca"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 15. Lani ingin berkenalan dengan teman baru di sekolah. Kalimat yang tepat diucapkan Lani adalah...", options: ["Hai, boleh berkenalan?", "Siapa namamu!", "Ayo lari bersama."], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[ST1] 16. Benda yang dipakai di bagian atas tubuh, memiliki lengan dan lubang kepala adalah...", options: ["baju", "sepatu", "topi"], correct: 0 },
  
  // --- Dari Review Mid Test Bahasa Indonesia ---
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 17. Sikap duduk yang benar saat membaca adalah posisi badan harus...", options: ["tegak", "bungkuk", "miring"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 18. Huruf vokal pada kata 'Cabe' adalah...", options: ["a dan e", "c dan b", "a dan b"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 19. Kata yang diawali suku kata be- adalah...", options: ["becak", "batu", "bola"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 20. Huruf konsonan pada kata 'botol' adalah...", options: ["b, t, l", "o, o", "b, o, t"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 21. Benda yang diawali suku kata 'bo-' adalah...", options: ["boneka", "baju", "bebek"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 22. Tanda baca yang tepat untuk 'ayo berolahraga' adalah...", options: ["Tanda seru (!)", "Tanda tanya (?)", "Tanda titik (.)"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 23. Dua benda yang diawali suku kata ba- adalah...", options: ["Baju dan balon", "Buku dan bulan", "Bebek dan becak"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 24. 'Hidung' dan 'Hiu' adalah kata yang diawali suku kata...", options: ["hi-", "ha-", "ho-"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 25. Huruf vokal pada kata 'lemari' adalah...", options: ["e, a, dan i", "l, m, dan r", "e, m, dan i"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 26. Buah berwarna merah, manis, diawali huruf C adalah...", options: ["Ceri", "Cokelat", "Cempedak"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 27. Tokoh yang membantu menyiapkan sarapan pada cerita Nisa adalah...", options: ["Nisa, Ibu, dan Kakak", "Nisa dan Ayah", "Beni dan Mimi"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 28. Bisma ingin menanyakan cara membuat teh kepada ibu. Kalimat tanya yang tepat adalah...", options: ["Bagaimana cara membuat teh, Bu?", "Ayo buat teh Bu!", "Ibu sedang buat teh."], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 29. Gambar anak memegang sapu di ruang tamu menunjukkan kegiatan...", options: ["Menyapu rumah", "Merapikan kasur", "Mencuci tangan"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 30. Cara membaca yang benar berdasarkan cerita Alya adalah...", options: ["Duduk tegak, pencahayaan cukup, & jaga jarak mata", "Berbaring di tempat gelap", "Membaca sangat dekat dengan wajah"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 31. Bisma ingin mengetahui alamat rumah temannya. Kalimat tanya yang tepat adalah...", options: ["Di mana alamat rumahmu?", "Siapa namamu?", "Bagaimana kabarmu?"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "[MID] 32. Urutan gambar berseri (1. Menyisir, 2. Berpakaian, 3. Mandi, 4. Bangun tidur) yang tepat adalah...", options: ["4 - 3 - 2 - 1", "1 - 2 - 3 - 4", "3 - 4 - 1 - 2"], correct: 0 },
  { 
    type: "matching", subject: "Bahasa Indonesia", text: "[MID] Pasangkan gambar benda dengan suku kata awal yang tepat!",
    left: [{ id: "b1", content: "🎈 Balon" }, { id: "b2", content: "🏫 Gedung" }, { id: "b3", content: "🦈 Hiu" }],
    right: [{ id: "r1", content: "ho" }, { id: "r2", content: "ba" }, { id: "r3", content: "hi" }],
    pairs: { b1: "r2", b2: "r1", b3: "r3" }
  },

  // ================= AGAMA ISLAM GMEC (LENGKAP DARI REVIEW MID TEST) =================
  { type: "multiple-choice", subject: "Agama Islam", text: "1. Iman kepada hari akhir merupakan rukun Iman ke-...", options: ["5", "6", "3"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "2. Sebelum makan kita membaca...", options: ["Bismillah / Basmalah", "Hamdalah", "Dongeng"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "3. Yang BUKAN merupakan rukun iman adalah beriman kepada...", options: ["Hewan dan tumbuhan", "Rasul", "Hari akhir"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "4. Al-Qur'an merupakan kitab suci umat...", options: ["Islam", "Kristen", "Buddha"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "5. Kita membaca Bismillah saat...", options: ["Sebelum makan & memulai kegiatan", "Saat marah", "Saat tidur siang"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "6. Rukun Iman pertama ialah beriman kepada...", options: ["Allah SWT", "Malaikat", "Rasul"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "7. Bacaan Hamdalah (Alhamdulillah) diucapkan ketika...", options: ["Mendapat hadiah / bersyukur nikmat Allah", "Keluar dari toilet", "Saat hendak tidur"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "8. Ketika akan melaksanakan suatu kegiatan kita mengawali dengan...", options: ["Basmalah", "Hamdalah", "Istighfar"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "9. Sikap yang SALAH terhadap Al-Qur'an adalah...", options: ["Meletakkan sembarangan", "Membacanya dengan baik", "Menjaganya dengan baik"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "10. Nikmat yang kita terima sehari-hari adalah pemberian dari...", options: ["Allah SWT", "Manusia", "Malaikat"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "11. Rukun Iman keempat ialah beriman kepada...", options: ["Rasul-rasul Allah", "Kitab Suci", "Hari Kiamat"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "12. Arti dari 'Alhamdulillahi Rabbil 'Alamin' adalah...", options: ["Segala puji bagi Allah Tuhan semesta alam", "Dengan menyebut nama Allah", "Allah Maha Besar"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "13. Ali selesai makan bersama keluarganya. Ucapan bersyukur setelah makan adalah...", options: ["Alhamdulillah", "Bismillah", "Subhanallah"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "14. Mengapa kita harus beriman kepada malaikat-malaikat Allah?", options: ["Karena beriman kepada malaikat ada di dalam rukun Iman", "Karena malaikat terlihat", "Karena malaikat menciptakan bumi"], correct: 0 },
  { 
    type: "matching", subject: "Agama Islam", text: "15. Pasangkan Rukun Iman berikut dengan urutannya yang tepat!",
    left: [{ id: "ai1", content: "Iman kepada Allah SWT" }, { id: "ai2", content: "Iman kepada Rasul" }, { id: "ai3", content: "Iman kepada Takdir Baik & Buruk" }],
    right: [{ id: "r1", content: "Urutan Ke-4" }, { id: "r2", content: "Urutan Ke-1" }, { id: "r3", content: "Urutan Ke-6" }],
    pairs: { ai1: "r2", ai2: "r1", ai3: "r3" }
  },

  // ================= KEWARGANEGARAAN / PP GMEC =================
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "1. Lambang negara Republik Indonesia adalah...", options: ["burung garuda", "bendera merah putih", "lagu Indonesia raya"], correct: 0 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "2. Gambar Rantai Emas melambangkan Pancasila sila ke-...", options: ["3", "2", "1"], correct: 1 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "3. Aturan adalah petunjuk yang dibuat agar hidup kita menjadi...", options: ["susah", "tertib", "sedih"], correct: 1 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "4. Bunyi sila kedua Pancasila yang benar adalah...", options: ["kemanusiaan yang adil dan beradab", "kemanusiaan yang beradab dan adil", "adil dan beradab yang kemanusiaan"], correct: 0 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "5. Sebelum pergi ke sekolah, tindakan santun yang harus kamu lakukan adalah...", options: ["langsung lari keluar rumah", "berpamitan dan mencium tangan orang tua", "berteriak pamit dari jauh"], correct: 1 },

  // ================= ENGLISH GMEC =================
  { type: "multiple-choice", subject: "English", text: "[GMEC] Look at the picture! Which one is a rubber?", options: ["Option 3", "Option 1", "Option 2"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "[GMEC] Listening: What is Ben's favourite toy?", options: ["A plane", "A go-kart", "A ball"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "[GMEC] What colour is Ben's go-kart?", options: ["Red", "Green", "Blue"], correct: 2 },

  // ================= MATH GMEC =================
  { type: "multiple-choice", subject: "Math", text: "[GMEC] Which number is greater, 4 or 7?", options: ["4", "5", "7"], correct: 2 },
  { type: "multiple-choice", subject: "Math", text: "[GMEC] What number comes next in this pattern? 2, 4, 6, ...", options: ["7", "8", "10"], correct: 1 },
  { type: "multiple-choice", subject: "Math", text: "[GMEC] Which number bond makes 10?", options: ["3 + 7", "6 + 5", "4 + 4"], correct: 0 },

  // ================= BUDAYA MELAYU RIAU GMEC =================
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "[GMEC] Dongeng adalah cerita yang mengisahkan peristiwa pada masa...", options: ["depan", "sekarang", "lalu"], correct: 2 },
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "[GMEC] Pada zaman dulu, dongeng dibawakan sebagai pengantar...", options: ["tidur", "pelajaran", "nyanyian"], correct: 0 },

  // ================= MANDARIN GMEC =================
  { type: "multiple-choice", subject: "Mandarin", text: "[GMEC] “早安” (Zǎo ān) dalam bahasa Indonesia adalah...", options: ["Selamat pagi", "Selamat siang", "Selamat malam"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "[GMEC] “八” (Bā) dalam bahasa Indonesia artinya...", options: ["Delapan", "Satu", "Lima"], correct: 0 },

  // ================= MORAL GMEC =================
  { type: "multiple-choice", subject: "Moral", text: "[GMEC] Ucapan 'Selamat pagi, Ayah, Ibu' menunjukkan sikap...", options: ["Mengucapkan salam & menyapa ramah", "Membantu pekerjaan rumah", "Mendengar nasihat"], correct: 0 }
];

// DATABASE BANK SOAL UMUM (SEKOLAH LAIN)
const classBank = {
  1: [
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "1. Lambang negara Republik Indonesia adalah...", options: ["burung garuda", "bendera merah putih", "lagu Indonesia raya"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 4 + 3?", options: ["6", "7", "8"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Which body part do we use to hear sounds?", options: ["Eyes", "Ears", "Nose"], correct: 1 }
  ]
};

function selectSchool(schoolType) {
  selectedSchoolType = schoolType;
  document.getElementById("school-menu-screen").classList.add("hidden");
  document.getElementById("class-menu-screen").classList.remove("hidden");
}

function generateClassBankForLevel(level) {
  if (selectedSchoolType === "guangming" && level === 1) {
    return guangMingClass1Bank;
  }
  if (classBank[level]) return classBank[level];
  classBank[level] = JSON.parse(JSON.stringify(classBank[1]));
  return classBank[level];
}

const optionLetters = ["A", "B", "C", "D"];

function shuffleArray(array) {
  const arr = JSON.parse(JSON.stringify(array));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let selectedClassLevel = 1;
let selectedSubjectName = "Semua Mapel";
let questions = [];
let currentIdx = 0;
let isAnswered = false;
let userAnswers = [];

function selectClass(level) {
  selectedClassLevel = level;
  generateClassBankForLevel(level);
  document.getElementById("selected-class-title").innerText = `Kelas ${level} SD`;
  document.getElementById("class-menu-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.remove("hidden");
}

function selectSubject(subjectName) {
  selectedSubjectName = subjectName;
  initQuizData();
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  setTimeout(() => { loadQuestion(); }, 50);
}

function goToSchoolMenu() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("class-menu-screen").classList.add("hidden");
  document.getElementById("school-menu-screen").classList.remove("hidden");
}

function goToClassMenu() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("class-menu-screen").classList.remove("hidden");
}

function goToSubjectMenu() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.remove("hidden");
}

function initQuizData() {
  const currentClassBank = generateClassBankForLevel(selectedClassLevel);
  let filteredBank = currentClassBank;
  
  if (selectedSubjectName !== "Semua Mapel") {
    filteredBank = currentClassBank.filter(q => q.subject === selectedSubjectName);
    if (filteredBank.length === 0) filteredBank = currentClassBank;
  }

  // KHUSUS GUANG MING KELAS 1: Tampilkan SELURUH SOAL secara berurutan persis tanpa dipotong/diacak
  if (selectedSchoolType === "guangming" && selectedClassLevel === 1) {
    questions = JSON.parse(JSON.stringify(filteredBank));
  } else {
    let shuffledAll = shuffleArray(filteredBank);
    questions = shuffledAll.slice(0, 10);
  }

  questions.forEach(q => {
    if (q.type === "multiple-choice") {
      const correctOption = q.options[q.correct];
      q.options = shuffleArray(q.options);
      q.correct = q.options.indexOf(correctOption);
    } else if (q.type === "matching") {
      q.left = shuffleArray(q.left);
      q.right = shuffleArray(q.right);
    }
  });

  userAnswers = new Array(questions.length).fill(null);
  currentIdx = 0;
}

let drawnPoints = [];
let drawCanvas, ctxDraw;
let matchCanvas, ctxMatch;
let activeLeftId = null;
let userLines = {};
let startPoint = null;
let currentDragPoint = null;

function setupCanvasElements() {
  drawCanvas = document.getElementById("draw-canvas");
  if (drawCanvas) {
    ctxDraw = drawCanvas.getContext("2d");
    attachDrawCanvasListeners();
  }
  matchCanvas = document.getElementById("match-canvas");
  if (matchCanvas) {
    ctxMatch = matchCanvas.getContext("2d");
    attachMatchCanvasListeners();
  }
}

function speakCurrentQuestion() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  if (!questions[currentIdx]) return;

  const q = questions[currentIdx];
  const utterance = new SpeechSynthesisUtterance(q.text);
  utterance.lang = ["Math", "Science", "English"].includes(q.subject) ? "en-US" : "id-ID";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function loadQuestion() {
  if (!questions || questions.length === 0) return;

  isAnswered = false;
  drawnPoints = [];
  userLines = {};
  activeLeftId = null;

  const q = questions[currentIdx];
  document.getElementById("subject-tag").innerText = q.subject;
  document.getElementById("progress-tag").innerText = `${currentIdx + 1} / ${questions.length}`;
  document.getElementById("question-text").innerText = q.text;

  const canvasContainer = document.getElementById("canvas-container");
  const matchingContainer = document.getElementById("matching-container");
  const instructionText = document.getElementById("instruction-text");

  if (q.type === "multiple-choice") {
    canvasContainer.classList.remove("hidden");
    matchingContainer.classList.add("hidden");
    instructionText.innerText = ["Math", "Science", "English"].includes(q.subject) ? "💡 Circle A, B, or C with your finger!" : "💡 Lingkari huruf A, B, atau C dengan jarimu!";

    const container = document.getElementById("options-container");
    container.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const row = document.createElement("div");
      row.className = "option-row";
      const letterBadge = document.createElement("div");
      letterBadge.className = "option-letter";
      letterBadge.dataset.index = idx;
      letterBadge.innerText = optionLetters[idx];
      const textSpan = document.createElement("span");
      textSpan.className = "option-text";
      textSpan.innerText = opt;
      row.appendChild(letterBadge);
      row.appendChild(textSpan);
      container.appendChild(row);
    });

    setTimeout(resizeDrawCanvas, 100);
  } else if (q.type === "matching") {
    canvasContainer.classList.add("hidden");
    matchingContainer.classList.remove("hidden");
    instructionText.innerText = ["Math", "Science", "English"].includes(q.subject) ? "💡 Draw a line from left to right to match!" : "💡 Tarik garis dari kiri ke kanan untuk mencocokkan!";
    setupMatchingBoard(q);
    setTimeout(resizeMatchCanvas, 100);
  }

  document.getElementById("prev-btn").disabled = (currentIdx === 0);
  setTimeout(speakCurrentQuestion, 300);
}

function resizeDrawCanvas() {
  if (!drawCanvas) setupCanvasElements();
  const container = document.getElementById("canvas-container");
  if (container && drawCanvas) {
    drawCanvas.width = container.offsetWidth;
    drawCanvas.height = container.offsetHeight;
    ctxDraw.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
  }
}

function attachDrawCanvasListeners() {
  drawCanvas.onpointerdown = (e) => {
    if (isAnswered) return;
    isDrawing = true;
    drawnPoints = [];
    const rect = drawCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawnPoints.push({ x, y });
    ctxDraw.beginPath();
    ctxDraw.lineWidth = 5;
    ctxDraw.strokeStyle = "#e91e63";
    ctxDraw.lineCap = "round";
    ctxDraw.moveTo(x, y);
  };

  drawCanvas.onpointermove = (e) => {
    if (!isDrawing || isAnswered) return;
    const rect = drawCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    drawnPoints.push({ x, y });
    ctxDraw.lineTo(x, y);
    ctxDraw.stroke();
  };

  drawCanvas.onpointerup = () => {
    if (!isDrawing || isAnswered) return;
    isDrawing = false;
    evaluateMultipleChoice();
  };
}

function evaluateMultipleChoice() {
  if (drawnPoints.length < 5) return;
  const letterBadges = document.querySelectorAll(".option-letter");
  const canvasRect = drawCanvas.getBoundingClientRect();
  const correctIdx = questions[currentIdx].correct;

  letterBadges.forEach((badge) => {
    const badgeRect = badge.getBoundingClientRect();
    const hit = drawnPoints.some(p => p.x >= (badgeRect.left - canvasRect.left) && p.x <= (badgeRect.right - canvasRect.left) && p.y >= (badgeRect.top - canvasRect.top) && p.y <= (badgeRect.bottom - canvasRect.top));

    if (hit && !isAnswered) {
      isAnswered = true;
      const selectedIdx = parseInt(badge.dataset.index);
      const isCorrect = (selectedIdx === correctIdx);
      userAnswers[currentIdx] = isCorrect;
      const parentRow = badge.closest(".option-row");

      if (isCorrect) {
        badge.style.borderColor = "#4caf50";
        badge.style.background = "#4caf50";
        badge.style.color = "#ffffff";
        if (parentRow) { parentRow.style.borderColor = "#4caf50"; parentRow.style.background = "#c8e6c9"; }
      } else {
        badge.style.borderColor = "#f44336";
        badge.style.background = "#f44336";
        badge.style.color = "#ffffff";
        if (parentRow) { parentRow.style.borderColor = "#f44336"; parentRow.style.background = "#ffcdd2"; }
        const correctBadge = document.querySelector(`.option-letter[data-index="${correctIdx}"]`);
        if (correctBadge) { correctBadge.style.borderColor = "#4caf50"; correctBadge.style.background = "#4caf50"; correctBadge.style.color = "#ffffff"; }
      }
      setTimeout(() => { nextQuestion(); }, 1500);
    }
  });
}

function setupMatchingBoard(q) {
  const leftCol = document.getElementById("left-column");
  const rightCol = document.getElementById("right-column");
  leftCol.innerHTML = "";
  rightCol.innerHTML = "";
  q.left.forEach(item => { leftCol.innerHTML += `<div class="match-item" data-id="${item.id}"><span>${item.content}</span></div>`; });
  q.right.forEach(item => { rightCol.innerHTML += `<div class="match-item" data-id="${item.id}">${item.content}</div>`; });
}

function resizeMatchCanvas() {
  if (!matchCanvas) setupCanvasElements();
  const container = document.getElementById("matching-container");
  if (container && matchCanvas) {
    matchCanvas.width = container.offsetWidth;
    matchCanvas.height = container.offsetHeight;
    redrawMatchLines();
  }
}

function attachMatchCanvasListeners() {
  matchCanvas.onpointerdown = (e) => {
    if (isAnswered) return;
    const rect = matchCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    document.querySelectorAll("#left-column .match-item").forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const cRect = matchCanvas.getBoundingClientRect();
      if (x >= (itemRect.left - cRect.left) && x <= (itemRect.right - cRect.left) && y >= (itemRect.top - cRect.top) && y <= (itemRect.bottom - cRect.top)) {
        activeLeftId = item.dataset.id;
        startPoint = { x: itemRect.right - cRect.left, y: (itemRect.top + itemRect.bottom) / 2 - cRect.top };
        currentDragPoint = { x, y };
      }
    });
  };

  matchCanvas.onpointermove = (e) => {
    if (!activeLeftId || isAnswered) return;
    const rect = matchCanvas.getBoundingClientRect();
    currentDragPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    redrawMatchLines();
  };

  matchCanvas.onpointerup = (e) => {
    if (!activeLeftId || isAnswered) return;
    const rect = matchCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    let matchedRightId = null;

    document.querySelectorAll("#right-column .match-item").forEach(item => {
      const itemRect = item.getBoundingClientRect();
      const cRect = matchCanvas.getBoundingClientRect();
      if (x >= (itemRect.left - cRect.left) && x <= (itemRect.right - cRect.left) && y >= (itemRect.top - cRect.top) && y <= (itemRect.bottom - cRect.top)) {
        matchedRightId = item.dataset.id;
      }
    });

    if (matchedRightId) userLines[activeLeftId] = matchedRightId;
    activeLeftId = null;
    startPoint = null;
    currentDragPoint = null;
    redrawMatchLines();
    checkMatchingComplete();
  };
}

function redrawMatchLines() {
  if (!ctxMatch) return;
  ctxMatch.clearRect(0, 0, matchCanvas.width, matchCanvas.height);
  const cRect = matchCanvas.getBoundingClientRect();

  Object.keys(userLines).forEach(leftId => {
    const rightId = userLines[leftId];
    const leftEl = document.querySelector(`#left-column .match-item[data-id="${leftId}"]`);
    const rightEl = document.querySelector(`#right-column .match-item[data-id="${rightId}"]`);

    if (leftEl && rightEl) {
      const lRect = leftEl.getBoundingClientRect();
      const rRect = rightEl.getBoundingClientRect();
      ctxMatch.beginPath();
      ctxMatch.moveTo(lRect.right - cRect.left, lRect.top + lRect.height / 2 - cRect.top);
      ctxMatch.lineTo(rRect.left - cRect.left, rRect.top + rRect.height / 2 - cRect.top);
      ctxMatch.lineWidth = 4;
      ctxMatch.strokeStyle = "#2196f3";
      ctxMatch.stroke();
    }
  });

  if (startPoint && currentDragPoint) {
    ctxMatch.beginPath();
    ctxMatch.moveTo(startPoint.x, startPoint.y);
    ctxMatch.lineTo(currentDragPoint.x, currentDragPoint.y);
    ctxMatch.lineWidth = 4;
    ctxMatch.strokeStyle = "#ff9800";
    ctxMatch.setLineDash([6, 6]);
    ctxMatch.stroke();
    ctxMatch.setLineDash([]);
  }
}

function checkMatchingComplete() {
  const q = questions[currentIdx];
  if (Object.keys(userLines).length === q.left.length && !isAnswered) {
    isAnswered = true;
    let allCorrect = true;

    Object.keys(q.pairs).forEach(leftId => {
      const leftEl = document.querySelector(`#left-column .match-item[data-id="${leftId}"]`);
      if (userLines[leftId] === q.pairs[leftId]) {
        if (leftEl) leftEl.classList.add("matched-correct");
      } else {
        allCorrect = false;
        if (leftEl) leftEl.classList.add("matched-wrong");
      }
    });

    userAnswers[currentIdx] = allCorrect;
    setTimeout(() => { nextQuestion(); }, 1500);
  }
}

function nextQuestion() {
  if (currentIdx < questions.length - 1) {
    currentIdx++;
    loadQuestion();
  } else {
    showResultScreen();
  }
}

function prevQuestion() {
  if (currentIdx > 0) {
    currentIdx--;
    loadQuestion();
  }
}

function resetCurrentQuestion() {
  loadQuestion();
}

function showResultScreen() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let correctCount = userAnswers.filter(ans => ans === true).length;
  let wrongCount = userAnswers.filter(ans => ans === false).length;
  let score = Math.round((correctCount / questions.length) * 100);

  document.getElementById("final-score").innerText = score;
  document.getElementById("correct-count").innerText = correctCount;
  document.getElementById("wrong-count").innerText = wrongCount;

  let feedback = score === 100 ? "🌟 Nilai Sempurna!" : (score >= 70 ? "👍 Bagus Sekali!" : "💪 Semangat Belajar!");
  document.getElementById("feedback-text").innerText = feedback;
}

function restartQuiz() {
  initQuizData();
  loadQuestion();
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
}

window.onload = () => {
  setupCanvasElements();
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) themeBtn.innerText = "☀️ Tema Terang";
  }
};

window.onresize = () => {
  if (questions[currentIdx] && questions[currentIdx].type === "multiple-choice") resizeDrawCanvas();
  else if (questions[currentIdx] && questions[currentIdx].type === "matching") resizeMatchCanvas();
};