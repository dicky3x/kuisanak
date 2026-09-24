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

// BANK SOAL LENGKAP SEKOLAH GUANG MING KELAS 1 (GMEC)
const guangMingClass1Bank = [
  // ================= 1. MANDARIN GMEC =================
  { type: "multiple-choice", subject: "Mandarin", text: "1. Huruf yang memiliki radikal '亻' adalah...", options: ["你 (nǐ)", "河 (hé)", "五 (wǔ)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "2. Radikal dari huruf '河' adalah...", options: ["氵(三点水)", "可", "亻"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "3. Lengkapi kalimat: 我 (叫 / 几) 小美。", options: ["叫 (jiào)", "几 (jǐ)", "岁 (suì)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "4. Lengkapi kalimat: 我家有 (五个星期 / 五个人)。", options: ["五个人 (lima orang)", "五个星期 (lima minggu)", "五日 (lima hari)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "5. Lengkapi kalimat: 我今年 (八日 / 八岁)。", options: ["八岁 (8 tahun)", "八日 (8 hari)", "八月 (8 bulan)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "6. Jumlah goresan dari huruf '禾' adalah...", options: ["五 (5 goresan)", "四 (4 goresan)", "六 (6 goresan)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "7. Jumlah goresan dari huruf '二' adalah...", options: ["二 (2 goresan)", "三 (3 goresan)", "四 (4 goresan)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "8. '早安' dalam Bahasa Indonesia artinya...", options: ["Selamat pagi", "Selamat malam", "Selamat siang"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "9. 我叫爸爸的爸爸 (Ayah dari Ayah dipanggil)...", options: ["爷爷 (yéye)", "外公 (wàigōng)", "叔叔 (shūshu)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "10. 'Sampai Jumpa' dalam Aksara Hanzi adalah...", options: ["再见 (zàijiàn)", "谢谢 (xièxie)", "你好 (nǐhǎo)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "11. '你好' dalam Bahasa Indonesia artinya...", options: ["Halo / Apa kabar", "Terima kasih", "Selamat tidur"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "12. '晚安' dalam Bahasa Indonesia artinya...", options: ["Selamat malam", "Selamat pagi", "Selamat siang"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "13. Terjemahan angka 'Tiga' dalam Bahasa Mandarin adalah...", options: ["三 (sān)", "五 (wǔ)", "八 (bā)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "14. Pinyin dari Hanzi '日' adalah...", options: ["rì", "yuè", "mù"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "15. Pinyin dari Hanzi '妹妹' (Adik Perempuan) adalah...", options: ["mèimei", "māma", "jiějie"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "16. Aksara Hanzi dari kata 'Bulan' (Moon) adalah...", options: ["月 (yuè)", "日 (rì)", "水 (shuǐ)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "17. Aksara Hanzi dari angka 'Lima' (Five) adalah...", options: ["五 (wǔ)", "三 (sān)", "七 (qī)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "18. Aksara Hanzi dari kata 'Tidak' (No / Not) adalah...", options: ["不 (bù)", "去 (qù)", "有 (yǒu)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "19. Aksara Hanzi dari angka 'Tujuh' (Seven) adalah...", options: ["七 (qī)", "九 (jiǔ)", "六 (liù)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "20. Aksara Hanzi dari kata 'Pergi' (Go) adalah...", options: ["去 (qù)", "来 (lái)", "看 (kàn)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "21. Arti dari kata Bahasa Mandarin '昨天' adalah...", options: ["Kemarin", "Hari ini", "Besok"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "22. Arti dari kata Bahasa Mandarin '今天' adalah...", options: ["Hari ini", "Kemarin", "Besok"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "23. Arti dari kata Bahasa Mandarin '明天' adalah...", options: ["Besok", "Hari ini", "Lusa"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "24. Arti dari kata '星期一' (Xīngqī yī) adalah...", options: ["Hari Senin", "Hari Selasa", "Hari Minggu"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "25. Arti dari kata '谢谢' (Xièxie) adalah...", options: ["Terima kasih", "Sama-sama", "Maaf"], correct: 0 },

  // ================= 2. ENGLISH GMEC =================
  { type: "multiple-choice", subject: "English", text: "1. Look at the letters: A - B - C - D - ... What letter comes next?", options: ["E", "F", "G"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "2. You want to draw a straight line. What object do you need?", options: ["Ruler", "Pencilcase", "Eraser"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "3. Complete the sentence: 'This is Sofia. The doll is ______.'", options: ["small and pretty", "big and long", "red and big"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "4. Read the dialogue: Teacher: 'What is your name?' - Boy: 'My name is Rian.' The boy's name is...", options: ["Rian", "Ben", "Dino"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "5. Look at the picture of a beach ball and a car. Which toy is small?", options: ["The car", "The beach ball", "Both toys"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "6. Look at the letters: M - N - O - P - ... Write the next letters.", options: ["Q and R", "R and S", "S and T"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "7. Complete the sentence: 'This is Rafi. This is ______ bag.'", options: ["his", "her", "my"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "8. A child says: 'I want a small toy with a rectangle shape.' Which toy is it?", options: ["Train", "Car", "Kite"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "9. Write the missing word: The teacher says 'Please ______ your book.'", options: ["open / close", "fly", "write"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "10. A child says: 'I want the big toy that can fly.' Which toy does the child want?", options: ["Kite", "Ball", "Doll"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "11. Name three classroom objects in your class:", options: ["Pencil, Rubber, Desk", "Dog, Cat, Bird", "Apple, Banana, Mango"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "12. Which pair of words has the short /a/ sound?", options: ["Bag and Rat", "Bed and Red", "Pin and Bin"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "13. Anna says to Lily: 'This is Ben.' Anna's friend is...", options: ["Ben", "Rafi", "Dino"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "14. Complete the sentence: 'This is Dino. This is ______ car.'", options: ["his", "her", "your"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "15. What shape is a kite toy?", options: ["Triangle / Diamond", "Circle", "Square"], correct: 0 },

  // ================= 3. SCIENCE GMEC =================
  { type: "multiple-choice", subject: "Science", text: "1. What can you do with your eyes?", options: ["See", "Hear", "Taste"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "2. Which part of the body helps us smell?", options: ["Nose", "Tongue", "Cheek"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "3. We taste food with our...", options: ["Tongue", "Ears", "Nose"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "4. Which body parts do we use to hold things?", options: ["Hands and fingers", "Legs", "Eyes"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "5. What covers the top of your fingers?", options: ["Nail", "Toe", "Ears"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "6. What can you do with your legs?", options: ["Walk / Run", "Smell", "Hear"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "7. Siti wants to listen to music. Which sense does she use?", options: ["Hearing", "Tasting", "Smelling"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "8. Which foods should we eat LESS of to stay healthy?", options: ["Lollipop and sweets", "Milk", "Vegetables"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "9. What should we do to keep our body clean?", options: ["Bathing / Take a bath", "Exercise only", "Eating sweet food"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "10. Potato chips and salted peanuts are examples of...", options: ["salty food", "sweet food", "strong food"], correct: 0 },

  // ================= 4. MATH GMEC =================
  { type: "multiple-choice", subject: "Math", text: "1. How many books are there? (Count 5 books)", options: ["5", "4", "6"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "2. Look at 5 trees and 6 flowers. There are ______ trees than flowers.", options: ["fewer", "more", "same"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "3. What number comes next in this pattern? 2, 4, 6, ...", options: ["8", "7", "10"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "4. Which number bond equals 8?", options: ["5 + 3 = 8", "2 + 6 = 7", "7 - 1 = 5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "5. Fill in the blank: ___ + 4 = 7", options: ["3", "4", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "6. Mom bought 3 lamps. She bought 4 more. How many lamps does she have now?", options: ["7", "6", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "7. What is 8 - 2?", options: ["6", "7", "5"], correct: 0 },

  // ================= 5. PENDIDIKAN PANCASILA GMEC =================
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "1. Bunyi sila yang dilambangkan oleh Bintang Emas adalah...", options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kemanusiaan yang Adil dan Beradab"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "2. Nama burung yang menjadi lambang negara Indonesia adalah...", options: ["burung garuda", "burung elang", "burung merpati"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "3. Rina selesai bermain lalu menyimpan sepatunya di rak. Kegiatan Rina contoh...", options: ["aturan di rumah", "aturan di sekolah", "aturan bermain"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "4. Contoh mematuhi aturan di sekolah adalah...", options: ["Mendengarkan penjelasan guru", "Datang terlambat", "Membuang sampah di lantai"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "5. Yang termasuk identitas diri Siti (rambut panjang, hobi membaca) adalah...", options: ["Nama, ciri fisik, dan hobi", "Nama sekolah & kendaraan", "Nama makanan"], correct: 0 },

  // ================= 6. BUMI MELAYU RIAU GMEC =================
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "1. Sapaan untuk saudara yang bertubuh pendek dalam Melayu adalah...", options: ["Uneng", "Utih", "Andak"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "2. 'Emak' adalah sapaan Melayu untuk...", options: ["orang tua perempuan", "anak pertama", "orang tua laki-laki"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "3. Sarianun adalah nama anak gadis dalam cerita dongeng Melayu...", options: ["Rawang Tengkuluk", "Malin Kundang", "Kancil dan Harimau"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "4. Sapaan dilakukan sebagai rasa...", options: ["sayang dan hormat", "tidak suka", "benci"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "5. Sapaan kepada orang tua laki-laki dalam budaya Melayu adalah...", options: ["Ayah atau Abah", "Angah", "Ucu"], correct: 0 },

  // ================= 7. MORALE GMEC =================
  { type: "multiple-choice", subject: "Morale", text: "1. Ucapan 'Selamat pagi, Ayah, Ibu' menunjukkan sikap hormat berupa...", options: ["Mengucapkan salam & menyapa ramah", "Membantu pekerjaan rumah", "Memberi sesuatu"], correct: 0 },
  { type: "multiple-choice", subject: "Morale", text: "2. Ucapan 'Ayah, bolehkah saya...' merupakan contoh sikap...", options: ["Berbicara sopan kepada orang tua", "Mendengar nasihat", "Membantu pekerjaan rumah"], correct: 0 },

  // ================= 8. BAHASA INDONESIA GMEC =================
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "1. Sikap duduk yang benar saat membaca adalah posisi badan harus...", options: ["Tegak dan lurus", "Bungkuk", "Berbaring"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "2. Huruf vokal pada kata 'buku' adalah...", options: ["u", "b", "k"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "3. Kata yang diawali suku kata ba- adalah...", options: ["batu", "bola", "bebek"], correct: 0 },

  // ================= 9. AGAMA ISLAM GMEC =================
  { type: "multiple-choice", subject: "Agama Islam", text: "1. Iman kepada hari akhir merupakan rukun Iman ke-...", options: ["5", "6", "3"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "2. Sebelum makan kita membaca...", options: ["Bismillah / Basmalah", "Hamdalah", "Dongeng"], correct: 0 }
];

// FUNGSI SUARA SOAL (TEXT TO SPEECH)
function speakCurrentQuestion() {
  if (!('speechSynthesis' in window)) return;
  
  // Hentikan suara yang sedang berjalan jika ada
  window.speechSynthesis.cancel();

  if (!questions[currentIdx]) return;

  const q = questions[currentIdx];
  const utterance = new SpeechSynthesisUtterance(q.text);

  // Penentuan Bahasa Pengucapan Suara
  if (q.subject === "Mandarin") {
    utterance.lang = "zh-CN";
  } else if (["Math", "Science", "English"].includes(q.subject)) {
    utterance.lang = "en-US";
  } else {
    utterance.lang = "id-ID";
  }

  utterance.rate = 0.85; // Kecepatan suara sedikit dipelankan agar ramah untuk anak-anak
  window.speechSynthesis.speak(utterance);
}

// NAVIGASI APLIKASI
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
  
  document.getElementById("school-menu-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");

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

// CANVAS & KUIS ENGINE
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

  // Bacakan teks soal secara otomatis
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
}

function restartQuiz() {
  initQuizData();
  loadQuestion();
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
}

// DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
  setupCanvasElements();
  
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