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

// DATABASE BANK SOAL KELAS 1 GUANG MING (DARI ALL PDF GMEC)
const guangMingClass1Bank = [
  // --- ENGLISH GMEC ---
  { type: "multiple-choice", subject: "English", text: "Look at the picture! Which one is a rubber?", options: ["Option 3", "Option 1", "Option 2"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "Listening: What is Ben's favourite toy?", options: ["A plane", "A go-kart", "A ball"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "What colour is Ben's go-kart?", options: ["Red", "Green", "Blue"], correct: 2 },
  { type: "multiple-choice", subject: "English", text: "What size is Ben's go-kart?", options: ["Big", "Small", "Long"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "What is Ben's favourite colour?", options: ["Yellow", "Blue", "Green"], correct: 2 },
  { type: "multiple-choice", subject: "English", text: "'What is your name?' - Which answer is correct?", options: ["My name is Anna.", "It is a pencil.", "Open your book."], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "Which word has the same short /e/ sound as 'red'?", options: ["Cat", "Bed", "Bike"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "Martin wants a toy that is NOT red and big. Which toy does Martin want?", options: ["Kite", "Ball", "Car"], correct: 0 },

  // --- MATH GMEC ---
  { type: "multiple-choice", subject: "Math", text: "Which number is greater, 4 or 7?", options: ["4", "5", "7"], correct: 2 },
  { type: "multiple-choice", subject: "Math", text: "What number comes next in this pattern? 2, 4, 6, ...", options: ["7", "8", "10"], correct: 1 },
  { type: "multiple-choice", subject: "Math", text: "Which number bond makes 10?", options: ["3 + 7", "6 + 5", "4 + 4"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "What is 5 + 3?", options: ["7", "8", "9"], correct: 1 },
  { type: "multiple-choice", subject: "Math", text: "Ben has 4 rulers. He gets 3 more. How many rulers does he have now?", options: ["6", "7", "8"], correct: 1 },

  // --- BUDAYA MELAYU RIAU GMEC ---
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Dongeng adalah cerita yang mengisahkan peristiwa pada masa...", options: ["depan", "sekarang", "lalu"], correct: 2 },
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Pada zaman dulu, dongeng dibawakan sebagai pengantar...", options: ["tidur", "pelajaran", "nyanyian"], correct: 0 },
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Gadang yang ada dalam dongeng Rawang Tengkuluk bernama...", options: ["Sarianun", "Putri", "Dara"], correct: 0 },

  // --- MANDARIN GMEC ---
  { type: "multiple-choice", subject: "Mandarin", text: "“早安” (Zǎo ān) dalam bahasa Indonesia adalah...", options: ["Selamat pagi", "Selamat siang", "Selamat malam"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "“八” (Bā) dalam bahasa Indonesia artinya...", options: ["Delapan", "Satu", "Lima"], correct: 0 },

  // --- BAHASA INDONESIA GMEC ---
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Posisi tegak dan punggung lurus merupakan sikap duduk yang benar saat...", options: ["Membaca & Menulis", "Tidur", "Bermain"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Huruf vokal pada kata 'Cabe' adalah...", options: ["a dan e", "c dan b", "a dan b"], correct: 0 },

  // --- MORAL GMEC ---
  { type: "multiple-choice", subject: "Moral", text: "Ucapan 'Selamat pagi, Ayah, Ibu' menunjukkan sikap...", options: ["Mengucapkan salam & menyapa ramah", "Membantu pekerjaan rumah", "Mendengar nasihat"], correct: 0 },

  // --- KEWARGANEGARAAN / PP GMEC ---
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "1. Lambang negara Republik Indonesia adalah...", options: ["burung garuda", "bendera merah putih", "lagu Indonesia raya"], correct: 0 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "2. Gambar Rantai Emas melambangkan Pancasila sila ke-...", options: ["3", "2", "1"], correct: 1 },

  // --- AGAMA ISLAM GMEC ---
  { type: "multiple-choice", subject: "Agama Islam", text: "Iman kepada hari akhir merupakan rukun Iman ke-...", options: ["5", "6", "3"], correct: 0 }
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

  if (selectedClassLevel === 1 && selectedSubjectName === "Kewarganegaraan") {
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
