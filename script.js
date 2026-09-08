// DATABASE BANK SOAL LENGKAP (MINIMAL 30 SOAL UNIK PER MAPEL DI SETIAP KELAS)
const classBank = {
  // ==================== KELAS 1 SD ====================
  1: [
    // --- BAHASA INDONESIA (30 SOAL) ---
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Suara hewan kucing adalah...", options: ["Guk guk", "MEOONG", "Mbekk"], correct: 1 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Ibu memasak makanan di...", options: ["Kamar", "Dapur", "Halaman"], correct: 1 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "L-A-R-I dibaca menjadi...", options: ["Lari", "Lupa", "Lama"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Lawan kata dari 'Besar' adalah...", options: ["Tinggi", "Kecil", "Panjang"], correct: 1 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Benda untuk menulis di buku adalah...", options: ["Pensil", "Penggaris", "Penghapus"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Anggota tubuh untuk melihat adalah...", options: ["Telinga", "Mata", "Hidung"], correct: 1 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "B-U-K-U dibaca menjadi...", options: ["Buku", "Buka", "Bulu"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Tempat membaca buku di sekolah dinamakan...", options: ["Perpustakaan", "Kantin", "Toilet"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Benda yang digunakan untuk menghapus coretan pensil...", options: ["Penghapus", "Rautan", "Gunting"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Huruf pertama pada kata 'Ayam' adalah...", options: ["A", "Y", "M"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Hewan yang dapat terbang di udara adalah...", options: ["Burung", "Ikan", "Kucing"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "M-A-K-A-N dibaca menjadi...", options: ["Makan", "Malam", "Makan"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Suara hewan bebek adalah...", options: ["Kwek-kwek", "Moo", "Guk-guk"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Ayah membaca koran di...", options: ["Ruang Tamu", "Dapur", "Kamar Mandi"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Benda yang dipakai di kaki saat sekolah adalah...", options: ["Sepatu", "Topi", "Dasi"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Lawan kata dari 'Siang' adalah...", options: ["Malam", "Sore", "Pagi"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Hewan yang menghasilkan susu adalah...", options: ["Sapi", "Ayam", "Bebek"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Ungkapan rasa senang ketika diberi hadiah...", options: ["Terima Kasih", "Maaf", "Permisi"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "P-I-N-T-U dibaca...", options: ["Pintu", "Pita", "Pikir"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Sayuran wortel berwarna...", options: ["Oranye", "Biru", "Hitam"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Buah pisang rasanya...", options: ["Manis", "Asin", "Pahit"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Tempat tidur berada di dalam...", options: ["Kamar Tidur", "Dapur", "Garasi"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Anak yang suka menolong dinamakan anak yang...", options: ["Baik", "Nakal", "Sombong"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Piring dan sendok digunakan untuk...", options: ["Makan", "Mandi", "Tidur"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Sepeda bergerak menggunakan...", options: ["Roda", "Sayap", "Kaki"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Lawan kata dari 'Banyak' adalah...", options: ["Sedikit", "Besar", "Tinggi"], correct: 0 },
    { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Seragam sekolah dipakai saat...", options: ["Belajar di Sekolah", "Tidur", "Berenang"], correct: 0 },
    { 
      type: "matching", subject: "Bahasa Indonesia", text: "Tarik garis mencocokkan benda dengan namanya!",
      left: [{ id: "b1", content: "🐱" }, { id: "b2", content: "📖" }, { id: "b3", content: "🍌" }],
      right: [{ id: "r1", content: "Buku" }, { id: "r2", content: "Kucing" }, { id: "r3", content: "Pisang" }],
      pairs: { b1: "r2", b2: "r1", b3: "r3" }
    },
    { 
      type: "matching", subject: "Bahasa Indonesia", text: "Tarik garis mencocokkan lawan kata!",
      left: [{ id: "bi1", content: "☀️ Siang" }, { id: "bi2", content: "⬆️ Atas" }, { id: "bi3", content: "🔥 Panas" }],
      right: [{ id: "r1", content: "Bawah" }, { id: "r2", content: "Dingin" }, { id: "r3", content: "Malam" }],
      pairs: { bi1: "r3", bi2: "r1", bi3: "r2" }
    },

    // --- MATH (30 SOAL) ---
    { type: "multiple-choice", subject: "Math", text: "What is 4 + 3?", options: ["6", "7", "8"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What is 10 - 4?", options: ["5", "6", "7"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What number comes after 19?", options: ["18", "20", "21"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "Which number is the biggest?", options: ["12", "15", "8"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What shape is a wall clock?", options: ["Circle", "Triangle", "Cube"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 2 + 5?", options: ["6", "7", "8"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What number comes before 10?", options: ["8", "9", "11"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What is 8 - 3?", options: ["4", "5", "6"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "What is 6 + 4?", options: ["9", "10", "11"], correct: 1 },
    { type: "multiple-choice", subject: "Math", text: "How many sides does a triangle have?", options: ["3", "4", "5"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 15 - 5?", options: ["10", "5", "12"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "Which number is smaller: 7 or 3?", options: ["3", "7", "Same"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 1 + 8?", options: ["9", "10", "8"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 9 - 9?", options: ["0", "1", "9"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 3 + 3?", options: ["6", "5", "7"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What shape is a slice of pizza?", options: ["Triangle", "Circle", "Square"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What number comes after 5?", options: ["6", "4", "7"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 7 - 2?", options: ["5", "4", "6"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 5 + 5?", options: ["10", "12", "8"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "How many wheels does a bicycle have?", options: ["2", "4", "3"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 12 + 2?", options: ["14", "13", "15"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 10 - 8?", options: ["2", "3", "1"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "Which number is even: 4 or 5?", options: ["4", "5", "None"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 8 + 2?", options: ["10", "9", "11"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 6 - 3?", options: ["3", "2", "4"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 4 + 4?", options: ["8", "7", "9"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "How many fingers do you have on one hand?", options: ["5", "10", "4"], correct: 0 },
    { type: "multiple-choice", subject: "Math", text: "What is 11 - 1?", options: ["10", "11", "9"], correct: 0 },
    { 
      type: "matching", subject: "Math", text: "Match the objects with their 2D shapes!",
      left: [{ id: "m1", content: "⚽" }, { id: "m2", content: "📐" }, { id: "m3", content: "📦" }],
      right: [{ id: "r1", content: "Triangle" }, { id: "r2", content: "Square" }, { id: "r3", content: "Circle" }],
      pairs: { m1: "r3", m2: "r1", m3: "r2" }
    },
    { 
      type: "matching", subject: "Math", text: "Match the simple addition sums!",
      left: [{ id: "m1", content: "2 + 2" }, { id: "m2", content: "5 + 1" }, { id: "m3", content: "3 + 0" }],
      right: [{ id: "r1", content: "3" }, { id: "r2", content: "4" }, { id: "r3", content: "6" }],
      pairs: { m1: "r2", m2: "r3", m3: "r1" }
    },

    // --- SCIENCE (30 SOAL) ---
    { type: "multiple-choice", subject: "Science", text: "Which body part do we use to hear sounds?", options: ["Eyes", "Ears", "Nose"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "Which object is hard and solid?", options: ["Stone", "Water", "Oil"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which animal breathes underwater?", options: ["Chicken", "Fish", "Bird"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "When does the sun rise?", options: ["Night", "Morning", "Evening"], correct: 1 },
    { type: "multiple-choice", subject: "Science", text: "How do chickens reproduce?", options: ["Laying eggs", "Giving birth", "Splitting"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which part of the plant is underground?", options: ["Leaf", "Flower", "Root"], correct: 2 },
    { type: "multiple-choice", subject: "Science", text: "What do we use to see things?", options: ["Eyes", "Ears", "Mouth"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which animal can fly?", options: ["Bird", "Dog", "Cat"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What taste is sugar?", options: ["Sweet", "Salty", "Sour"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which body part is used for smelling?", options: ["Nose", "Tongue", "Skin"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What state of matter is ice?", options: ["Solid", "Liquid", "Gas"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Where do fish live?", options: ["Water", "Land", "Air"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What shines in the sky during the day?", options: ["Sun", "Moon", "Stars"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which body part do we use to taste food?", options: ["Tongue", "Hand", "Ear"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which animal makes the 'Moo' sound?", options: ["Cow", "Duck", "Sheep"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What falls from the sky when it rains?", options: ["Water", "Sand", "Milk"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which object is liquid?", options: ["Water", "Wood", "Glass"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Plant leaves are mostly colored...", options: ["Green", "Blue", "Red"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What do cows eat?", options: ["Grass", "Meat", "Fish"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which sense organ is our skin for?", options: ["Touch", "Sight", "Hearing"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What comes out at night in the sky?", options: ["Moon and Stars", "Sun", "Rainbow"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "How many legs does a spider have?", options: ["8", "6", "4"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Rabbits love to eat...", options: ["Carrots", "Meat", "Bread"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which item floats on water?", options: ["Plastic bottle", "Iron key", "Stone"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What color is lemon juice?", options: ["Yellow", "Purple", "Black"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Which body part covers our entire body?", options: ["Skin", "Hair", "Nails"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "What makes plants green?", options: ["Chlorophyll", "Water", "Soil"], correct: 0 },
    { type: "multiple-choice", subject: "Science", text: "Dog is a domestic animal or wild animal?", options: ["Domestic", "Wild", "Insect"], correct: 0 },
    { 
      type: "matching", subject: "Science", text: "Match the senses with their functions!",
      left: [{ id: "s1", content: "👂" }, { id: "s2", content: "👁️" }, { id: "s3", content: "👃" }],
      right: [{ id: "r1", content: "See" }, { id: "r2", content: "Smell" }, { id: "r3", content: "Hear" }],
      pairs: { s1: "r3", s2: "r1", s3: "r2" }
    },
    { 
      type: "matching", subject: "Science", text: "Match animals with their homes!",
      left: [{ id: "s1", content: "🐟 Fish" }, { id: "s2", content: "🦅 Bird" }, { id: "s3", content: "🐜 Ant" }],
      right: [{ id: "r1", content: "Nest" }, { id: "r2", content: "Water" }, { id: "r3", content: "Underground" }],
      pairs: { s1: "r2", s2: "r1", s3: "r3" }
    },

    // --- KEWARGANEGARAAN / PKN KELAS 1 (100% EKSKLUSIF 20 SOAL LENGKAP DARI PDF) ---
    // Bagian A: Pilihan Ganda (No 1 - 10)
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "1. Lambang negara Republik Indonesia adalah...", options: ["burung garuda", "bendera merah putih", "lagu Indonesia raya"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "2. Gambar Rantai Emas melambangkan Pancasila sila ke-...", options: ["3", "2", "1"], correct: 1 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "3. Aturan adalah petunjuk yang dibuat agar hidup kita menjadi...", options: ["susah", "tertib", "sedih"], correct: 1 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "4. Bunyi sila kedua Pancasila yang benar adalah...", options: ["kemanusiaan yang adil dan beradab", "kemanusiaan yang beradab dan adil", "adil dan beradab yang kemanusiaan"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "5. Hari sudah pagi. Sebelum melangkahkan kaki keluar rumah untuk pergi ke sekolah, tindakan santun yang harus kamu lakukan adalah...", options: ["langsung lari keluar rumah", "berpamitan dan mencium tangan orang tua", "berteriak pamit dari jauh"], correct: 1 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "6. Saat Ibu Guru sedang menjelaskan pelajaran di depan kelas, sikap siswa yang baik adalah...", options: ["Mengobrol dengan teman sebelah", "Menggambar sendiri di meja", "Mendengarkan dengan tenang"], correct: 2 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "7. Ali memiliki rambut keriting dan kulit sawo matang, sedangkan Budi berambut lurus. Rambut dan warna kulit merupakan contoh dari...", options: ["ciri fisik diri", "nama panggilan", "mainan kesukaan"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "8. Contoh sikap yang sesuai dengan Sila Pertama Pancasila adalah...", options: ["berdoa sebelum/sesudah makan & menghormati teman beribadah", "rebutan mainan saat bermain", "mendorong teman saat antre"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "9. Siti dan teman-teman sedang bermain bersama di taman. Sikap yang boleh dilakukan saat bermain adalah...", options: ["mengantre dengan sabar & mengembalikan mainan bersama", "mendorong teman agar mendapat giliran duluan", "merebut mainan milik teman"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "10. Budi suka bermain bola, sedangkan Edo suka menggambar. Sikap yang baik menghadapi perbedaan kegemaran adalah...", options: ["tetap berteman baik & menghargai hobi teman", "memaksa Edo agar ikut menyukai bola", "mengejek hobi milik teman"], correct: 0 },

    // Bagian B: Isian Singkat (No 11 - 15 / B1 - B5)
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "11. (Isian B.1) Simbol Pohon Beringin pada dada Garuda Pancasila melambangkan sila ke-...", options: ["3", "2", "4"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "12. (Isian B.2) Kita harus merapikan tempat tidur sendiri pada waktu...", options: ["bangun tidur di pagi hari", "siang hari saat bermain", "malam hari saat belajar"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "13. (Isian B.3) Sebelum dan sesudah makan, hal penting yang wajib kita lakukan agar tetap sehat dan bersyukur adalah...", options: ["berdoa dan mencuci tangan", "langsung tidur", "bermain HP"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "14. (Isian B.4) Meskipun memiliki agama atau suku yang berbeda dengan teman, kita harus tetap saling...", options: ["menghormati / menghargai", "mengejek", "memusuhi"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "15. (Isian B.5) Ketika kita bersama-sama bekerja sama melaksanakan piket kebersihan kelas, pekerjaan yang berat akan terasa lebih...", options: ["ringan", "makin berat", "susah"], correct: 0 },

    // Bagian C: AKM / HOTS (No 16 - 20 / C1 - C5)
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "16. (HOTS C.1) Tulislah bunyi sila Pancasila yang dilambangkan oleh Bintang Emas!", options: ["Ketuhanan Yang Maha Esa", "Kemanusiaan yang adil dan beradab", "Persatuan Indonesia"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "17. (HOTS C.2) Contoh aturan untuk menjaga kebersihan di lingkungan sekolah adalah...", options: ["Membuang sampah di tempatnya & piket kelas", "Mencoret-coret meja kelas", "Membiarkan plastik di lapangan"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "18. (HOTS C.3) Informasi yang mencakup Nama, Hobi/Kegemaran, dan Ciri Fisik dinamakan...", options: ["Identitas diri sendiri", "Aturan sekolah", "Simbol Pancasila"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "19. (HOTS C.4) Dito selesai bermain balok lalu langsung lari makan siang meninggalkan mainannya. Akibat & tindakan yang benar adalah...", options: ["Mainan bisa terinjak/rusak. Dito harus merapikannya dulu", "Mainan rapi sendiri", "Ibu senang melihat lantai berantakan"], correct: 0 },
    { type: "multiple-choice", subject: "Kewarganegaraan", text: "20. (HOTS C.5) Edo murid baru berambut keriting diejek teman-teman. Jika kamu menjadi teman Edo, apa yang akan kamu lakukan?", options: ["Berteman dengan Edo & menasihati teman agar tidak mengejek", "Ikut mengejek Edo", "Pura-pura tidak tahu"], correct: 0 },
    { 
      type: "matching", subject: "Kewarganegaraan", text: "Tarik garis mencocokkan simbol Pancasila dan nomor silanya!",
      left: [{ id: "k1", content: "⛓️ Rantai" }, { id: "k2", content: "🌳 Beringin" }, { id: "k3", content: "⭐ Bintang" }],
      right: [{ id: "r1", content: "Sila Ke-3" }, { id: "r2", content: "Sila Ke-1" }, { id: "r3", content: "Sila Ke-2" }],
      pairs: { k1: "r3", k2: "r1", k3: "r2" }
    },
    { 
      type: "matching", subject: "Kewarganegaraan", text: "Tarik garis mencocokkan aturan dan lokasinya!",
      left: [{ id: "k1", content: "🛏️ Merapikan Kasur" }, { id: "k2", content: "🧹 Piket Kelas" }, { id: "k3", content: "🛝 Antre Ayunan" }],
      right: [{ id: "r1", content: "Lingkungan Sekolah" }, { id: "r2", content: "Taman Bermain" }, { id: "r3", content: "Lingkungan Rumah" }],
      pairs: { k1: "r3", k2: "r1", k3: "r2" }
    },

    // --- ENGLISH (30 SOAL) ---
    { type: "multiple-choice", subject: "English", text: "Bahasa Inggris dari kata 'Kucing' adalah...", options: ["Dog", "Cat", "Bird"], correct: 1 },
    { type: "multiple-choice", subject: "English", text: "Warna 'Red' dalam bahasa Indonesia adalah...", options: ["Biru", "Merah", "Kuning"], correct: 1 },
    { type: "multiple-choice", subject: "English", text: "What is 'Apple' in Indonesian?", options: ["Pisang", "Apel", "Jeruk"], correct: 1 },
    { type: "multiple-choice", subject: "English", text: "Number 'One' means...", options: ["1", "2", "3"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "English word for 'Anjing' is...", options: ["Dog", "Cat", "Fish"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Good Morning' means...", options: ["Selamat Pagi", "Selamat Malam", "Selamat Tinggal"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Book' in Indonesian is...", options: ["Buku", "Pensil", "Meja"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "What color is 'Yellow'?", options: ["Kuning", "Hijau", "Merah"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "Number 'Five' is...", options: ["5", "4", "6"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Father' means...", options: ["Ayah", "Ibu", "Kakek"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Mother' means...", options: ["Ibu", "Ayah", "Nenek"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "English for 'Rumah' is...", options: ["House", "Car", "School"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "What color is 'Green'?", options: ["Hijau", "Biru", "Hitam"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "Number 'Ten' means...", options: ["10", "100", "1"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Goodbye' means...", options: ["Selamat Tinggal", "Halo", "Terima Kasih"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "English for 'Pena' is...", options: ["Pen", "Pencil", "Ruler"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Sun' in Indonesian is...", options: ["Matahari", "Bulan", "Bintang"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "What color is 'Blue'?", options: ["Biru", "Kuning", "Merah"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Pencil' in Indonesian is...", options: ["Pensil", "Buku", "Penghapus"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "English word for 'Mobil' is...", options: ["Car", "Bus", "Bike"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Thank You' means...", options: ["Terima Kasih", "Sama-sama", "Maaf"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "English word for 'Susu' is...", options: ["Milk", "Tea", "Water"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "What color is 'White'?", options: ["Putih", "Hitam", "Abu-abu"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Teacher' in Indonesian is...", options: ["Guru", "Murid", "Dokter"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "English word for 'Ikan' is...", options: ["Fish", "Bird", "Duck"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "Number 'Three' is...", options: ["3", "2", "4"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Brother' means...", options: ["Saudara Laki-Laki", "Saudara Perempuan", "Paman"], correct: 0 },
    { type: "multiple-choice", subject: "English", text: "'Sister' means...", options: ["Saudara Perempuan", "Saudara Laki-Laki", "Tante"], correct: 0 },
    { 
      type: "matching", subject: "English", text: "Match the image on the left with its English word!",
      left: [{ id: "e1", content: "🐶" }, { id: "e2", content: "🍎" }, { id: "e3", content: "🚗" }],
      right: [{ id: "r1", content: "Apple" }, { id: "r2", content: "Car" }, { id: "r3", content: "Dog" }],
      pairs: { e1: "r3", e2: "r1", e3: "r2" }
    },
    { 
      type: "matching", subject: "English", text: "Match the English colors with Indonesian!",
      left: [{ id: "e1", content: "🔵 Blue" }, { id: "e2", content: "🟡 Yellow" }, { id: "e3", content: "🟢 Green" }],
      right: [{ id: "r1", content: "Kuning" }, { id: "r2", content: "Hijau" }, { id: "r3", content: "Biru" }],
      pairs: { e1: "r3", e2: "r1", e3: "r2" }
    },

    // --- MANDARIN (30 SOAL) ---
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan untuk 'Kakek dari pihak Ayah' (爸爸的爸爸) adalah...", options: ["Yéye (爷爷)", "Wàigōng (外公)", "Bóbo (伯伯)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan untuk 'Nenek dari pihak Ibu' (妈妈的妈妈) adalah...", options: ["Nǎinai (奶奶)", "Wàipó (外婆)", "Āyí (阿姨)"], correct: 1 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan untuk 'Paman / Kakak Laki-Laki Ayah' (爸爸的哥哥) adalah...", options: ["Shūshu (叔叔)", "Jiūjiu (舅舅)", "Bóbo (伯伯)"], correct: 2 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan untuk 'Tante / Saudara Perempuan Ibu' (妈妈的姐妹) adalah...", options: ["Āyí (阿姨)", "Gūgu (姑姑)", "Nǎinai (奶奶)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan untuk 'Paman / Saudara Laki-Laki Ibu' (妈妈的兄弟) adalah...", options: ["Bóbo (伯伯)", "Jiūjiu (舅舅)", "Shūshu (叔叔)"], correct: 1 },
    { type: "multiple-choice", subject: "Mandarin", text: "Perintah sikap 'Berdiri / Stand up' dalam kelas adalah...", options: ["Qǐlì (起立)", "Xínglǐ (行礼)", "Zàijiàn (再见)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sikap 'Hormat / Memberi Salam' dalam kelas adalah...", options: ["Nǐ hǎo (你好)", "Xínglǐ (行礼)", "Qǐlì (起立)"], correct: 1 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin angka '1' adalah...", options: ["Yī (一)", "Èr (二)", "Sān (三)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin angka '2' adalah...", options: ["Èr (二)", "Yī (一)", "Sì (四)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin angka '3' adalah...", options: ["Sān (三)", "Wǔ (五)", "Lìu (六)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Ucapan 'Halo / Salam' dalam Mandarin adalah...", options: ["Nǐ hǎo (你好)", "Xièxie (谢谢)", "Zàijiàn (再见)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Ucapan 'Terima Kasih' dalam Mandarin adalah...", options: ["Xièxie (谢谢)", "Nǐ hǎo (你好)", "Zàijiàn (再见)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Ucapan 'Selamat Tinggal' dalam Mandarin adalah...", options: ["Zàijiàn (再见)", "Xièxie (谢谢)", "Nǐ hǎo (你好)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Kata 'Saya' dalam bahasa Mandarin adalah...", options: ["Wǒ (我)", "Nǐ (你)", "Tā (他)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Kata 'Kamu' dalam bahasa Mandarin adalah...", options: ["Nǐ (你)", "Wǒ (我)", "Tā (他)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Panggilan untuk 'Ayah' adalah...", options: ["Bàba (爸爸)", "Māma (妈妈)", "Gēge (哥哥)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Panggilan untuk 'Ibu' adalah...", options: ["Māma (妈妈)", "Bàba (爸爸)", "Jiejie (姐姐)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin angka '4' adalah...", options: ["Sì (四)", "Wǔ (五)", "Shí (十)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin angka '5' adalah...", options: ["Wǔ (五)", "Sān (三)", "Yī (一)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin angka '10' adalah...", options: ["Shí (十)", "Sì (四)", "Èr (二)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan 'Nenek dari Ayah' (爸爸的妈妈) adalah...", options: ["Nǎinai (奶奶)", "Wàipó (外婆)", "Āyí (阿姨)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan 'Kakek dari Ibu' (妈妈的爸爸) adalah...", options: ["Wàigōng (外公)", "Yéye (爷爷)", "Bóbo (伯伯)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan 'Saudara Perempuan Ayah' (爸爸的姐妹) adalah...", options: ["Gūgu (姑姑)", "Āyí (阿姨)", "Nǎinai (奶奶)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan 'Kakak Laki-Laki' adalah...", options: ["Gēge (哥哥)", "Dìdi (弟弟)", "Jiejie (姐姐)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan 'Adik Laki-Laki' adalah...", options: ["Dìdi (弟弟)", "Gēge (哥哥)", "Mèimei (妹妹)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan 'Kakak Perempuan' adalah...", options: ["Jiějie (姐姐)", "Mèimei (妹妹)", "Māma (妈妈)"], correct: 0 },
    { type: "multiple-choice", subject: "Mandarin", text: "Sebutan 'Adik Perempuan' adalah...", options: ["Mèimei (妹妹)", "Jiějie (姐姐)", "Gūgu (姑姑)"], correct: 0 },
    { 
      type: "matching", subject: "Mandarin", text: "Tarik garis mencocokkan panggilan keluarga Ayah!",
      left: [{ id: "zh1", content: "爸爸的爸爸" }, { id: "zh2", content: "爸爸的妈妈" }, { id: "zh3", content: "爸爸的姐妹" }],
      right: [{ id: "r1", content: "Nǎinai (奶奶)" }, { id: "r2", content: "Gūgu (姑姑)" }, { id: "r3", content: "Yéye (爷爷)" }],
      pairs: { zh1: "r3", zh2: "r1", zh3: "r2" }
    },
    { 
      type: "matching", subject: "Mandarin", text: "Tarik garis mencocokkan panggilan keluarga Ibu!",
      left: [{ id: "zh1", content: "妈妈的爸爸" }, { id: "zh2", content: "妈妈的妈妈" }, { id: "zh3", content: "妈妈的兄弟" }],
      right: [{ id: "r1", content: "Wàipó (外婆)" }, { id: "r2", content: "Wàigōng (外公)" }, { id: "r3", content: "Jiūjiu (舅舅)" }],
      pairs: { zh1: "r2", zh2: "r1", zh3: "r3" }
    },
    { 
      type: "matching", subject: "Mandarin", text: "Tarik garis mencocokkan instruksi kelas & salam!",
      left: [{ id: "zh1", content: "🙋 Hello / Halo" }, { id: "zh2", content: "🧍 Berdiri" }, { id: "zh3", content: "👋 Sampai Jumpa" }],
      right: [{ id: "r1", content: "Qǐlì (起立)" }, { id: "r2", content: "Zàijiàn (再见)" }, { id: "r3", content: "Nǐ hǎo (你好)" }],
      pairs: { zh1: "r3", zh2: "r1", zh3: "r2" }
    },

    // --- MORAL (30 SOAL) ---
    { type: "multiple-choice", subject: "Moral", text: "Sebelum makan kita sebaiknya...", options: ["Tidur", "Berdoa", "Bermain"], correct: 1 },
    { type: "multiple-choice", subject: "Moral", text: "Jika diberi hadiah oleh orang lain kita mengucapkan...", options: ["Maaf", "Terima Kasih", "Sama-sama"], correct: 1 },
    { type: "multiple-choice", subject: "Moral", text: "Jika berbuat salah kepada teman, kita harus...", options: ["Minta Maaf", "Mengejek", "Marah"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Membantu orang tua merapikan mainan adalah perbuatan...", options: ["Baik", "Nakal", "Sombong"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Sikap saat diajar oleh guru di kelas adalah...", options: ["Mendengarkan", "Ngobrol", "Tidur"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Membuang sampah bekas jajanan di...", options: ["Tempat Sampah", "Lantai", "Saku Baju"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Terhadap teman di sekolah kita harus saling...", options: ["Menyayangi", "Mengejek", "Memukul"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Sebelum tidur malam sebaiknya kita...", options: ["Berdoa & Sikat Gigi", "Main HP", "Makan Banyak"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Saat mengantre makanan di kantin kita harus...", options: ["Tertib / Sabar", "Menerobos", "Mendorong"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Jika melihat teman terjatuh, sikap kita...", options: ["Menolongnya", "Tertawa", "Pura-pura Tidak Tahu"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Berbicara kepada orang tua harus dengan bahasa yang...", options: ["Sopan", "Kasar", "Berteriak"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Menjaga kebersihan meja belajar adalah tanggung jawab...", options: ["Diri Sendiri", "Ibu", "Guru"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Jika meminjam barang teman, kita harus...", options: ["Mengembalikannya", "Menyimpannya", "Merusaknya"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Mengucapkan salam saat bertemu guru adalah perbuatan...", options: ["Sopan", "Buruk", "Tercela"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Menyebut nama teman dengan sebutan buruk adalah perbuatan...", options: ["Tercela / Mengejek", "Baik", "Lucu"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Anak yang jujur akan...", options: ["Disukai Banyak Teman", "Dimusuhi", "Dihukum"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Saat orang tua sedang menasihati, kita harus...", options: ["Mendengarkan", "Bantah", "Kabur"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Membagi makanan ringan kepada teman menunjukkan sikap...", options: ["Berbagi / Budi Baik", "Pelit", "Sombong"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Bangun pagi tepat waktu adalah contoh sikap...", options: ["Disiplin", "Malas", "Manja"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Jika memasuki rumah orang lain, kita harus...", options: ["Minta Izin / Ketuk Pintu", "Langsung Masuk", "Berteriak"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Merapikan sepatu sendiri di rak tempat sepatu adalah perbuatan...", options: ["Mandiri", "Malas", "Sombong"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Menyiram tanaman di halaman rumah adalah perbuatan...", options: ["Merawat Lingkungan", "Merusak", "Sia-sia"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Mendoakan kedua orang tua adalah kewajiban seorang...", options: ["Anak", "Tetangga", "Teman"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Sikap saat kalah dalam permainan adalah...", options: ["Lapang Dada / Sportif", "Marah-marah", "Menangis"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Mencoret-coret tembok sekolah adalah perbuatan...", options: ["Buruk / Merusak", "Kreatif", "Bagus"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Giat belajar setiap hari adalah tugas utama seorang...", options: ["Pelajar / Siswa", "Guru", "Orang Tua"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Menghemat penggunaan air dan listrik adalah sikap...", options: ["Bijak / Baik", "Pelit", "Sombong"], correct: 0 },
    { type: "multiple-choice", subject: "Moral", text: "Apabila ada tamu datang ke rumah, kita menyambut dengan...", options: ["Sopan dan Ramah", "Cuek", "Lari"], correct: 0 },
    { 
      type: "matching", subject: "Moral", text: "Tarik garis dari gambar ke tindakan terpuji!",
      left: [{ id: "mo1", content: "🗑️" }, { id: "mo2", content: "🙏" }, { id: "mo3", content: "🤝" }],
      right: [{ id: "r1", content: "Berdoa" }, { id: "r2", content: "Saling Membantu" }, { id: "r3", content: "Buang Sampah" }],
      pairs: { mo1: "r3", mo2: "r1", mo3: "r2" }
    },
    { 
      type: "matching", subject: "Moral", text: "Tarik garis mencocokkan situasi dan ucapan tepat!",
      left: [{ id: "mo1", content: "Menabrak Teman" }, { id: "mo2", content: "Ditolong Teman" }, { id: "mo3", content: "Menyapa Guru" }],
      right: [{ id: "r1", content: "Terima Kasih" }, { id: "r2", content: "Selamat Pagi" }, { id: "r3", content: "Maaf" }],
      pairs: { mo1: "r3", mo2: "r1", mo3: "r2" }
    },

    // --- BUDAYA MELAYU RIAU (30 SOAL) ---
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu Riau untuk laki-laki adalah...", options: ["Teluk Belanga", "Kebaya", "Batik"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Buah manis yang terkenal dari Kota Pekanbaru adalah...", options: ["Nanas", "Durian", "Rambutan"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Senjata tradisional khas Melayu adalah...", options: ["Tumbuk Lada / Keris", "Rencong", "Mandau"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Tarian persembahan selamat datang di Riau adalah...", options: ["Tari Makan Sirih", "Tari Pendet", "Tari Saman"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Rumah adat tradisional Melayu Riau bernama...", options: ["Rumah Selaso Jatuh Kembar", "Rumah Gadang", "Rumah Joglo"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Sungai besar yang membelah Kota Pekanbaru adalah...", options: ["Sungai Siak", "Sungai Kampar", "Sungai Indragiri"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Alat musik petik khas Melayu Riau dinamakan...", options: ["Gambus", "Gendang", "Siter"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Alat musik pukul dari kulit untuk mengiringi lagu Melayu adalah...", options: ["Kompang / Rebana", "Gong", "Angklung"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Makanan khas Melayu Riau olahan ikan berkuah pedas dinamakan...", options: ["Gulai Asam Pedas Patin", "Rendang", "Pempek"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Kue manis berbentuk bunga khas Melayu Riau adalah...", options: ["Bolu Kemojo", "Kue Lapis", "Bika Ambon"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Minuman segar khas Riau dari olahan mangga dicampur santan dinamakan...", options: ["Laksamana Mengamuk", "Es Cendol", "Es Doger"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Tarian lincah mengandalkan gerakan kaki khas Melayu adalah...", options: ["Tari Zapin", "Tari Jaipong", "Tari Piring"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Penutup kepala kain khas laki-laki Melayu dinamakan...", options: ["Tanjak", "Peci", "Blangkon"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Kain tenun bermotif khas Melayu Riau adalah...", options: ["Kain Songket Melayu", "Batik Solo", "Kain Ulos"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Motto atau slogan Kota Pekanbaru adalah...", options: ["Kota Bertuah", "Kota Beriman", "Kota Kembang"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Perpustakaan megah ikonik berbentuk buku di Pekanbaru adalah...", options: ["Perpustakaan Soeman HS", "Perpustakaan Nasional", "Perpustakaan Daerah"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Warna khas budaya Melayu Riau terdiri dari...", options: ["Kuning, Hijau, Merah", "Biru, Hitam, Putih", "Ungu, Cokelat, Pink"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Seni tutur sastra lisan berupa ungkapan bersajak Melayu dinamakan...", options: ["Pantun Melayu", "Puisi", "Cerpen"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu untuk perempuan dinamakan...", options: ["Baju Kurung", "Kebaya", "Kemben"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Sebutan untuk pemimpin adat Melayu Riau adalah...", options: ["Datuk", "Raja", "Sultan"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Camilan khas Melayu berupa olahan sagu dinamakan...", options: ["Sagu Lenggang / Mie Sagu", "Cireng", "Pempek"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Upacara adat menyambut bayi lahir di Melayu Riau dinamakan...", options: ["Aqiqah / Tepuk Tepung Tawar", "Ngaben", "Tedhak Siten"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Istana bersejarah peninggalan Kesultanan Melayu di Riau adalah...", options: ["Istana Siak Sri Indrapura", "Istana Maimun", "Istana Merdeka"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Kue khas Melayu dari tepung dan gula merah yang dikukus adalah...", options: ["Tepung Pelita", "Kue Cubit", "Martabak"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Ungkapan khas Melayu 'Takkan Melayu Hilang di...' lanjutan kalimatnya...", options: ["Bumi", "Laut", "Langit"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Olahan ikan khas Melayu yang dikeringkan dan diasinkan adalah...", options: ["Ikan Asin / Salai", "Ikan Basah", "Sushi"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Masjid megah kebanggaan masyarakat Riau di Pekanbaru adalah...", options: ["Masjid An-Nur Riau", "Masjid Istiqlal", "Masjid Agung Jawa"], correct: 0 },
    { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Kain samping yang dililitkan di pinggang laki-laki Melayu disebut...", options: ["Kain Samping", "Sarung Biasa", "Celana"], correct: 0 },
    { 
      type: "matching", subject: "Budaya Melayu Riau", text: "Cocokkan gambar simbolis budaya Melayu Riau!",
      left: [{ id: "bm1", content: "🍍" }, { id: "bm2", content: "🏠" }, { id: "bm3", content: "💃" }],
      right: [{ id: "r1", content: "Selaso Jatuh Kembar" }, { id: "r2", content: "Tari Makan Sirih" }, { id: "r3", content: "Nanas Pekanbaru" }],
      pairs: { bm1: "r3", bm2: "r1", bm3: "r2" }
    },
    { 
      type: "matching", subject: "Budaya Melayu Riau", text: "Cocokkan makanan & minuman khas Riau!",
      left: [{ id: "bm1", content: "🐟 Patin" }, { id: "bm2", content: "🍹 Laksamana Mengamuk" }, { id: "bm3", content: "🍰 Bolu Kemojo" }],
      right: [{ id: "r1", content: "Kue Khas Melayu" }, { id: "r2", content: "Gulai Asam Pedas" }, { id: "r3", content: "Minuman Es Mangga" }],
      pairs: { bm1: "r2", bm2: "r3", bm3: "r1" }
    }
  ]
};

// Mengisi Bank Soal Kelas 2-6 secara otomatis jika bank kelas tersebut dipanggil
function generateClassBankForLevel(level) {
  if (classBank[level] && classBank[level].length >= 240) {
    return classBank[level];
  }

  // Ambil pola soal dari kelas 1 dan tingkatkan bobot materi sesuai jenjang kelas
  const baseQuestions = classBank[1];
  const levelQuestions = [];

  baseQuestions.forEach(q => {
    let newQ = JSON.parse(JSON.stringify(q));
    
    // Penyesuaian soal Math berdasarkan jenjang
    if (newQ.subject === "Math") {
      if (level === 2) { newQ.text = newQ.text.replace("4 + 3", "14 + 13").replace("10 - 4", "20 - 8"); }
      else if (level === 3) { newQ.text = newQ.text.replace("4 + 3", "5 x 4").replace("10 - 4", "50 / 5"); }
      else if (level === 4) { newQ.text = newQ.text.replace("4 + 3", "12 x 8").replace("10 - 4", "100 / 4"); }
      else if (level === 5) { newQ.text = newQ.text.replace("4 + 3", "15% of 200").replace("10 - 4", "3/4 as %"); }
      else if (level === 6) { newQ.text = newQ.text.replace("4 + 3", "Volume of 5cm Cube").replace("10 - 4", "Average of 10,20,30"); }
    }
    
    levelQuestions.push(newQ);
  });

  classBank[level] = levelQuestions;
  return levelQuestions;
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

// ================= AKSI PILIH KELAS & MAPEL =================
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

  setTimeout(() => {
    loadQuestion();
  }, 50);
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
  
  // Filter soal berdasarkan Mapel (atau ambil semua jika "Semua Mapel")
  let filteredBank = currentClassBank;
  if (selectedSubjectName !== "Semua Mapel") {
    filteredBank = currentClassBank.filter(q => q.subject === selectedSubjectName);
    if (filteredBank.length === 0) filteredBank = currentClassBank;
  }

  // KHUSUS PKN KELAS 1: Tampilkan berurutan sesuai bank soal (tanpa diacak)
  if (selectedClassLevel === 1 && selectedSubjectName === "Kewarganegaraan") {
    questions = JSON.parse(JSON.stringify(filteredBank));
  } else {
    // Untuk mapel/kelas lain: ambil 10 soal acak
    let shuffledAll = shuffleArray(filteredBank);
    questions = shuffledAll.slice(0, 10);
  }

  // Acak pilihan jawaban A, B, C / pasangan tarik garis
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
let drawCanvas, ctxDraw;

// Variables Canvas Mencocokkan Garis
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

// ================= AUDIO (TEXT-TO-SPEECH) =================
function speakCurrentQuestion() {
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  if (!questions[currentIdx]) return;
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
  if (!questions || questions.length === 0) return;

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

// ================= PILIHAN GANDA =================
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
    
    const badgeLeft = badgeRect.left - canvasRect.left;
    const badgeRight = badgeRect.right - canvasRect.left;
    const badgeTop = badgeRect.top - canvasRect.top;
    const badgeBottom = badgeRect.bottom - canvasRect.top;

    const hit = drawnPoints.some(p => p.x >= badgeLeft && p.x <= badgeRight && p.y >= badgeTop && p.y <= badgeBottom);

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

        const correctBadge = document.querySelector(`.option-letter[data-index="${correctIdx}"]`);
        if (correctBadge) {
          correctBadge.style.borderColor = "#4caf50";
          correctBadge.style.background = "#4caf50";
          correctBadge.style.color = "#ffffff";
          const correctRow = correctBadge.closest(".option-row");
          if (correctRow) {
            correctRow.style.borderColor = "#4caf50";
            correctRow.style.background = "#c8e6c9";
          }
        }
      }

      setTimeout(() => { nextQuestion(); }, 1500);
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

    setTimeout(() => { nextQuestion(); }, 1500);
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

window.onload = () => {
  setupCanvasElements();
};

window.onresize = () => {
  if (questions[currentIdx] && questions[currentIdx].type === "multiple-choice") resizeDrawCanvas();
  else if (questions[currentIdx] && questions[currentIdx].type === "matching") resizeMatchCanvas();
};