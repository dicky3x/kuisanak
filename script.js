const questions = [
  { subject: "Bahasa Indonesia", text: "Huruf kapital dari 'a' adalah...", options: ["A", "B", "C"], correct: 0 },
  { subject: "Math", text: "Berapa hasil dari 3 + 2?", options: ["4", "5", "6"], correct: 1 },
  { subject: "Science", text: "Benda yang bentuknya tetap adalah...", options: ["Air", "Batu", "Asap"], correct: 1 },
  { subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu Riau laki-laki...", options: ["Teluk Belanga", "Kebaya", "Batik"], correct: 0 }
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