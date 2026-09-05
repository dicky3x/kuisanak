const questions = [
  // 1. BAHASA INDONESIA
  { subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
  { subject: "Bahasa Indonesia", text: "Suara hewan kucing adalah...", options: ["Guk guk", "MEOONG", "Mbekk"], correct: 1 },
  { subject: "Bahasa Indonesia", text: "Ibu memasak makanan di...", options: ["Kamar", "Dapur", "Halaman"], correct: 1 },
  { subject: "Bahasa Indonesia", text: "L-A-R-I dibaca menjadi...", options: ["Lari", "Lupa", "Lama"], correct: 0 },

  // 2. MATH (MATEMATIKA)
  { subject: "Math", text: "Berapa hasil dari 4 + 3?", options: ["6", "7", "8"], correct: 1 },
  { subject: "Math", text: "Berapa hasil pengurangan 10 - 4?", options: ["5", "6", "7"], correct: 1 },
  { subject: "Math", text: "Angka setelah 19 adalah...", options: ["18", "20", "21"], correct: 1 },
  { subject: "Math", text: "Manakah angka yang lebih besar?", options: ["12", "15", "8"], correct: 1 },

  // 3. SCIENCE (IPA)
  { subject: "Science", text: "Bagian tubuh untuk mendengar adalah...", options: ["Mata", "Telinga", "Hidung"], correct: 1 },
  { subject: "Science", text: "Benda yang bentuknya padat dan keras adalah...", options: ["Batu", "Air", "Minyak"], correct: 0 },
  { subject: "Science", text: "Hewan yang bergerak dengan cara terbang adalah...", options: ["Ikan", "Burung", "Kelinci"], correct: 1 },
  { subject: "Science", text: "Matahari terbit pada waktu...", options: ["Malam", "Pagi", "Sore"], correct: 1 },

  // 4. KEWARGANEGARAAN (PKn)
  { subject: "Kewarganegaraan", text: "Simbol sila pertama Pancasila adalah...", options: ["Bintang", "Rantai", "Pohon Beringin"], correct: 0 },
  { subject: "Kewarganegaraan", text: "Warna bendera negara Indonesia adalah...", options: ["Merah Putih", "Merah Biru", "Kuning Hijau"], correct: 0 },
  { subject: "Kewarganegaraan", text: "Sikap kita saat bendera dikibarkan adalah...", options: ["Hormat", "Duduk", "Lari"], correct: 0 },
  { subject: "Kewarganegaraan", text: "Saling membantu sesame teman disebut...", options: ["Sombong", "Gotong Royong", "Marah"], correct: 1 },

  // 5. ENGLISH
  { subject: "English", text: "Bahasa Inggris dari kata 'Kucing' adalah...", options: ["Dog", "Cat", "Bird"], correct: 1 },
  { subject: "English", text: "Warna 'Red' dalam bahasa Indonesia adalah...", options: ["Biru", "Merah", "Kuning"], correct: 1 },
  { subject: "English", text: "Greeting 'Good Morning' artinya...", options: ["Selamat Pagi", "Selamat Malam", "Selamat Tinggal"], correct: 0 },
  { subject: "English", text: "Number 'Five' artinya angka...", options: ["4", "5", "6"], correct: 1 },

  // 6. MANDARIN
  { subject: "Mandarin", text: "Bahasa Mandarin dari angka '1' (Satu) adalah...", options: ["Sān (三)", "Èr (二)", "Yī (一)"], correct: 2 },
  { subject: "Mandarin", text: "Ucapan 'Salam / Halo' dalam Mandarin adalah...", options: ["Nǐ hǎo", "Xièxie", "Zàijiàn"], correct: 0 },
  { subject: "Mandarin", text: "Ucapan 'Terima Kasih' dalam Mandarin adalah...", options: ["Xièxie", "Nǐ hǎo", "Zàijiàn"], correct: 0 },
  { subject: "Mandarin", text: "Bahasa Mandarin dari kata 'Ayah' adalah...", options: ["Bàba", "Māma", "Gēge"], correct: 0 },

  // 7. MORAL / BUDI PEKERTI
  { subject: "Moral", text: "Sebelum makan kita sebaiknya...", options: ["Tidur", "Berdoa", "Bermain"], correct: 1 },
  { subject: "Moral", text: "Jika diberi hadiah oleh orang lain kita mengucapkan...", options: ["Maaf", "Terima Kasih", "Sama-sama"], correct: 1 },
  { subject: "Moral", text: "Jika memecahkan piring Ibu, kita harus...", options: ["Minta Maaf", "Lari", "Sembunyi"], correct: 0 },
  { subject: "Moral", text: "Terhadap sesama teman kita harus saling...", options: ["Mengejek", "Menyayangi", "Memukul"], correct: 1 },

  // 8. BUDAYA MELAYU RIAU (BMR)
  { subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu Riau untuk laki-laki adalah...", options: ["Teluk Belanga", "Kebaya", "Batik"], correct: 0 },
  { subject: "Budaya Melayu Riau", text: "Buah manis yang terkenal dari Kota Pekanbaru adalah...", options: ["Nanas", "Durian", "Rambutan"], correct: 0 },
  { subject: "Budaya Melayu Riau", text: "Senjata tradisional khas suku Melayu adalah...", options: ["Keris / Tumbuk Lada", "Panah", "Clurit"], correct: 0 },
  { subject: "Budaya Melayu Riau", text: "Tarian selamat datang untuk menyambut tamu di Riau adalah...", options: ["Tari Makan Sirih", "Tari Piring", "Tari Jaipong"], correct: 0 }
];

let currentIdx = 0;
const canvas = document.getElementById("draw-canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

function loadQuestion() {
  const q = questions[currentIdx];
  document.getElementById("subject-tag").innerText = q.subject;
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

  setTimeout(resizeCanvas, 100);
}

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

// Logika Menggambar Lingkaran
canvas.addEventListener("pointerdown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.lineCap = "round";
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointermove", (e) => {
  if (!isDrawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  checkCollision(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointerup", () => { isDrawing = false; });

function checkCollision(x, y) {
  const boxes = document.querySelectorAll(".option-box");
  boxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    
    // Posisi relatif terhadap canvas
    const boxLeft = rect.left - canvasRect.left;
    const boxRight = rect.right - canvasRect.left;
    const boxTop = rect.top - canvasRect.top;
    const boxBottom = rect.bottom - canvasRect.top;

    if (x >= boxLeft && x <= boxRight && y >= boxTop && y <= boxBottom) {
      const selectedIdx = parseInt(box.dataset.index);
      if (selectedIdx === questions[currentIdx].correct) {
        box.style.borderColor = "green";
        box.style.background = "#c8e6c9";
      } else {
        box.style.borderColor = "red";
        box.style.background = "#ffcdd2";
      }
    }
  });
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  loadQuestion();
}

window.onload = loadQuestion;