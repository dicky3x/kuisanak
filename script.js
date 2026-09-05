// Dataset Utama (80 Soal)
const rawQuestions = [
  // ==================== 1. BAHASA INDONESIA ====================
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Huruf kapital dari huruf 'b' adalah...", options: ["B", "D", "P"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Suara hewan kucing adalah...", options: ["Guk guk", "MEOONG", "Mbekk"], correct: 1 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Ibu memasak makanan di...", options: ["Kamar", "Dapur", "Halaman"], correct: 1 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "L-A-R-I dibaca menjadi...", options: ["Lari", "Lupa", "Lama"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "Lawan kata dari 'Besar' adalah...", options: ["Tinggi", "Kecil", "Panjang"], correct: 1 },
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
  { 
    type: "matching", subject: "Bahasa Indonesia", text: "Tarik garis mencocokkan hewan dan suaranya!",
    left: [{ id: "bi1", content: "🐮 Sapi" }, { id: "bi2", content: "🦆 Bebek" }, { id: "bi3", content: "🐕 Anjing" }],
    right: [{ id: "r1", content: "Guk-guk" }, { id: "r2", content: "Moo" }, { id: "r3", content: "Kwek-kwek" }],
    pairs: { bi1: "r2", bi2: "r3", bi3: "r1" }
  },
  { 
    type: "matching", subject: "Bahasa Indonesia", text: "Tarik garis mencocokkan profesi dan tempat kerjanya!",
    left: [{ id: "bi1", content: "👨‍🏫 Guru" }, { id: "bi2", content: "👨‍⚕️ Dokter" }, { id: "bi3", content: "👨‍🍳 Koki" }],
    right: [{ id: "r1", content: "Restoran" }, { id: "r2", content: "Sekolah" }, { id: "r3", content: "Rumah Sakit" }],
    pairs: { bi1: "r2", bi2: "r3", bi3: "r1" }
  },
  { 
    type: "matching", subject: "Bahasa Indonesia", text: "Tarik garis mencocokkan kata dengan huruf depannya!",
    left: [{ id: "bi1", content: "🍎 Apel" }, { id: "bi2", content: "🦆 Bebek" }, { id: "bi3", content: "🚲 Cincin" }],
    right: [{ id: "r1", content: "Huruf B" }, { id: "r2", content: "Huruf C" }, { id: "r3", content: "Huruf A" }],
    pairs: { bi1: "r3", bi2: "r1", bi3: "r2" }
  },

  // ==================== 2. MATH ====================
  { type: "multiple-choice", subject: "Math", text: "Berapa hasil dari 4 + 3?", options: ["6", "7", "8"], correct: 1 },
  { type: "multiple-choice", subject: "Math", text: "Berapa hasil pengurangan 10 - 4?", options: ["5", "6", "7"], correct: 1 },
  { type: "multiple-choice", subject: "Math", text: "Angka setelah 19 adalah...", options: ["18", "20", "21"], correct: 1 },
  { type: "multiple-choice", subject: "Math", text: "Manakah angka yang paling besar?", options: ["12", "15", "8"], correct: 1 },
  { type: "multiple-choice", subject: "Math", text: "Jam dinding biasanya berbentuk...", options: ["Lingkaran", "Segitiga", "Kubus"], correct: 0 },
  { 
    type: "matching", subject: "Math", text: "Tarik garis dari benda ke bentuk geometrisnya!",
    left: [{ id: "m1", content: "⚽" }, { id: "m2", content: "📐" }, { id: "m3", content: "📦" }],
    right: [{ id: "r1", content: "Segitiga" }, { id: "r2", content: "Kotak" }, { id: "r3", content: "Lingkaran" }],
    pairs: { m1: "r3", m2: "r1", m3: "r2" }
  },
  { 
    type: "matching", subject: "Math", text: "Tarik garis mencocokkan penjumlahan sederhana!",
    left: [{ id: "m1", content: "2 + 2" }, { id: "m2", content: "5 + 1" }, { id: "m3", content: "3 + 0" }],
    right: [{ id: "r1", content: "3" }, { id: "r2", content: "4" }, { id: "r3", content: "6" }],
    pairs: { m1: "r2", m2: "r3", m3: "r1" }
  },
  { 
    type: "matching", subject: "Math", text: "Tarik garis mencocokkan jumlah benda dengan angkanya!",
    left: [{ id: "m1", content: "🍎🍎" }, { id: "m2", content: "⭐⭐⭐" }, { id: "m3", content: "🎈" }],
    right: [{ id: "r1", content: "1" }, { id: "r2", content: "2" }, { id: "r3", content: "3" }],
    pairs: { m1: "r2", m2: "r3", m3: "r1" }
  },
  { 
    type: "matching", subject: "Math", text: "Tarik garis mencocokkan pengurangan sederhana!",
    left: [{ id: "m1", content: "5 - 2" }, { id: "m2", content: "4 - 4" }, { id: "m3", content: "9 - 1" }],
    right: [{ id: "r1", content: "0" }, { id: "r2", content: "8" }, { id: "r3", content: "3" }],
    pairs: { m1: "r3", m2: "r1", m3: "r2" }
  },
  { 
    type: "matching", subject: "Math", text: "Tarik garis mencocokkan urutan angka!",
    left: [{ id: "m1", content: "Sebelum 5" }, { id: "m2", content: "Setelah 7" }, { id: "m3", content: "Antara 1 & 3" }],
    right: [{ id: "r1", content: "2" }, { id: "r2", content: "4" }, { id: "r3", content: "8" }],
    pairs: { m1: "r2", m2: "r3", m3: "r1" }
  },

  // ==================== 3. SCIENCE ====================
  { type: "multiple-choice", subject: "Science", text: "Bagian tubuh untuk mendengar adalah...", options: ["Mata", "Telinga", "Hidung"], correct: 1 },
  { type: "multiple-choice", subject: "Science", text: "Benda yang bentuknya padat dan keras adalah...", options: ["Batu", "Air", "Minyak"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "Hewan yang bernapas di dalam air adalah...", options: ["Ayam", "Ikan", "Burung"], correct: 1 },
  { type: "multiple-choice", subject: "Science", text: "Matahari terbit pada waktu...", options: ["Malam", "Pagi", "Sore"], correct: 1 },
  { type: "multiple-choice", subject: "Science", text: "Ayam berkembang biak dengan cara...", options: ["Bertelur", "Melahirkan", "Membelah diri"], correct: 0 },
  { 
    type: "matching", subject: "Science", text: "Tarik garis dari gambar indera ke fungsinya!",
    left: [{ id: "s1", content: "👂" }, { id: "s2", content: "👁️" }, { id: "s3", content: "👃" }],
    right: [{ id: "r1", content: "Melihat" }, { id: "r2", content: "Mencium" }, { id: "r3", content: "Mendengar" }],
    pairs: { s1: "r3", s2: "r1", s3: "r2" }
  },
  { 
    type: "matching", subject: "Science", text: "Tarik garis mencocokkan tempat tinggal hewan!",
    left: [{ id: "s1", content: "🐟 Ikan" }, { id: "s2", content: "🦅 Burung" }, { id: "s3", content: "🐜 Semut" }],
    right: [{ id: "r1", content: "Sarang Udara" }, { id: "r2", content: "Air" }, { id: "r3", content: "Dalam Tanah" }],
    pairs: { s1: "r2", s2: "r1", s3: "r3" }
  },
  { 
    type: "matching", subject: "Science", text: "Tarik garis mencocokkan wujud benda!",
    left: [{ id: "s1", content: "🧊 Es Batu" }, { id: "s2", content: "💧 Air Minum" }, { id: "s3", content: "💨 Asap" }],
    right: [{ id: "r1", content: "Cair" }, { id: "r2", content: "Gas" }, { id: "r3", content: "Padat" }],
    pairs: { s1: "r3", s2: "r1", s3: "r2" }
  },
  { 
    type: "matching", subject: "Science", text: "Tarik garis mencocokkan benda langit dan waktunya!",
    left: [{ id: "s1", content: "☀️ Matahari" }, { id: "s2", content: "🌙 Bulan" }, { id: "s3", content: "⭐ Bintang" }],
    right: [{ id: "r1", content: "Malam Hari" }, { id: "r2", content: "Siang Hari" }, { id: "r3", content: "Malam Hari" }],
    pairs: { s1: "r2", s2: "r1", s3: "r3" }
  },
  { 
    type: "matching", subject: "Science", text: "Tarik garis mencocokkan makanan hewan!",
    left: [{ id: "s1", content: "🐰 Kelinci" }, { id: "s2", content: "🐱 Kucing" }, { id: "s3", content: "🐮 Sapi" }],
    right: [{ id: "r1", content: "Ikan" }, { id: "r2", content: "Rumput" }, { id: "r3", content: "Wortel" }],
    pairs: { s1: "r3", s2: "r1", s3: "r2" }
  },

  // ==================== 4. KEWARGANEGARAAN ====================
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "Simbol sila pertama Pancasila adalah...", options: ["Bintang", "Rantai", "Pohon Beringin"], correct: 0 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "Warna bendera negara Indonesia adalah...", options: ["Merah Putih", "Merah Biru", "Kuning Hijau"], correct: 0 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "Sikap kita saat bendera dikibarkan adalah...", options: ["Hormat", "Duduk", "Lari"], correct: 0 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "Saling membantu sesama teman disebut...", options: ["Sombong", "Gotong Royong", "Marah"], correct: 1 },
  { type: "multiple-choice", subject: "Kewarganegaraan", text: "Dasar negara Indonesia adalah...", options: ["Pancasila", "UUD", "Sumpah Pemuda"], correct: 0 },
  { 
    type: "matching", subject: "Kewarganegaraan", text: "Tarik garis dari simbol ke nomor sila Pancasila!",
    left: [{ id: "k1", content: "⭐" }, { id: "k2", content: "⛓️" }, { id: "k3", content: "🌳" }],
    right: [{ id: "r1", content: "Sila Ke-2" }, { id: "r2", content: "Sila Ke-3" }, { id: "r3", content: "Sila Ke-1" }],
    pairs: { k1: "r3", k2: "r1", k3: "r2" }
  },
  { 
    type: "matching", subject: "Kewarganegaraan", text: "Tarik garis mencocokkan simbol sila ke-4 dan ke-5!",
    left: [{ id: "k1", content: "🐂 Banteng" }, { id: "k2", content: "🌾🌾 Padi Kapas" }],
    right: [{ id: "r1", content: "Sila Ke-5" }, { id: "r2", content: "Sila Ke-4" }],
    pairs: { k1: "r2", k2: "r1" }
  },
  { 
    type: "matching", subject: "Kewarganegaraan", text: "Tarik garis mencocokkan warna bendera Indonesia!",
    left: [{ id: "k1", content: "🔴 Merah" }, { id: "k2", content: "⚪ Putih" }],
    right: [{ id: "r1", content: "Suci" }, { id: "r2", content: "Berani" }],
    pairs: { k1: "r2", k2: "r1" }
  },
  { 
    type: "matching", subject: "Kewarganegaraan", text: "Tarik garis mencocokkan aturan di rumah dan sekolah!",
    left: [{ id: "k1", content: "🧹 Piket Kelas" }, { id: "k2", content: "🛏️ Merapikan Kasur" }, { id: "k3", content: "🎒 Pakai Seragam" }],
    right: [{ id: "r1", content: "Aturan Rumah" }, { id: "r2", content: "Aturan Sekolah" }, { id: "r3", content: "Aturan Sekolah" }],
    pairs: { k1: "r2", k2: "r1", k3: "r3" }
  },
  { 
    type: "matching", subject: "Kewarganegaraan", text: "Tarik garis mencocokkan sikap terpuji!",
    left: [{ id: "k1", content: "🤝 Teman Jatuh" }, { id: "k2", content: "🙏 Berbuat Salah" }, { id: "k3", content: "🎁 Diberi Hadiah" }],
    right: [{ id: "r1", content: "Minta Maaf" }, { id: "r2", content: "Terima Kasih" }, { id: "r3", content: "Menolong" }],
    pairs: { k1: "r3", k2: "r1", k3: "r2" }
  },

  // ==================== 5. ENGLISH ====================
  { type: "multiple-choice", subject: "English", text: "Bahasa Inggris dari kata 'Kucing' adalah...", options: ["Dog", "Cat", "Bird"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "Warna 'Red' dalam bahasa Indonesia adalah...", options: ["Biru", "Merah", "Kuning"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "Greeting 'Good Morning' artinya...", options: ["Selamat Pagi", "Selamat Malam", "Selamat Tinggal"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "Number 'Five' artinya angka...", options: ["4", "5", "6"], correct: 1 },
  { type: "multiple-choice", subject: "English", text: "Bahasa Inggris dari 'Buku' adalah...", options: ["Pen", "Book", "Pencil"], correct: 1 },
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
  { 
    type: "matching", subject: "English", text: "Match the numbers in English!",
    left: [{ id: "e1", content: "1️⃣ One" }, { id: "e2", content: "2️⃣ Two" }, { id: "e3", content: "3️⃣ Three" }],
    right: [{ id: "r1", content: "Tiga" }, { id: "r2", content: "Satu" }, { id: "r3", content: "Dua" }],
    pairs: { e1: "r2", e2: "r3", e3: "r1" }
  },
  { 
    type: "matching", subject: "English", text: "Match the family members!",
    left: [{ id: "e1", content: "👨 Father" }, { id: "e2", content: "👩 Mother" }, { id: "e3", content: "👶 Baby" }],
    right: [{ id: "r1", content: "Bayi" }, { id: "r2", content: "Ayah" }, { id: "r3", content: "Ibu" }],
    pairs: { e1: "r2", e2: "r3", e3: "r1" }
  },
  { 
    type: "matching", subject: "English", text: "Match the greetings!",
    left: [{ id: "e1", content: "🌅 Good Morning" }, { id: "e2", content: "🌙 Good Night" }, { id: "e3", content: "👋 Goodbye" }],
    right: [{ id: "r1", content: "Selamat Tinggal" }, { id: "r2", content: "Selamat Pagi" }, { id: "r3", content: "Selamat Malam" }],
    pairs: { e1: "r2", e2: "r3", e3: "r1" }
  },

  // ==================== 6. MANDARIN ====================
  { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin dari angka '1' (Satu) adalah...", options: ["Sān (三)", "Èr (二)", "Yī (一)"], correct: 2 },
  { type: "multiple-choice", subject: "Mandarin", text: "Ucapan 'Salam / Halo' dalam Mandarin adalah...", options: ["Nǐ hǎo", "Xièxie", "Zàijiàn"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "Ucapan 'Terima Kasih' dalam Mandarin adalah...", options: ["Xièxie", "Nǐ hǎo", "Zàijiàn"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin dari kata 'Ayah' adalah...", options: ["Bàba", "Māma", "Gēge"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "Bahasa Mandarin dari 'Selamat Tinggal' adalah...", options: ["Nǐ hǎo", "Xièxie", "Zàijiàn"], correct: 2 },
  { 
    type: "matching", subject: "Mandarin", text: "Cocokkan simbol angka dengan Hanzi Mandarinnya!",
    left: [{ id: "zh1", content: "1️⃣" }, { id: "zh2", content: "2️⃣" }, { id: "zh3", content: "3️⃣" }],
    right: [{ id: "r1", content: "Èr (二)" }, { id: "r2", content: "Sān (三)" }, { id: "r3", content: "Yī (一)" }],
    pairs: { zh1: "r3", zh2: "r1", zh3: "r2" }
  },
  { 
    type: "matching", subject: "Mandarin", text: "Cocokkan kata salam Mandarin dengan artinya!",
    left: [{ id: "zh1", content: "Nǐ hǎo" }, { id: "zh2", content: "Xièxie" }, { id: "zh3", content: "Zàijiàn" }],
    right: [{ id: "r1", content: "Selamat Tinggal" }, { id: "r2", content: "Halo / Salam" }, { id: "r3", content: "Terima Kasih" }],
    pairs: { zh1: "r2", zh2: "r3", zh3: "r1" }
  },
  { 
    type: "matching", subject: "Mandarin", text: "Cocokkan sebutan anggota keluarga!",
    left: [{ id: "zh1", content: "Bàba (爸爸)" }, { id: "zh2", content: "Māma (妈妈)" }],
    right: [{ id: "r1", content: "Ibu" }, { id: "r2", content: "Ayah" }],
    pairs: { zh1: "r2", zh2: "r1" }
  },
  { 
    type: "matching", subject: "Mandarin", text: "Cocokkan angka 4, 5, dan 10 Mandarin!",
    left: [{ id: "zh1", content: "4️⃣" }, { id: "zh2", content: "5️⃣" }, { id: "zh3", content: "🔟" }],
    right: [{ id: "r1", content: "Wǔ (五)" }, { id: "r2", content: "Sì (四)" }, { id: "r3", content: "Shí (十)" }],
    pairs: { zh1: "r2", zh2: "r1", zh3: "r3" }
  },
  { 
    type: "matching", subject: "Mandarin", text: "Cocokkan kata ganti orang Mandarin!",
    left: [{ id: "zh1", content: "Wǒ (我)" }, { id: "zh2", content: "Nǐ (你)" }],
    right: [{ id: "r1", content: "Kamu" }, { id: "r2", content: "Saya" }],
    pairs: { zh1: "r2", zh2: "r1" }
  },

  // ==================== 7. MORAL ====================
  { type: "multiple-choice", subject: "Moral", text: "Sebelum makan kita sebaiknya...", options: ["Tidur", "Berdoa", "Bermain"], correct: 1 },
  { type: "multiple-choice", subject: "Moral", text: "Jika diberi hadiah oleh orang lain kita mengucapkan...", options: ["Maaf", "Terima Kasih", "Sama-sama"], correct: 1 },
  { type: "multiple-choice", subject: "Moral", text: "Jika memecahkan piring Ibu, kita harus...", options: ["Minta Maaf", "Lari", "Sembunyi"], correct: 0 },
  { type: "multiple-choice", subject: "Moral", text: "Terhadap sesama teman kita harus saling...", options: ["Mengejek", "Menyayangi", "Memukul"], correct: 1 },
  { type: "multiple-choice", subject: "Moral", text: "Membuang sampah seharusnya di...", options: ["Tempat Sampah", "Sungai", "Lantai"], correct: 0 },
  { 
    type: "matching", subject: "Moral", text: "Tarik garis dari gambar ke tindakan terpuji!",
    left: [{ id: "mo1", content: "🗑️" }, { id: "mo2", content: "🙏" }, { id: "mo3", content: "🤝" }],
    right: [{ id: "r1", content: "Berdoa" }, { id: "r2", content: "Saling Membantu" }, { id: "r3", content: "Buang Sampah" }],
    pairs: { mo1: "r3", mo2: "r1", mo3: "r2" }
  },
  { 
    type: "matching", subject: "Moral", text: "Tarik garis mencocokkan situasi dan ucapan yang tepat!",
    left: [{ id: "mo1", content: "Menabrak Teman" }, { id: "mo2", content: "Ditolong Teman" }, { id: "mo3", content: "Menyapa Guru" }],
    right: [{ id: "r1", content: "Terima Kasih" }, { id: "r2", content: "Selamat Pagi" }, { id: "r3", content: "Maaf" }],
    pairs: { mo1: "r3", mo2: "r1", mo3: "r2" }
  },
  { 
    type: "matching", subject: "Moral", text: "Tarik garis mencocokkan perilaku Baik vs Buruk!",
    left: [{ id: "mo1", content: "🌱 Menyiram Bunga" }, { id: "mo2", content: "🗣️ Berteriak di Kelas" }],
    right: [{ id: "r1", content: "Perilaku Buruk" }, { id: "r2", content: "Perilaku Baik" }],
    pairs: { mo1: "r2", mo2: "r1" }
  },
  { 
    type: "matching", subject: "Moral", text: "Tarik garis mencocokkan kewajiban anak!",
    left: [{ id: "mo1", content: "📚 Belajar Tekun" }, { id: "mo2", content: "🧹 Membantu Ibu" }, { id: "mo3", content: "⏰ Bangun Pagi" }],
    right: [{ id: "r1", content: "Di Rumah" }, { id: "r2", content: "Tepat Waktu" }, { id: "r3", content: "Tugas Siswa" }],
    pairs: { mo1: "r3", mo2: "r1", mo3: "r2" }
  },
  { 
    type: "matching", subject: "Moral", text: "Tarik garis mencocokkan cara menghormati orang tua!",
    left: [{ id: "mo1", content: "👂 Mendengarkan" }, { id: "mo2", content: "🙋 Berpamitan" }, { id: "mo3", content: "🎁 Membantu" }],
    right: [{ id: "r1", content: "Saat Cium Tangan" }, { id: "r2", content: "Meringankan Bekerja" }, { id: "r3", content: "Saat Dinasihati" }],
    pairs: { mo1: "r3", mo2: "r1", mo3: "r2" }
  },

  // ==================== 8. BUDAYA MELAYU RIAU ====================
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Pakaian adat Melayu Riau untuk laki-laki adalah...", options: ["Teluk Belanga", "Kebaya", "Batik"], correct: 0 },
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Buah manis yang terkenal dari Kota Pekanbaru adalah...", options: ["Nanas", "Durian", "Rambutan"], correct: 0 },
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Senjata tradisional khas suku Melayu adalah...", options: ["Keris / Tumbuk Lada", "Panah", "Clurit"], correct: 0 },
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Tarian selamat datang untuk menyambut tamu di Riau adalah...", options: ["Tari Makan Sirih", "Tari Piring", "Tari Jaipong"], correct: 0 },
  { type: "multiple-choice", subject: "Budaya Melayu Riau", text: "Rumah adat tradisional Melayu Riau dinamakan...", options: ["Rumah Lintas", "Rumah Selaso Jatuh Kembar", "Rumah Gadang"], correct: 1 },
  { 
    type: "matching", subject: "Budaya Melayu Riau", text: "Cocokkan gambar simbolis budaya Melayu Riau!",
    left: [{ id: "bm1", content: "🍍" }, { id: "bm2", content: "🏠" }, { id: "bm3", content: "💃" }],
    right: [{ id: "r1", content: "Selaso Jatuh Kembar" }, { id: "r2", content: "Tari Makan Sirih" }, { id: "r3", content: "Nanas Pekanbaru" }],
    pairs: { bm1: "r3", bm2: "r1", bm3: "r2" }
  },
  { 
    type: "matching", subject: "Budaya Melayu Riau", text: "Cocokkan nama tarian daerah di Riau!",
    left: [{ id: "bm1", content: "🍃 Tari Sirih" }, { id: "bm2", content: "⚡ Tari Zapin" }],
    right: [{ id: "r1", content: "Tarian Rumpun Melayu" }, { id: "r2", content: "Penyambutan Tamu" }],
    pairs: { bm1: "r2", bm2: "r1" }
  },
  { 
    type: "matching", subject: "Budaya Melayu Riau", text: "Cocokkan makanan & minuman khas Riau!",
    left: [{ id: "bm1", content: "🐟 Patin" }, { id: "bm2", content: "🍹 Laksamana Mengamuk" }, { id: "bm3", content: "🍰 Bolu Kemojo" }],
    right: [{ id: "r1", content: "Kue Khas Melayu" }, { id: "r2", content: "Gulai Asam Pedas" }, { id: "r3", content: "Minuman Es Mango" }],
    pairs: { bm1: "r2", bm2: "r3", bm3: "r1" }
  },
  { 
    type: "matching", subject: "Budaya Melayu Riau", text: "Cocokkan alat musik tradisional Melayu Riau!",
    left: [{ id: "bm1", content: "🪕 Gambus" }, { id: "bm2", content: "🥁 Kompang / Rebana" }],
    right: [{ id: "r1", content: "Alat Musik Pukul" }, { id: "r2", content: "Alat Musik Petik" }],
    pairs: { bm1: "r2", bm2: "r1" }
  },
  { 
    type: "matching", subject: "Budaya Melayu Riau", text: "Cocokkan simbol kebanggaan Melayu Riau!",
    left: [{ id: "bm1", content: "🏛️ Perpustakaan Soeman HS" }, { id: "bm2", content: "🌊 Sungai Siak" }],
    right: [{ id: "r1", content: "Sungai Kebanggaan Riau" }, { id: "r2", content: "Ikon Kota Pekanbaru" }],
    pairs: { bm1: "r2", bm2: "r1" }
  }
];

// Fungsi Acak Array (Fisher-Yates Shuffle)
function shuffleArray(array) {
  const arr = JSON.parse(JSON.stringify(array)); // Deep clone
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Inisialisasi Soal yang Diacak
let questions = [];
let currentIdx = 0;
let isAnswered = false;
let userAnswers = [];

function initQuizData() {
  // 1. Acak urutan seluruh soal
  questions = shuffleArray(rawQuestions);

  // 2. Acak urutan opsi untuk soal pilihan ganda / matching
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
}

// Variables Canvas Pilihan Ganda
let drawnPoints = [];
const drawCanvas = document.getElementById("draw-canvas");
const ctxDraw = drawCanvas.getContext("2d");
let isDrawing = false;

// Variables Canvas Mencocokkan Garis
const matchCanvas = document.getElementById("match-canvas");
const ctxMatch = matchCanvas.getContext("2d");
let activeLeftId = null;
let userLines = {};
let startPoint = null;
let currentDragPoint = null;

function loadQuestion() {
  isAnswered = false;
  drawnPoints = [];
  userLines = {};
  activeLeftId = null;
  startPoint = null;
  currentDragPoint = null;
  
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("result-screen").classList.add("hidden");

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
    instructionText.innerText = "💡 Lingkari jawaban dengan jarimu!";

    const container = document.getElementById("options-container");
    container.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const div = document.createElement("div");
      div.className = "option-box";
      div.dataset.index = idx;
      div.innerText = opt;
      container.appendChild(div);
    });

    setTimeout(resizeDrawCanvas, 50);
  } else if (q.type === "matching") {
    canvasContainer.classList.add("hidden");
    matchingContainer.classList.remove("hidden");
    instructionText.innerText = "💡 Tarik garis dari kiri ke kanan untuk mencocokkan!";

    setupMatchingBoard(q);
    setTimeout(resizeMatchCanvas, 50);
  }

  document.getElementById("prev-btn").disabled = (currentIdx === 0);
}

// ================= PILIHAN GANDA (MELINGKARI) =================
function resizeDrawCanvas() {
  const container = document.getElementById("canvas-container");
  drawCanvas.width = container.offsetWidth;
  drawCanvas.height = container.offsetHeight;
  ctxDraw.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
}

drawCanvas.addEventListener("pointerdown", (e) => {
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
});

drawCanvas.addEventListener("pointermove", (e) => {
  if (!isDrawing || isAnswered) return;
  const rect = drawCanvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  drawnPoints.push({ x, y });
  ctxDraw.lineTo(x, y);
  ctxDraw.stroke();
});

drawCanvas.addEventListener("pointerup", () => {
  if (!isDrawing || isAnswered) return;
  isDrawing = false;
  evaluateMultipleChoice();
});

function evaluateMultipleChoice() {
  if (drawnPoints.length < 5) return;

  const boxes = document.querySelectorAll(".option-box");
  const canvasRect = drawCanvas.getBoundingClientRect();

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

      setTimeout(() => { nextQuestion(); }, 1000);
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
    div.innerHTML = `<span style="font-size:20px;">${item.content}</span>`;
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
  const container = document.getElementById("matching-container");
  matchCanvas.width = container.offsetWidth;
  matchCanvas.height = container.offsetHeight;
  redrawMatchLines();
}

matchCanvas.addEventListener("pointerdown", (e) => {
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
});

matchCanvas.addEventListener("pointermove", (e) => {
  if (!activeLeftId || isAnswered) return;
  const rect = matchCanvas.getBoundingClientRect();
  currentDragPoint = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  redrawMatchLines();
});

matchCanvas.addEventListener("pointerup", (e) => {
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
});

function redrawMatchLines() {
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

    setTimeout(() => { nextQuestion(); }, 1200);
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
  initQuizData(); // Acak ulang soal saat kuis diulang
  loadQuestion();
}

window.onload = () => {
  initQuizData(); // Acak soal saat website pertama kali dibuka
  loadQuestion();
};

window.onresize = () => {
  if (questions[currentIdx].type === "multiple-choice") resizeDrawCanvas();
  else if (questions[currentIdx].type === "matching") resizeMatchCanvas();
};