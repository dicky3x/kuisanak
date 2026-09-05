const questions = [
  // 1. BAHASA INDONESIA
  { subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
  { subject: "Bahasa Indonesia", text: "Suara hewan kucing adalah...", options: ["Guk guk", "MEOONG", "Mbekk"], correct: 1 },
  { subject: "Bahasa Indonesia", text: "Ibu memasak makanan di...", options: ["Kamar", "Dapur", "Halaman"], correct: 1 },
  { subject: "Bahasa Indonesia", text: "L-A-R-I dibaca menjadi...", options: ["Lari", "Lupa", "Lama"], correct: 0 },
  { subject: "Bahasa Indonesia", text: "Lawan kata dari 'Besar' adalah...", options: ["Tinggi", "Kecil", "Panjang"], correct: 1 },

  // 2. MATH
  { subject: "Math", text: "Berapa hasil dari 4 + 3?", options: ["6", "7", "8"], correct: 1 },
  { subject: "Math", text: "Berapa hasil pengurangan 10 - 4?", options: ["5", "6", "7"], correct: 1 },
  { subject: "Math", text: "Angka setelah 19 adalah...", options: ["18", "20", "21"], correct: 1 },
  { subject: "Math", text: "Manakah angka yang paling besar?", options: ["12", "15", "8"], correct: 1 },
  { subject: "Math", text: "Jam dinding biasanya berbentuk...", options: ["Lingkaran", "Segitiga", "Kubus"], correct: 0 },

  // 3. SCIENCE
  { subject: "Science", text: "Bagian tubuh untuk mendengar adalah...", options: ["Mata", "Telinga", "Hidung"], correct: 1 },
  { subject: "Science", text: "Benda yang bentuknya padat dan keras adalah...", options: ["Batu", "Air", "Minyak"], correct: 0 },
  { subject: "Science", text: "Hewan yang bernapas di dalam air adalah...", options: ["Ayam", "Ikan", "Burung"], correct: 1 },
  { subject: "Science", text: "Matahari terbit pada waktu...", options: ["Malam", "Pagi", "Sore"], correct: 1 },
  { subject: "Science", text: "Ayam berkembang biak dengan cara...", options: ["Bertelur", "Melahirkan", "Membelah diri"], correct: 0 },

  // 4. KEWARGANEGARAAN
  { subject: "Kewarganegaraan", text: "Simbol sila pertama Pancasila adalah...", options: ["Bintang", "Rantai", "Pohon Beringin"], correct: 0 },
  { subject: "Kewarganegaraan", text: "Warna bendera negara Indonesia adalah...", options: ["Merah Putih", "Merah Biru", "Kuning Hijau"], correct: 0 },
  { subject: "Kewarganegaraan", text: "Sikap kita saat bendera dikibarkan adalah...", options: ["Hormat", "Duduk", "Lari"], correct: 0 },
  { subject: "Kewarganegaraan", text: "Saling membantu sesama teman disebut...", options: ["Sombong", "Gotong Royong", "Marah"], correct: 1 },
  { subject: "Kewarganegaraan", text: "Dasar negara Indonesia adalah...", options: ["Pancasila", "UUD", "Sumpah Pemuda"], correct: 0 },

  // 5. ENGLISH
  { subject: "English", text: "Bahasa Inggris dari kata 'Kucing' adalah...", options: ["Dog", "Cat", "Bird"], correct: 1 },
  { subject: "English", text: "Warna 'Red' dalam bahasa Indonesia adalah...", options: ["Biru", "Merah", "Kuning"], correct: 1 },
  { subject: "English", text: "Greeting 'Good Morning' artinya...", options: ["Selamat Pagi", "Selamat Malam", "Selamat Tinggal"], correct: 0 },
  { subject: "English", text: "Number 'Five' artinya angka...", options: ["4", "5", "6"], correct: 1 },
  { subject: "English", text: "Bahasa Inggris dari 'Buku' adalah...", options: ["Pen", "Book", "Pencil"], correct: 1 },

  // 6. MANDARIN
  { subject: "Mandarin", text: "Bahasa Mandarin dari angka '1' (Satu) adalah...", options: ["Sān (三)", "Èr (二)", "Yī (一)"], correct: 2 },
  { subject: "Mandarin", text: "Ucapan 'Salam / Halo' dalam Mandarin adalah...", options: ["Nǐ hǎo", "Xièxie", "Zàijiàn"], correct: 0 },
  { subject: "Mandarin", text: "Ucapan 'Terima Kasih' dalam Mandarin adalah...", options: ["Xièxie", "Nǐ hǎo", "Zàijiàn"], correct: 0 },
  { subject: "Mandarin", text: "Bahasa Mandarin dari kata 'Ayah' adalah...", options: ["Bàba", "Māma", "Gēge"], correct: 0 },
  { subject: "Mandarin", text: "Bahasa Mandarin dari 'Selamat Tinggal' adalah...", options: ["Nǐ hǎo", "Xièxie", "Zàijiàn"], correct: 2 },

  // 7. MORAL
  { subject: "Moral", text: "Sebelum makan kita sebaiknya...", options: ["Tidur", "Berdoa", "Bermain"], correct: 1 },
  { subject: "Moral", text: "Jika diberi hadiah oleh orang lain kita mengucapkan...", options: ["Maaf", "Terima Kasih", "Sama-sama"], correct: 1 },
  { subject: "Moral", text: "Jika memecahkan piring Ibu, kita harus...", options: ["Minta Maaf", "Lari", "Sembunyi"], correct: 0 },
  { subject: "Moral", text: "Terhadap sesama teman kita harus saling...", options: ["Mengejek", "Menyayangi", "Memukul"], correct: 1 },
  { subject: "Moral", text: "Membuang sampah seharusnya di...", options: ["Tempat Sampah", "Sungai", "Lantai"], correct: 0 },

  // 8. BUDAYA MELAYU RIAU
  { subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu Riau untuk laki-laki adalah...", options: ["Teluk Belanga", "Kebaya", "Batik"], correct: 0 },
  { subject: "Budaya Melayu Riau", text: "Buah manis yang terkenal dari Kota Pekanbaru adalah...", options: ["Nanas", "Durian", "Rambutan"], correct: 0 },
  { subject: "Budaya Melayu Riau", text: "Senjata tradisional khas suku Melayu adalah...", options: ["Keris / Tumbuk Lada", "Panah", "Clurit"], correct: 0 },
  { subject: "Budaya Melayu Riau", text: "Tarian selamat datang untuk menyambut tamu di Riau adalah...", options: ["Tari Makan Sirih", "Tari Piring", "Tari Jaipong"], correct: 0 },
  { subject: "Budaya Melayu Riau", text: "Rumah adat tradisional Melayu Riau dinamakan...", options: ["Rumah Lintas", "Rumah Selaso Jatuh Kembar", "Rumah Gadang"], correct: 1 }
];

let currentIdx = 0;
let isAnswered = false;
let drawnPoints = [];
let userAnswers = new Array(questions.length).fill(null); // Menyimpan status jawaban (true/false)

const canvas = document.getElementById("draw-canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

function loadQuestion() {
  isAnswered = false;
  drawnPoints = [];
  
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("result-screen").classList.add("hidden");

  const q = questions[currentIdx];
  document.getElementById("subject-tag").innerText = q.subject;
  document.getElementById("progress-tag").innerText = `${currentIdx + 1} / ${questions.length}`;
  document.getElementById("question-text").innerText = q.text;
  
  const container = document.getElementById("options-container");
  container.innerHTML = "";
  
  q.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option-box";
    div.dataset.index = idx;
    div.innerText = opt;
    container.appendChild(div);
  });

  document.getElementById("prev-btn").disabled = (currentIdx === 0);

  setTimeout(resizeCanvas, 50);
}

function resizeCanvas() {
  const container = document.getElementById("canvas-container");
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("pointerdown", (e) => {
  if (isAnswered) return;
  isDrawing = true;
  drawnPoints = [];
  
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  drawnPoints.push({ x, y });
  
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#e91e63";
  ctx.lineCap = "round";
  ctx.moveTo(x, y);
});

canvas.addEventListener("pointermove", (e) => {
  if (!isDrawing || isAnswered) return;
  
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  drawnPoints.push({ x, y });
  ctx.lineTo(x, y);
  ctx.stroke();
});

canvas.addEventListener("pointerup", () => {
  if (!isDrawing || isAnswered) return;
  isDrawing = false;
  evaluateAnswer();
});

function evaluateAnswer() {
  if (drawnPoints.length < 5) return;

  const boxes = document.querySelectorAll(".option-box");
  const canvasRect = canvas.getBoundingClientRect();

  boxes.forEach((box) => {
    const boxRect = box.getBoundingClientRect();
    
    const boxLeft = boxRect.left - canvasRect.left;
    const boxRight = boxRect.right - canvasRect.left;
    const boxTop = boxRect.top - canvasRect.top;
    const boxBottom = boxRect.bottom - canvasRect.top;

    const hit = drawnPoints.some(p => p.x >= boxLeft && p.x <= boxRight && p.y >= boxTop && p.y <= boxBottom);

    if (hit && !isAnswered) {
      isAnswered = true;
      const selectedIdx = parseInt(box.dataset.index);
      const isCorrect = (selectedIdx === questions[currentIdx].correct);

      userAnswers[currentIdx] = isCorrect;

      if (isCorrect) {
        box.style.borderColor = "#4caf50";
        box.style.background = "#c8e6c9";
      } else {
        box.style.borderColor = "#f44336";
        box.style.background = "#ffcdd2";
      }

      setTimeout(() => {
        nextQuestion();
      }, 1000);
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
  currentIdx = 0;
  userAnswers = new Array(questions.length).fill(null);
  loadQuestion();
}

window.onload = loadQuestion;
window.onresize = resizeCanvas;