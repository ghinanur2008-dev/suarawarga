/* ================= REGISTER PWA (SERVICE WORKER) ================= */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('PWA Service Worker Berhasil Didaftarkan!', reg))
            .catch(err => console.log('PWA Gagal Didaftarkan:', err));
    });
}

/* ================= DATABASE LENGKAP LEMBAGA RESMI ================= */
const database = {
    bansos: {
        title: "Panduan Bantuan Sosial (Kemensos)",
        questions: [
            { q: "Syarat utama daftar BPNT dan PKH?", a: ["Siapkan e-KTP dan Kartu Keluarga asli yang sudah padan dengan Dukcapil.", "Minta Surat Keterangan Tidak Mampu (SKTM) dari Kelurahan/Desa setempat.", "Lakukan pendaftaran ke DTKS (Data Terpadu Kesejahteraan Sosial) melalui aparat desa."] },
            { q: "Cara cek penerima Bansos online resmi?", a: ["Buka website resmi cekbansos.kemensos.go.id melalui browser.", "Pilih Provinsi, Kabupaten/Kota, Kecamatan, dan Desa sesuai KTP.", "Masukkan nama lengkap dan kode captcha, lalu klik Cari Data."] },
            { q: "Langkah jika Bansos tiba-tiba berhenti?", a: ["Pastikan NIK KTP Anda masih aktif dan tidak ganda di Disdukcapil.", "Laporkan ke Pendamping PKH atau aparat desa untuk pengusulan ulang musyawarah desa.", "Gunakan fitur Sanggah di aplikasi Cek Bansos Kemensos."] },
            { q: "Bagaimana jika Kartu Keluarga Sejahtera (KKS) hilang?", a: ["Minta surat keterangan kehilangan dari kepolisian setempat.", "Bawa surat kehilangan, KTP, dan KK ke Bank Himbara penyalur (BRI/BNI/Mandiri).", "Bank akan mencetak ulang kartu KKS Anda tanpa biaya."] },
            { q: "Apakah pencairan Bansos ada potongan?", a: ["Seluruh program Bansos dari pemerintah disalurkan 100% tanpa potongan.", "Jika ada oknum yang meminta jatah, kumpulkan bukti berupa foto atau rekaman.", "Laporkan segera ke nomor call center Kemensos 171."] }
        ]
    },
    kesehatan: {
        title: "Layanan Kesehatan (BPJS & Kemenkes)",
        questions: [
            { q: "Cara daftar BPJS Mandiri via HP?", a: ["Unduh aplikasi Mobile JKN resmi dari BPJS Kesehatan di PlayStore/AppStore.", "Siapkan NIK KTP, Kartu Keluarga, nomor HP aktif, dan buku rekening.", "Pilih menu Daftar Peserta Baru dan ikuti instruksi hingga selesai."] },
            { q: "Aturan rawat inap menggunakan BPJS?", a: ["Kondisi darurat: Langsung ke UGD rumah sakit terdekat tanpa rujukan.", "Kondisi tidak darurat: Wajib periksa dulu di Faskes Tingkat 1 (Puskesmas/Klinik).", "Jika dokter Faskes 1 menilai perlu rawat inap, Anda akan diberi surat rujukan ke Rumah Sakit."] },
            { q: "Apakah cabut gigi & kacamata ditanggung BPJS?", a: ["Tindakan cabut gigi dasar dan penambalan sepenuhnya ditanggung BPJS di Faskes 1.", "Untuk kacamata, BPJS memberikan subsidi dana dengan jumlah sesuai kelas kepesertaan.", "Kacamata harus ditebus di optik yang telah bekerja sama dengan BPJS Kesehatan."] },
            { q: "Cara pindah faskes/puskesmas secara online?", a: ["Buka aplikasi Mobile JKN, lalu login dengan NIK Anda.", "Pilih menu Perubahan Data Peserta.", "Klik bagian Fasilitas Kesehatan Tingkat 1, pilih faskes baru, dan perubahan akan aktif di bulan berikutnya."] }
        ]
    },
    bencana: {
        title: "Lapor & Tanggap Bencana (BPBD)",
        questions: [
            { q: "Nomor darurat saat terjadi bencana alam?", a: ["Hubungi Call Center Terpadu 112 (Bebas Pulsa dari operator mana pun).", "Hubungi Badan SAR Nasional di nomor 115 untuk evakuasi penyelamatan.", "Hubungi Pemadam Kebakaran di nomor 113."] },
            { q: "Prosedur evakuasi saat gempa bumi?", a: ["Jangan panik, lindungi kepala dan tengkuk Anda menggunakan tas atau tangan.", "Berlindung di bawah meja yang kokoh hingga guncangan mereda.", "Setelah reda, segera keluar melalui tangga darurat (jangan gunakan lift) menuju titik kumpul terbuka."] },
            { q: "Cara meminta bantuan air bersih saat kemarau?", a: ["Ketua RT/RW setempat harus mendata jumlah warga yang terdampak.", "Ajukan surat permohonan resmi bantuan air bersih ke kantor BPBD tingkat Kabupaten/Kota.", "Truk tangki air dari BPBD atau PDAM akan dikirimkan berdasarkan jadwal antrean."] }
        ]
    },
    administrasi: {
        title: "Administrasi Dukcapil",
        questions: [
            { q: "Langkah mengurus e-KTP yang hilang/rusak?", a: ["Minta surat keterangan kehilangan dari kantor polisi terdekat (jika hilang).", "Bawa fotokopi Kartu Keluarga dan surat kehilangan ke kantor Dukcapil atau Kecamatan.", "Proses pencetakan ulang KTP tidak memerlukan rekam sidik jari dan foto ulang, kecuali ada perubahan data."] },
            { q: "Syarat membuat Akta Kelahiran Anak?", a: ["Surat Keterangan Lahir asli dari Bidan, Rumah Sakit, atau Puskesmas.", "Fotokopi Buku Nikah atau Kutipan Akta Perkawinan orang tua.", "Fotokopi e-KTP kedua orang tua dan Kartu Keluarga asli untuk dimasukkan nama anak."] },
            { q: "Apakah pembuatan KTP dan KK dipungut biaya?", a: ["Berdasarkan UU No. 24 Tahun 2013, seluruh kepengurusan dokumen kependudukan adalah GRATIS.", "Dilarang keras menggunakan jasa calo yang meminta bayaran.", "Jika ada petugas yang memungut biaya, laporkan ke Saber Pungli."] }
        ]
    },
    pendidikan: {
        title: "Bantuan Pendidikan (Kemdikbud)",
        questions: [
            { q: "Cara mendaftar KIP Kuliah?", a: ["Pendaftaran dilakukan secara mandiri di situs resmi kip-kuliah.kemdikbud.go.id.", "Siapkan NIK, NISN, NPSN, dan alamat email yang masih aktif.", "Lengkapi berkas pendaftaran ekonomi keluarga dan pilih jalur seleksi masuk perguruan tinggi."] },
            { q: "Syarat pencairan dana PIP Tingkat Sekolah?", a: ["Pastikan nama anak tercantum dalam SK Pemberian PIP yang diterbitkan Puslapdik.", "Bawa Surat Keterangan Pencairan PIP dari Kepala Sekolah.", "Bawa KTP orang tua, Kartu Keluarga, dan Buku Tabungan SimPel ke bank penyalur (BRI/BNI/BSI)."] },
            { q: "Solusi jika nama siswa tidak masuk nominasi PIP?", a: ["Laporkan ke pihak sekolah agar operator memperbarui status ekonomi keluarga di sistem Dapodik.", "Pastikan penghasilan kotor gabungan orang tua tidak melebihi syarat batas maksimal.", "Pengusulan akan diproses ulang oleh Dinas Pendidikan pada tahap sinkronisasi berikutnya."] }
        ]
    },
    pengaduan: {
        title: "Pengaduan SP4N-LAPOR!",
        questions: [
            { q: "Cara melapor jalan rusak atau lampu mati?", a: ["Kunjungi website www.lapor.go.id atau unduh aplikasi SP4N-LAPOR.", "Ketikkan aduan dengan jelas, sertakan nama jalan, desa, dan patokan lokasi.", "Unggah bukti foto kerusakan, lalu pilih opsi 'Kirim sebagai Anonim' jika ingin identitas dirahasiakan."] },
            { q: "Melaporkan dugaan korupsi proyek desa?", a: ["Kumpulkan bukti awal berupa dokumen, foto proyek mangkrak, atau RAB jika ada.", "Gunakan fitur aduan KPK di situs JAGA.ID atau laporkan ke Inspektorat Daerah.", "Pastikan Anda tidak menyebarkan tuduhan di media sosial agar tidak terkena UU ITE sebelum terbukti."] },
            { q: "Cara lapor pungutan liar (Pungli) layanan publik?", a: ["Catat waktu, lokasi, dan nama oknum petugas yang meminta biaya di luar ketentuan.", "Laporkan segera ke Satgas Saber Pungli melalui call center 193.", "Atau kirimkan laporan via SMS ke nomor 1193."] }
        ]
    }
};

