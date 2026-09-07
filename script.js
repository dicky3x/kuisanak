// DATABASE BANK SOAL BERDASARKAN TINGKAT KELAS (1 - 6 SD)
const classBank = {
  // ==================== KELAS 1 SD ====================
  1: [
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Suara hewan kucing adalah...", options: ["Guk guk", "MEOONG", "Mbekk"], correct: 1 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Ibu memasak makanan di...", options: ["Kamar", "Dapur", "Halaman"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What is 4 + 3?", options: ["6", "7", "8"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What is 10 - 4?", options: ["5", "6", "7"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Which body part do we use to hear sounds?", options: ["Eyes", "Ears", "Nose"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Which object is hard and solid?", options: ["Stone", "Water", "Oil"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "Simbol sila pertama Pancasila adalah...", options: ["Bintang", "Rantai", "Pohon Beringin"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "Bahasa Inggris dari kata 'Kucing' adalah...", options: ["Dog", "Cat", "Bird"], correct: 1 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan untuk 'Kakek dari pihak Ayah' (爸爸的爸爸) adalah...", options: ["Yéye (爷爷)", "Wàigōng (外公)", "Bóbo (伯伯)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan untuk 'Nenek dari pihak Ibu' (妈妈的妈妈) adalah...", options: ["Nǎinai (奶奶)", "Wàipó (外婆)", "Āyí (阿姨)"], correct: 1 },
    { type: "multiple-choice", subject: "Moral", text: "Sebelum makan kita sebaiknya...", options: ["Tidur", "Berdoa", "Bermain"], correct: 1 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu Riau untuk laki-laki adalah...", options: ["Teluk Belanga", "Kebaya", "Batik"], correct: 0 },
    { 
      type: "matching", subject: "Bahasa Indonesia", text: "Tarik garis mencocokkan benda dengan namanya!",
      left: [{ id: "b1", content: "🐱" }, { id: "b2", content: "📖" }, { id: "b3", content: "🍌" }],
      right: [{ id: "r1", content: "Buku" }, { id: "r2", content: "Kucing" }, { id: "r3", content: "Pisang" }],
      pairs: { b1: "r2", b2: "r1", b3: "r3" }
    },
    { 
      type: "matching", subject: "Mandarin", text: "Tarik garis mencocokkan panggilan keluarga Ayah!",
      left: [{ id: "zh1", content: "爸爸的爸爸" }, { id: "zh2", content: "爸爸的妈妈" }, { id: "zh3", content: "爸爸的姐妹" }],
      right: [{ id: "r1", content: "Nǎinai (奶奶)" }, { id: "r2", content: "Gūgu (姑姑)" }, { id: "r3", content: "Yéye (爷爷)" }],
      pairs: { zh1: "r3", zh2: "r1", zh3: "r2" }
    }
  ],

  // ==================== KELAS 2 SD ====================
  2: [
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Tanda baca di akhir kalimat berita adalah...", options: ["Tanda Titik (.)", "Tanda Tanya (?)", "Tanda Seru (!)"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 5 x 3?", options: ["12", "15", "18"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "How many sides does a rectangle have?", options: ["3", "4", "5"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Which animal lays eggs?", options: ["Duck", "Cat", "Cow"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "Sila kedua Pancasila dilambangkan oleh...", options: ["Rantai", "Bintang", "Pohon Beringin"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "What is the English word for 'Gajah'?", options: ["Elephant", "Giraffe", "Tiger"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin dari 'Ibu' (Mother) adalah...", options: ["Māma (妈妈)", "Bàba (爸爸)", "Mèimei (妹妹)"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Makanan khas Melayu Riau berkuah pedas gurih adalah...", options: ["Gulai Patin", "Rendang", "Soto"], correct: 0 },
    { 
      type: "matching", subject: "Math", text: "Match simple multiplication sums!",
      left: [{ id: "m1", content: "2 x 3" }, { id: "m2", content: "4 x 2" }, { id: "m3", content: "5 x 1" }],
      right: [{ id: "r1", content: "8" }, { id: "r2", content: "5" }, { id: "r3", content: "6" }],
      pairs: { m1: "r3", m2: "r1", m3: "r2" }
    }
  ],

  // ==================== KELAS 3 SD ====================
  3: [
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Gagasan utama dalam sebuah paragraf disebut...", options: ["Ide Pokok", "Kalimat Penjelas", "Judul"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 100 / 4?", options: ["20", "25", "30"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Plants need sunlight for...", options: ["Photosynthesis", "Respiration", "Digestion"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "Semboyan negara Indonesia adalah...", options: ["Bhinneka Tunggal Ika", "Tut Wuri Handayani", "Pancasila"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "What is the opposite of 'Cold'?", options: ["Hot", "Warm", "Ice"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin dari angka '10' (Ten) adalah...", options: ["Shí (十)", "Wǔ (五)", "Sì (四)"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Alat musik petik khas Melayu Riau dinamakan...", options: ["Gambus", "Gendang", "Siter"], correct: 0 }
  ],

  // ==================== KELAS 4 SD ====================
  4: [
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Kata kerja yang memerlukan objek disebut kata kerja...", options: ["Transitif", "Intransitif", "Pasif"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "Find the area of a square with side 6 cm!", options: ["24 cm²", "36 cm²", "12 cm²"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Light travels in a...", options: ["Straight line", "Curved line", "Zigzag line"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "Lembaga negara yang membuat undang-undang bersama Presiden adalah...", options: ["DPR", "MA", "MK"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "She _____ to school every day.", options: ["goes", "go", "went"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Kerajaan Melayu terbesar di Riau pada zaman dahulu adalah...", options: ["Kerajaan Siak", "Kerajaan Majapahit", "Kerajaan Sriwijaya"], correct: 0 }
  ],

  // ==================== KELAS 5 SD ====================
  5: [
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Karangan non-fiksi berdasarkan...", options: ["Fakta dan Data", "Khayalan", "Mitos"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "Calculate 15% of 200!", options: ["25", "30", "35"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "The organ responsible for pumping blood is the...", options: ["Heart", "Lungs", "Kidneys"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "Hari Lahir Pancasila diperingati setiap tanggal...", options: ["1 Juni", "17 Agustus", "28 Oktober"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "If I _____ rich, I would travel the world.", options: ["were", "was", "am"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Tarian adat Melayu Riau untuk penyambutan tamu adalah...", options: ["Tari Makan Sirih", "Tari Pendet", "Tari Saman"], correct: 0 }
  ],

  // ==================== KELAS 6 SD ====================
  6: [
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Kalimat yang efektif memenuhi unsur...", options: ["SPOK", "SOP", "5W+1H"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is the volume of a cube with edge 5 cm?", options: ["100 cm³", "125 cm³", "150 cm³"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "UUD 1945 disahkan pada tanggal...", options: ["18 Agustus 1945", "17 Agustus 1945", "20 Agustus 1945"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "The book was _____ by a famous author.", options: ["written", "write", "wrote"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Rumah adat khas Melayu Riau dinamakan...", options: ["Rumah Selaso Jatuh Kembar", "Rumah Tongkonan", "Rumah Lamin"], correct: 0 }
  ]
};

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
let questions = [];
let currentIdx = 0;
let isAnswered = false;
let userAnswers = [];

// ================= AKSI PILIH KELAS =================
function selectClass(level) {
  selectedClassLevel = level;
  initQuizData();
  
  document.getElementById("class-menu-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  
  loadQuestion();
}

function goToClassMenu() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("class-menu-screen").classList.remove("hidden");
}

function initQuizData() {
  const currentBank = classBank[selectedClassLevel] || classBank[1];
  const shuffledAll = shuffleArray(currentBank);
  
  // Mengambil maksimal 30 soal
  questions = shuffledAll.slice(0, 30);

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

// Variables Canvas Pilihan Ganda
let drawnPoints = [];
const drawCanvas = document.getElementById("draw-canvas");
const ctxDraw = drawCanvas.getContext("2d");
let isDrawing = false;

// Variables Canvas Mencocokkan Garis
const matchCanvas = document.getElementById("match-canvas");
const ctxMatch = matchCanvas.getContext("2d");
let activeLeftId = null;
let userLines = {};
let startPoint = null;
let currentDragPoint = null;

// ================= AUDIO (TEXT-TO-SPEECH) =================
function speakCurrentQuestion() {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const q = questions[currentIdx];
  const utterance = new SpeechSynthesisUtterance(q.text);

  if (["Math", "Science", "English"].includes(q.subject)) {
    utterance.lang = "en-US";
  } else {
    utterance.lang = "id-ID";
  }

  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function loadQuestion() {
  isAnswered = false;
  drawnPoints = [];
  userLines = {};
  activeLeftId = null;
  startPoint = null;
  currentDragPoint = null;

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
    
    if (["Math", "Science", "English"].includes(q.subject)) {
      instructionText.innerText = "💡 Circle A, B, or C with your finger!";
    } else {
      instructionText.innerText = "💡 Lingkari huruf A, B, atau C dengan jarimu!";
    }

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

    if (["Math", "Science", "English"].includes(q.subject)) {
      instructionText.innerText = "💡 Draw a line from left to right to match!";
    } else {
      instructionText.innerText = "💡 Tarik garis dari kiri ke kanan untuk mencocokkan!";
    }

    setupMatchingBoard(q);
    setTimeout(resizeMatchCanvas, 100);
  }

  document.getElementById("prev-btn").disabled = (currentIdx === 0);

  setTimeout(speakCurrentQuestion, 300);
}

// ================= PILIHAN GANDA (PENGUKURAN KOORDINAT CANVAS) =================
function resizeDrawCanvas() {
  const container = document.getElementById("canvas-container");
  drawCanvas.width = container.offsetWidth;
  drawCanvas.height = container.offsetHeight;
  ctxDraw.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
}

drawCanvas.addEventListener("pointerdown", (e) => {
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
});

drawCanvas.addEventListener("pointermove", (e) => {
  if (!isDrawing || isAnswered) return;
  const rect = drawCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  drawnPoints.push({ x, y });
  ctxDraw.lineTo(x, y);
  ctxDraw.stroke();
});

drawCanvas.addEventListener("pointerup", () => {
  if (!isDrawing || isAnswered) return;
  isDrawing = false;
  evaluateMultipleChoice();
});

function evaluateMultipleChoice() {
  if (drawnPoints.length < 5) return;

  const letterBadges = document.querySelectorAll(".option-letter");
  const canvasRect = drawCanvas.getBoundingClientRect();

  letterBadges.forEach((badge) => {
    const badgeRect = badge.getBoundingClientRect();
    
    const badgeLeft = badgeRect.left - canvasRect.left;
    const badgeRight = badgeRect.right - canvasRect.left;
    const badgeTop = badgeRect.top - canvasRect.top;
    const badgeBottom = badgeRect.bottom - canvasRect.top;

    const hit = drawnPoints.some(p => p.x >= badgeLeft && p.x <= badgeRight && p.y >= badgeTop && p.y <= badgeBottom);

    if (hit && !isAnswered) {
      isAnswered = true;
      const selectedIdx = parseInt(badge.dataset.index);
      const isCorrect = (selectedIdx === questions[currentIdx].correct);

      userAnswers[currentIdx] = isCorrect;
      const parentRow = badge.closest(".option-row");

      if (isCorrect) {
        badge.style.borderColor = "#4caf50";
        badge.style.background = "#4caf50";
        badge.style.color = "#ffffff";
        if (parentRow) {
          parentRow.style.borderColor = "#4caf50";
          parentRow.style.background = "#c8e6c9";
        }
      } else {
        badge.style.borderColor = "#f44336";
        badge.style.background = "#f44336";
        badge.style.color = "#ffffff";
        if (parentRow) {
          parentRow.style.borderColor = "#f44336";
          parentRow.style.background = "#ffcdd2";
        }
      }

      setTimeout(() => { nextQuestion(); }, 1000);
    }
  });
}

// ================= MENCOCOKKAN GAMBAR (MENARIK GARIS) =================
function setupMatchingBoard(q) {
  const leftCol = document.getElementById("left-column");
  const rightCol = document.getElementById("right-column");
  leftCol.innerHTML = "";
  rightCol.innerHTML = "";

  q.left.forEach(item => {
    const div = document.createElement("div");
    div.className = "match-item";
    div.dataset.id = item.id;
    div.innerHTML = `<span>${item.content}</span>`;
    leftCol.appendChild(div);
  });

  q.right.forEach(item => {
    const div = document.createElement("div");
    div.className = "match-item";
    div.dataset.id = item.id;
    div.innerText = item.content;
    rightCol.appendChild(div);
  });
}

function resizeMatchCanvas() {
  const container = document.getElementById("matching-container");
  matchCanvas.width = container.offsetWidth;
  matchCanvas.height = container.offsetHeight;
  redrawMatchLines();
}

matchCanvas.addEventListener("pointerdown", (e) => {
  if (isAnswered) return;
  const rect = matchCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const leftItems = document.querySelectorAll("#left-column .match-item");
  leftItems.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const cRect = matchCanvas.getBoundingClientRect();
    const l = itemRect.left - cRect.left;
    const r = itemRect.right - cRect.left;
    const t = itemRect.top - cRect.top;
    const b = itemRect.bottom - cRect.top;

    if (x >= l && x <= r && y >= t && y <= b) {
      activeLeftId = item.dataset.id;
      startPoint = { x: r, y: (t + b) / 2 };
      currentDragPoint = { x, y };
    }
  });
});

matchCanvas.addEventListener("pointermove", (e) => {
  if (!activeLeftId || isAnswered) return;
  const rect = matchCanvas.getBoundingClientRect();
  currentDragPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  redrawMatchLines();
});

matchCanvas.addEventListener("pointerup", (e) => {
  if (!activeLeftId || isAnswered) return;
  const rect = matchCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rightItems = document.querySelectorAll("#right-column .match-item");
  let matchedRightId = null;

  rightItems.forEach(item => {
    const itemRect = item.getBoundingClientRect();
    const cRect = matchCanvas.getBoundingClientRect();
    const l = itemRect.left - cRect.left;
    const r = itemRect.right - cRect.left;
    const t = itemRect.top - cRect.top;
    const b = itemRect.bottom - cRect.top;

    if (x >= l && x <= r && y >= t && y <= b) {
      matchedRightId = item.dataset.id;
    }
  });

  if (matchedRightId) {
    userLines[activeLeftId] = matchedRightId;
  }

  activeLeftId = null;
  startPoint = null;
  currentDragPoint = null;
  redrawMatchLines();

  checkMatchingComplete();
});

function redrawMatchLines() {
  ctxMatch.clearRect(0, 0, matchCanvas.width, matchCanvas.height);
  const cRect = matchCanvas.getBoundingClientRect();

  Object.keys(userLines).forEach(leftId => {
    const rightId = userLines[leftId];
    const leftEl = document.querySelector(`#left-column .match-item[data-id="${leftId}"]`);
    const rightEl = document.querySelector(`#right-column .match-item[data-id="${rightId}"]`);

    if (leftEl && rightEl) {
      const lRect = leftEl.getBoundingClientRect();
      const rRect = rightEl.getBoundingClientRect();

      const x1 = lRect.right - cRect.left;
      const y1 = lRect.top + lRect.height / 2 - cRect.top;
      const x2 = rRect.left - cRect.left;
      const y2 = rRect.top + rRect.height / 2 - cRect.top;

      ctxMatch.beginPath();
      ctxMatch.moveTo(x1, y1);
      ctxMatch.lineTo(x2, y2);
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
  const requiredCount = q.left.length;

  if (Object.keys(userLines).length === requiredCount && !isAnswered) {
    isAnswered = true;
    let allCorrect = true;

    Object.keys(q.pairs).forEach(leftId => {
      const targetRight = q.pairs[leftId];
      const userRight = userLines[leftId];

      const leftEl = document.querySelector(`#left-column .match-item[data-id="${leftId}"]`);
      if (userRight === targetRight) {
        if (leftEl) leftEl.classList.add("matched-correct");
      } else {
        allCorrect = false;
        if (leftEl) leftEl.classList.add("matched-wrong");
      }
    });

    userAnswers[currentIdx] = allCorrect;

    setTimeout(() => { nextQuestion(); }, 1200);
  }
}

// ================= NAVIGASI =================
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

  let feedback = "";
  if (score === 100) {
    feedback = "🌟 Luar biasa! Nilai kamu sempurna!";
  } else if (score >= 70) {
    feedback = "👍 Hebat! Kamu belajar dengan sangat baik!";
  } else {
    feedback = "💪 Tetap semangat! Yuk coba lagi agar dapat 100!";
  }
  document.getElementById("feedback-text").innerText = feedback;
}

function restartQuiz() {
  initQuizData();
  loadQuestion();
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
}

window.onresize = () => {
  if (questions[currentIdx] && questions[currentIdx].type === "multiple-choice") resizeDrawCanvas();
  else if (questions[currentIdx] && questions[currentIdx].type === "matching") resizeMatchCanvas();
};