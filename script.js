// Variable Global
let selectedSchoolType = "general";
let selectedClassLevel = 1;
let selectedSubjectName = "Semua Mapel";
let questions = [];
let currentIdx = 0;
let isAnswered = false;
let userAnswers = [];

// Canvas Variables
let drawnPoints = [];
let drawCanvas, ctxDraw;
let matchCanvas, ctxMatch;
let activeLeftId = null;
let userLines = {};
let startPoint = null;
let currentDragPoint = null;
let isDrawing = false;

const optionLetters = ["A", "B", "C", "D"];

// MAPEL GUANG MING & UMUM
const guangMingSubjects = [
  "Semua Mapel",
  "Mandarin",
  "Math",
  "Bahasa Indonesia",
  "English",
  "Science",
  "Pendidikan Pancasila",
  "Agama Islam",
  "Morale",
  "Bumi Melayu Riau (BMR)"
];

const generalSubjects = [
  "Semua Mapel",
  "Kewarganegaraan",
  "Bahasa Indonesia",
  "Math",
  "Science",
  "English",
  "Mandarin",
  "Moral",
  "Agama Islam",
  "Budaya Melayu Riau"
];

// BANK SOAL GUANG MING KELAS 1
const guangMingClass1Bank = [
  // MANDARIN
  { type: "multiple-choice", subject: "Mandarin", text: "1. Huruf yang memiliki radikal '亻' adalah...", options: ["你 (nǐ)", "河 (hé)", "五 (wǔ)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "2. Radikal dari huruf '河' adalah...", options: ["氵(三点水)", "可", "亻"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "3. '早安' dalam Bahasa Indonesia artinya...", options: ["Selamat pagi", "Selamat malam", "Terima kasih"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "4. 我叫爸爸的爸爸 (Ayah dari Ayah dipanggil)...", options: ["爷爷 (yéye)", "外公 (wàigōng)", "叔叔 (shūshu)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "5. 'Sampai Jumpa' dalam Aksara Hanzi adalah...", options: ["再见 (zàijiàn)", "谢谢 (xièxie)", "你好 (nǐhǎo)"], correct: 0 },

  // ENGLISH
  { type: "multiple-choice", subject: "English", text: "1. A-B-C-D- ... What letter comes next?", options: ["E", "F", "G"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "2. You want to draw a straight line. What do you need?", options: ["Ruler", "Pencilcase", "Eraser"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "3. This is Rafi. This is ______ bag.", options: ["his", "her", "my"], correct: 0 },

  // SCIENCE
  { type: "multiple-choice", subject: "Science", text: "1. Which part of the body helps us smell?", options: ["Nose", "Tongue", "Cheek"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "2. What covers the top of your fingers?", options: ["Nail", "Toe", "Ears"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "3. Which of these is a living thing?", options: ["Cat", "Rock", "Toy car"], correct: 0 },

  // MATH
  { type: "multiple-choice", subject: "Math", text: "1. What number comes next in this pattern? 2, 4, 6, ...", options: ["8", "7", "10"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "2. Complete the equation: ___ + 4 = 7", options: ["3", "4", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "3. What is 8 - 2?", options: ["6", "7", "5"], correct: 0 },

  // PENDIDIKAN PANCASILA
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "1. Bunyi sila Pancasila yang dilambangkan oleh Bintang Emas adalah...", options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kemanusiaan yang Adil dan Beradab"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "2. Nama burung yang menjadi lambang negara Indonesia adalah...", options: ["burung garuda", "burung elang", "burung merpati"], correct: 0 },

  // BUMI MELAYU RIAU
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "1. Sapaan untuk saudara yang bertubuh pendek dalam Melayu adalah...", options: ["Uneng", "Utih", "Andak"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "2. 'Emak' adalah sapaan Melayu untuk...", options: ["orang tua perempuan", "anak pertama", "orang tua laki-laki"], correct: 0 },

  // MORALE
  { type: "multiple-choice", subject: "Morale", text: "1. Ucapan 'Selamat pagi, Ayah, Ibu' menunjukkan sikap hormat berupa...", options: ["Mengucapkan salam & menyapa ramah", "Membantu pekerjaan rumah", "Memberi sesuatu"], correct: 0 },

  // BAHASA INDONESIA
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "1. Sikap duduk yang benar saat membaca adalah posisi badan harus...", options: ["Tegak dan lurus", "Bungkuk", "Berbaring"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "2. Huruf vokal pada kata 'buku' adalah...", options: ["u", "b", "k"], correct: 0 },

  // AGAMA ISLAM
  { type: "multiple-choice", subject: "Agama Islam", text: "1. Iman kepada hari akhir merupakan rukun Iman ke-...", options: ["5", "6", "3"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "2. Sebelum makan dan mengawali kegiatan kita membaca...", options: ["Bismillah / Basmalah", "Hamdalah", "Istighfar"], correct: 0 }
];

// NAVIGASI DARI HALAMAN UTAMA
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

function selectSchool(schoolType) {
  selectedSchoolType = schoolType;
  
  // Sembunyikan layar awal
  document.getElementById("school-menu-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");

  // Rendernya tombol kelas
  const classGrid = document.querySelector("#class-menu-screen .class-grid");
  if (selectedSchoolType === "guangming") {
    classGrid.innerHTML = `
      <button class="class-btn highlight" onclick="selectClass(1)" style="grid-column: span 2; padding: 20px; font-size: 1.2rem;">
        🌸 Kelas 1 SD (GMEC)
      </button>
    `;
  } else {
    classGrid.innerHTML = `
      <button class="class-btn" onclick="selectClass(1)">Kelas 1</button>
      <button class="class-btn" onclick="selectClass(2)">Kelas 2</button>
      <button class="class-btn" onclick="selectClass(3)">Kelas 3</button>
      <button class="class-btn" onclick="selectClass(4)">Kelas 4</button>
      <button class="class-btn" onclick="selectClass(5)">Kelas 5</button>
      <button class="class-btn" onclick="selectClass(6)">Kelas 6</button>
    `;
  }

  document.getElementById("class-menu-screen").classList.remove("hidden");
}

function selectClass(level) {
  selectedClassLevel = level;
  renderSubjectButtons();

  document.getElementById("selected-class-title").innerText = (selectedSchoolType === "guangming") ? `Sekolah Guang Ming - Kelas 1` : `Kelas ${level} SD`;
  document.getElementById("class-menu-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.remove("hidden");
}

function renderSubjectButtons() {
  const container = document.getElementById("subject-grid-container");
  container.innerHTML = "";

  const subjectList = (selectedSchoolType === "guangming") ? guangMingSubjects : generalSubjects;

  subjectList.forEach(subj => {
    const btn = document.createElement("button");
    btn.className = "subject-btn";
    btn.onclick = () => selectSubject(subj);
    btn.innerText = subj;
    container.appendChild(btn);
  });
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
  let filteredBank = guangMingClass1Bank;
  
  if (selectedSubjectName !== "Semua Mapel") {
    filteredBank = guangMingClass1Bank.filter(q => q.subject === selectedSubjectName);
    if (filteredBank.length === 0) filteredBank = guangMingClass1Bank;
  }

  questions = JSON.parse(JSON.stringify(filteredBank));

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

function shuffleArray(array) {
  const arr = JSON.parse(JSON.stringify(array));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// KUIS ENGINE
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
    instructionText.innerText = "💡 Lingkari huruf A, B, atau C dengan jarimu!";

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
    instructionText.innerText = "💡 Tarik garis dari kiri ke kanan untuk mencocokkan!";
    setupMatchingBoard(q);
    setTimeout(resizeMatchCanvas, 100);
  }

  document.getElementById("prev-btn").disabled = (currentIdx === 0);
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
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let correctCount = userAnswers.filter(ans => ans === true).length;
  let wrongCount = userAnswers.filter(ans => ans === false).length;
  let score = Math.round((correctCount / questions.length) * 100);

  document.getElementById("final-score").innerText = score;
  document.getElementById("correct-count").innerText = correctCount;
  document.getElementById("wrong-count").innerText = wrongCount;
}

function restartQuiz() {
  initQuizData();
  loadQuestion();
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
}

// INIT SAAT HALAMAN DIMUAT
document.addEventListener("DOMContentLoaded", () => {
  setupCanvasElements();
  
  // Pastikan hanya Layar Pilihan Sekolah yang muncul pertama kali
  document.getElementById("school-menu-screen").classList.remove("hidden");
  document.getElementById("class-menu-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (themeBtn) themeBtn.innerText = "☀️ Tema Terang";
  }
});