/* ================= TRANSISI HALAMAN ================= */
function masukAplikasi() {
    document.getElementById('landingPage').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('landingPage').style.display = 'none';
        const mainApp = document.getElementById('mainApp');
        mainApp.style.display = 'block';
        mainApp.style.animation = 'fadeIn 0.5s ease-in';
    }, 300);
}

/* ================= MODAL & PERTANYAAN ================= */
let currentCategory = '';
let showingAllQuestions = false;

function openModal(categoryKey) {
    if(!database[categoryKey]) return;
    currentCategory = categoryKey;
    showingAllQuestions = false;
    document.getElementById('modalTitle').innerText = database[categoryKey].title;
    renderQuestions();
    document.getElementById('blurOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('blurOverlay').classList.remove('active');
}

function renderQuestions() {
    const listDiv = document.getElementById('questionList');
    const btnMore = document.getElementById('btnMore');
    listDiv.innerHTML = '';
    
    const allQuestions = database[currentCategory].questions;
    const limit = showingAllQuestions ? allQuestions.length : 4;

    for(let i = 0; i < limit; i++) {
        if(allQuestions[i]) {
            const btn = document.createElement('button');
            btn.className = 'question-btn';
            btn.innerText = allQuestions[i].q;
            btn.onclick = () => startExplanation(allQuestions[i].q, allQuestions[i].a);
            listDiv.appendChild(btn);
        }
    }

    if(allQuestions.length <= 4 || showingAllQuestions) {
        btnMore.style.display = 'none';
    } else {
        btnMore.style.display = 'block';
    }
}

function showMoreQuestions() {
    showingAllQuestions = true;
    renderQuestions();
}

/* ================= YOUTUBE API & KONTROL DURASI ABSOLUT ================= */
let player;
let isPlaying = false;
const synth = window.speechSynthesis;
let aiVoice;

let availableVoices = [];
function populateVoiceList() {
    availableVoices = synth.getVoices();
}
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        videoId: 'vU7GjUDmFGc', // Link video YouTube baru
        playerVars: { 
            'controls': 0, 'disablekb': 1, 'rel': 0, 'modestbranding': 1, 'showinfo': 0,
            'iv_load_policy': 3, 'cc_load_policy': 0, 'fs': 0, 'playsinline': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// LOGIKA 1: Jika video habis tapi suara AI masih berlanjut, ulang video terus menerus.
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        if (synth.speaking && isPlaying) {
            player.seekTo(0);
            player.playVideo();
        }
    }
}

