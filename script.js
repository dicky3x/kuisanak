const questions = [
  // 1. BAHASA INDONESIA
  { subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
  { subject: "Bahasa Indonesia", text: "Suara hewan kucing adalah...", options: ["Guk guk", "MEOONG", "Mbekk"], correct: 1 },
  { subject: "Bahasa Indonesia", text: "Ibu memasak makanan di...", options: ["Kamar", "Dapur", "Halaman"], correct: 1 },

  // 2. MATH
  { subject: "Math", text: "Berapa hasil dari 4 + 3?", options: ["6", "7", "8"], correct: 1 },
  { subject: "Math", text: "Berapa hasil pengurangan 10 - 4?", options: ["5", "6", "7"], correct: 1 },

  // 3. SCIENCE
  { subject: "Science", text: "Bagian tubuh untuk mendengar adalah...", options: ["Mata", "Telinga", "Hidung"], correct: 1 },
  { subject: "Science", text: "Benda yang bentuknya padat dan keras adalah...", options: ["Batu", "Air", "Minyak"], correct: 0 },

  // 4. KEWARGANEGARAAN
  { subject: "Kewarganegaraan", text: "Simbol sila pertama Pancasila adalah...", options: ["Bintang", "Rantai", "Pohon Beringin"], correct: 0 },

  // 5. ENGLISH
  { subject: "English", text: "Bahasa Inggris dari kata 'Kucing' adalah...", options: ["Dog", "Cat", "Bird"], correct: 1 },

  // 6. MANDARIN
  { subject: "Mandarin", text: "Bahasa Mandarin dari angka '1' adalah...", options: ["Sān (三)", "Èr (二)", "Yī (一)"], correct: 2 },

  // 7. MORAL
  { subject: "Moral", text: "Sebelum makan kita sebaiknya...", options: ["Tidur", "Berdoa", "Bermain"], correct: 1 },

  // 8. BUDAYA MELAYU RIAU
  { subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu Riau untuk laki-laki adalah...", options: ["Teluk Belanga", "Kebaya", "Batik"], correct: 0 }
];

let currentIdx = 0;
let isAnswered = false; // Kunci agar tidak bisa melingkari berulang kali dalam 1 soal
const canvas = document.getElementById("draw-canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

function loadQuestion() {
  isAnswered = false; // Buka kunci untuk soal baru
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

  setTimeout(resizeCanvas, 50);
}

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

// Fitur Menggambar Lingkaran
canvas.addEventListener("pointerdown", (e) => {
  if (isAnswered) return; // Hentikan jika soal sudah dijawab
  isDrawing = true;
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#e91e63"; // Warna garis merah muda cerah
  ctx.lineCap = "round";
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointermove", (e) => {
  if (!isDrawing || isAnswered) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  checkCollision(e.offsetX, e.offsetY);
});

canvas.addEventListener("pointerup", () => { isDrawing = false; });

function checkCollision(x, y) {
  if (isAnswered) return;

  const boxes = document.querySelectorAll(".option-box");
  boxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    const canvasRect = canvas.getBoundingClientRect();
    
    const boxLeft = rect.left - canvasRect.left;
    const boxRight = rect.right - canvasRect.left;
    const boxTop = rect.top - canvasRect.top;
    const boxBottom = rect.bottom - canvasRect.top;

    // Jika usapan/lingkaran menyentuh salah satu opsi
    if (x >= boxLeft && x <= boxRight && y >= boxTop && y <= boxBottom) {
      isAnswered = true; // Kunci agar jawaban hanya terdeteksi 1 kali
      isDrawing = false;
      
      const selectedIdx = parseInt(box.dataset.index);
      
      // Memberi warna indikator Benar / Salah
      if (selectedIdx === questions[currentIdx].correct) {
        box.style.borderColor = "#4caf50";
        box.style.background = "#c8e6c9";
      } else {
        box.style.borderColor = "#f44336";
        box.style.background = "#ffcdd2";
      }

      // Berpindah ke soal berikutnya setelah jeda 1.2 detik
      setTimeout(() => {
        if (currentIdx < questions.length - 1) {
          currentIdx++;
          clearCanvas();
        } else {
          alert("🎉 Hore! Kamu berhasil menyelesaikan semua soal kuis!");
          currentIdx = 0;
          clearCanvas();
        }
      }, 1200);
    }
  });
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  loadQuestion();
}

window.onload = loadQuestion;
window.onresize = resizeCanvas;