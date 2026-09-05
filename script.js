const questions = [
  // 1. BAHASA INDONESIA
  { subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
  { subject: "Bahasa Indonesia", text: "Suara hewan kucing adalah...", options: ["Guk guk", "MEOONG", "Mbekk"], correct: 1 },
  // 2. MATH
  { subject: "Math", text: "Berapa hasil dari 4 + 3?", options: ["6", "7", "8"], correct: 1 },
  { subject: "Math", text: "Berapa hasil pengurangan 10 - 4?", options: ["5", "6", "7"], correct: 1 },
  // 3. SCIENCE
  { subject: "Science", text: "Bagian tubuh untuk mendengar adalah...", options: ["Mata", "Telinga", "Hidung"], correct: 1 },
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
let isAnswered = false;
let drawnPoints = [];

const canvas = document.getElementById("draw-canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

function loadQuestion() {
  isAnswered = false;
  drawnPoints = [];
  
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

  // Atur kondisi tombol sebelumnya
  document.getElementById("prev-btn").disabled = (currentIdx === 0);

  setTimeout(resizeCanvas, 50);
}

function resizeCanvas() {
  const container = document.getElementById("canvas-container");
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Logika Sentuhan Canvas
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

// Saat jari dilepas, lakukan pengecekan jawaban & otomasi pindah soal
canvas.addEventListener("pointerup", () => {
  if (!isDrawing || isAnswered) return;
  isDrawing = false;
  evaluateAnswer();
});

function evaluateAnswer() {
  if (drawnPoints.length < 5) return; // Jika usapan terlalu pendek, abaikan

  const boxes = document.querySelectorAll(".option-box");
  const canvasRect = canvas.getBoundingClientRect();

  boxes.forEach((box) => {
    const boxRect = box.getBoundingClientRect();
    
    // Konversi koordinat elemen ke posisi canvas
    const boxLeft = boxRect.left - canvasRect.left;
    const boxRight = boxRect.right - canvasRect.left;
    const boxTop = boxRect.top - canvasRect.top;
    const boxBottom = boxRect.bottom - canvasRect.top;

    // Periksa apakah ada titik goresan jari di dalam kotak opsi
    const hit = drawnPoints.some(p => p.x >= boxLeft && p.x <= boxRight && p.y >= boxTop && p.y <= boxBottom);

    if (hit && !isAnswered) {
      isAnswered = true;
      const selectedIdx = parseInt(box.dataset.index);

      if (selectedIdx === questions[currentIdx].correct) {
        box.style.borderColor = "#4caf50";
        box.style.background = "#c8e6c9";
      } else {
        box.style.borderColor = "#f44336";
        box.style.background = "#ffcdd2";
      }

      // Berpindah otomatis setelah 1 detik
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
    alert("🎉 Selamat! Kamu sudah menyelesaikan semua soal!");
    currentIdx = 0;
    loadQuestion();
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

window.onload = loadQuestion;
window.onresize = resizeCanvas;