function startExplanation(question, answerArray) {
    closeModal();
    const area = document.getElementById('explanationArea');
    area.style.display = 'block';
    
    document.getElementById('activeQuestionTitle').innerText = question;
    
    const listContainer = document.getElementById('activeAnswerList');
    listContainer.innerHTML = ''; 
    let textForAI = ""; 
    
    answerArray.forEach(step => {
        const li = document.createElement('li');
        li.innerText = step;
        listContainer.appendChild(li);
        textForAI += step + ". "; 
    });

    area.scrollIntoView({ behavior: 'smooth' });

    if (player && player.playVideo) {
        player.mute(); 
        player.seekTo(0);
        player.playVideo();
        isPlaying = true;
        updateButtonState();
    }

    /* SISTEM SUARA AI INDONESIA */
    synth.cancel(); 
    aiVoice = new SpeechSynthesisUtterance(textForAI);
    
    const indoVoice = availableVoices.find(v => v.lang === 'id-ID' || v.lang === 'id_ID' || v.name.includes('Indonesia'));
    
    if(indoVoice) {
        aiVoice.voice = indoVoice;
    } else {
        aiVoice.lang = 'id-ID'; 
    }
    
    aiVoice.rate = 1.5; 
    aiVoice.pitch = 1.0; 
    
    // LOGIKA 2: Jika AI sudah selesai bicara, MATIKAN video seketika, walau belum waktunya habis.
    aiVoice.onend = function() {
        if (player && player.pauseVideo) {
            player.pauseVideo();
            isPlaying = false;
            updateButtonState();
        }
    };
    
    synth.speak(aiVoice);
}

function toggleVideo() {
    if (!player) return;

    if (isPlaying) {
        player.pauseVideo();
        synth.pause(); 
        isPlaying = false;
    } else {
        player.playVideo();
        synth.resume(); 
        isPlaying = true;
    }
    updateButtonState();
}

function updateButtonState() {
    const btn = document.getElementById('playPauseBtn');
    if(isPlaying) {
        btn.innerHTML = '⏸ Jeda Penjelasan';
        btn.style.background = 'rgba(255, 255, 255, 0.1)'; 
        btn.style.border = '1px solid var(--text-muted)';
    } else {
        btn.innerHTML = '▶️ Lanjutkan Penjelasan';
        btn.style.background = 'linear-gradient(135deg, var(--accent-magenta), var(--accent-purple))';
        btn.style.border = 'none';
    }
}