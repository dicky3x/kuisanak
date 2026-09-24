// Variable Global
let selectedSchoolType = "general";
let selectedClassLevel = 1;
let selectedSubjectName = "Semua Mapel";
let questions = [];
let currentIdx = 0;
let isAnswered = false;
let userAnswers = [];
let isMuted = false;

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

// BANK SOAL LENGKAP SEKOLAH GUANG MING KELAS 1 (GMEC) - DARI SELURUH BERKAS PDF
const guangMingClass1Bank = [
  // ================= 1. MANDARIN GMEC =================
  { type: "multiple-choice", subject: "Mandarin", text: "1. Huruf yang memiliki radikal '亻' adalah...", options: ["你 (nǐ)", "河 (hé)", "五 (wǔ)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "2. Radikal dari huruf '河' adalah...", options: ["氵(三点水)", "可", "亻"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "3. Lengkapi kalimat: 我 (叫 / 几) 小美。", options: ["叫 (jiào)", "几 (jǐ)", "岁 (suì)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "4. Lengkapi kalimat: 我家有 (五个星期 / 五个人)。", options: ["五个人 (lima orang)", "五个星期 (lima minggu)", "五日 (lima hari)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "5. Lengkapi kalimat: 我今年 (八日 / 八岁)。", options: ["八岁 (8 tahun)", "八日 (8 hari)", "八月 (8 bulan)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "6. Jumlah goresan dari huruf '禾' adalah...", options: ["五 (5)", "四 (4)", "六 (6)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "7. Jumlah goresan dari huruf '二' adalah...", options: ["二 (2)", "三 (3)", "四 (4)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "8. '早安' dalam Bahasa Indonesia artinya...", options: ["Selamat pagi", "Selamat malam", "Selamat siang"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "9. 我叫爸爸的爸爸 (Ayah dari Ayah dipanggil)...", options: ["爷爷 (yéye)", "外公 (wàigōng)", "叔叔 (shūshu)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "10. 'Sampai Jumpa' dalam Aksara Hanzi adalah...", options: ["再见 (zàijiàn)", "谢谢 (xièxie)", "你好 (nǐhǎo)"], correct: 0 },
  { type: "short-answer", subject: "Mandarin", text: "11. Tuliskan Aksara Hanzi dari kata 'Bulan' (Moon)!", acceptableAnswers: ["月", "yue"] },
  { type: "short-answer", subject: "Mandarin", text: "12. Tuliskan Aksara Hanzi dari angka 'Lima' (Five)!", acceptableAnswers: ["五", "wu"] },
  { type: "short-answer", subject: "Mandarin", text: "13. Tuliskan Aksara Hanzi dari kata 'Tidak' (No / Not)!", acceptableAnswers: ["不", "bu"] },
  { type: "short-answer", subject: "Mandarin", text: "14. Terjemahkan kata '明天' ke dalam Bahasa Indonesia!", acceptableAnswers: ["besok", "Hari besok"] },
  { type: "short-answer", subject: "Mandarin", text: "15. Terjemahkan kata '星期一' ke dalam Bahasa Indonesia!", acceptableAnswers: ["senin", "hari senin"] },
  { 
    type: "matching", subject: "Mandarin", text: "16. Pasangkan sapaan silsilah keluarga Mandarin berikut!",
    left: [{ id: "z1", content: "👨‍🦳 Ayah dari Ayah" }, { id: "z2", content: "👵 Ibu dari Ayah" }, { id: "z3", content: "👨‍🦲 Ayah dari Ibu" }],
    right: [{ id: "r1", content: "Nǎi nai (奶奶)" }, { id: "r2", content: "Yé ye (爷爷)" }, { id: "r3", content: "Wài gōng (外公)" }],
    pairs: { z1: "r2", z2: "r1", z3: "r3" }
  },

  // ================= 2. ENGLISH GMEC =================
  { type: "multiple-choice", subject: "English", text: "1. Look at the letters: A - B - C - D - ... What letter comes next?", options: ["E", "F", "G"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "2. You want to draw a straight line. What object do you need?", options: ["Ruler", "Pencilcase", "Eraser"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "3. Complete the sentence: 'This is Sofia. The doll is ______.'", options: ["small and pretty", "big and long", "red and big"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "4. Read the dialogue: Teacher: 'What is your name?' - Boy: 'My name is Rian.' The boy's name is...", options: ["Rian", "Ben", "Dino"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "5. Look at the letters: M - N - O - P - ... What are the next two letters?", options: ["Q and R", "R and S", "S and T"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "6. Complete the sentence: 'This is Rafi. This is ______ bag.'", options: ["his", "her", "my"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "7. A child says: 'I want a small toy with a rectangle shape.' Which toy is it?", options: ["Train", "Car", "Kite"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "8. A child says: 'I want the big toy that can fly.' Which toy is it?", options: ["Kite", "Ball", "Doll"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "9. Which pair of words has the short /a/ sound?", options: ["Bag and Rat", "Bed and Red", "Pin and Bin"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "10. What shape is a kite toy?", options: ["Diamond / Triangle", "Circle", "Square"], correct: 0 },
  { type: "short-answer", subject: "English", text: "11. Complete the missing letters: Bl_ck c_t (Black cat)", acceptableAnswers: ["a", "a,a", "a dan a"] },
  { type: "short-answer", subject: "English", text: "12. What shape is a beach ball?", acceptableAnswers: ["circle", "round", "lingkaran"] },
  { 
    type: "matching", subject: "English", text: "13. Match the toys with their description!",
    left: [{ id: "e1", content: "🪁 Kite" }, { id: "e2", content: "⚽ Ball" }, { id: "e3", content: "🚂 Train" }],
    right: [{ id: "r1", content: "Round shape" }, { id: "r2", content: "Can fly in the sky" }, { id: "r3", content: "Long toy" }],
    pairs: { e1: "r2", e2: "r1", e3: "r3" }
  },

  // ================= 3. SCIENCE GMEC =================
  { type: "multiple-choice", subject: "Science", text: "1. What can you do with your eyes?", options: ["See", "Hear", "Taste"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "2. Which part of the body helps us smell?", options: ["Nose", "Tongue", "Cheek"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "3. We taste food with our...", options: ["Tongue", "Ears", "Nose"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "4. What covers the top of your fingers?", options: ["Nail", "Toe", "Ears"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "5. Potato chips and salted peanuts are examples of...", options: ["salty food", "sweet food", "strong food"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "6. What should we do to keep our body clean?", options: ["Take a bath", "Eat sweets", "Stay dirty"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "7. You see a hot stove in the kitchen. What is the safest action?", options: ["Don't touch it", "Touch it quickly", "Put a toy on it"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "8. Which of these is a living thing?", options: ["Cat", "Rock", "Toy car"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "9. What do living things need to stay alive?", options: ["Food, air, and water", "Toys and clothes", "Colors"], correct: 0 },
  { type: "short-answer", subject: "Science", text: "10. Mention one sense organ used to hear sounds!", acceptableAnswers: ["ear", "ears", "telinga"] },
  { 
    type: "matching", subject: "Science", text: "11. Match the body parts with their functions!",
    left: [{ id: "s1", content: "👁️ Eyes" }, { id: "s2", content: "👃 Nose" }, { id: "s3", content: "👅 Tongue" }],
    right: [{ id: "r1", content: "To smell" }, { id: "r2", content: "To see" }, { id: "r3", content: "To taste" }],
    pairs: { s1: "r2", s2: "r1", s3: "r3" }
  },

  // ================= 4. MATH GMEC =================
  { type: "multiple-choice", subject: "Math", text: "1. What number comes next in this pattern? 2, 4, 6, ...", options: ["8", "7", "10"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "2. Fill in the blank: ___ + 4 = 7", options: ["3", "4", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "3. Mom bought 3 lamps. She bought 4 more. How many lamps total?", options: ["7", "6", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "4. What is 8 - 2?", options: ["6", "7", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "5. There are 7 birds on a tree. 2 birds fly away. How many birds left?", options: ["5", "6", "7"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "6. What is 1 more than 5?", options: ["6", "5", "7"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "7. What is 2 less than 9?", options: ["7", "8", "6"], correct: 0 },
  { type: "short-answer", subject: "Math", text: "8. Mary has 10 coins. 4 are visible. How many coins are hidden under a cup?", acceptableAnswers: ["6", "enam"] },
  { type: "short-answer", subject: "Math", text: "9. Complete the sequence: 1, 3, 5, 7, ___", acceptableAnswers: ["9", "sembilan"] },
  { 
    type: "matching", subject: "Math", text: "10. Match the addition problems with their correct result!",
    left: [{ id: "m1", content: "3 + 4" }, { id: "m2", content: "5 + 5" }, { id: "m3", content: "9 - 3" }],
    right: [{ id: "r1", content: "10" }, { id: "r2", content: "7" }, { id: "r3", content: "6" }],
    pairs: { m1: "r2", m2: "r1", m3: "r3" }
  },

  // ================= 5. PENDIDIKAN PANCASILA GMEC =================
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "1. Bunyi sila yang dilambangkan oleh Bintang Emas adalah...", options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kemanusiaan yang Adil"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "2. Nama burung lambang negara Indonesia adalah...", options: ["burung garuda", "burung elang", "burung merpati"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "3. Rina merapikan sepatu di rak setelah bermain. Ini contoh...", options: ["aturan di rumah", "aturan di sekolah", "aturan jalan"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "4. Manakah contoh mematuhi aturan di sekolah?", options: ["Mendengarkan penjelasan guru", "Datang terlambat", "Membuang sampah sembarangan"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "5. Andi berambut lurus, Beni berambut keriting. Perbedaan ini adalah keragaman...", options: ["ciri fisik / rambut", "makanan kesukaan", "hobi"], correct: 0 },
  { type: "short-answer", subject: "Pendidikan Pancasila", text: "6. Bintang emas merupakan simbol Pancasila sila ke-...", acceptableAnswers: ["1", "satu", "1 (satu)"] },
  { type: "short-answer", subject: "Pendidikan Pancasila", text: "7. Sebutkan satu contoh aturan sebelum tidur di rumah!", acceptableAnswers: ["gosok gigi", "cuci kaki", "berdoa", "membaca doa"] },
  { 
    type: "matching", subject: "Pendidikan Pancasila", text: "8. Pasangkan simbol Pancasila dengan sila yang tepat!",
    left: [{ id: "p1", content: "⭐ Bintang" }, { id: "p2", content: "⛓️ Rantai" }, { id: "p3", content: "🌳 Pohon Beringin" }],
    right: [{ id: "r1", content: "Sila Ke-2" }, { id: "r2", content: "Sila Ke-1" }, { id: "r3", content: "Sila Ke-3" }],
    pairs: { p1: "r2", p2: "r1", p3: "r3" }
  },

  // ================= 6. BUMI MELAYU RIAU GMEC =================
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "1. Sapaan untuk saudara yang bertubuh pendek dalam Melayu adalah...", options: ["Uneng", "Utih", "Andak"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "2. 'Emak' adalah sapaan Melayu untuk...", options: ["orang tua perempuan", "anak pertama", "orang tua laki-laki"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "3. Sarianun adalah tokoh dalam dongeng Melayu...", options: ["Rawang Tengkuluk", "Malin Kundang", "Kancil"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "4. Sapaan kepada orang tua laki-laki dalam budaya Melayu adalah...", options: ["Ayah atau Abah", "Angah", "Ucu"], correct: 0 },
  { type: "short-answer", subject: "Bumi Melayu Riau (BMR)", text: "5. 'Ulung' atau 'Long' adalah sapaan Melayu untuk anak yang lahir ke-...", acceptableAnswers: ["1", "satu", "pertama"] },
  { 
    type: "matching", subject: "Bumi Melayu Riau (BMR)", text: "6. Pasangkan sapaan Melayu berikut dengan artinya!",
    left: [{ id: "bmr1", content: "Udo" }, { id: "bmr2", content: "Utih" }, { id: "bmr3", content: "Anjang" }],
    right: [{ id: "r1", content: "Anak berkulit putih" }, { id: "r2", content: "Anak lahir ke-4" }, { id: "r3", content: "Anak bertubuh tinggi/panjang" }],
    pairs: { bmr1: "r2", bmr2: "r1", bmr3: "r3" }
  },

  // ================= 7. MORALE GMEC =================
  { type: "multiple-choice", subject: "Morale", text: "1. Ucapan 'Selamat pagi, Ayah, Ibu' menunjukkan sikap hormat berupa...", options: ["Mengucapkan salam ramah", "Membantu pekerjaan rumah", "Memberi sesuatu"], correct: 0 },
  { type: "multiple-choice", subject: "Morale", text: "2. Ucapan 'Ayah, bolehkah saya...' merupakan contoh...", options: ["Berbicara sopan kepada orang tua", "Mendengar nasihat", "Membantu pekerjaan"], correct: 0 },
  { 
    type: "matching", subject: "Morale", text: "3. Pasangkan ucapan dengan sikap hormat yang sesuai!",
    left: [{ id: "mo1", content: "🗣️ 'Ayah, bolehkah saya...'" }, { id: "mo2", content: "☀️ 'Selamat pagi, Ayah, Ibu'" }],
    right: [{ id: "r1", content: "Mengucapkan salam ramah" }, { id: "r2", content: "Berbicara dengan sopan" }],
    pairs: { mo1: "r2", mo2: "r1" }
  },

  // ================= 8. BAHASA INDONESIA GMEC =================
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "1. Sikap duduk yang benar saat membaca adalah posisi badan...", options: ["Tegak dan lurus", "Bungkuk", "Berbaring"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "2. Huruf vokal pada kata 'buku' adalah...", options: ["u", "b", "k"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "3. Kata yang diawali suku kata ba- adalah...", options: ["batu", "bola", "bebek"], correct: 0 },
  { type: "short-answer", subject: "Bahasa Indonesia", text: "4. Tanda baca apakah yang digunakan di akhir kalimat 'Siapa namamu'?", acceptableAnswers: ["?", "tanda tanya", "tanya"] },
  { 
    type: "matching", subject: "Bahasa Indonesia", text: "5. Pasangkan gambar/benda dengan suku kata awal!",
    left: [{ id: "bi1", content: "🎈 Balon" }, { id: "bi2", content: "🏫 Gedung" }, { id: "bi3", content: "🦈 Hiu" }],
    right: [{ id: "r1", content: "ge" }, { id: "r2", content: "ba" }, { id: "r3", content: "hi" }],
    pairs: { bi1: "r2", bi2: "r1", bi3: "r3" }
  },

  // ================= 9. AGAMA ISLAM GMEC =================
  { type: "multiple-choice", subject: "Agama Islam", text: "1. Iman kepada hari akhir merupakan rukun Iman ke-...", options: ["5", "6", "3"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "2. Sebelum makan dan mengawali kegiatan kita membaca...", options: ["Bismillah / Basmalah", "Hamdalah", "Istighfar"], correct: 0 },
  { type: "short-answer", subject: "Agama Islam", text: "3. Kitab suci umat Islam adalah...", acceptableAnswers: ["Al-Qur'an", "Al Quran", "Alquran", "Al-Quran"] },
  { 
    type: "matching", subject: "Agama Islam", text: "4. Pasangkan Rukun Iman berikut dengan urutannya!",
    left: [{ id: "ai1", content: "Iman kepada Allah SWT" }, { id: "ai2", content: "Iman kepada Rasul" }, { id: "ai3", content: "Iman kepada Takdir" }],
    right: [{ id: "r1", content: "Urutan Ke-4" }, { id: "r2", content: "Urutan Ke-1" }, { id: "r3", content: "Urutan Ke-6" }],
    pairs: { ai1: "r2", ai2: "r1", ai3: "r3" }
  }
];

// INTEGRASI API AI GENERATIF (GROQ / GEMINI)
function openAiModal() { document.getElementById("ai-modal").classList.remove("hidden"); }
function closeAiModal() { document.getElementById("ai-modal").classList.add("hidden"); }

function saveAiConfig() {
  const provider = document.getElementById("ai-provider").value;
  const apiKey = document.getElementById("ai-api-key").value.trim();
  localStorage.setItem("ai_provider", provider);
  localStorage.setItem("ai_api_key", apiKey);
  alert("✅ Pengaturan API AI berhasil disimpan!");
  closeAiModal();
}

async function fetchQuestionsFromAI(classLevel, subject) {
  const provider = localStorage.getItem("ai_provider") || "groq";
  
  // PASTE API KEY GROQ MILIKMU DI BAWAH INI JIKA INGIN DIBAKARKAN KE KODE DEFAULT:
  const apiKey = localStorage.getItem("ai_api_key") || "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";

  if (!apiKey || apiKey.includes("PASTE_API_KEY")) {
    return generateFallbackAiQuestions(classLevel, subject);
  }

  const prompt = `Buatkan 5 soal kuis interaktif untuk anak SD Kelas ${classLevel} mata pelajaran ${subject}. 
Kembalikan HANYA format JSON murni berbentuk Array Object tanpa markdown/teks tambahan. 
Format JSON yang wajib diikuti:
[
  {
    "type": "multiple-choice",
    "subject": "${subject}",
    "text": "Pertanyaan di sini?",
    "options": ["Pilihan A", "Pilihan B", "Pilihan C"],
    "correct": 0
  }
]`;

  try {
    let jsonResultText = "";
    if (provider === "groq") {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.7
        })
      });
      const data = await response.json();
      jsonResultText = data.choices[0].message.content;
    } else {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      const data = await response.json();
      jsonResultText = data.candidates[0].content.parts[0].text;
    }

    const cleanJson = jsonResultText.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanJson);
  } catch (err) {
    console.error("Gagal memanggil API AI:", err);
    return generateFallbackAiQuestions(classLevel, subject);
  }
}

function generateFallbackAiQuestions(classLevel, subject) {
  return [
    { type: "multiple-choice", subject: subject, text: `[Soal AI SD Kelas ${classLevel}] Berapakah hasil dari 10 + 15?`, options: ["25", "20", "30"], correct: 0 },
    { type: "multiple-choice", subject: subject, text: `[Soal AI SD Kelas ${classLevel}] Ibu kota Negara Indonesia adalah...`, options: ["Jakarta / Nusantara", "Bandung", "Surabaya"], correct: 0 },
    { type: "multiple-choice", subject: subject, text: `[Soal AI SD Kelas ${classLevel}] Tumbuhan menyerap air menggunakan...`, options: ["Akar", "Daun", "Bunga"], correct: 0 }
  ];
}

// SUARA WANITA (TEXT TO SPEECH)
function speakCurrentQuestion() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  if (isMuted || !questions[currentIdx]) return;

  const q = questions[currentIdx];
  const utterance = new SpeechSynthesisUtterance(q.text);

  let targetLang = "id-ID";
  if (q.subject === "Mandarin") targetLang = "zh-CN";
  else if (["Math", "Science", "English"].includes(q.subject)) targetLang = "en-US";
  
  utterance.lang = targetLang;
  utterance.pitch = 1.3;
  utterance.rate = 0.85;

  window.speechSynthesis.speak(utterance);
}

function toggleAudio() {
  isMuted = !isMuted;
  const audioBtn = document.getElementById("audio-btn");
  if (isMuted) {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (audioBtn) audioBtn.innerText = "🔇 Suara Off";
  } else {
    if (audioBtn) audioBtn.innerText = "🔊 Suara On";
    speakCurrentQuestion();
  }
}

// NAVIGASI APLIKASI
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  document.getElementById("theme-toggle-btn").innerText = isDark ? "☀️ Tema Terang" : "🌙 Tema Gelap";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function selectSchool(schoolType) {
  selectedSchoolType = schoolType;
  document.getElementById("school-menu-screen").classList.add("hidden");

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
  document.getElementById("selected-class-title").innerText = (selectedSchoolType === "guangming") ? `Sekolah Guang Ming - Kelas 1` : `Sekolah Umum - Kelas ${level} SD`;
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

async function selectSubject(subjectName) {
  selectedSubjectName = subjectName;
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  if (selectedSchoolType === "guangming") {
    initGuangMingQuizData();
    loadQuestion();
  } else {
    document.getElementById("ai-loading").classList.remove("hidden");
    document.getElementById("quiz-content-area").classList.add("hidden");
    
    questions = await fetchQuestionsFromAI(selectedClassLevel, selectedSubjectName);
    userAnswers = new Array(questions.length).fill(null);
    currentIdx = 0;

    document.getElementById("ai-loading").classList.add("hidden");
    document.getElementById("quiz-content-area").classList.remove("hidden");
    loadQuestion();
  }
}

function initGuangMingQuizData() {
  let filteredBank = guangMingClass1Bank;
  if (selectedSubjectName !== "Semua Mapel") {
    filteredBank = guangMingClass1Bank.filter(q => q.subject === selectedSubjectName);
    if (filteredBank.length === 0) filteredBank = guangMingClass1Bank;
  }
  questions = JSON.parse(JSON.stringify(filteredBank));
  userAnswers = new Array(questions.length).fill(null);
  currentIdx = 0;
}

// LOAD SOAL
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
  const textAnswerContainer = document.getElementById("text-answer-container");
  const matchingContainer = document.getElementById("matching-container");
  const instructionText = document.getElementById("instruction-text");

  canvasContainer.classList.add("hidden");
  textAnswerContainer.classList.add("hidden");
  matchingContainer.classList.add("hidden");

  if (q.type === "multiple-choice") {
    canvasContainer.classList.remove("hidden");
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

  } else if (q.type === "short-answer") {
    textAnswerContainer.classList.remove("hidden");
    instructionText.innerText = "💡 Ketik jawabanmu di kotak bawah ini!";
    document.getElementById("short-answer-input").value = "";
    document.getElementById("text-feedback").innerText = "";

  } else if (q.type === "matching") {
    matchingContainer.classList.remove("hidden");
    instructionText.innerText = "💡 Tarik garis dari kiri ke kanan untuk mencocokkan!";
    setupMatchingBoard(q);
    setTimeout(resizeMatchCanvas, 100);
  }

  document.getElementById("prev-btn").disabled = (currentIdx === 0);
  setTimeout(speakCurrentQuestion, 300);
}

function submitTextAnswer() {
  if (isAnswered) return;
  const userText = document.getElementById("short-answer-input").value.trim().toLowerCase();
  const q = questions[currentIdx];
  const feedbackEl = document.getElementById("text-feedback");

  const isCorrect = q.acceptableAnswers.some(ans => ans.toLowerCase() === userText);
  isAnswered = true;
  userAnswers[currentIdx] = isCorrect;

  if (isCorrect) {
    feedbackEl.innerText = "✅ Jawabanmu Tepat Sekali!";
    feedbackEl.style.color = "#4caf50";
  } else {
    feedbackEl.innerText = `❌ Kurang Tepat. Jawaban benar: ${q.acceptableAnswers[0]}`;
    feedbackEl.style.color = "#f44336";
  }
}

// DRAW CANVAS MULTIPLE CHOICE
function setupCanvasElements() {
  drawCanvas = document.getElementById("draw-canvas");
  if (drawCanvas) { ctxDraw = drawCanvas.getContext("2d"); attachDrawCanvasListeners(); }
  matchCanvas = document.getElementById("match-canvas");
  if (matchCanvas) { ctxMatch = matchCanvas.getContext("2d"); attachMatchCanvasListeners(); }
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
    isDrawing = true; drawnPoints = [];
    const rect = drawCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    drawnPoints.push({ x, y });
    ctxDraw.beginPath(); ctxDraw.lineWidth = 5; ctxDraw.strokeStyle = "#e91e63"; ctxDraw.lineCap = "round"; ctxDraw.moveTo(x, y);
  };
  drawCanvas.onpointermove = (e) => {
    if (!isDrawing || isAnswered) return;
    const rect = drawCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    drawnPoints.push({ x, y }); ctxDraw.lineTo(x, y); ctxDraw.stroke();
  };
  drawCanvas.onpointerup = () => { if (isDrawing && !isAnswered) { isDrawing = false; evaluateMultipleChoice(); } };
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
        badge.style.background = "#4caf50"; badge.style.color = "#fff";
        if (parentRow) parentRow.style.background = "#c8e6c9";
      } else {
        badge.style.background = "#f44336"; badge.style.color = "#fff";
        if (parentRow) parentRow.style.background = "#ffcdd2";
      }
    }
  });
}

// MATCHING BOARD
function setupMatchingBoard(q) {
  const leftCol = document.getElementById("left-column");
  const rightCol = document.getElementById("right-column");
  leftCol.innerHTML = ""; rightCol.innerHTML = "";
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
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    document.querySelectorAll("#left-column .match-item").forEach(item => {
      const itemRect = item.getBoundingClientRect(), cRect = matchCanvas.getBoundingClientRect();
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
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    let matchedRightId = null;
    document.querySelectorAll("#right-column .match-item").forEach(item => {
      const itemRect = item.getBoundingClientRect(), cRect = matchCanvas.getBoundingClientRect();
      if (x >= (itemRect.left - cRect.left) && x <= (itemRect.right - cRect.left) && y >= (itemRect.top - cRect.top) && y <= (itemRect.bottom - cRect.top)) {
        matchedRightId = item.dataset.id;
      }
    });
    if (matchedRightId) userLines[activeLeftId] = matchedRightId;
    activeLeftId = null; startPoint = null; currentDragPoint = null;
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
      const lRect = leftEl.getBoundingClientRect(), rRect = rightEl.getBoundingClientRect();
      ctxMatch.beginPath();
      ctxMatch.moveTo(lRect.right - cRect.left, lRect.top + lRect.height / 2 - cRect.top);
      ctxMatch.lineTo(rRect.left - cRect.left, rRect.top + rRect.height / 2 - cRect.top);
      ctxMatch.lineWidth = 4; ctxMatch.strokeStyle = "#2196f3"; ctxMatch.stroke();
    }
  });

  if (startPoint && currentDragPoint) {
    ctxMatch.beginPath(); ctxMatch.moveTo(startPoint.x, startPoint.y); ctxMatch.lineTo(currentDragPoint.x, currentDragPoint.y);
    ctxMatch.lineWidth = 4; ctxMatch.strokeStyle = "#ff9800"; ctxMatch.setLineDash([6, 6]); ctxMatch.stroke(); ctxMatch.setLineDash([]);
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

function resetCurrentQuestion() { loadQuestion(); }

function goToSchoolMenu() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("class-menu-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("school-menu-screen").classList.remove("hidden");
}

function goToClassMenu() {
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("class-menu-screen").classList.remove("hidden");
}

function goToSubjectMenu() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.remove("hidden");
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
  selectSubject(selectedSubjectName);
  document.getElementById("result-screen").classList.add("hidden");
}

// DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
  setupCanvasElements();
  
  const savedKey = localStorage.getItem("ai_api_key");
  if (savedKey) document.getElementById("ai-api-key").value = savedKey;

  closeAiModal();
  document.getElementById("school-menu-screen").classList.remove("hidden");
  document.getElementById("class-menu-screen").classList.add("hidden");
  document.getElementById("subject-menu-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.add("hidden");
});