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

// DATABASE SOAL LENGKAP KELAS 1 SEKOLAH GUANG MING (GMEC)
const guangMingClass1Bank = [
  // ================= 1. MANDARIN GMEC (DARI PDF MID TEST MANDARIN) =================
  { type: "multiple-choice", subject: "Mandarin", text: "1. Huruf yang memiliki radikal '亻' adalah...", options: ["你 (nǐ)", "河 (hé)", "五 (wǔ)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "2. Radikal dari huruf '河' adalah...", options: ["氵(三点水)", "可", "亻"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "3. Lengkapi kalimat: 我 (叫 / 几) 小美。", options: ["叫 (jiào)", "几 (jǐ)", "岁 (suì)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "4. Lengkapi kalimat: 我家有 (五个星期 / 五个人)。", options: ["五个人 (lima orang)", "五个星期 (lima minggu)", "五日 (lima hari)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "5. Lengkapi kalimat: 我今年 (八日 / 八岁)。", options: ["八岁 (8 tahun)", "八日 (8 hari)", "八月 (8 bulan)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "6. Jumlah goresan dari huruf '禾' adalah...", options: ["五 (5)", "四 (4)", "六 (6)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "7. '早安' dalam Bahasa Indonesia artinya...", options: ["Selamat pagi", "Selamat malam", "Terima kasih"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "8. 我叫爸爸的爸爸 (Ayah dari Ayah dipanggil)...", options: ["爷爷 (yéye)", "外公 (wàigōng)", "叔叔 (shūshu)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "9. 'Sampai Jumpa' dalam Aksara Hanzi adalah...", options: ["再见 (zàijiàn)", "谢谢 (xièxie)", "你好 (nǐhǎo)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "10. '晚安' dalam Bahasa Indonesia artinya...", options: ["Selamat malam", "Selamat pagi", "Selamat siang"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "11. Pinyin dari Hanzi '日' adalah...", options: ["rì", "yuè", "mù"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "12. Pinyin dari Hanzi '妹妹' (Adik Perempuan) adalah...", options: ["mèimei", "māma", "jiejie"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "13. Tuliskan Hanzi dari kata 'Bulan' (Moon)...", options: ["月", "日", "水"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "14. Terjemahkan '明天' ke dalam Bahasa Indonesia...", options: ["Besok", "Hari ini", "Kemarin"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "15. Terjemahkan '星期一' ke dalam Bahasa Indonesia...", options: ["Senin", "Selasa", "Minggu"], correct: 0 },

  // ================= 2. ENGLISH GMEC (DARI PDF MID TEST ENGLISH) =================
  { type: "multiple-choice", subject: "English", text: "1. A-B-C-D- ... What letter comes next?", options: ["E", "F", "G"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "2. You want to draw a straight line. What do you need?", options: ["Ruler", "Pencilcase", "Eraser"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "3. Look at the dialogue: Teacher: 'What is your name?' - Boy: 'My name is Rian.' The boy's name is...", options: ["Rian", "Ben", "Dino"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "4. This is Rafi. This is ______ bag.", options: ["his", "her", "my"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "5. A child says: 'I want a small toy with a rectangle shape.' Based on the chart (Train = rectangle & small), which toy is it?", options: ["Train", "Car", "Kite"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "6. A child says: 'I want the big toy that can fly.' Which toy is it?", options: ["Kite", "Ball", "Doll"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "7. Which pair of words has the short /a/ sound?", options: ["Bag and Rat", "Red and Bed", "Big and Pig"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "8. What shape is a kite toy?", options: ["Triangle / Diamond", "Circle", "Rectangle"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "9. Complete the missing letter: Bl_ck c_t", options: ["a", "e", "i"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "10. Read the dialogue: Lucy: 'My train is short.' Ben: 'My ball is round.' The round toy belongs to...", options: ["Ben", "Lucy", "Jake"], correct: 0 },

  // ================= 3. SCIENCE GMEC (DARI PDF MID TEST SCIENCE) =================
  { type: "multiple-choice", subject: "Science", text: "1. Which part of the body helps us smell?", options: ["Nose", "Tongue", "Cheek"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "2. What covers the top of your fingers?", options: ["Nail", "Toe", "Ears"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "3. Potato chips and salted peanuts are examples of...", options: ["salty food", "sweet food", "bitter food"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "4. To keep our body clean, we should...", options: ["Bathing / Take a bath", "Eat sweets", "Stay dirty"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "5. Eggs give us protein to help us grow, while Doughnuts are...", options: ["sweet food rich in sugar", "rich in vitamins", "salty food"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "6. What does 'staying safe' mean?", options: ["Protecting ourselves from harm or danger", "Eating only fruits", "Brushing teeth"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "7. You see a hot stove in the kitchen. What is the safest action?", options: ["Don't play with or touch it", "Touch it quickly", "Put an object into it"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "8. What happens if you talk while eating food?", options: ["You might choke on your food", "Your teeth grow faster", "You gain energy"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "9. Which of these is a living thing?", options: ["Cat", "Rock", "Toy car"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "10. Which of these do living things need to stay alive?", options: ["Food, air, and water", "Toys and clothes", "Colors and shapes"], correct: 0 },

  // ================= 4. MATH GMEC (DARI PDF MID TEST MATH) =================
  { type: "multiple-choice", subject: "Math", text: "1. What number comes next in this pattern? 2, 4, 6, ...", options: ["8", "7", "10"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "2. Which number bond is correct?", options: ["5 + 3 = 8", "2 + 6 = 7", "7 - 1 = 5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "3. Complete the equation: ___ + 4 = 7", options: ["3", "4", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "4. Mom bought 3 lamps. She bought 4 more. How many lamps does she have now?", options: ["7", "6", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "5. What is 8 - 2?", options: ["6", "7", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "6. There are 7 birds on a tree. 2 birds fly away. How many birds are left?", options: ["5", "6", "7"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "7. Which subtraction equation is correct?", options: ["7 - 6 = 1", "9 - 4 = 4", "5 - 3 = 1"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "8. What is 1 more than 5?", options: ["6", "5", "7"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "9. What is 2 less than 9?", options: ["7", "8", "6"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "10. Mary has 10 coins. She hides some under a cup. If 4 are visible, how many are under the cup?", options: ["6", "5", "4"], correct: 0 },

  // ================= 5. PENDIDIKAN PANCASILA GMEC (DARI PDF MID TEST PP) =================
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "1. Bunyi sila Pancasila yang dilambangkan oleh Bintang Emas adalah...", options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kemanusiaan yang Adil dan Beradab"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "2. Nama burung yang menjadi lambang negara Indonesia adalah...", options: ["burung garuda", "burung elang", "burung merpati"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "3. Rina selesai bermain lalu menyimpan sepatunya di rak. Kegiatan Rina merupakan contoh...", options: ["aturan di rumah", "aturan di sekolah", "aturan di jalan"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "4. Manakah contoh mematuhi aturan di sekolah?", options: ["Mendengarkan penjelasan guru", "Datang terlambat", "Membuang sampah di lantai"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "5. Andi berambut lurus, sedangkan Beni berambut keriting. Perbedaan tersebut merupakan keragaman...", options: ["bentuk rambut / ciri fisik", "makanan kesukaan", "hobi"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "6. Dita suka menggambar, sedangkan Rani suka bermain bola. Sikap yang tepat adalah...", options: ["menghargai hobi Rani", "mengejek hobi Rani", "memaksa Rani menggambar"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "7. Pasangan simbol dan sila Pancasila yang tepat adalah...", options: ["Bintang (Sila 1), Rantai (Sila 2), Pohon Beringin (Sila 3)", "Kepala Banteng (Sila 1)", "Pohon Beringin (Sila 5)"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "8. Mengapa kita harus menaati aturan di sekolah?", options: ["Agar suasana belajar tertib, aman, dan nyaman", "Agar diuji guru", "Agar cepat pulang"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "9. Apa manfaat menghargai perbedaan antar teman?", options: ["Cipta kerukunan dan punya banyak teman", "Bisa bertengkar", "Mendapat hadiah"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "10. (HOTS) Dodi membuang sampah di lantai kelas. Apa akibatnya?", options: ["Kelas menjadi kotor, bau, dan bisa menyebabkan kuman/terpeleset", "Kelas jadi wangi", "Guru merasa senang"], correct: 0 },

  // ================= 6. BUMI MELAYU RIAU / BMR GMEC (DARI PDF MID TEST BMR) =================
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "1. Sapaan untuk saudara yang bertubuh pendek dalam Melayu adalah...", options: ["Uneng", "Utih", "Andak"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "2. 'Emak' adalah sapaan Melayu untuk...", options: ["orang tua perempuan", "anak pertama", "orang tua laki-laki"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "3. Sarianun adalah nama tokoh anak gadis yang terdapat dalam dongeng Melayu...", options: ["Rawang Tengkuluk", "Malin Kundang", "Kancil dan Harimau"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "4. Sapaan kepada orang tua laki-laki dalam budaya Melayu adalah...", options: ["Ayah atau Abah", "Angah", "Ucu"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "5. Pada zaman dahulu, dongeng dibawakan sebagai pengantar...", options: ["tidur", "nyanyian", "puisi"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "6. 'Ulong' atau 'Ulung' adalah sapaan untuk anak yang lahir ke-...", options: ["satu (pertama)", "dua", "tiga"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "7. Sapaan untuk saudara yang berkulit kuning langsat adalah...", options: ["Kuning / Akuning", "Utih", "Udo"], correct: 0 },
  { 
    type: "matching", subject: "Bumi Melayu Riau (BMR)", text: "8. (HOTS) Pasangkan sapaan Melayu berikut dengan artinya yang tepat!",
    left: [{ id: "bmr1", content: "Udo" }, { id: "bmr2", content: "Utih" }, { id: "bmr3", content: "Anjang" }],
    right: [{ id: "r1", content: "Anak berkulit putih" }, { id: "r2", content: "Anak lahir ke-4" }, { id: "r3", content: "Anak bertubuh panjang/tinggi" }],
    pairs: { bmr1: "r2", bmr2: "r1", bmr3: "r3" }
  },

  // ================= 7. MORALE GMEC (DARI PDF SMALL TEST MORALE) =================
  { type: "multiple-choice", subject: "Morale", text: "1. Ucapan 'Selamat pagi, Ayah, Ibu' menunjukkan sikap hormat berupa...", options: ["Mengucapkan salam & menyapa ramah", "Membantu pekerjaan rumah", "Memberi sesuatu"], correct: 0 },
  { type: "multiple-choice", subject: "Morale", text: "2. Ucapan 'Ayah, bolehkah saya...' merupakan contoh sikap...", options: ["Berbicara sopan kepada orang tua", "Mendengar nasihat", "Membantu pekerjaan rumah"], correct: 0 },
  { type: "multiple-choice", subject: "Morale", text: "3. Mendengarkan arahan orang tua saat dinasihati merupakan ciri anak yang...", options: ["Hormat dan berbakti", "Sombong", "Nakal"], correct: 0 },
  { 
    type: "matching", subject: "Morale", text: "4. Pasangkan ucapan/tindakan dengan sikap hormat yang sesuai!",
    left: [{ id: "m1", content: "🗣️ 'Ayah, bolehkah saya...'" }, { id: "m2", content: "☀️ 'Selamat pagi, Ayah, Ibu'" }],
    right: [{ id: "r1", content: "Mengucapkan salam ramah" }, { id: "r2", content: "Berbicara dengan sopan" }],
    pairs: { m1: "r2", m2: "r1" }
  },

  // ================= 8. BAHASA INDONESIA GMEC (DARI PDF SMALL & MID TEST B.INDO) =================
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "1. Sikap duduk yang benar saat membaca adalah posisi badan harus...", options: ["Tegak dan lurus", "Bungkuk", "Berbaring"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "2. Huruf vokal pada kata 'buku' adalah...", options: ["u", "b", "k"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "3. Cara memegang pensil yang benar adalah dijepit menggunakan...", options: ["Ibu jari, telunjuk, dan jari tengah", "Genggaman telapak tangan", "Jari kelingking"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "4. Tanda baca yang tepat untuk melengkapi kalimat 'Siapa namamu' adalah...", options: ["Tanda tanya (?)", "Tanda seru (!)", "Tanda titik (.)"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "5. Hewan yang tubuhnya panjang, lunak, tanpa kaki, hidup di tanah lembap, diawali huruf 'c' adalah...", options: ["cacing", "cicak", "capung"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "6. Tanda baca yang tepat untuk kalimat 'Ayo berolahraga' adalah...", options: ["Tanda seru (!)", "Tanda tanya (?)", "Tanda titik (.)"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "7. Tokoh yang membantu menyiapkan sarapan pada cerita Nisa adalah...", options: ["Nisa, Ibu, dan Kakak", "Nisa dan Ayah", "Beni dan Mimi"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "8. Cara membaca yang benar berdasarkan cerita Alya adalah...", options: ["Duduk tegak, pencahayaan cukup, & jaga jarak mata", "Berbaring di tempat gelap", "Membaca dekat dengan wajah"], correct: 0 },

  // ================= 9. AGAMA ISLAM GMEC (DARI PDF MID TEST AGAMA ISLAM) =================
  { type: "multiple-choice", subject: "Agama Islam", text: "1. Iman kepada hari akhir merupakan rukun Iman ke-...", options: ["5", "6", "3"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "2. Sebelum makan dan mengawali kegiatan kita membaca...", options: ["Bismillah / Basmalah", "Hamdalah", "Istighfar"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "3. Al-Qur'an merupakan kitab suci umat...", options: ["Islam", "Kristen", "Buddha"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "4. Rukun Iman pertama ialah beriman kepada...", options: ["Allah SWT", "Malaikat", "Rasul"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "5. Bacaan Hamdalah (Alhamdulillah) diucapkan ketika...", options: ["Mendapat hadiah / bersyukur atas nikmat Allah", "Keluar toilet", "Saat hendak tidur"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "6. Sikap yang SALAH terhadap Al-Qur'an adalah...", options: ["Meletakkan sembarangan", "Membacanya dengan baik", "Menjaganya dengan baik"], correct: 0 },
  { 
    type: "matching", subject: "Agama Islam", text: "7. Pasangkan Rukun Iman berikut dengan urutannya yang tepat!",
    left: [{ id: "ai1", content: "Iman kepada Allah SWT" }, { id: "ai2", content: "Iman kepada Rasul" }, { id: "ai3", content: "Iman kepada Takdir" }],
    right: [{ id: "r1", content: "Urutan Ke-4" }, { id: "r2", content: "Urutan Ke-1" }, { id: "r3", content: "Urutan Ke-6" }],
    pairs: { ai1: "r2", ai2: "r1", ai3: "r3" }
  }
];

// MAPEL SPESIFIK KELAS 1 SEKOLAH GUANG MING (GMEC)
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

// MAPEL SEKOLAH LAIN / UMUM
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

// Logika Pemilihan Sekolah & Rendering Tombol
function selectSchool(schoolType) {
  selectedSchoolType = schoolType;
  document.getElementById("school-menu-screen").classList.add("hidden");
  
  const classGrid = document.querySelector("#class-menu-screen .class-grid");
  
  if (selectedSchoolType === "guangming") {
    // Jika Sekolah Guang Ming: Hanya tampilkan Kelas 1
    classGrid.innerHTML = `
      <button class="class-btn highlight" onclick="selectClass(1)" style="grid-column: span 2; padding: 20px; font-size: 1.2rem;">
        🌸 Kelas 1 SD (GMEC)
      </button>
    `;
  } else {
    // Sekolah Lain: Tampilkan Kelas 1 - 6
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

function generateClassBankForLevel(level) {
  if (selectedSchoolType === "guangming" && level === 1) {
    return guangMingClass1Bank;
  }
  return guangMingClass1Bank;
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
  renderSubjectButtons();

  document.getElementById("selected-class-title").innerText = (selectedSchoolType === "guangming") ? `Sekolah Guang Ming - Kelas 1` : `Kelas ${level} SD`;
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

  // Tampilkan seluruh soal mapel dari PDF
  if (selectedSchoolType === "guangming") {
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
    instructionText.innerText = ["Math", "Science", "English", "Mandarin"].includes(q.subject) ? "💡 Circle A, B, or C with your finger!" : "💡 Lingkari huruf A, B, atau C dengan jarimu!";

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