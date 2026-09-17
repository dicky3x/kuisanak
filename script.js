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
  // ================= 1. MANDARIN GMEC (LENGKAP DARI PDF MID TEST) =================
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
  { type: "multiple-choice", subject: "Mandarin", text: "16. (Isian B.1) Aksara Hanzi dari kata 'Bulan' (Moon) adalah...", options: ["月 (yuè)", "日 (rì)", "水 (shuǐ)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "17. (Isian B.2) Aksara Hanzi dari angka 'Lima' (Five) adalah...", options: ["五 (wǔ)", "三 (sān)", "七 (qī)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "18. (Isian B.3) Aksara Hanzi dari kata 'Tidak' (No / Not) adalah...", options: ["不 (bù)", "去 (qù)", "有 (yǒu)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "19. (Isian B.4) Aksara Hanzi dari angka 'Tujuh' (Seven) adalah...", options: ["七 (qī)", "九 (jiǔ)", "六 (liù)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "20. (Isian B.5) Aksara Hanzi dari kata 'Pergi' (Go) adalah...", options: ["去 (qù)", "来 (lái)", "看 (kàn)"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "21. (Isian C.1) Arti dari kata Bahasa Mandarin '昨天' adalah...", options: ["Kemarin", "Hari ini", "Besok"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "22. (Isian C.2) Arti dari kata Bahasa Mandarin '今天' adalah...", options: ["Hari ini", "Kemarin", "Besok"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "23. (Isian C.3) Arti dari kata Bahasa Mandarin '明天' adalah...", options: ["Besok", "Hari ini", "Lusa"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "24. (Isian C.4) Arti dari kata '星期一' (Xīngqī yī) adalah...", options: ["Hari Senin", "Hari Selasa", "Hari Minggu"], correct: 0 },
  { type: "multiple-choice", subject: "Mandarin", text: "25. (Isian C.5) Arti dari kata '谢谢' (Xièxie) adalah...", options: ["Terima kasih", "Sama-sama", "Maaf"], correct: 0 },
  { 
    type: "matching", subject: "Mandarin", text: "26. (Bagian D) Pasangkan sebutan sapaan silsilah keluarga Mandarin berikut!",
    left: [{ id: "z1", content: "👨‍🦳 Ayah dari Ayah" }, { id: "z2", content: "👵 Ibu dari Ayah" }, { id: "z3", content: "👨‍🦲 Ayah dari Ibu" }],
    right: [{ id: "r1", content: "Nǎi nai (奶奶)" }, { id: "r2", content: "Yé ye (爷爷)" }, { id: "r3", content: "Wài gōng (外公)" }],
    pairs: { z1: "r2", z2: "r1", z3: "r3" }
  },

  // ================= 2. ENGLISH GMEC (LENGKAP DARI PDF REVIEW MID TEST) =================
  { type: "multiple-choice", subject: "English", text: "1. Look at the letters: A - B - C - D - ... What letter comes next?", options: ["E", "F", "G"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "2. You want to draw a straight line. What object do you need?", options: ["Ruler", "Pencilcase", "Eraser"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "3. Complete the sentence: 'This is Sofia. The doll is ______.'", options: ["small and pretty", "big and long", "red and big"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "4. Read the dialogue: Teacher: 'What is your name?' - Boy: 'My name is Rian.' The boy's name is...", options: ["Rian", "Ben", "Dino"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "5. Look at the picture of a beach ball and a car. Which toy is small?", options: ["The car", "The beach ball", "Both toys"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "6. Look at the letters: M - N - O - P - ... Write the next letters.", options: ["Q and R", "R and S", "S and T"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "7. Complete the sentence: 'This is Rafi. This is ______ bag.'", options: ["his", "her", "my"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "8. A child says: 'I want a small toy with a rectangle shape.' (Ball=circle/small, Kite=triangle/big, Car=rectangle/big, Train=rectangle/small). Which toy is it?", options: ["Train", "Car", "Kite"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "9. Write the missing word: The teacher says 'Please ______ your book.'", options: ["open / close", "fly", "write"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "10. A child says: 'I want the big toy that can fly.' Which toy does the child want?", options: ["Kite", "Ball", "Doll"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "11. Name three classroom objects in your class:", options: ["Pencil, Rubber, Desk", "Dog, Cat, Bird", "Apple, Banana, Mango"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "12. Which pair of words has the short /a/ sound?", options: ["Bag and Rat", "Bed and Red", "Pin and Bin"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "13. Anna says to Lily: 'This is Ben.' Anna's friend is...", options: ["Ben", "Rafi", "Dino"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "14. Complete the sentence: 'This is Dino. This is ______ car.'", options: ["his", "her", "your"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "15. What shape is a kite toy?", options: ["Triangle / Diamond", "Circle", "Square"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "16. Mia says: 'I want a toy that is long.' Mia wants the...", options: ["Train", "Ball", "Doll"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "17. Read the dialogue: Lina: 'What are these?' - Tom: 'These are a ruler and a ball.' Which is the classroom object?", options: ["A ruler", "A ball", "A doll"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "18. Complete the missing letter: Bl_ck c_t", options: ["a", "e", "u"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "19. Which sentence describes a monster correctly?", options: ["It has big eyes and a big mouth.", "It is a small cat.", "It can fly in the sky."], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "20. Mia: 'My toy is small.' - Jake: 'My toy can fly.' Who has the toy that can fly?", options: ["Jake", "Mia", "Lina"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "21. Write two things in your bag:", options: ["Book and Pencilcase", "Chair and Table", "Ruler and Window"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "22. Look at the sequence in reverse: P - O - N - M. What are the next two letters?", options: ["L and K", "K and J", "Q and R"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "23. Adam plays with a round toy. What toy does Adam play with?", options: ["A ball", "A kite", "A car"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "24. Lucy: 'My train is short.' - Ben: 'My ball is round.' The round toy belongs to...", options: ["Ben", "Lucy", "Mia"], correct: 0 },
  { type: "multiple-choice", subject: "English", text: "25. (Complex HOTS) A child says: 'I want a toy. It has two wings. It can fly.' Which toy is it?", options: ["Plane", "Train", "Doll"], correct: 0 },

  // ================= 3. SCIENCE GMEC (LENGKAP DARI PDF REVIEW MID TEST) =================
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
  { type: "multiple-choice", subject: "Science", text: "11. To keep our teeth clean, we should...", options: ["brush our teeth", "wash our hands", "clean our ears"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "12. Compare Eggs and Doughnuts. Which statement is correct?", options: ["Eggs help us grow & build muscle", "Doughnuts are rich in vitamins", "Doughnuts build muscle"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "13. What does 'staying safe' mean?", options: ["Protecting ourselves from harm or danger", "Eating only fruits", "Brushing teeth"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "14. You see a hot stove in the kitchen. What is the safest action?", options: ["Don't play with or touch it", "Touch it quickly", "Put an object into it"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "15. What happens if you talk while eating food?", options: ["You might choke on your food", "Your teeth grow faster", "You gain energy"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "16. Which of these is a living thing?", options: ["Cat", "Rock", "Toy car"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "17. Living things need ______ to breathe.", options: ["air", "food", "water"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "18. Which of these do living things need to stay alive?", options: ["Food, air, and water", "Toys and clothes", "Colors and shapes"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "19. A plastic doll does not eat food because it is a...", options: ["non-living thing", "living thing", "germ"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "20. What happens to a living thing at the end of its life?", options: ["It dies", "It grows forever", "It turns into air"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "21. Which of the following can living things do?", options: ["Grow, change, and have young", "Stay the same forever", "Never move"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "22. Which of these are non-living things?", options: ["A pencil and a wooden chair", "A puppy and a tree", "A cat and a baby"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "23. What makes a cat different from a stone?", options: ["A cat needs food for energy & can grow", "A stone can have babies", "A stone breathes air"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "24. Which living thing and non-living thing are grouped correctly?", options: ["Tree (Living) & Car (Non-living)", "Chair (Living) & Cloud (Non-living)", "Teddy Bear (Living) & Lion (Non-living)"], correct: 0 },
  { type: "multiple-choice", subject: "Science", text: "25. Which event shows a living thing growing and changing?", options: ["A green bean becoming a small plant", "A rock breaking into smaller stones", "A toy car moving"], correct: 0 },

  // ================= 4. MATH GMEC (LENGKAP DARI PDF REVIEW MID TEST) =================
  { type: "multiple-choice", subject: "Math", text: "1. How many books are there? (Count 5 books)", options: ["5", "4", "6"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "2. Look at 5 trees and 6 flowers. There are ______ trees than flowers.", options: ["fewer", "more", "same"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "3. What number comes next in this pattern? 2, 4, 6, ...", options: ["8", "7", "10"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "4. Which number bond equals 8?", options: ["5 + 3 = 8 and 2 + 6 = 8", "7 - 1 = 8", "4 + 3 = 8"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "5. Fill in the blank: ___ + 4 = 7", options: ["3", "4", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "6. Mom bought 3 lamps. She bought 4 more. How many lamps does she have now?", options: ["7", "6", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "7. What is 8 - 2?", options: ["6", "7", "5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "8. Make an addition equation using numbers {2, 3, 5, 10}:", options: ["2 + 3 = 5 or 3 + 5 = 8", "2 + 5 = 10", "5 + 10 = 12"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "9. There are 7 birds on a tree. 2 birds fly away. How many birds are left?", options: ["5", "6", "7"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "10. Which subtraction equations are correct?", options: ["7 - 6 = 1 and 5 - 3 = 2", "9 - 4 = 4", "8 - 2 = 5"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "11. (Short B.1) Count 7 stars:", options: ["7", "6", "8"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "12. (Short B.2) Fill in the blank: 3 + ___ = 9", options: ["6", "5", "7"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "13. (Short B.3) There are 8 mangoes. Haikal takes some. There are 3 left. How many mangoes did Haikal take?", options: ["5", "4", "6"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "14. (Short B.4) What is 5 + 2?", options: ["7", "6", "8"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "15. (Short B.5) Complete the pattern: 1, 3, 5, 7, ___", options: ["9", "8", "10"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "16. (Essay C.1) 4 turtles + 3 turtles. How many turtles altogether?", options: ["4 + 3 = 7 turtles", "4 + 2 = 6 turtles", "5 + 3 = 8 turtles"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "17. (Essay C.2) Show different ways to make 7:", options: ["5 + 2 and 6 + 1", "4 + 4", "3 + 3"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "18. (Essay C.5) Count on to subtract: 9 - 6 = ...", options: ["3", "4", "2"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "19. (HOTS D.2) Mary has 10 coins. 4 are outside. How many coins are hidden under the cup?", options: ["6", "5", "4"], correct: 0 },
  { type: "multiple-choice", subject: "Math", text: "20. (HOTS D.3) Fill in: 1 more than 5 is ___, and 2 less than 9 is ___.", options: ["6 and 7", "5 and 8", "7 and 6"], correct: 0 },

  // ================= 5. PENDIDIKAN PANCASILA GMEC (LENGKAP DARI PDF) =================
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "1. Bunyi sila yang dilambangkan oleh Bintang Emas adalah...", options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kemanusiaan yang Adil dan Beradab"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "2. Nama burung yang menjadi lambang negara Indonesia adalah...", options: ["burung garuda", "burung elang", "burung merpati"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "3. Rina selesai bermain lalu menyimpan sepatunya di rak. Kegiatan Rina contoh...", options: ["aturan di rumah", "aturan di sekolah", "aturan bermain"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "4. Contoh mematuhi aturan di sekolah adalah...", options: ["Mendengarkan penjelasan guru", "Datang terlambat", "Membuang sampah di lantai"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "5. Yang termasuk identitas diri Siti (rambut panjang, hobi membaca) adalah...", options: ["Nama, ciri fisik, dan hobi", "Nama sekolah & kendaraan", "Nama makanan"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "6. Andi berambut lurus, Beni berambut keriting. Perbedaan tersebut merupakan keragaman...", options: ["bentuk rambut / ciri fisik", "makanan kesukaan", "hobi"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "7. Dita hobi menggambar, Rani hobi bermain bola. Sikap yang tepat adalah...", options: ["menghargai hobi Rani", "mengejek hobi Rani", "memaksa Rani menggambar"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "8. Pasangan simbol dan sila Pancasila yang benar adalah...", options: ["Bintang (Sila 1), Rantai (Sila 2), Beringin (Sila 3)", "Kepala Banteng (Sila 1)", "Pohon Beringin (Sila 5)"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "9. Mandi pagi/sore, merapikan tempat tidur, dan membantu orang tua contoh mematuhi...", options: ["aturan di rumah", "aturan di sekolah", "aturan di jalan"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "10. Bermain dengan semua teman dan menghargai perbedaan menunjukkan...", options: ["menghargai keragaman", "merendahkan teman", "sikap sombong"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "11. (Isian B.1) Lambang bintang merupakan simbol Pancasila sila ke-...", options: ["1 (satu)", "2 (dua)", "3 (tiga)"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "12. (Isian B.2) Salah satu contoh aturan di rumah adalah...", options: ["merapikan tempat tidur / pamit orang tua", "datang terlambat", "mencoret tembok"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "13. (Isian B.4) Rina berambut lurus, Sinta berambut keriting. Ini merupakan keragaman...", options: ["ciri fisik / bentuk rambut", "hobi", "agama"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "14. (Essay C.2) Mengapa kita harus menaati aturan di sekolah?", options: ["Agar suasana belajar menjadi tertib, aman, dan nyaman", "Agar guru marah", "Agar cepat pulang"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "15. (Essay C.4) Apa manfaat menghargai perbedaan antar teman?", options: ["Ciptakan kerukunan dan persatuan", "Bisa bertengkar", "Mendapat hadiah uang"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "16. (HOTS D.1) Rina membantu teman yang jatuh. Apakah sikap Rina baik? Mengapa?", options: ["Baik, karena membantu teman adalah sikap peduli & toleransi", "Tidak baik", "Biasa saja"], correct: 0 },
  { type: "multiple-choice", subject: "Pendidikan Pancasila", text: "17. (HOTS D.2) Dodi membuang sampah di lantai. Apa yang akan terjadi?", options: ["Kelas menjadi kotor, bau, dan bisa bikin terpeleset", "Kelas jadi bersih", "Guru merasa senang"], correct: 0 },

  // ================= 6. BUMI MELAYU RIAU GMEC (LENGKAP DARI PDF) =================
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "1. Sapaan untuk saudara yang bertubuh pendek dalam Melayu adalah...", options: ["Uneng", "Utih", "Andak"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "2. 'Emak' adalah sapaan Melayu untuk...", options: ["orang tua perempuan", "anak pertama", "orang tua laki-laki"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "3. Sarianun adalah nama anak gadis dalam cerita dongeng Melayu...", options: ["Rawang Tengkuluk", "Malin Kundang", "Kancil dan Harimau"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "4. Sapaan dilakukan sebagai rasa...", options: ["sayang dan hormat", "tidak suka", "benci"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "5. Sapaan kepada orang tua laki-laki dalam budaya Melayu adalah...", options: ["Ayah atau Abah", "Angah", "Ucu"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "6. Pada zaman dahulu, dongeng dibawakan sebagai pengantar...", options: ["tidur", "nyanyian", "puisi"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "7. 'Udo' adalah sapaan untuk anak yang lahir ke-...", options: ["tiga", "dua", "empat"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "8. 'Alang' adalah sapaan untuk anak yang lahir ke-...", options: ["empat", "dua", "tiga"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "9. Biasanya cerita dongeng mengisahkan peristiwa pada masa...", options: ["lalu / silam", "sekarang", "depan"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "10. (Isian B.1) 'Ulung' atau 'Long' adalah sapaan untuk anak yang lahir ke-...", options: ["satu (pertama)", "dua", "tiga"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "11. (Isian B.2) Dongeng adalah cerita yang bersifat...", options: ["khayalan / fiktif", "nyata", "sejarah resmi"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "12. (Isian B.3) Rawang Tengkuluk merupakan dongeng dari daerah...", options: ["Riau", "Jawa", "Sumatra Barat"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "13. (Isian B.5) Sapaan untuk saudara yang berkulit kuning langsat adalah...", options: ["Kuning / Akuning", "Utih", "Udo"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "14. (Essay C.1) Tuliskan urutan sapaan anak ke-1 hingga ke-3!", options: ["1: Ulung, 2: Ngah/Angah, 3: Cik/Alang", "1: Ucu, 2: Udo", "1: Long, 2: Udo"], correct: 0 },
  { type: "multiple-choice", subject: "Bumi Melayu Riau (BMR)", text: "15. (Essay C.5) Keluarga inti terdiri dari...", options: ["Ayah, Ibu, dan Anak", "Kakek, Nenek, Paman", "Ayah dan Tetangga"], correct: 0 },
  { 
    type: "matching", subject: "Bumi Melayu Riau (BMR)", text: "16. (HOTS) Pasangkan sapaan Melayu berikut dengan artinya yang tepat!",
    left: [{ id: "bmr1", content: "Udo" }, { id: "bmr2", content: "Utih" }, { id: "bmr3", content: "Anjang" }],
    right: [{ id: "r1", content: "Anak berkulit putih" }, { id: "r2", content: "Anak lahir ke-4" }, { id: "r3", content: "Anak bertubuh panjang/tinggi" }],
    pairs: { bmr1: "r2", bmr2: "r1", bmr3: "r3" }
  },

  // ================= 7. MORALE GMEC (LENGKAP DARI PDF) =================
  { type: "multiple-choice", subject: "Morale", text: "1. Ucapan 'Selamat pagi, Ayah, Ibu' menunjukkan sikap hormat berupa...", options: ["Mengucapkan salam & menyapa ramah", "Membantu pekerjaan rumah", "Memberi sesuatu"], correct: 0 },
  { type: "multiple-choice", subject: "Morale", text: "2. Ucapan 'Ayah, bolehkah saya...' merupakan contoh sikap...", options: ["Berbicara sopan kepada orang tua", "Mendengar nasihat", "Membantu pekerjaan rumah"], correct: 0 },
  { type: "multiple-choice", subject: "Morale", text: "3. Mendengarkan arahan orang tua saat dinasihati merupakan ciri anak yang...", options: ["Hormat dan berbakti", "Sombong", "Nakal"], correct: 0 },
  { type: "multiple-choice", subject: "Morale", text: "4. Membantu pekerjaan Ibu di rumah dengan ikhlas merupakan contoh...", options: ["Sikap berbakti kepada orang tua", "Sikap terpaksa", "Aturan sekolah"], correct: 0 },
  { 
    type: "matching", subject: "Morale", text: "5. Pasangkan ucapan/tindakan dengan sikap hormat yang sesuai!",
    left: [{ id: "m1", content: "🗣️ 'Ayah, bolehkah saya...'" }, { id: "m2", content: "☀️ 'Selamat pagi, Ayah, Ibu'" }],
    right: [{ id: "r1", content: "Mengucapkan salam ramah" }, { id: "r2", content: "Berbicara dengan sopan" }],
    pairs: { m1: "r2", m2: "r1" }
  },

  // ================= 8. BAHASA INDONESIA GMEC (LENGKAP DARI PDF ST1 & MID) =================
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "1. Sikap duduk yang benar saat membaca adalah posisi badan harus...", options: ["Tegak dan lurus", "Bungkuk", "Berbaring"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "2. Huruf vokal pada kata 'buku' adalah...", options: ["u", "b", "k"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "3. Kata yang diawali suku kata ba- adalah...", options: ["batu", "bola", "bebek"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "4. Cara memegang pensil yang benar adalah dijepit di antara...", options: ["Ibu jari, telunjuk, dan jari tengah", "Genggaman telapak tangan", "Jari kelingking"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "5. Huruf konsonan pada kata 'mata' adalah...", options: ["m dan t", "a", "a dan t"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "6. Kata yang diawali dengan suku kata bu- adalah...", options: ["buku", "balon", "baju"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "7. Tanda baca yang tepat untuk melengkapi kalimat 'Siapa namamu' adalah...", options: ["Tanda tanya (?)", "Tanda seru (!)", "Tanda titik (.)"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "8. Beni memiliki dua ekor kucing bernama Mimi dan Memo. Siapa nama kucing Beni?", options: ["Mimi dan Memo", "Beni dan Mimi", "Beni"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "9. Hewan yang tubuhnya panjang, lunak, tanpa kaki, hidup di tanah lembap, diawali huruf 'c' adalah...", options: ["cacing", "cicak", "capung"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "10. Tanda baca yang tepat untuk kalimat 'Ayo berolahraga' adalah...", options: ["Tanda seru (!)", "Tanda tanya (?)", "Tanda titik (.)"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "11. Dua benda yang diawali suku kata ba- adalah...", options: ["Baju dan balon", "Buku dan bulan", "Bebek dan becak"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "12. 'Hidung' dan 'Hiu' adalah kata yang diawali suku kata...", options: ["hi-", "ha-", "ho-"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "13. Huruf vokal pada kata 'lemari' adalah...", options: ["e, a, dan i", "l, m, dan r", "e, m, dan i"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "14. Tokoh yang membantu menyiapkan sarapan pada cerita Nisa adalah...", options: ["Nisa, Ibu, dan Kakak", "Nisa dan Ayah", "Beni"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "15. Cara membaca yang benar berdasarkan cerita Alya adalah...", options: ["Duduk tegak, pencahayaan cukup, & jaga jarak mata", "Berbaring di tempat gelap", "Membaca dekat wajah"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "16. Bisma ingin mengetahui alamat rumah temannya. Kalimat tanya yang tepat adalah...", options: ["Di mana alamat rumahmu?", "Siapa namamu?", "Bagaimana kabarmu?"], correct: 0 },
  { type: "multiple-choice", subject: "Bahasa Indonesia", text: "17. Urutan gambar berseri (1. Menyisir, 2. Berpakaian, 3. Mandi, 4. Bangun tidur) adalah...", options: ["4 - 3 - 2 - 1", "1 - 2 - 3 - 4", "3 - 4 - 1 - 2"], correct: 0 },
  { 
    type: "matching", subject: "Bahasa Indonesia", text: "18. Pasangkan gambar benda dengan suku kata awal yang tepat!",
    left: [{ id: "b1", content: "🎈 Balon" }, { id: "b2", content: "🏫 Gedung" }, { id: "b3", content: "🦈 Hiu" }],
    right: [{ id: "r1", content: "ho" }, { id: "r2", content: "ba" }, { id: "r3", content: "hi" }],
    pairs: { b1: "r2", b2: "r1", b3: "r3" }
  },

  // ================= 9. AGAMA ISLAM GMEC (LENGKAP DARI PDF) =================
  { type: "multiple-choice", subject: "Agama Islam", text: "1. Iman kepada hari akhir merupakan rukun Iman ke-...", options: ["5", "6", "3"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "2. Sebelum makan kita membaca...", options: ["Bismillah / Basmalah", "Hamdalah", "Dongeng"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "3. Yang BUKAN merupakan rukun iman adalah beriman kepada...", options: ["Hewan dan tumbuhan", "Rasul", "Hari akhir"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "4. Al-Qur'an merupakan kitab suci umat...", options: ["Islam", "Kristen", "Buddha"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "5. Kita membaca Bismillah saat...", options: ["Sebelum makan & memulai kegiatan", "Saat marah", "Saat tidur siang"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "6. Rukun Iman pertama ialah beriman kepada...", options: ["Allah SWT", "Malaikat", "Rasul"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "7. Bacaan Hamdalah (Alhamdulillah) diucapkan ketika...", options: ["Mendapat hadiah / bersyukur nikmat Allah", "Keluar toilet", "Saat hendak tidur"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "8. Sikap yang SALAH terhadap Al-Qur'an adalah...", options: ["Meletakkan sembarangan", "Membacanya dengan baik", "Menjaganya dengan baik"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "9. Nikmat yang kita terima adalah pemberian dari...", options: ["Allah SWT", "Manusia", "Malaikat"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "10. Rukun Iman keempat ialah beriman kepada...", options: ["Rasul-rasul Allah", "Kitab Suci", "Hari Kiamat"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "11. Arti dari 'Alhamdulillahi Rabbil 'Alamin' adalah...", options: ["Segala puji bagi Allah Tuhan semesta alam", "Dengan menyebut nama Allah", "Allah Maha Besar"], correct: 0 },
  { type: "multiple-choice", subject: "Agama Islam", text: "12. Mengapa kita harus beriman kepada malaikat-malaikat Allah?", options: ["Karena beriman kepada malaikat ada di dalam rukun Iman", "Karena malaikat terlihat", "Karena malaikat menciptakan bumi"], correct: 0 },
  { 
    type: "matching", subject: "Agama Islam", text: "13. Pasangkan Rukun Iman berikut dengan urutannya yang tepat!",
    left: [{ id: "ai1", content: "Iman kepada Allah SWT" }, { id: "ai2", content: "Iman kepada Rasul" }, { id: "ai3", content: "Iman kepada Takdir" }],
    right: [{ id: "r1", content: "Urutan Ke-4" }, { id: "r2", content: "Urutan Ke-1" }, { id: "r3", content: "Urutan Ke-6" }],
    pairs: { ai1: "r2", ai2: "r1", ai3: "r3" }
  }
];

// NAVIGASI DARI HALAMAN UTAMA
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

  // TAMPILKAN SELURUH SOAL TANPA DIPOTONG
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

// KUIS ENGINE & CANVAS
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

// INIT DOM
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