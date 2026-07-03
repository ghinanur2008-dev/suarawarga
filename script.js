/* ================= REGISTER PWA (SERVICE WORKER) ================= */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('PWA Service Worker Berhasil Didaftarkan!', reg))
            .catch(err => console.log('PWA Gagal Didaftarkan:', err));
    });
}

const database = {
    bansos: {
        title: "Panduan Bantuan Sosial (Kemensos)",
        questions: [
            { q: "Syarat utama daftar BPNT dan PKH?", a: ["Siapkan e-KTP dan Kartu Keluarga asli yang sudah padan dengan Dukcapil.", "Minta Surat Keterangan Tidak Mampu (SKTM) dari Kelurahan/Desa setempat.", "Lakukan pendaftaran ke DTKS (Data Terpadu Kesejahteraan Sosial) melalui aparat desa."] },
            { q: "Cara cek penerima Bansos online resmi?", a: ["Buka website resmi cekbansos.kemensos.go.id melalui browser.", "Pilih Provinsi, Kabupaten/Kota, Kecamatan, dan Desa sesuai KTP.", "Masukkan nama lengkap dan kode captcha, lalu klik Cari Data."] },
            { q: "Langkah jika Bansos tiba-tiba berhenti?", a: ["Pastikan NIK KTP Anda masih aktif dan tidak ganda di Disdukcapil.", "Laporkan ke Pendamping PKH atau aparat desa untuk pengusulan ulang musyawarah desa.", "Gunakan fitur Sanggah di aplikasi Cek Bansos Kemensos."] },
            { q: "Bagaimana cara mencairkan BLT Dana Desa?", a: ["Pastikan Anda terdaftar sebagai Keluarga Penerima Manfaat (KPM) di balai desa.", "Bawa surat undangan pencairan dari desa beserta KTP asli.", "Pencairan dilakukan langsung di balai desa tanpa melalui bank."] },
            { q: "Syarat menerima bantuan PBI JK (BPJS Gratis)?", a: ["Terdaftar dalam Data Terpadu Kesejahteraan Sosial (DTKS).", "Memiliki NIK yang padan dengan data Direktorat Jenderal Dukcapil.", "Belum terdaftar sebagai peserta BPJS Kesehatan segmen pekerja mandiri atau perusahaan."] },
            { q: "Apakah ada Bansos khusus untuk lansia tunggal?", a: ["Ya, pemerintah memiliki program permakanan bagi lansia tunggal berusia 75 tahun ke atas.", "Lansia harus tercatat dalam keluarga tunggal di Kartu Keluarga.", "Bantuan diberikan dalam bentuk makanan bergizi siap saji dua kali sehari oleh Pokmas desa."] },
            { q: "Bagaimana cara daftar bantuan alat bantu disabilitas?", a: ["Lakukan pelaporan atau asesmen melalui pendamping rehabilitasi sosial tingkat kecamatan.", "Lampirkan surat keterangan diagnosa disabilitas dari rumah sakit daerah.", "Kemensos akan menyalurkan bantuan seperti kursi roda atau alat bantu dengar melalui sentra terpadu."] },
            { q: "Cara melaporkan penyalahgunaan dana Bansos?", a: ["Kumpulkan bukti akurat seperti rekaman suara atau dokumen pemotongan dana.", "Kirim aduan melalui aplikasi Cek Bansos pada menu Tanggapan Kelayakan.", "Atau lapor melalui Call Center Kemensos di nomor telepon 171."] }
        ]
    },
    kesehatan: {
        title: "Layanan Kesehatan (BPJS & Kemenkes)",
        questions: [
            { q: "Cara daftar BPJS Mandiri via HP?", a: ["Unduh aplikasi Mobile JKN resmi dari BPJS Kesehatan di PlayStore/AppStore.", "Siapkan NIK KTP, Kartu Keluarga, nomor HP aktif, dan buku rekening.", "Pilih menu Daftar Peserta Baru dan ikuti instruksi hingga selesai."] },
            { q: "Aturan rawat inap menggunakan BPJS?", a: ["Kondisi darurat: Langsung ke UGD rumah sakit terdekat tanpa rujukan.", "Kondisi tidak darurat: Wajib periksa dulu di Faskes Tingkat 1 (Puskesmas/Klinik).", "Jika dokter Faskes 1 menilai perlu rawat inap, Anda akan diberi surat rujukan ke Rumah Sakit."] },
            { q: "Apakah cabut gigi & kacamata ditanggung BPJS?", a: ["Tindakan cabut gigi dasar dan penambalan sepenuhnya ditanggung BPJS di Faskes 1.", "Untuk kacamata, BPJS memberikan subsidi dana dengan jumlah sesuai kelas kepesertaan.", "Kacamata harus ditebus di optik yang telah bekerja sama dengan BPJS Kesehatan."] },
            { q: "Bagaimana cara membayar denda tunggakan BPJS?", a: ["Cek total tunggakan Anda melalui aplikasi Mobile JKN atau Chat Asisten JKN (CHIKA).", "Pembayaran dapat dilakukan sekaligus melalui ATM, minimarket, atau dompet digital menggunakan nomor Virtual Account Anda.", "Denda rawat inap hanya berlaku jika Anda dirawat dalam waktu 45 hari sejak status diaktifkan kembali."] },
            { q: "Apa yang harus dilakukan jika kartu BPJS hilang?", a: ["Anda tidak perlu mencetak ulang kartu fisik karena sistem sudah berbasis digital.", "Cukup buka aplikasi Mobile JKN dan tampilkan KIS Digital pada menu kartu.", "Faskes wajib melayani peserta BPJS yang hanya menunjukkan e-KTP."] },
            { q: "Syarat mendapatkan layanan persalinan gratis?", a: ["Lakukan pemeriksaan kehamilan rutin (ANC) di puskesmas atau klinik Faskes 1 Anda.", "Persalinan normal tanpa penyulit wajib dilakukan di Faskes 1 atau bidan jejaring.", "Jika terdapat indikasi medis darurat, puskesmas akan mengeluarkan rujukan operasi caesar ke rumah sakit."] },
            { q: "Bagaimana cara klaim ambulans gratis BPJS?", a: ["Layanan ambulans hanya ditanggung untuk proses rujukan antar-fasilitas kesehatan (contoh: Puskesmas ke RS).", "Ambulans untuk penjemputan dari rumah pasien ke rumah sakit tidak ditanggung BPJS.", "Surat keterangan penggunaan ambulans harus diterbitkan oleh faskes perujuk."] },
            { q: "Berapa lama masa berlaku surat rujukan RS?", a: ["Surat rujukan dari Faskes Tingkat 1 memiliki masa berlaku hingga 3 bulan sejak diterbitkan.", "Rujukan tersebut hanya berlaku untuk diagnosa penyakit yang tertera pada surat.", "Jika pengobatan belum selesai lewat dari masa berlaku, mintalah perpanjangan surat kontrol dari dokter RS."] }
        ]
    },
    bencana: {
        title: "Lapor & Tanggap Bencana (BPBD)",
        questions: [
            { q: "Nomor darurat saat terjadi bencana alam?", a: ["Hubungi Call Center Terpadu 112 (Bebas Pulsa dari operator mana pun).", "Hubungi Badan SAR Nasional di nomor 115 untuk evakuasi penyelamatan.", "Hubungi Pemadam Kebakaran di nomor 113."] },
            { q: "Prosedur evakuasi saat gempa bumi?", a: ["Jangan panik, lindungi kepala dan tengkuk Anda menggunakan tas atau tangan.", "Berlindung di bawah meja yang kokoh hingga guncangan mereda.", "Setelah reda, segera keluar melalui tangga darurat (jangan gunakan lift) menuju titik kumpul terbuka."] },
            { q: "Cara meminta bantuan air bersih saat kemarau?", a: ["Ketua RT/RW setempat harus mendata jumlah warga yang terdampak.", "Ajukan surat permohonan resmi bantuan air bersih ke kantor BPBD tingkat Kabupaten/Kota.", "Truk tangki air dari BPBD atau PDAM akan dikirimkan berdasarkan jadwal antrean."] },
            { q: "Cara melaporkan pohon tumbang ke dinas terkait?", a: ["Ambil foto kondisi pohon tumbang yang menutupi jalan atau membahayakan warga.", "Hubungi layanan darurat 112 atau kirim aduan via media sosial resmi BPBD daerah setempat.", "Jangan mencoba memotong batang besar sendiri jika pohon menimpa kabel listrik."] },
            { q: "Prosedur permintaan tenda darurat/pengungsi?", a: ["Aparat desa berkoordinasi dengan pihak kecamatan untuk menetapkan status tanggap darurat lokal.", "Kecamatan mengajukan permintaan logistik tenda keluarga atau komunal ke BPBD.", "BPBD akan mendistribusikan tenda dan velbed sesuai dengan validasi jumlah pengungsi."] },
            { q: "Cara mendapatkan info cuaca ekstrem valid?", a: ["Abaikan pesan peringatan berantai (hoaks) yang menyebar di grup WhatsApp.", "Unduh aplikasi Info BMKG dari AppStore atau PlayStore.", "Cek secara rutin peringatan dini cuaca berbasis peta radar yang dikeluarkan secara resmi."] },
            { q: "Langkah mendirikan dapur umum saat banjir?", a: ["Pastikan lokasi dapur umum didirikan pada dataran tinggi yang aman dari genangan susulan.", "Ajukan permohonan pendirian ke Dinas Sosial dan Taruna Siaga Bencana (Tagana).", "Tagana akan memfasilitasi alat masak lapangan berskala besar beserta suplai sembako."] },
            { q: "Syarat pengajuan dana perbaikan rumah rusak akibat bencana?", a: ["Buat laporan kerusakan yang ditandatangani oleh RT/RW, Kepala Desa, dan dilampiri foto rumah rusak.", "Dinas Perkim dan BPBD akan melakukan verifikasi lapangan untuk menentukan tingkat kerusakan (Ringan, Sedang, Berat).", "Pencairan dana stimulan perbaikan rumah menunggu Keputusan Kepala Daerah terkait status transisi darurat ke pemulihan."] }
        ]
    },
    administrasi: {
        title: "Administrasi Dukcapil",
        questions: [
            { q: "Langkah mengurus e-KTP yang hilang/rusak?", a: ["Minta surat keterangan kehilangan dari kantor polisi terdekat (jika hilang).", "Bawa fotokopi Kartu Keluarga dan surat kehilangan ke kantor Dukcapil atau Kecamatan.", "Proses pencetakan ulang KTP tidak memerlukan rekam sidik jari dan foto ulang, kecuali ada perubahan data."] },
            { q: "Syarat membuat Akta Kelahiran Anak?", a: ["Surat Keterangan Lahir asli dari Bidan, Rumah Sakit, atau Puskesmas.", "Fotokopi Buku Nikah atau Kutipan Akta Perkawinan orang tua.", "Fotokopi e-KTP kedua orang tua dan Kartu Keluarga asli untuk dimasukkan nama anak."] },
            { q: "Apakah pembuatan KTP dan KK dipungut biaya?", a: ["Berdasarkan UU No. 24 Tahun 2013, seluruh kepengurusan dokumen kependudukan adalah GRATIS.", "Dilarang keras menggunakan jasa calo yang meminta bayaran.", "Jika ada petugas yang memungut biaya, laporkan ke Saber Pungli."] },
            { q: "Cara mengurus surat pindah domisili antar provinsi?", a: ["Bawa Kartu Keluarga asli ke kantor Dukcapil domisili asal untuk diterbitkan Surat Keterangan Pindah Warga Negara Indonesia (SKPWNI).", "Tidak perlu lagi meminta surat pengantar dari RT/RW atau Kelurahan.", "Serahkan SKPWNI tersebut ke kantor Dukcapil di kota tujuan untuk dicetakkan KK dan e-KTP domisili baru."] },
            { q: "Syarat dan kegunaan Kartu Identitas Anak (KIA)?", a: ["Diperuntukkan bagi anak usia 0 hingga 17 tahun kurang satu hari.", "Bawa fotokopi Akta Kelahiran, KK, KTP orang tua, dan pasfoto anak (khusus anak di atas usia 5 tahun).", "KIA berguna untuk syarat masuk sekolah, mengurus paspor, hingga pendaftaran BPJS Mandiri anak."] },
            { q: "Prosedur pengurusan Akta Kematian?", a: ["Siapkan Surat Keterangan Kematian dari dokter, rumah sakit, atau pihak Kelurahan/Desa.", "Bawa e-KTP asli jenazah dan Kartu Keluarga (KK) pihak yang ditinggalkan.", "Dukcapil akan menerbitkan Akta Kematian sekaligus menerbitkan KK baru dengan mencoret nama jenazah."] },
            { q: "Bagaimana cara mengubah nama atau tanggal lahir di KTP?", a: ["Perubahan unsur nama atau tanggal lahir wajib melalui putusan Penetapan Pengadilan Negeri setempat.", "Setelah putusan sidang keluar, serahkan salinan asli putusan tersebut ke loket Dukcapil.", "Dukcapil akan menerbitkan perubahan dokumen kependudukan baru sesuai ketetapan hakim."] },
            { q: "Apa fungsi QR Code (Barcode) pada Kartu Keluarga versi baru?", a: ["Tanda tangan elektronik Kepala Dinas kini direpresentasikan oleh Barcode demi keaslian dokumen.", "KK ber-Barcode ini dapat dicetak sendiri oleh masyarakat menggunakan kertas HVS A4 80 gram secara mandiri.", "Kekuatan hukum KK ber-Barcode sama kuatnya dengan cetakan blanko keamanan versi lama."] }
        ]
    },
    pendidikan: {
        title: "Bantuan Pendidikan (Kemdikbud)",
        questions: [
            { q: "Cara mendaftar KIP Kuliah?", a: ["Pendaftaran dilakukan secara mandiri di situs resmi kip-kuliah.kemdikbud.go.id.", "Siapkan NIK, NISN, NPSN, dan alamat email yang masih aktif.", "Lengkapi berkas pendaftaran ekonomi keluarga dan pilih jalur seleksi masuk perguruan tinggi."] },
            { q: "Syarat pencairan dana PIP Tingkat Sekolah?", a: ["Pastikan nama anak tercantum dalam SK Pemberian PIP yang diterbitkan Puslapdik.", "Bawa Surat Keterangan Pencairan PIP dari Kepala Sekolah.", "Bawa KTP orang tua, Kartu Keluarga, dan Buku Tabungan SimPel ke bank penyalur (BRI/BNI/BSI)."] },
            { q: "Solusi jika nama siswa tidak masuk nominasi PIP?", a: ["Laporkan ke pihak sekolah agar operator memperbarui status ekonomi keluarga di sistem Dapodik.", "Pastikan penghasilan kotor gabungan orang tua tidak melebihi syarat batas maksimal.", "Pengusulan akan diproses ulang oleh Dinas Pendidikan pada tahap sinkronisasi berikutnya."] },
            { q: "Apakah dana PIP boleh digunakan untuk beli pulsa?", a: ["Tidak. Dana PIP secara ketat dikhususkan untuk menunjang perlengkapan sekolah fisik.", "Penggunaan yang disetujui antara lain: buku tulis, seragam, sepatu, biaya ekstrakurikuler, atau iuran sekolah.", "Pemerintah melarang penggunaan dana untuk barang non-pendidikan seperti pulsa permainan atau konsumsi tersier."] },
            { q: "Cara mencetak ulang ijazah sekolah yang terbakar/hilang?", a: ["Minta Surat Keterangan Kehilangan dari kepolisian resor/sektor dengan mencantumkan nomor ijazah jika ingat.", "Datang ke sekolah asal dengan membawa meterai, pasfoto, dan saksi teman seangkatan (jika diperlukan).", "Sekolah akan menerbitkan Surat Keterangan Pengganti Ijazah (SKPI) yang kedudukan hukumnya sah pengganti ijazah asli."] },
            { q: "Syarat pendaftaran Beasiswa Unggulan Kemdikbud?", a: ["Diperuntukkan bagi mahasiswa berprestasi baik jenjang S1, S2, maupun S3.", "Pendaftar wajib mengunggah esai motivasi dan bukti sertifikat prestasi minimal tingkat provinsi.", "Usia maksimal pendaftar dibatasi sesuai dengan jenjang yang dituju (misal maksimal 22 tahun untuk mahasiswa baru S1)."] },
            { q: "Bagaimana cara lapor jika pungutan liar (SPP) terjadi di sekolah negeri?", a: ["Sesuai aturan Permendikbud, sekolah SD, SMP, dan SMA/SMK Negeri dilarang menarik iuran SPP rutin kepada siswa.", "Laporkan bukti penarikan kepada Dinas Pendidikan tingkat Provinsi atau Kabupaten/Kota.", "Aduan juga dapat dikirim secara rahasia melalui lapor.go.id."] },
            { q: "Apakah mutasi siswa ke luar kota harus membayar administrasi?", a: ["Mutasi atau kepindahan siswa antar sekolah negeri sepenuhnya bebas dari biaya administrasi dari Kemdikbud.", "Orang tua hanya perlu mengurus Surat Keterangan Pindah dari sekolah asal yang ditandatangani Kepala Sekolah.", "Sekolah tujuan tidak boleh menarik uang pangkal perpindahan."] }
        ]
    },
    pengaduan: {
        title: "Pengaduan SP4N-LAPOR!",
        questions: [
            { q: "Cara melapor jalan rusak atau lampu mati?", a: ["Kunjungi website www.lapor.go.id atau unduh aplikasi SP4N-LAPOR.", "Ketikkan aduan dengan jelas, sertakan nama jalan, desa, dan patokan lokasi.", "Unggah bukti foto kerusakan, lalu pilih opsi 'Kirim sebagai Anonim' jika ingin identitas dirahasiakan."] },
            { q: "Melaporkan dugaan korupsi proyek desa?", a: ["Kumpulkan bukti awal berupa dokumen, foto proyek mangkrak, atau RAB jika ada.", "Gunakan fitur aduan KPK di situs JAGA.ID atau laporkan ke Inspektorat Daerah.", "Pastikan Anda tidak menyebarkan tuduhan di media sosial agar tidak terkena UU ITE sebelum terbukti."] },
            { q: "Cara lapor pungutan liar (Pungli) layanan publik?", a: ["Catat waktu, lokasi, dan nama oknum petugas yang meminta biaya di luar ketentuan.", "Laporkan segera ke Satgas Saber Pungli melalui call center 193.", "Atau kirimkan laporan via SMS ke nomor 1193."] },
            { q: "Bagaimana cara melaporkan aplikasi Pinjaman Online (Pinjol) ilegal?", a: ["Kumpulkan bukti berupa nomor rekening pelaku, bukti transfer, dan tangkapan layar ancaman/teror pesan.", "Kirimkan bukti dan laporan aduan ke email Otoritas Jasa Keuangan di waspadainvestasi@ojk.go.id.", "Blokir nomor pelaku dan jangan pernah merespons ancaman mereka lebih lanjut."] },
            { q: "Saluran pelaporan darurat Tindak KDRT dan Pelecehan Anak?", a: ["Hubungi langsung Call Center SAPA (Sahabat Perempuan dan Anak) di nomor 129.", "Atau kirimkan pesan pengaduan melalui nomor WhatsApp SAPA 129 di 08111-129-129.", "Layanan ini aktif 24 jam dan menjamin kerahasiaan identitas korban serta memberikan pendampingan psikologis."] },
            { q: "Cara lapor jika hak konsumen dirugikan (Barang Kadaluarsa)?", a: ["Jangan buang barang tersebut, simpan struk belanja sebagai alat bukti sah.", "Kirim aduan melalui aplikasi Posko Pengaduan Konsumen Nasional (BPKN).", "Bila diabaikan pelaku usaha, adukan ke Badan Penyelesaian Sengketa Konsumen (BPSK) di daerah Anda."] },
            { q: "Melaporkan pelanggaran disiplin ASN/PNS?", a: ["Kunjungi website Sistem Pengelolaan Pengaduan Pelayanan Publik Nasional (SP4N-LAPOR!).", "Sebutkan nama instansi, nama oknum ASN, dan deskripsikan pelanggaran (misal: bolos kerja atau pelayanan tidak sopan).", "Pilih fitur 'Rahasia' agar nama Anda terlindungi dari oknum ASN yang dilaporkan."] },
            { q: "Prosedur pengaduan penyebaran Berita Bohong (Hoaks/Penipuan Siber)?", a: ["Lakukan tangkapan layar (screenshot) tautan URL atau postingan yang mengandung unsur hoaks/SARA.", "Adukan link tersebut ke Kementerian Kominfo melalui situs aduankonten.id.", "Kominfo berwenang memblokir situs web penipu dan men-takedown konten palsu tersebut dari media sosial."] }
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
        videoId: 'vU7GjUDmFGc',
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
    
    aiVoice.rate = 0.95; 
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
/* ================= LOGIKA PAKSA POP-UP PWA ================= */
let deferredPrompt;
const installBtn = document.getElementById('pwaInstallBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    // Mencegah prompt otomatis bawaan browser
    e.preventDefault();
    // Simpan event untuk dipicu nanti
    deferredPrompt = e;
    // Tampilkan tombol instal buatan sendiri
    installBtn.style.display = 'inline-block';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt !== null) {
        // Tampilkan pop-up sistem operasi untuk menginstal
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('Pengguna menerima instalasi PWA');
            installBtn.style.display = 'none'; // Sembunyikan tombol setelah diinstal
        }
        deferredPrompt = null;
    }
});