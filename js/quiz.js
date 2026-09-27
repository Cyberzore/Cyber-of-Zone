/**
 * Interactive Quiz Engine TJKT - Cyber of Zone
 * Fitur: Pengacakan Soal (Randomize) & Mengambil 20 Soal Acak dari Bank Soal
 * Timer: 30 Menit (1800 detik)
 */

const fullQuizBank = [
  // ==================== KELAS 10 ====================
  // 1. Pengertian TJKT (1-8)
  {
    q: "Apa kepanjangan dari TJKT dalam kurikulum SMK?",
    options: ["Teknik Jaringan Komputer dan Telekomunikasi", "Teknik Komputer dan Jaringan", "Teknologi Jaringan dan Komunikasi Terpadu", "Teknik Komunikasi Terapan"],
    answer: 0,
    exp: "TJKT merupakan singkatan dari Teknik Jaringan Komputer dan Telekomunikasi."
  },
  {
    q: "Bidang keahlian TJKT berfokus pada pengembangan kemampuan di bidang...",
    options: ["Desain Grafis", "Perakitan, Jaringan, dan Telekomunikasi", "Akuntansi Komputer", "Manajemen Bisnis"],
    answer: 1,
    exp: "TJKT berfokus pada infrastruktur keras, jaringan komputer, serta sistem telekomunikasi."
  },
  {
    q: "Elemen utama dalam telekomunikasi yang bertugas mengirimkan sinyal disebut...",
    options: ["Receiver", "Transmitter", "Medium", "Protocol"],
    answer: 1,
    exp: "Transmitter adalah perangkat pemancar yang mengirimkan informasi atau sinyal."
  },
  {
    q: "Perangkat yang bertugas menerima sinyal informasi dalam sistem komunikasi dinamakan...",
    options: ["Transmitter", "Receiver", "Transceiver", "Amplifier"],
    answer: 1,
    exp: "Receiver merupakan penerima pesan atau data yang dipancarkan oleh transmitter."
  },
  {
    q: "Komponen yang menjembatani hubungan komunikasi antara pengirim dan penerima dinamakan...",
    options: ["Data", "Protocol", "Medium Transmisi", "Encoder"],
    answer: 2,
    exp: "Medium transmisi dapat berupa media fisik (kabel) maupun non-fisik (gelombang nirkabel)."
  },
  {
    q: "Aturan atau kesepakatan standar yang mengatur tata cara pertukaran data dinamakan...",
    options: ["Topologi", "Protokol", "Bandwidth", "Latency"],
    answer: 1,
    exp: "Protokol menentukan bagaimana format data, enkripsi, dan kontrol kesalahan diproses."
  },
  {
    q: "Berikut ini yang bukan merupakan komponen dasar dari sistem telekomunikasi adalah...",
    options: ["Transmitter", "Penerima", "Kamera DSLR", "Media Transmisi"],
    answer: 2,
    exp: "Kamera DSLR adalah media tangkap gambar, bukan komponen utama sistem telekomunikasi dasar."
  },
  {
    q: "Integrasi antara teknologi informasi dan telekomunikasi pada zaman modern menghasilkan sistem berbasis...",
    options: ["Analog Murni", "Jaringan Berbasis IP (Internet Protocol)", "Sinyal Elektrik Manual", "Sistem Telegram"],
    answer: 1,
    exp: "Komunikasi telekomunikasi modern menggunakan fondasi IP Address dan paket data."
  },

  // 2. Sejarah Jaringan Komputer (9-16)
  {
    q: "Jaringan komputer pertama di dunia yang dikembangkan oleh Departemen Pertahanan AS adalah...",
    options: ["ARPANET", "ALOHANET", "ETHERNET", "INTERNET"],
    answer: 0,
    exp: "ARPANET (Advanced Research Projects Agency Network) merupakan cikal bakal lahirnya internet."
  },
  {
    q: "Penemu standar protokol TCP/IP yang dijuluki sebagai 'Bapak Internet' adalah...",
    options: ["Bill Gates", "Vint Cerf dan Bob Kahn", "Alan Turing", "Tim Berners-Lee"],
    answer: 1,
    exp: "Vint Cerf dan Bob Kahn merancang standar protokol TCP/IP pada tahun 1970-an."
  },
  {
    q: "Layanan World Wide Web (WWW) pertama kali diciptakan oleh Tim Berners-Lee pada tahun...",
    options: ["1969", "1989", "1998", "2005"],
    answer: 1,
    exp: "WWW dikembangkan di CERN oleh Tim Berners-Lee pada tahun 1989."
  },
  {
    q: "Protokol komunikasi awal yang digunakan oleh ARPANET sebelum diadopsinya TCP/IP adalah...",
    options: ["NCP (Network Control Program)", "IPX/SPX", "NetBEUI", "HTTP"],
    answer: 0,
    exp: "NCP digunakan pada ARPANET sebelum digantikan oleh TCP/IP pada 1 Januari 1983."
  },
  {
    q: "Istilah 'Internetworking' yang disingkat menjadi Internet mengacu pada...",
    options: ["Satu komputer tunggal", "Kumpulan jaringan komputer terhubung secara global", "Kabel dalam jaringan LAN", "Layanan pesan singkat"],
    answer: 1,
    exp: "Internet merujuk pada jaringan global dari jaringan-jaringan komputer yang saling terhubung."
  },
  {
    q: "Aplikasi browser web grafis pertama yang memicu kepopuleran internet di masyarakat umum adalah...",
    options: ["Google Chrome", "Mosaic", "Internet Explorer", "Opera"],
    answer: 1,
    exp: "NCSA Mosaic diluncurkan tahun 1993 dan membawa antarmuka grafis pertama ke web."
  },
  {
    q: "E-mail pertama kali dikirimkan oleh Ray Tomlinson dengan menggunakan tanda pemisah...",
    options: ["#", "$", "@", "&"],
    answer: 2,
    exp: "Ray Tomlinson memilih simbol '@' untuk memisahkan nama pengguna dan nama mesin server."
  },
  {
    q: "Sistem Nama Domain (DNS) diciptakan untuk menggantikan pemetaan manual file bernama...",
    options: ["hosts.txt", "system.cfg", "network.ini", "dns.log"],
    answer: 0,
    exp: "Dahulu pemetaan nama komputer dan IP disimpan manual di file centralized 'hosts.txt'."
  },

  // 3. Jenis Jaringan Komputer (17-24)
  {
    q: "Jaringan komputer yang mencakup area terbatas seperti satu ruangan atau gedung sekolah dinamakan...",
    options: ["MAN", "WAN", "LAN", "PAN"],
    answer: 2,
    exp: "LAN (Local Area Network) menghubungkan perangkat dalam cakupan area geografis kecil."
  },
  {
    q: "Koneksi Bluetooth antar ponsel dan headset nirkabel termasuk dalam jenis jaringan...",
    options: ["PAN", "LAN", "MAN", "WAN"],
    answer: 0,
    exp: "PAN (Personal Area Network) adalah jaringan nirkabel jarak dekat untuk penggunaan pribadi."
  },
  {
    q: "Jaringan antar kota atau provinsi yang menghubungkan beberapa LAN dinamakan...",
    options: ["LAN", "MAN", "WAN", "PAN"],
    answer: 1,
    exp: "MAN (Metropolitan Area Network) mencakup area antar kota dalam satu wilayah."
  },
  {
    q: "Jaringan dengan cakupan area skala global antar negara dan benua dinamakan...",
    options: ["LAN", "MAN", "WAN", "SAN"],
    answer: 2,
    exp: "WAN (Wide Area Network) menghubungkan infrastruktur antar benua secara global."
  },
  {
    q: "Jenis jaringan khusus yang dirancang untuk menghubungkan server dengan perangkat penyimpanan masif (Storage) dinamakan...",
    options: ["SAN (Storage Area Network)", "PAN", "WLAN", "CAN"],
    answer: 0,
    exp: "SAN dirancang khusus untuk kecepatan tinggi antar server dan media penyimpanan data."
  },
  {
    q: "WLAN (Wireless Local Area Network) memanfaatkan media transmisi berupa...",
    options: ["Kabel UTP", "Gelombang Radio", "Kabel Fiber Optic", "Kabel Coaxial"],
    answer: 1,
    exp: "WLAN menggunakan sinyal frekuensi radio (seperti Wi-Fi) tanpa media kabel fisik."
  },
  {
    q: "Jaringan komputer di area kampus yang menghubungkan beberapa gedung fakultas sering dinamakan...",
    options: ["CAN (Campus Area Network)", "PAN", "WAN", "SAN"],
    answer: 0,
    exp: "CAN merupakan turunan LAN/MAN yang menghubungkan gedung-gedung dalam satu Kompleks/Kampus."
  },
  {
    q: "Salah satu keuntungan utama dari penerapan LAN di dalam lab komputer adalah...",
    options: ["Biaya pemasangan antar benua gratis", "Berbagi pakai printer dan file (Resource Sharing)", "Kecepatan internet tidak terbatas", "Bebas dari gangguan virus"],
    answer: 1,
    exp: "LAN memungkinkan efisiensi penggunaan sumber daya seperti printer, berkas, dan perangkat keras."
  },

  // 4. Topologi Jaringan Komputer (25-32)
  {
    q: "Topologi jaringan yang menggunakan satu kabel utama (backbone) sebagai media transmisi adalah...",
    options: ["Topologi Star", "Topologi Bus", "Topologi Ring", "Topologi Mesh"],
    answer: 1,
    exp: "Topologi Bus terhubung pada satu jalur kabel utama yang di kedua ujungnya dipasang terminator."
  },
  {
    q: "Topologi yang menghubungkan setiap simpul ke simpul pusat (Switch/Hub) dinamakan...",
    options: ["Topologi Star", "Topologi Ring", "Topologi Mesh", "Topologi Tree"],
    answer: 0,
    exp: "Topologi Star berpusat pada satu perangkat konsentrator seperti Switch atau Hub."
  },
  {
    q: "Topologi jaringan yang paling aman dan tahan terhadap kegagalan jalur tunggal karena memiliki redundancy penuh adalah...",
    options: ["Topologi Bus", "Topologi Mesh", "Topologi Ring", "Topologi Star"],
    answer: 1,
    exp: "Topologi Mesh menghubungkan setiap node ke semua node lainnya secara point-to-point."
  },
  {
    q: "Perangkat khusus yang dipasang pada kedua ujung kabel utama Topologi Bus berfungsi untuk...",
    options: ["Menyaring Virus", "Mencegah Pantulan Sinyal (Terminator)", "Mempercepat Koneksi", "Mengubah Sinyal Digital ke Analog"],
    answer: 1,
    exp: "Terminator menyerap sinyal listrik agar tidak memantul kembali dan menyebabkan tabrakan data (collision)."
  },
  {
    q: "Topologi jaringan yang aliran datanya berputar melingkar dalam satu arah melalui setiap node adalah...",
    options: ["Topologi Ring", "Topologi Star", "Topologi Bus", "Topologi Mesh"],
    answer: 0,
    exp: "Topologi Ring (Cincin) mengalirkan data bertahap dari satu node ke node berikutnya hingga kembali."
  },
  {
    q: "Kelemahan utama dari Topologi Star adalah...",
    options: ["Jika kabel satu PC putus seluruh jaringan mati", "Sulit dikembangkan", "Sangat tergantung pada konsentrator pusat (Switch/Hub)", "Membutuhkan terminator"],
    answer: 2,
    exp: "Jika perangkat pusat (Switch) mengalami kerusakan total, seluruh jaringan Star akan lumpuh."
  },
  {
    q: "Topologi Pohon (Tree) merupakan kombinasi / hirarki dari dua topologi dasar yaitu...",
    options: ["Bus dan Star", "Ring dan Mesh", "Star dan Ring", "Mesh dan Bus"],
    answer: 0,
    exp: "Topologi Tree menggabungkan beberapa Topologi Star yang dihubungkan melalui Topologi Bus utama."
  },
  {
    q: "Rumus untuk menghitung jumlah saluran kabel fisik pada Topologi Fully Mesh dengan N komputer adalah...",
    options: ["N * (N - 1) / 2", "N + 1", "N^2", "2 * N"],
    answer: 0,
    exp: "Rumus jumlah tautan kabel Mesh penuh adalah N(N-1)/2."
  },

  // 5. Perangkat Keras Jaringan (33-40)
  {
    q: "Perangkat jaringan yang meneruskan data pada Layer 2 OSI berdasarkan MAC Address adalah...",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answer: 1,
    exp: "Switch bekerja pada Layer Data Link dengan membaca tabel alamat fisik (MAC Address)."
  },
  {
    q: "Perangkat yang berfungsi memperkuat dan regenerasi sinyal yang melemah akibat jarak jauh adalah...",
    options: ["Repeater", "Bridge", "Router", "Modem"],
    answer: 0,
    exp: "Repeater bertugas memperkuat sinyal digital agar dapat menjangkau jarak yang lebih jauh."
  },
  {
    q: "Perangkat jaringan yang membagikan paket data secara broadcast ke seluruh port tanpa memilah alamat tujuan adalah...",
    options: ["Switch Managed", "Hub", "Router", "Bridge"],
    answer: 1,
    exp: "Hub bekerja secara tidak cerdas di Layer Physical dan mengirimkan data ke semua port secara acak."
  },
  {
    q: "Modem singkatan dari...",
    options: ["Modulator Demodulator", "Model Data Encoder", "Modular Digital Medium", "Mode Direct Ethernet"],
    answer: 0,
    exp: "Modem mengubah sinyal digital menjadi analog (Modulasi) dan analog ke digital (Demodulasi)."
  },
  {
    q: "Network Interface Card (NIC) dipasang pada PC untuk memberikan alamat fisik berupa...",
    options: ["IP Address", "MAC Address", "Port Number", "Subnet Mask"],
    answer: 1,
    exp: "MAC Address adalah alamat unik 48-bit yang tertanam secara permanen pada hardware NIC."
  },
  {
    q: "Perangkat yang digunakan untuk menghubungkan jaringan bertipe beda (misal LAN ke Fiber) di sebut...",
    options: ["Media Converter", "Hub", "Crimper", "Tester"],
    answer: 0,
    exp: "Media Converter mengubah sinyal elektrik kabel UTP menjadi sinyal cahaya kabel Fiber Optic."
  },
  {
    q: "Perangkat Access Point berfungsi utama untuk...",
    options: ["Menyimpan Database", "Memancarkan sinyal radio Wi-Fi", "Memotong Kabel", "Mencetak Berkas"],
    answer: 1,
    exp: "Access Point menjadi simpul pemancar sinyal nirkabel (WLAN) ke klien."
  },
  {
    q: "Perangkat Router bekerja pada model OSI di tingkatan...",
    options: ["Layer 1 Physical", "Layer 2 Data Link", "Layer 3 Network", "Layer 7 Application"],
    answer: 2,
    exp: "Router beroperasi di Layer 3 (Network) dengan menggunakan dasar alamat IP Address."
  },

  // 6. Media Transmisi & Kabel Jaringan (41-48)
  {
    q: "Kabel UTP yang tidak memiliki pelindung aluminium foil pembungkus pasangan kabel disebut...",
    options: ["STP", "UTP", "FTP", "Fiber Optic"],
    answer: 1,
    exp: "UTP (Unshielded Twisted Pair) tidak memiliki pelindung tambahan di sekitar pilinan kabel."
  },
  {
    q: "Konektor standar yang dipasang pada ujung kabel UTP jaringan ethernet adalah...",
    options: ["RJ-11", "RJ-45", "BNC", "FC Connector"],
    answer: 1,
    exp: "Konektor RJ-45 adalah konektor 8-pin untuk jaringan LAN berbasis kabel UTP."
  },
  {
    q: "Kabel STP (Shielded Twisted Pair) memiliki keunggulan dibanding UTP berupa...",
    options: ["Lebih Murah", "Tahan interferensi gelombang elektromagnetik", "Sangat Lentur", "Tidak Membutuhkan Grounding"],
    answer: 1,
    exp: "Kabel STP dilengkapi pelindung pembungkus alumunium foil untuk meredam gangguan gelombang luar."
  },
  {
    q: "Inti kabel Fiber Optic yang berfungsi merambatkan cahaya terbuat dari bahan...",
    options: ["Tembaga Murni", "Serat Kaca / Plastik Kaca", "Aluminium", "Baja Fleksibel"],
    answer: 1,
    exp: "Kabel Fiber Optic menggunakan media serat kaca ultra-murni sebagai pembawa sinyal cahaya."
  },
  {
    q: "Kabel Coaxial umumnya menggunakan konektor bertipe...",
    options: ["RJ-45", "BNC", "LC Connector", "USB Type-C"],
    answer: 1,
    exp: "Kabel coaxial jaringan lama menggunakan konektor BNC (Bayonet Neill-Concelman)."
  },
  {
    q: "Kategori kabel UTP yang mendukung kecepatan hingga 1 Gbps pada frekuensi 100 MHz adalah...",
    options: ["Cat 3", "Cat 5e", "Cat 1", "Cat 2"],
    answer: 1,
    exp: "UTP Cat 5e adalah standar minimum populer untuk jaringan Gigabit Ethernet 1000Base-T."
  },
  {
    q: "Bagian dari kabel Fiber Optic yang berfungsi memantulkan kembali gelombang cahaya ke dalam core dinamakan...",
    options: ["Core", "Cladding", "Coating", "Buffer"],
    answer: 1,
    exp: "Cladding mengelilingi core dengan indeks bias rendah untuk menjaga refleksi cahaya internal."
  },
  {
    q: "Panjang maksimal transmisi kabel UTP tanpa bantuan repeater agar tidak mengalami pembiasan sinyal adalah...",
    options: ["10 Meter", "100 Meter", "500 Meter", "1000 Meter"],
    answer: 1,
    exp: "Batas efektif segmen kabel UTP adalah 100 meter."
  },

  // 7. Pengalamatan IP (IP Address) (49-56)
  {
    q: "Panjang alamat IP versi 4 (IPv4) terdiri dari...",
    options: ["32 bit", "64 bit", "128 bit", "16 bit"],
    answer: 0,
    exp: "IPv4 terdiri dari 32 bit yang terbagi menjadi 4 okteet."
  },
  {
    q: "Panjang alamat IP versi 6 (IPv6) terdiri dari...",
    options: ["32 bit", "64 bit", "128 bit", "256 bit"],
    answer: 2,
    exp: "IPv6 memiliki panjang 128 bit yang dituliskan dalam format heksadesimal."
  },
  {
    q: "Alamat IP 192.168.1.1 termasuk ke dalam kelas IP...",
    options: ["Kelas A", "Kelas B", "Kelas C", "Kelas D"],
    answer: 2,
    exp: "Range IP Kelas C berkisar antara 192.0.0.0 hingga 223.255.255.255."
  },
  {
    q: "Alamat IP 10.0.0.1 termasuk dalam kategori IP...",
    options: ["Public Class A", "Private Class A", "Private Class C", "Loopback"],
    answer: 1,
    exp: "Range IP Private Kelas A adalah 10.0.0.0 sampai 10.255.255.255."
  },
  {
    q: "IP Address 127.0.0.1 difungsikan secara khusus oleh sistem sebagai...",
    options: ["IP Gateway Default", "IP Broadcast", "IP Loopback (Testing Lokal)", "IP Public Server"],
    answer: 2,
    exp: "IP 127.0.0.1 merupakan alamat tes loopback eksternal/internal kartu jaringan PC sendiri."
  },
  {
    q: "Alamat IP yang dialokasikan khusus untuk komunikasi Multicast berada pada Kelas...",
    options: ["Kelas A", "Kelas C", "Kelas D", "Kelas E"],
    answer: 2,
    exp: "IP Kelas D (224.0.0.0 – 239.255.255.255) dipesan khusus untuk transmisi Multicast."
  },
  {
    q: "Nilai desimal tertinggi untuk satu oktet pada alamat IPv4 adalah...",
    options: ["128", "254", "255", "256"],
    answer: 2,
    exp: "Satu oktet terdiri dari 8 bit (11111111 biner) yang bernilai desimal 255."
  },
  {
    q: "Tujuan diciptakannya IPv6 adalah untuk...",
    options: ["Membuat kabel lebih cepat", "Mengatasi krisis habisnya alokasi IPv4", "Menggantikan kabel Fiber Optic", "Menghapus penggunaan Router"],
    answer: 1,
    exp: "Ruang alamat IPv4 yang terbatas (4,3 miliar) habis sehingga digantikan oleh IPv6 yang jauh lebih masif."
  },

  // 8. Proses Bisnis TJKT & K3LH (57-64)
  {
    q: "Warna helm keselamatan K3LH yang umumnya digunakan oleh teknisi K3 atau pengawas lingkungan adalah...",
    options: ["Kuning", "Biru", "Merah", "Hijau"],
    answer: 3,
    exp: "Helm hijau umumnya dipakai oleh petugas K3LH atau pengawas lingkungan."
  },
  {
    q: "Singkatan dari K3LH adalah...",
    options: ["Kesehatan, Keselamatan Kerja dan Lingkungan Hidup", "Keamanan, Keselamatan Komputer dan Lingkungan Kerja", "Keselamatan Kerja Komputer dan Perangkat Hardware", "Kursus Keselamatan Kerja Lingkungan"],
    answer: 0,
    exp: "K3LH merupakan singkatan dari Kesehatan, Keselamatan Kerja dan Lingkungan Hidup."
  },
  {
    q: "Pertolongan pertama yang dilakukan saat ada rekan kerja tersengat listrik adalah...",
    options: ["Menarik korban langsung dengan tangan telanjang", "Mematikan sakelar sumber listrik utama", "Menyiram korban dengan air", "Memberi minum air es"],
    answer: 1,
    exp: "Langkah terpenting adalah memutus arus listrik sebelum menyentuh korban."
  },
  {
    q: "Alat Pelindung Diri (APD) yang wajib dipakai teknisi saat memanjat tiang jaringan kabel telekomunikasi adalah...",
    options: ["Kacamata Hitam", "Full Body Harness & Helm Keselamatan", "Sarung Tangan Kain Biasa", "Masker Kain"],
    answer: 1,
    exp: "Sabuk pengaman/harness dan helm melindungi dari bahaya terjatuh dari ketinggian."
  },
  {
    q: "Postur duduk yang ergonomis saat bekerja di depan komputer adalah...",
    options: ["Punggung membungkuk ke depan", "Posisi layar sejajar mata dan punggung tegak disangga kursi", "Kaki digantung tinggi", "Jarak mata ke monitor kurang dari 10 cm"],
    answer: 1,
    exp: "Posisi sejajar dan tegap mencegah gangguan persendian dan kelelahan mata."
  },
  {
    q: "Simbol bahaya berwujud lambang tengkorak pada bahan kimia laboratorium menandakan...",
    options: ["Bahan Mudah Terbakar", "Bahan Beracun (Toxic)", "Bahan Mudah Meledak", "Bahan Radioaktif"],
    answer: 1,
    exp: "Simbol tengkorak dan tulang silang adalah indikator zat berbahaya beracun."
  },
  {
    q: "Proses bisnis dalam bidang IT yang mencakup layanan pemeliharaan sistem berkala dinamakan...",
    options: ["IT Support & Maintenance", "Procurement", "Software Licensing", "Vendor Sales"],
    answer: 0,
    exp: "Layanan IT Support bertugas merawat kelangsungan operasional perangkat IT."
  },
  {
    q: "Guna mencegah kerugian data perusahaan akibat bencana, langkah preventif K3LH sistem IT adalah...",
    options: ["Melakukan Backup Data berkala secara Offsite/Cloud", "Mengunci pintu server", "Format harddisk bulanan", "Menatikan komputer tiap jam"],
    answer: 0,
    exp: "Prosedur backup data menjamin pemulihan sistem dari insiden darurat."
  },

  // 9. Perakitan Komputer & Hardware (65-72)
  {
    q: "Komponen hardware yang berfungsi memproses instruksi aritmatika dan logika pada komputer dinamakan...",
    options: ["RAM", "CPU", "Motherboard", "Power Supply"],
    answer: 1,
    exp: "CPU (Central Processing Unit) memuat ALU (Arithmetic Logic Unit) untuk pemrosesan data."
  },
  {
    q: "Jenis memori utama komputer yang bersifat volatile (hilang saat daya mati) adalah...",
    options: ["ROM", "SSD", "RAM", "Harddisk"],
    answer: 2,
    exp: "RAM menyimpan data sementara dan bersifat acak saat komputer menyala."
  },
  {
    q: "Papan sirkuit utama tempat menempelnya seluruh komponen hardware seperti Processor dan RAM adalah...",
    options: ["Power Supply", "Motherboard", "VGA Card", "Casing"],
    answer: 1,
    exp: "Motherboard menghubungkan semua sirkuit komponen komputer."
  },
  {
    q: "Perangkat pasokan listrik yang mengubah arus AC dari PLN menjadi arus DC untuk motherboard dinamakan...",
    options: ["Inverter", "Power Supply Unit (PSU)", "Stabilizer", "UPS"],
    answer: 1,
    exp: "PSU mendistribusikan tegangan searah DC ke komponen PC."
  },
  {
    q: "Media penyimpanan sekunder berbasis chip flash nirkipas yang jauh lebih cepat dibanding Harddisk mekanik adalah...",
    options: ["Floppy Disk", "SSD (Solid State Drive)", "CD-ROM", "Tape Drive"],
    answer: 1,
    exp: "SSD membaca data secara elektronik tanpa piringan berputar, menghasilkan kecepatan sangat tinggi."
  },
  {
    q: "Cairan pasta yang dioleskan di atas Processor sebelum dipasangi Heatsink Fan berfungsi untuk...",
    options: ["Merekatkan processor", "Penghantar panas dari Processor ke Heatsink", "Mencegah arus pendek listrik", "Membersihkan debu"],
    answer: 1,
    exp: "Thermal paste mengisi celah udara mikroskopis agar transfer panas maksimal."
  },
  {
    q: "Slot pada motherboard yang khusus digunakan untuk memasang Kartu Grafis (VGA Card) modern adalah...",
    options: ["PCIe x16", "Slot RAM DDR", "Socket LGA", "Port SATA"],
    answer: 0,
    exp: "Slot PCI Express x16 menyediakan jalur data paling cepat untuk pemrosesan grafis."
  },
  {
    q: "Bunyi beep 1 kali pendek saat PC dinyalakan pada BIOS standar umumnya menandakan...",
    options: ["Kerusakan RAM", "Sistem Boot Normal / POST Berhasil", "Kerusakan VGA", "Power Supply Rusak"],
    answer: 1,
    exp: "Satu beep pendek mengindikasikan pemeriksaan POST (Power-On Self-Test) berjalan normal."
  },

  // 10. Instalasi Sistem Operasi (73-80)
  {
    q: "Format sistem berkas (file system) standar pada instalasi sistem operasi Windows modern adalah...",
    options: ["FAT32", "EXT4", "NTFS", "APFS"],
    answer: 2,
    exp: "NTFS (New Technology File System) adalah file system utama yang dipakai Windows."
  },
  {
    q: "Sistem berkas utama yang paling banyak digunakan pada instalasi OS Linux adalah...",
    options: ["NTFS", "FAT16", "EXT4", "HFS+"],
    answer: 2,
    exp: "Linux menggunakan keluarga Extended File System seperti EXT4 untuk partisinya."
  },
  {
    q: "Program firmware dasar pada motherboard yang mengatur booting perangkat lunak dinamakan...",
    options: ["BIOS / UEFI", "Kernel", "Driver", "Bootloader"],
    answer: 0,
    exp: "BIOS/UEFI mengeksekusi inisialisasi hardware dan mencari media booting."
  },
  {
    q: "Perintah atau tombol keyboard yang umum ditekan saat menyalakan komputer untuk masuk menu BIOS adalah...",
    options: ["Delete / F2", "Enter / Space", "Alt + F4", "Ctrl + C"],
    answer: 0,
    exp: "Tombol Del, F2, atau F12 secara umum dipakai pabrikan untuk memasuki setup BIOS."
  },
  {
    q: "Perangkat lunak gratis yang populer untuk membuat Bootable USB Flashdisk installer OS adalah...",
    options: ["Rufus", "CorelDraw", "WinRAR", "VLC Player"],
    answer: 0,
    exp: "Rufus dapat menyalin berkas ISO OS ke flashdisk menjadi media booting."
  },
  {
    q: "Tipe tabel partisi harddisk modern pengganti MBR yang mendukung kapasitas drive di atas 2 TB adalah...",
    options: ["GPT (GUID Partition Table)", "FAT", "EXT2", "NTFS"],
    answer: 0,
    exp: "GPT mendukung hingga 128 partisi primer dan kapasitas berkali lipat dari MBR."
  },
  {
    q: "Proses membagi ruang fisik harddisk menjadi beberapa bagian logis dinamakan...",
    options: ["Formatting", "Partitioning", "Defragging", "Cloning"],
    answer: 1,
    exp: "Partisi membagi kapasitas drive fisik menjadi ruang Drive C:, D:, dan seterusnya."
  },
  {
    q: "Guna menghubungkan perangkat keras dengan sistem operasi agar dapat beroperasi maksimal dibutuhkan...",
    options: ["Driver Hardware", "Antivirus", "Microsoft Office", "Archiver"],
    answer: 0,
    exp: "Driver menterjemahkan instruksi OS ke bahasa kontrol fisik perangkat keras."
  },

  // 11. Jaringan Dasar & Kabel (81-88)
  {
    q: "Urutan pin kabel Straight-Through menggunakan standar T568B di kedua ujungnya memiliki fungsi utama untuk...",
    options: ["Menghubungkan dua PC langsung", "Menghubungkan Router ke Router", "Menghubungkan PC ke Switch", "Menghubungkan Switch ke Switch"],
    answer: 2,
    exp: "Kabel Straight digunakan untuk menghubungkan dua perangkat berlainan jenis (misal PC ke Switch)."
  },
  {
    q: "Jenis susunan kabel UTP Crossover digunakan untuk menghubungkan...",
    options: ["Dua perangkat yang sejenis (misal PC ke PC)", "PC ke Switch", "Switch ke Access Point", "Router ke Modem"],
    answer: 0,
    exp: "Kabel Crossover menukar pin TX dan RX untuk menghubungkan 2 perangkat sejenis secara langsung."
  },
  {
    q: "Warna kabel T568B pada pin nomor 1 secara berurutan adalah...",
    options: ["Putih Oren", "Oren", "Putih Hijau", "Biru"],
    answer: 0,
    exp: "Standar T568B: 1. Putih Oren, 2. Oren, 3. Putih Hijau, 4. Biru, dst."
  },
  {
    q: "Warna kabel T568A pada pin nomor 1 secara berurutan adalah...",
    options: ["Putih Hijau", "Hijau", "Putih Oren", "Cokelat"],
    answer: 0,
    exp: "Standar T568A: 1. Putih Hijau, 2. Hijau, 3. Putih Oren, 4. Biru, dst."
  },
  {
    q: "Pin pada konektor RJ-45 kabel UTP 10/100 Mbps yang aktif memancarkan data (Transmit Data) adalah pin...",
    options: ["Pin 1 dan 2", "Pin 3 dan 6", "Pin 4 dan 5", "Pin 7 dan 8"],
    answer: 0,
    exp: "Pin 1 dan 2 digunakan sebagai jalur TX (Transmit Data)."
  },
  {
    q: "Pin pada konektor RJ-45 kabel UTP 10/100 Mbps yang bertugas menerima data (Receive Data) adalah...",
    options: ["Pin 1 dan 2", "Pin 3 dan 6", "Pin 4 dan 5", "Pin 7 dan 8"],
    answer: 1,
    exp: "Pin 3 dan 6 difungsikan sebagai jalur RX (Receive Data)."
  },
  {
    q: "Kabel Roll-Over (Console Cable) biasanya digunakan oleh teknisi untuk...",
    options: ["Koneksi Internet", "Konfigurasi awal Router/Switch Mikrotik/Cisco dari PC", "Mentransfer lagu", "Koneksi Printer"],
    answer: 1,
    exp: "Kabel Console menghubungkan Port Serial PC ke Port Console Router/Switch."
  },
  {
    q: "Teknologi PoE (Power over Ethernet) memungkinkan transmisi data dan...",
    options: ["Sinyal TV", "Daya Listrik melalui kabel UTP", "Serat Cahaya", "Gas Kuliner"],
    answer: 1,
    exp: "PoE mengalirkan daya listrik arus searah beserta data LAN pada satu kabel UTP."
  },

  // 12. Alat Ukur & Pemeliharaan TJKT (89-96)
  {
    q: "Alat penguji keterhubungan konektivitas kabel UTP yang memiliki indikator LED 1 sampai 8 dinamakan...",
    options: ["Multitester", "LAN Tester", "OTDR", "Tang Crimp"],
    answer: 1,
    exp: "LAN Tester digunakan untuk memastikan 8 pin kabel UTP terpasang presisi pada konektor."
  },
  {
    q: "Alat pemotong dan pemipih pin konektor RJ-45 dinamakan...",
    options: ["Stripper", "Tang Crimping", "Solder", "Obeng Plus"],
    answer: 1,
    exp: "Tang Crimping digunakan untuk mengunci pin emas pada RJ-45 ke kawat kabel UTP."
  },
  {
    q: "Alat untuk mengupas kulit luar kabel UTP tanpa merusak kawat di dalamnya adalah...",
    options: ["Cable Stripper", "Tang Potong Besi", "Cutter", "Gunting Paper"],
    answer: 0,
    exp: "Cable Stripper dirancang memotong jaket kabel luar secara presisi."
  },
  {
    q: "Perangkat ukur listrik yang dapat mengukur Tegangan (Volt), Arus (Ampere), dan Hambatan (Ohm) adalah...",
    options: ["Multimeter / Avometer", "LAN Tester", "Spectrum Analyzer", "Barometer"],
    answer: 0,
    exp: "Avometer (Ampere, Volt, Ohm Meter) mengukur parameter kelistrikan."
  },
  {
    q: "Alat ukur canggih pada Fiber Optic untuk mendeteksi lokasi titik kabel putus dinamakan...",
    options: ["OTDR (Optical Time Domain Reflectometer)", "Visual Fault Locator", "Optical Power Meter", "Splicer"],
    answer: 0,
    exp: "OTDR memancarkan sinyal cahaya dan mengukur redaman serta lokasi jarak kabel terputus."
  },
  {
    q: "Senter laser merah khusus yang dicolok ke kabel Fiber Optic untuk mengecek kebocoran sinyal dinamakan...",
    options: ["Visual Fault Locator (VFL)", "Fusion Splicer", "LAN Tester", "OTDR"],
    answer: 0,
    exp: "VFL memancarkan sinar laser merah tampak mata untuk mendeteksi tekukan atau patahan core."
  },
  {
    q: "Perangkat yang digunakan untuk mengukur besarnya daya redaman sinyal cahaya pada Fiber Optic dinamakan...",
    options: ["OPM (Optical Power Meter)", "OTDR", "Stripper", "Cleaver"],
    answer: 0,
    exp: "OPM mengukur kekuatan intensitas daya sinyal optik dalam satuan dBm."
  },
  {
    q: "Cairan kimia khusus yang disemprotkan untuk membersihkan debu pada komponen motherboard adalah...",
    options: ["Air Keran", "Contact Cleaner / Isopropyl Alcohol", "Minyak Goreng", "Oli Mesin"],
    answer: 1,
    exp: "Contact cleaner cepat menguap dan aman tidak menghantarkan arus pendek listrik."
  },

  // ==================== KELAS 11 ====================
  // 13. Subnetting Dasar (97-104)
  {
    q: "Subnet mask default untuk IPv4 Kelas C adalah...",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    answer: 2,
    exp: "Kelas C memiliki panjang prefix default /24 dengan mask 255.255.255.0."
  },
  {
    q: "Jumlah total IP Address yang dihasilkan dari prefix /28 adalah...",
    options: ["16", "32", "64", "128"],
    answer: 0,
    exp: "Rumus 2^(32-28) = 2^4 = 16 IP Address."
  },
  {
    q: "Berapa jumlah IP Usable (alamat IP host yang dapat digunakan) pada subnet mask /24?",
    options: ["256", "254", "252", "128"],
    answer: 1,
    exp: "Prefix /24 memiliki total 256 IP, dikurangi 1 IP Network dan 1 IP Broadcast, menyisakan 254 IP Usable."
  },
  {
    q: "Nilai subnet mask dari prefix /26 adalah...",
    options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"],
    answer: 1,
    exp: "Bit subnet /26 memiliki 2 bit aktif pada oktet terakhir (11000000 = 192)."
  },
  {
    q: "Metode penulisan subnet mask menggunakan tanda garis miring diikuti jumlah bit network (contoh /24) dinamakan...",
    options: ["CIDR (Classless Inter-Domain Routing)", "VLSM", "DNS", "DHCP"],
    answer: 0,
    exp: "CIDR merepresentasikan panjang bit presisi subnet mask menggunakan slash."
  },
  {
    q: "Alamat pertama dari sebuah blok subnetting yang tidak dapat diisikan pada komputer host dinamakan...",
    options: ["IP Host", "IP Network", "IP Broadcast", "IP Gateway"],
    answer: 1,
    exp: "IP Network merepresentasikan identitas kelompok jaringan."
  },
  {
    q: "Alamat terakhir dari suatu blok subnet yang digunakan untuk mengirim pesan ke seluruh host dinamakan...",
    options: ["IP Network", "IP Broadcast", "IP Unicast", "IP Subnet"],
    answer: 1,
    exp: "IP Broadcast difungsikan untuk mengirim data serentak ke semua host dalam subnet."
  },
  {
    q: "Jumlah host usable pada prefix /30 yang biasa digunakan untuk koneksi Point-to-Point antar Router adalah...",
    options: ["1", "2", "4", "8"],
    answer: 1,
    exp: "Prefix /30 menghasilkan 4 IP (1 Network, 1 Broadcast, dan 2 IP Usable untuk 2 router)."
  },

  // 14. Model Referensi OSI Layer (105-112)
  {
    q: "Layer OSI ke-4 yang bertugas melakukan segmentation dan flow control data adalah...",
    options: ["Network Layer", "Transport Layer", "Session Layer", "Data Link Layer"],
    answer: 1,
    exp: "Transport Layer berada di urutan ke-4 pada model referensi OSI."
  },
  {
    q: "Data Unit (PDU) pada Layer 3 (Network) dinamakan...",
    options: ["Frame", "Packet", "Segment", "Bits"],
    answer: 1,
    exp: "Data di Layer 1 = Bits, Layer 2 = Frame, Layer 3 = Packet, Layer 4 = Segment."
  },
  {
    q: "Urutan Layer OSI dari tingkatan paling bawah (Layer 1) hingga paling atas (Layer 7) adalah...",
    options: ["Physical, Data Link, Network, Transport, Session, Presentation, Application", "Application, Presentation, Session, Transport, Network, Data Link, Physical", "Physical, Network, Data Link, Transport, Session, Presentation, Application", "Data Link, Physical, Network, Session, Transport, Application, Presentation"],
    answer: 0,
    exp: "Urutan dari Layer 1 ke 7: Physical -> Data Link -> Network -> Transport -> Session -> Presentation -> Application."
  },
  {
    q: "Layer OSI yang bertugas mengelola enkripsi, kompresi data, dan penerjemahan format berkas adalah...",
    options: ["Presentation Layer", "Application Layer", "Session Layer", "Transport Layer"],
    answer: 0,
    exp: "Presentation Layer (Layer 6) menangani sintaksis, kompresi, dan enkripsi data."
  },
  {
    q: "Layer yang langsung berinteraksi dengan pengguna melalui perangkat lunak seperti browser web adalah...",
    options: ["Layer 7 (Application)", "Layer 1 (Physical)", "Layer 3 (Network)", "Layer 5 (Session)"],
    answer: 0,
    exp: "Application Layer memberikan antarmuka langsung ke aplikasi pengguna."
  },
  {
    q: "Protokol HTTP, HTTPS, FTP, dan SMTP bekerja pada OSI model pada tingkatan...",
    options: ["Layer 1", "Layer 3", "Layer 4", "Layer 7"],
    answer: 3,
    exp: "Protokol-protokol tersebut beroperasi pada Layer 7 Application."
  },
  {
    q: "Sub-layer Data Link yang berinteraksi langsung dengan kartu jaringan fisik (MAC Address) adalah...",
    options: ["MAC (Media Access Control)", "LLC (Logical Link Control)", "IP Layer", "TCP Layer"],
    answer: 0,
    exp: "Layer Data Link terbagi menjadi dua sub-layer: LLC dan MAC."
  },
  {
    q: "Pengodean sinyal listrik dan spesifikasi fisik konektor kabel berada pada tingkatan OSI...",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Session Layer"],
    answer: 0,
    exp: "Layer Physical menangani transmisi bit mentah melintasi media fisik."
  },

  // 15. Protocol Suite TCP/IP (113-120)
  {
    q: "Protokol yang mentransfer berkas antar komputer melalui port 21 secara default dinamakan...",
    options: ["SSH", "HTTP", "FTP", "SMTP"],
    answer: 2,
    exp: "FTP (File Transfer Protocol) berjalan pada port 20 dan 21."
  },
  {
    q: "Protokol transmisi data pada Layer Transport yang bersifat Connection-Oriented dan menjamin keutuhan data adalah...",
    options: ["UDP", "TCP", "IP", "ICMP"],
    answer: 1,
    exp: "TCP (Transmission Control Protocol) menggunakan mekanisme 3-way handshake untuk memastikan data sampai dengan utuh."
  },
  {
    q: "Protokol transport yang bersifat Connectionless dan mengutamakan kecepatan tanpa garansi pengiriman adalah...",
    options: ["TCP", "UDP", "HTTP", "SSH"],
    answer: 1,
    exp: "UDP (User Datagram Protocol) digunakan untuk streaming dan game online yang mengejar kecepatan."
  },
  {
    q: "Port default yang digunakan oleh protokol secure web HTTPS adalah...",
    options: ["80", "8080", "443", "22"],
    answer: 2,
    exp: "HTTPS menggunakan port terenkripsi SSL/TLS 443."
  },
  {
    q: "Protokol yang bertugas mentranslasikan alamat IP menjadi MAC Address fisik pada LAN dinamakan...",
    options: ["ARP (Address Resolution Protocol)", "DHCP", "DNS", "NAT"],
    answer: 0,
    exp: "ARP memetakan alamat IP ke MAC Address perangkat tujuan."
  },
  {
    q: "Protokol yang digunakan untuk memetakan nama domain ke alamat IP numerik dinamakan...",
    options: ["DNS", "DHCP", "FTP", "SNMP"],
    answer: 0,
    exp: "DNS (Domain Name System) memetakan nama situs ke IP Server."
  },
  {
    q: "Protokol pesan kontrol inter-network yang dipakai oleh perintah PING untuk menguji konektivitas adalah...",
    options: ["ICMP", "IGMP", "SMTP", "POP3"],
    answer: 0,
    exp: "ICMP (Internet Control Message Protocol) mengirimkan paket echo request & reply."
  },
  {
    q: "Protokol pengiriman e-mail antar server di internet menggunakan port 25 dinamakan...",
    options: ["POP3", "IMAP", "SMTP", "HTTP"],
    answer: 2,
    exp: "SMTP (Simple Mail Transfer Protocol) mengelola pengiriman surat elektronik."
  },

  // 16. Konsep & Jenis Routing (121-128)
  {
    q: "Routing yang pengisian tabel routing-nya dimasukkan secara manual oleh administrator dinamakan...",
    options: ["Dynamic Routing", "Static Routing", "Default Routing", "BGP Routing"],
    answer: 1,
    exp: "Static Routing dikonfigurasi secara manual jalur demi jalur oleh administrator."
  },
  {
    q: "Protokol routing dinamis yang menggunakan algoritma Link-State untuk menentukan jalur terbaik dalam jaringan internal dinamakan...",
    options: ["RIP", "OSPF", "BGP", "Static Route"],
    answer: 1,
    exp: "OSPF (Open Shortest Path First) adalah protokol dynamic routing link-state yang sangat efisien."
  },
  {
    q: "Metrik utama yang dipakai oleh protokol routing RIP (Routing Information Protocol) adalah...",
    options: ["Bandwidth", "Hop Count", "Delay", "Cost"],
    answer: 1,
    exp: "RIP mengukur jarak jalur berdasarkan jumlah lompatan router (Hop Count max 15)."
  },
  {
    q: "Protokol Exterior Gateway Protocol (EGP) utama yang digunakan untuk pertukaran routing antar Autonomous System (AS) di internet global adalah...",
    options: ["BGP (Border Gateway Protocol)", "OSPF", "EIGRP", "RIPv2"],
    answer: 0,
    exp: "BGP menghubungkan jaringan ISP antar benua di seluruh dunia."
  },
  {
    q: "Perintah CLI Mikrotik untuk melihat isi tabel routing adalah...",
    options: ["/ip route print", "ipconfig /all", "show running-config", "route -n"],
    answer: 0,
    exp: "Menu `/ip route print` menampilkan rute aktif pada RouterOS Mikrotik."
  },
  {
    q: "Jalur rute cadangan yang hanya aktif jika jalur utama terputus dinamakan...",
    options: ["Default Route", "Floating Static Route / Backup Route", "Equal Cost Route", "Null Route"],
    answer: 1,
    exp: "Floating route diset dengan distance lebih tinggi sebagai jalur cadangan."
  },
  {
    q: "Penanda jalur routing `0.0.0.0/0` pada tabel rute mengindikasikan konfigurasi...",
    options: ["Static Default Route ke Internet", "Loopback Route", "Broadcast Route", "Invalid Route"],
    answer: 0,
    exp: "0.0.0.0/0 mewakili seluruh tujuan IP yang tidak ada di tabel spesifik."
  },
  {
    q: "Nilai Administrative Distance (AD) bawaan untuk Static Route pada Mikrotik / Cisco adalah...",
    options: ["0", "1", "110", "120"],
    answer: 1,
    exp: "Static route memiliki nilai AD sangat dipercaya yaitu 1."
  },

  // 17. Switching & Virtual LAN (VLAN) (129-136)
  {
    q: "Teknologi yang memungkinkan pembagian satu Switch fisik menjadi beberapa kelompok logika jaringan dinamakan...",
    options: ["VLAN", "VPN", "NAT", "Proxy"],
    answer: 0,
    exp: "VLAN (Virtual Local Area Network) mengisolasi broadcast domain pada Layer 2 Switch secara logis."
  },
  {
    q: "Mode port Switch yang menghubungkan Switch dengan Switch lain untuk membawa banyak VLAN adalah...",
    options: ["Access Port", "Trunk Port", "Hybrid Port", "Dynamic Port"],
    answer: 1,
    exp: "Trunking membawa lalu lintas beberapa ID VLAN sekaligus melalui satu jalur fisik."
  },
  {
    q: "Mode port Switch yang hanya terhubung ke satu perangkat komputer/klien dan hanya membawa 1 ID VLAN adalah...",
    options: ["Trunk Port", "Access Port", "Console Port", "Promiscuous Port"],
    answer: 1,
    exp: "Access Port menyalurkan data ke end-device pada satu VLAN spesifik."
  },
  {
    q: "Standar protokol IEEE yang mengatur penandaan (tagging) frame VLAN pada jalur Trunk adalah...",
    options: ["IEEE 802.1Q", "IEEE 802.11a", "IEEE 802.3", "IEEE 802.1X"],
    answer: 0,
    exp: "802.1Q menambahkan tag VLAN ID 4-byte pada ethernet frame."
  },
  {
    q: "Metode menghubungkan antar VLAN yang berbeda subnet agar dapat saling berkomunikasi membutuhkan peran...",
    options: ["Inter-VLAN Routing (Router / Switch Layer 3)", "Hub Unmanaged", "Kabel Coaxial", "Access Point"],
    answer: 0,
    exp: "VLAN mengisolasi jaringan, sehingga butuh Router/Switch L3 untuk melewatkan lalu lintas antar VLAN."
  },
  {
    q: "Manfaat utama dari penerapan VLAN pada jaringan perusahaan adalah...",
    options: ["Meningkatkan efisiensi keamanan dan memperkecil Broadcast Domain", "Menghapus kebutuhan kabel UTP", "Membuat kecepatan internet otomatis naik 10x", "Menghilangkan penggunaan IP Address"],
    answer: 0,
    exp: "VLAN menyekat broadcast domain sehingga lalu lintas lebih aman dan efisien."
  },
  {
    q: "VLAN bawaan yang sudah ada saat pertama kali Switch dinyalakan secara default bernilai ID...",
    options: ["VLAN 0", "VLAN 1", "VLAN 100", "VLAN 4095"],
    answer: 1,
    exp: "VLAN ID 1 adalah default management VLAN pada sebagian besar Switch."
  },
  {
    q: "Rentang VLAN ID standar (Normal Range) yang dapat dialokasikan adalah...",
    options: ["1 hingga 1005", "1006 hingga 4094", "1 hingga 255", "0 hingga 65535"],
    answer: 0,
    exp: "Normal range VLAN ID berkisar antara 1 - 1005."
  },

  // 18. Administrasi Infrastruktur Jaringan (AIJ) (137-144)
  {
    q: "Metode pembagian alokasi IP Address berdasarkan kebutuhan variasi ukuran subnet dinamakan...",
    options: ["FLSM", "VLSM", "CIDR", "DHCP"],
    answer: 1,
    exp: "VLSM (Variable Length Subnet Mask) memungkinkan penggunaan mask yang fleksibel."
  },
  {
    q: "Sistem operasi khusus buatan Latvia yang sangat populer dipakai pada perangkat Routerboard dinamakan...",
    options: ["Cisco IOS", "Mikrotik RouterOS", "Debian Linux", "PFsense"],
    answer: 1,
    exp: "RouterOS adalah sistem operasi handal besutan Mikrotik."
  },
  {
    q: "Aplikasi antarmuka GUI berbasis Windows untuk meremote dan mengonfigurasi Mikrotik dinamakan...",
    options: ["Winbox", "PuTTY", "FileZilla", "Wireshark"],
    answer: 0,
    exp: "Winbox merupakan utilitas GUI resmi keluaran Mikrotik."
  },
  {
    q: "Fitur Mikrotik yang berfungsi memberikan halaman login autentikasi sebelum pengguna terhubung internet dinamakan...",
    options: ["Hotspot", "Web Proxy", "IP Binding", "Firewall Filter"],
    answer: 0,
    exp: "Hotspot Mikrotik menyediakan Captive Portal login untuk pengguna."
  },
  {
    q: "Kelebihan utama metode pembagian subnet VLSM dibandingkan FLSM adalah...",
    options: ["Lebih hemat dalam alokasi IP Address", "Lebih lambat", "Membutuhkan kabel fiber", "Tidak butuh IP Gateway"],
    answer: 0,
    exp: "VLSM menyesuaikan kebutuhan host sehingga tidak ada IP tersisa yang terbuang sia-sia."
  },
  {
    q: "Perintah untuk mereset konfigurasi Mikrotik ke setelan pabrik tanpa menyimpan file backup lewat CLI adalah...",
    options: ["/system reset-configuration no-defaults=yes", "reboot", "shutdown", "/ip address remove all"],
    answer: 0,
    exp: "Reset-configuration menghapus seluruh konfigurasi sistem."
  },
  {
    q: "Protokol redundancy pada Router yang membuat beberapa router bertindak sebagai satu Virtual Gateway adalah...",
    options: ["VRRP (Virtual Router Redundancy Protocol)", "VLAN", "VPN", "OSPF"],
    answer: 0,
    exp: "VRRP menyediakan ketersediaan gateway tinggi (failover otomatis)."
  },
  {
    q: "Aplikasi emulator jaringan populer untuk mensimulasikan router Cisco dan Mikrotik secara virtual adalah...",
    options: ["Cisco Packet Tracer / GNS3 / EVE-NG", "Adobe Photoshop", "Microsoft Word", "Sublime Text"],
    answer: 0,
    exp: "GNS3, EVE-NG, dan Packet Tracer adalah alat simulasi topologi jaringan komputer."
  },

  // 19. Administrasi Sistem Jaringan (ASJ) (145-152)
  {
    q: "Layanan yang memberikan IP Address otomatis kepada klien dalam jaringan dinamakan...",
    options: ["DNS Server", "DHCP Server", "Web Server", "FTP Server"],
    answer: 1,
    exp: "DHCP (Dynamic Host Configuration Protocol) mengalokasikan IP secara terpusat."
  },
  {
    q: "Dalam konfigurasi server DNS BIND9 pada Linux, file zone yang berfungsi memetakan nama domain ke alamat IP dinamakan...",
    options: ["Forward Zone", "Reverse Zone", "resolv.conf", "hosts.deny"],
    answer: 0,
    exp: "Forward Zone memetakan Domain -> IP Address, sedangkan Reverse Zone memetakan IP Address -> Domain."
  },
  {
    q: "Sistem Operasi Server berbasis Open Source berlogo pusaran merah yang sangat populer untuk infrastruktur server adalah...",
    options: ["Debian / Ubuntu Server", "Windows 11 Home", "MacOS", "Android"],
    answer: 0,
    exp: "Debian merupakan distro Linux server yang stabil dan berbasis Open Source."
  },
  {
    q: "File konfigurasi DNS Resolver lokal pada Linux yang berisi alamat IP DNS Server rujukan terletak di...",
    options: ["/etc/resolv.conf", "/etc/network/interfaces", "/etc/dhcp/dhcpd.conf", "/var/www/html"],
    answer: 0,
    exp: "File `/etc/resolv.conf` menyimpan IP Nameserver rujukan sistem Linux."
  },
  {
    q: "Aplikasi DHCP Server yang umum diinstal pada sistem operasi Debian Linux adalah...",
    options: ["isc-dhcp-server", "apache2", "bind9", "vsftpd"],
    answer: 0,
    exp: "Paket `isc-dhcp-server` mengelola alokasi IP otomatis pada Linux."
  },
  {
    q: "Jangkauan rentang IP yang dibagikan otomatis oleh DHCP Server kepada klien dinamakan...",
    options: ["DHCP Pool / Scope", "DHCP Lease Time", "DHCP Relay", "DHCP Reservation"],
    answer: 0,
    exp: "DHCP Pool menentukan range batas bawah hingga batas atas IP otomatis."
  },
  {
    q: "Masa berlaku sewa alokasi IP Address yang diberikan DHCP Server kepada komputer klien dinamakan...",
    options: ["Lease Time", "Renewal Time", "Expiration Date", "Timeout"],
    answer: 0,
    exp: "DHCP Lease Time menentukan durasi berapa lama IP boleh dipakai sebelum diperbarui."
  },
  {
    q: "Perintah CLI Debian untuk merestart layanan jaringan adalah...",
    options: ["systemctl restart networking", "service apache2 restart", "reboot now", "ifconfig down"],
    answer: 0,
    exp: "Command `systemctl restart networking` menerapkan ulang setelan interface jaringan."
  },

  // 20. Teknologi Jaringan Berbasis Luas (WAN) (153-160)
  {
    q: "Perangkat yang mengonversi sinyal digital komputer ke sinyal analog atau sebaliknya dinamakan...",
    options: ["Router", "Modem", "Switch", "Hub"],
    answer: 1,
    exp: "Modem singkatan dari Modulator Demodulator."
  },
  {
    q: "Teknologi jaringan nirkabel jarak jauh berbasis seluler generasi ke-5 yang menawarkan latency sangat rendah adalah...",
    options: ["5G NR", "4G LTE", "3G HSDPA", "2G EDGE"],
    answer: 0,
    exp: "5G memberikan kecepatan gigabit dan keterlambatan sinyal (latency) di bawah 5 ms."
  },
  {
    q: "Teknologi komunikasi satelit yang digunakan untuk daerah terpencil / daerah 3T dinamakan...",
    options: ["VSAT (Very Small Aperture Terminal)", "ADSL", "Dial-Up", "FTTH"],
    answer: 0,
    exp: "VSAT memanfaatkan antena parabola untuk terhubung langsung ke satelit."
  },
  {
    q: "Teknologi koneksi DSL yang memiliki kecepatan unduh (download) dan unggah (upload) simetris dinamakan...",
    options: ["SDSL", "ADSL", "VDSL", "HDSL"],
    answer: 0,
    exp: "SDSL (Symmetric DSL) menyediakan bandwith upload dan download yang seimbang."
  },
  {
    q: "Garis batas fisik pemisah antara peralatan milik pelanggan (CPE) dan peralatan penyedia layanan (ISP) dinamakan...",
    options: ["Demarcation Point (Demarc)", "Local Loop", "CO (Central Office)", "WAN Switch"],
    answer: 0,
    exp: "Demarcation Point menandai titik tanggung jawab teknis antara ISP dan pelanggan."
  },
  {
    q: "Kabel tembaga jaringan telepon dari rumah pelanggan menuju kantor pusat ISP dinamakan...",
    options: ["Local Loop", "Backbone", "Trunk", "Drop Cable"],
    answer: 0,
    exp: "Local Loop adalah sambungan fisik segmen terakhir ke tempat pelanggan."
  },
  {
    q: "Protokol Encapsulation WAN Point-to-Point yang mendukung fitur autentikasi PAP dan CHAP adalah...",
    options: ["PPP (Point-to-Point Protocol)", "HDLC", "Frame Relay", "ATM"],
    answer: 0,
    exp: "PPP menyediakan fitur enkripsi, kompresi, dan autentikasi aman."
  },
  {
    q: "Protokol Autentikasi PPP yang mengirimkan kata sandi secara polos tanpa terenkripsi (Plaintext) adalah...",
    options: ["PAP (Password Authentication Protocol)", "CHAP", "MS-CHAP", "EAP"],
    answer: 0,
    exp: "PAP kurang aman karena mengirim enkripsi password dalam wujud teks terbuka."
  },

  // 21. Keamanan Jaringan & Cyber Security (161-168)
  {
    q: "Upaya penipuan berbasis rekayasa sosial (social engineering) untuk mencuri kredensial akun dinamakan...",
    options: ["Phishing", "DDoS", "Malware", "Ransomware"],
    answer: 0,
    exp: "Phishing mengelabui korban melalui pesan atau situs tiruan."
  },
  {
    q: "Jenis serangan cyber yang membanjiri lalu lintas server dengan trafik buatan hingga server melambat / crash dinamakan...",
    options: ["DDoS (Distributed Denial of Service)", "Man-in-the-Middle", "SQL Injection", "Cross-Site Scripting"],
    answer: 0,
    exp: "DDoS melumpuhkan ketersediaan server dengan membanjiri request dari banyak botnet."
  },
  {
    q: "Perangkat lunak jahat yang mengunci/mengenkripsi data korban dan meminta tebusan uang dinamakan...",
    options: ["Ransomware", "Spyware", "Adware", "Trojan"],
    answer: 0,
    exp: "Ransomware menyandera data berharga hingga tebusan dibayarkan."
  },
  {
    q: "Serangan cyber di mana peretas menyusup di tengah-tengah jalur komunikasi antara dua pihak dinamakan...",
    options: ["Man-in-the-Middle (MitM)", "Brute Force", "Zero Day Attack", "Phishing"],
    answer: 0,
    exp: "MitM mengintip atau menguji lalu lintas data terlarang di tengah jalur."
  },
  {
    q: "Serangan yang mencoba meretas password dengan cara menebak semua kombinasi karakter secara berulang dinamakan...",
    options: ["Brute Force Attack", "Phishing", "IP Spoofing", "SQL Injection"],
    answer: 0,
    exp: "Brute force mencoba kombinasi kata kunci berturut-turut hingga cocok."
  },
  {
    q: "Metode autentikasi keamanan yang meminta dua langkah verifikasi (misal Password + Kode OTP) dinamakan...",
    options: ["2FA / MFA (Two-Factor Authentication)", "SSO", "RADIUS", "CHAP"],
    answer: 0,
    exp: "2FA menambah lapisan perlindungan kedua selain password biasa."
  },
  {
    q: "Istilah bagi peretas beretika yang menggunakan keahliannya untuk menemukan celah keamanan demi diperbaiki adalah...",
    options: ["White Hat Hacker / Ethical Hacker", "Black Hat Hacker", "Cracker", "Script Kiddie"],
    answer: 0,
    exp: "White Hat Hacker bekerja secara legal menguji keamanan sistem."
  },
  {
    q: "Istilah peretas pemula yang hanya menggunakan skrip atau aplikasi peretas buatan orang lain dinamakan...",
    options: ["Script Kiddie", "White Hat", "Cyber Terrorist", "Developer"],
    answer: 0,
    exp: "Script Kiddie tidak memahami mendalam cara kerja eksploitasi, hanya memakai alat yang sudah jadi."
  },

  // 22. Firewall & Keamanan Jaringan (169-176)
  {
    q: "Sistem keamanan yang menyaring lalu lintas data masuk dan keluar jaringan berdasarkan aturan dinamakan...",
    options: ["Proxy", "Firewall", "NAT", "VPN"],
    answer: 1,
    exp: "Firewall bertindak sebagai benteng penyaring lalu lintas paket data."
  },
  {
    q: "Tindakan Firewall Mikrotik yang menolak paket data secara diam-diam tanpa mengirim balasan ICMP dinamakan...",
    options: ["Drop", "Reject", "Accept", "Passthrough"],
    answer: 0,
    exp: "Action Drop mengabaikan paket tanpa memberikan balasan pesan ke pengirim."
  },
  {
    q: "Tindakan Firewall Mikrotik yang membuang paket data tetapi memberikan balasan pesan penolakan dinamakan...",
    options: ["Reject", "Drop", "Log", "Jump"],
    answer: 0,
    exp: "Reject membuang paket dan memberitahu pengirim via ICMP unreachable."
  },
  {
    q: "Rantai (Chain) pada Firewall Filter Mikrotik yang mengontrol paket data yang ditujukan langsung ke router itu sendiri adalah...",
    options: ["Input", "Forward", "Output", "Prerouting"],
    answer: 0,
    exp: "Chain Input menyaring lalu lintas paket yang menuju ke IP lokal Router."
  },
  {
    q: "Rantai (Chain) pada Firewall Mikrotik yang menangani paket data melintas antar klien melewati router dinamakan...",
    options: ["Forward", "Input", "Output", "Postrouting"],
    answer: 0,
    exp: "Chain Forward mengontrol trafik yang hanya menumpang lewat router."
  },
  {
    q: "Firewall yang dapat memeriksa isi konten paket data hingga Layer 7 Application dinamakan...",
    options: ["Deep Packet Inspection (DPI) / Layer 7 Firewall", "Packet Filtering", "Stateful Inspection", "Circuit Level"],
    answer: 0,
    exp: "DPI mampu memeriksa muatan data aplikasi seperti lalu lintas streaming."
  },
  {
    q: "Fungsi dari DMZ (Demilitarized Zone) pada arsitektur keamanan jaringan adalah...",
    options: ["Isolasi server publik agar terpisah dari jaringan internal lokal", "Mempercepat internet", "Menghapus log router", "Mencegah korsleting listrik"],
    answer: 0,
    exp: "DMZ menempatkan server publik di zona terisolasi untuk melindungi LAN internal."
  },
  {
    q: "Aplikasi Firewall bawaan pada sistem operasi Linux Ubuntu dinamakan...",
    options: ["UFW (Uncomplicated Firewall)", "Windows Defender", "PFsense", "IPFire"],
    answer: 0,
    exp: "UFW adalah antarmuka simpel pengelola IPTables di Ubuntu/Debian."
  },

  // ==================== KELAS 12 ====================
  // 23. Server & Layanan Jaringan (177-184)
  {
    q: "Aplikasi web server populer berbasis Open Source di Linux Debian adalah...",
    options: ["Apache / Nginx", "BIND9", "Proftpd", "Postfix"],
    answer: 0,
    exp: "Apache dan Nginx merupakan HTTP Server paling umum di Linux."
  },
  {
    q: "Direktori standar tempat menyimpan dokumen file HTML Web Server Apache di Linux Debian berada di...",
    options: ["/var/www/html", "/home/user", "/etc/apache2", "/usr/bin"],
    answer: 0,
    exp: "Folder `/var/www/html` adalah Root Document default Apache."
  },
  {
    q: "Aplikasi FTP Server yang sangat populer karena kestabilan dan kemudahan konfigurasinya pada Linux dinamakan...",
    options: ["vsftpd / ProFTPD", "Bind9", "Squid", "Samba"],
    answer: 0,
    exp: "vsftpd (Very Secure FTP Daemon) banyak digunakan pada distro Linux."
  },
  {
    q: "Layanan server yang berfungsi menjembatani berbagi pakai file dan printer antar Linux dan Windows dinamakan...",
    options: ["Samba Server", "DNS Server", "DHCP Server", "NTP Server"],
    answer: 0,
    exp: "Samba mengimplementasikan protokol SMB/CIFS di Linux."
  },
  {
    q: "Server yang bertugas menyinkronkan waktu dan jam seluruh komputer dalam jaringan dinamakan...",
    options: ["NTP Server (Network Time Protocol)", "DNS Server", "FTP Server", "SMTP Server"],
    answer: 0,
    exp: "NTP Server menyamakan estimasi acuan waktu presisi seluruh host."
  },
  {
    q: "Fitur Web Server yang memungkinkan satu IP Server melayani beberapa nama domain berbeda dinamakan...",
    options: ["Virtual Host", "Reverse Proxy", "Port Forwarding", "Alias Domain"],
    answer: 0,
    exp: "Virtual Host membedakan situs berdasarkan Request Header domain."
  },
  {
    q: "Port default yang dipakai oleh layanan Web Server HTTP biasa adalah...",
    options: ["80", "443", "21", "22"],
    answer: 0,
    exp: "Layanan HTTP tidak terenkripsi menggunakan port 80."
  },
  {
    q: "Aplikasi Database Server relasional yang sangat populer berpasangan dengan PHP adalah...",
    options: ["MySQL / MariaDB", "BIND9", "Squid", "OpenSSH"],
    answer: 0,
    exp: "MySQL / MariaDB mengelola penyimpanan database relasional web."
  },

  // 24. Virtualisasi System & Server (185-192)
  {
    q: "Tipe Virtualisasi Hypervisor yang berjalan langsung di atas perangkat keras fisik tanpa OS perantara (contoh: VMware ESXi) disebut...",
    options: ["Hypervisor Type-1 (Bare-Metal)", "Hypervisor Type-2 (Hosted)", "Docker Container", "Sandbox"],
    answer: 0,
    exp: "Hypervisor Type-1 dipasang langsung pada hardware server (Bare-Metal) tanpa sistem operasi inang."
  },
  {
    q: "Aplikasi Type-2 Hypervisor gratis buatan Oracle untuk membuat Virtual Machine adalah...",
    options: ["VMware ESXi", "Proxmox VE", "VirtualBox", "Hyper-V Server"],
    answer: 2,
    exp: "VirtualBox berjalan di atas OS inang (Type-2)."
  },
  {
    q: "Sistem operasi Hypervisor Bare-Metal Open Source berbasis Debian yang populer untuk server enterprise adalah...",
    options: ["Proxmox VE", "Windows 10", "Ubuntu Desktop", "CentOS"],
    answer: 0,
    exp: "Proxmox VE mengelola VM KVM dan Container LXC secara terpusat via GUI Web."
  },
  {
    q: "Teknologi isolasi aplikasi tingkat OS yang lebih ringan dibanding Virtual Machine biasa dinamakan...",
    options: ["Container (Docker / LXC)", "Dual Boot", "Emulasi ROM", "Virtual Memory"],
    answer: 0,
    exp: "Container berbagi Kernel OS inang sehingga jauh lebih cepat dan hemat memori."
  },
  {
    q: "Format file virtual harddisk bawaan aplikasi Oracle VirtualBox adalah...",
    options: [".VDI", ".ISO", ".EXE", ".ZIP"],
    answer: 0,
    exp: "VDI (Virtual Disk Image) adalah format ekstensi disk bawaan VirtualBox."
  },
  {
    q: "Fitur pada aplikasi virtualisasi untuk menyimpan status/kondisi VM pada titik waktu tertentu dinamakan...",
    options: ["Snapshot", "Cloning", "Export", "Migration"],
    answer: 0,
    exp: "Snapshot merekam kondisi sistem agar bisa dipulihkan kembali saat crash."
  },
  {
    q: "Mode jaringan VirtualBox yang membuat Guest OS mendapatkan IP Address dari DHCP router fisik yang sama dengan Host adalah...",
    options: ["Bridged Adapter", "NAT", "Host-Only Adapter", "Internal Network"],
    answer: 0,
    exp: "Bridged Adapter menyatukan kartu jaringan virtual langsung ke kartu jaringan fisik host."
  },
  {
    q: "Mode jaringan VirtualBox yang hanya menghubungkan antar Virtual Machine dalam satu komputer tanpa akses luar dinamakan...",
    options: ["Internal Network", "Bridged Adapter", "NAT", "Generic Driver"],
    answer: 0,
    exp: "Internal Network mengisolasi trafik komunikasi khusus antar VM lokal."
  },

  // 25. Cloud Computing (Komputasi Awan) (193-200)
  {
    q: "Layanan cloud computing yang menyediakan infrastruktur fisik seperti Server Virtual, Storage, dan Network dinamakan...",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    answer: 2,
    exp: "IaaS (Infrastructure as a Service) menyewakan sumber daya infrastruktur komputasi dasar."
  },
  {
    q: "Layanan Cloud seperti Google Drive, Gmail, dan Office 365 termasuk dalam jenis model...",
    options: ["IaaS", "PaaS", "SaaS", "DaaS"],
    answer: 2,
    exp: "SaaS (Software as a Service) menyediakan aplikasi siap pakai."
  },
  {
    q: "Model cloud computing yang menyediakan platform pengembang (seperti runtime Python, Node.js, database) dinamakan...",
    options: ["PaaS (Platform as a Service)", "SaaS", "IaaS", "BaaS"],
    answer: 0,
    exp: "PaaS mempermudah pengembang mendeploy kode tanpa pusing memikirkan OS server."
  },
  {
    q: "Model penyebaran cloud yang infrastrukturnya dimiliki dan digunakan khusus oleh satu organisasi internal dinamakan...",
    options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"],
    answer: 0,
    exp: "Private Cloud didedikasikan secara privat untuk satu instansi."
  },
  {
    q: "Penggabungan antara Private Cloud dan Public Cloud dinamakan...",
    options: ["Hybrid Cloud", "Multi Cloud", "Global Cloud", "Distributed Cloud"],
    answer: 0,
    exp: "Hybrid Cloud menggabungkan privasi Private Cloud dengan fleksibilitas Public Cloud."
  },
  {
    q: "Penyedia layanan Public Cloud raksasa milik Amazon dinamakan...",
    options: ["AWS (Amazon Web Services)", "Azure", "GCP", "Alibaba Cloud"],
    answer: 0,
    exp: "AWS merupakan pelopor penyedia cloud infrastruktur terbesar di dunia."
  },
  {
    q: "Karakteristik cloud computing di mana kapasitas penyimpanan dapat ditambah/dikurangi otomatis sesuai kebutuhan dinamakan...",
    options: ["Rapid Elasticity", "On-Demand Self-Service", "Measured Service", "Resource Pooling"],
    answer: 0,
    exp: "Rapid Elasticity memungkinkan elastisitas daya tampung server secara dinamis."
  },
  {
    q: "Model pembayaran cloud di mana pengguna hanya membayar sesuai durasi dan besar daya yang dikonsumsi dinamakan...",
    options: ["Pay-As-You-Go", "Flat Rate", "Lifetime Buy", "Free Subscription"],
    answer: 0,
    exp: "Pay-As-You-Go menghitung pemakaian listrik, storage, dan bandwidth secara fleksibel."
  },

  // 26. AIJ Lanjutan & Bandwidth Management (201-208)
  {
    q: "Fitur keamanan pada Mikrotik yang digunakan untuk memblokir port atau IP address tertentu dinamakan...",
    options: ["Filter Rules", "NAT Action Passthrough", "Mangle", "Address List"],
    answer: 0,
    exp: "Filter Rules pada Firewall Mikrotik berfungsi menyaring paket data."
  },
  {
    q: "Metode pembatasan kecepatan internet pada router Mikrotik paling sederhana dinamakan...",
    options: ["Queue Tree", "Simple Queue", "Mangle", "PCQ"],
    answer: 1,
    exp: "Simple Queue digunakan untuk alokasi bandwidth dasar berdasarkan IP/Interface."
  },
  {
    q: "Fitur pembatas bandwidth Mikrotik yang mampu membagi kecepatan secara adil dan otomatis ke banyak pengguna dinamakan...",
    options: ["PCQ (Per Connection Queue)", "FIFO", "RED", "SFQ"],
    answer: 0,
    exp: "PCQ membagi rata sisa alokasi bandwidth ke semua IP aktif."
  },
  {
    q: "Fasilitas Mikrotik untuk menandai (marking) paket data berdasarkan jenis trafik sebelum diproses queue dinamakan...",
    options: ["Mangle", "NAT", "Filter", "Raw"],
    answer: 0,
    exp: "Mangle digunakan untuk menyematkan penanda (packet mark/connection mark)."
  },
  {
    q: "Metode pembatas bandwidth kompleks hirarki bertingkat (Parent & Child) pada Mikrotik menggunakan...",
    options: ["Queue Tree", "Simple Queue", "Hotspot", "Proxy"],
    answer: 0,
    exp: "Queue Tree membutuhkan Mangle dan mampu membuat pembatasan bertingkat yang rapi."
  },
  {
    q: "Protokol NAT pada Mikrotik yang merubah IP Private menjadi IP Public saat keluar ke internet dinamakan...",
    options: ["Masquerade / srcnat", "dstnat", "redirect", "same"],
    answer: 0,
    exp: "Masquerade topologi NAT yang mengganti alamat asal dengan IP Interface publik."
  },
  {
    q: "Aksi NAT Mikrotik yang digunakan untuk membelokkan port HTTP (Port Forwarding) ke Web Proxy internal dinamakan...",
    options: ["redirect / dstnat", "srcnat", "accept", "drop"],
    answer: 0,
    exp: "Dstnat/Redirect merubah IP/Port tujuan paket data."
  },
  {
    q: "Satuan standar ukuran kecepatan aliran transfer data dalam jaringan komputer adalah...",
    options: ["bps (bits per second)", "Byte", "Hz", "RPM"],
    answer: 0,
    exp: "Bandwidth diukur dalam satuan bit per detik (bps, Kbps, Mbps, Gbps)."
  },

  // 27. ASJ Lanjutan & Troubleshooting (209-216)
  {
    q: "Perintah CLI Mikrotik yang digunakan untuk menguji keterhubungan konektivitas ke host lain adalah...",
    options: ["ping", "tracert", "netstat", "ipconfig"],
    answer: 0,
    exp: "Perintah `ping` mengirimkan paket ICMP Echo Request untuk menguji koneksi."
  },
  {
    q: "Perintah terminal untuk memeriksa status alokasi memori penggunaan RAM pada server Linux adalah...",
    options: ["free -m", "df -h", "ifconfig", "ping"],
    answer: 0,
    exp: "Perintah `free -m` menampilkan statistik penggunaan RAM dalam Megabyte."
  },
  {
    q: "Perintah Linux untuk melihat kapasitas sisa ruang penyimpanan harddisk dinamakan...",
    options: ["df -h", "free -m", "top", "lsusb"],
    answer: 0,
    exp: "Command `df -h` (Disk Free) menampilkan ruang partisi disk dalam format manusiawi."
  },
  {
    q: "Perintah CLI untuk melacak rute lompatan router yang dilalui paket menuju server tujuan adalah...",
    options: ["traceroute / tracert", "ping", "nslookup", "netstat"],
    answer: 0,
    exp: "Traceroute melacak rute hops IP address satu per satu hingga ke alamat tujuan."
  },
  {
    q: "Perintah untuk mengecek informasi catatan DNS dari suatu nama domain melalui terminal adalah...",
    options: ["nslookup / dig", "ping", "arp -a", "route"],
    answer: 0,
    exp: "Command `nslookup` atau `dig` menampilkan informasi DNS Record."
  },
  {
    q: "Aplikasi penganalisis paket jaringan (Packet Sniffer) berbasis grafis yang sangat populer adalah...",
    options: ["Wireshark", "Cisco Packet Tracer", "Winbox", "Putty"],
    answer: 0,
    exp: "Wireshark mendokumentasikan dan menganalisis setiap frame paket yang lewat pada NIC."
  },
  {
    q: "Pesan kesalahan 'Destination Host Unreachable' saat melakukan tes PING menandakan...",
    options: ["Router tidak tahu rute jalan menuju alamat IP tujuan", "Server mati penuh", "Kabel terputus di PC sendiri", "Password salah"],
    answer: 0,
    exp: "Pesan tersebut muncul jika rute ke IP tujuan tidak terdaftar di tabel routing."
  },
  {
    q: "Pesan kesalahan 'Request Timed Out' (RTO) pada perintah PING mengindikasikan...",
    options: ["Paket dikirim namun tidak ada balasan hingga batas waktu habis (terhalang firewall / terputus)", "RAM Penuh", "IP ganda", "Kabel UTP terbalik"],
    answer: 0,
    exp: "RTO terjadi bila target tidak merespons balasan ICMP tepat waktu."
  },

  // 28. Teknologi Layanan Jaringan (VoIP & Fiber Optic) (217-224)
  {
    q: "Jenis pengabelan serat optik (Fiber Optic) yang mampu mentransmisikan cahaya jarak jauh dengan inti berkuran sangat kecil (~9 mikron) dinamakan...",
    options: ["Multi Mode Fiber", "Single Mode Fiber", "Coaxial Cable", "UTP Cat 6"],
    answer: 1,
    exp: "Single Mode Fiber memiliki core tunggal sangat kecil untuk transmisi gelombang cahaya jarak jauh."
  },
  {
    q: "Protokol standar transmisi sinyal suara pada jaringan VoIP dinamakan...",
    options: ["SIP (Session Initiation Protocol)", "HTTP", "FTP", "POP3"],
    answer: 0,
    exp: "SIP mengontrol sesi komunikasi multimedia seperti panggilan VoIP."
  },
  {
    q: "Alat yang digunakan untuk menyambung inti serat kaca kabel Fiber Optic dinamakan...",
    options: ["Fusion Splicer", "OTDR", "Optical Power Meter", "Stripper"],
    answer: 0,
    exp: "Fusion Splicer meleburkan dua ujung core kaca menggunakan busur listrik."
  },
  {
    q: "Aplikasi Server Softswitch VoIP Open Source berlogo bunglon / bintang yang populer di Linux adalah...",
    options: ["Asterisk / Elastix", "Apache", "BIND9", "Squid"],
    answer: 0,
    exp: "Asterisk merupakan PBX Open Source pemroses layanan VoIP."
  },
  {
    q: "Perangkat pemotong inti serat kaca Fiber Optic agar hasil potongannya rata 90 derajat sebelum disambung adalah...",
    options: ["Fiber Cleaver", "Miller Stripper", "Tang Potong", "Cutter"],
    answer: 0,
    exp: "Cleaver memotong core kaca secara presisi siku tegak lurus."
  },
  {
    q: "Teknologi jaringan akses Fiber Optic ke rumah-rumah pelanggan disingkat dengan sebutan...",
    options: ["FTTH (Fiber to the Home)", "FTTC", "FTTN", "FTTB"],
    answer: 0,
    exp: "FTTH menarik kabel serat optik langsung sampai ke perangkat ONT rumah."
  },
  {
    q: "Perangkat modem optik yang dipasang di dalam rumah pelanggan jaringan FTTH dinamakan...",
    options: ["ONT / ONU (Optical Network Terminal)", "OLT", "ODP", "ODC"],
    answer: 0,
    exp: "ONT/ONU mengonversi sinyal optik menjadi kabel LAN UTP / Wi-Fi lokal."
  },
  {
    q: "Perangkat utama pusat penyedia layanan jaringan FTTH yang terpasang di sentral ISP dinamakan...",
    options: ["OLT (Optical Line Terminal)", "ONT", "ODP", "Splitter"],
    answer: 0,
    exp: "OLT menjadi simpul pusat transmisi optik pasif."
  },

  // 29. Keamanan Server & Keamanan Siber (225-232)
  {
    q: "Protokol remoting aman ke CLI Server Linux pengganti Telnet terenkripsi dinamakan...",
    options: ["SSH (Secure Shell)", "FTP", "HTTP", "RDP"],
    answer: 0,
    exp: "SSH mengamankan data enkripsi pada port default 22."
  },
  {
    q: "Sertifikat keamanan kriptografi yang mengubah protokol web HTTP menjadi HTTPS dinamakan...",
    options: ["SSL / TLS", "SSH", "IPSec", "DNSSEC"],
    answer: 0,
    exp: "SSL/TLS mengamankan lalu lintas data sensitif browser."
  },
  {
    q: "Aplikasi pencegah intrusi peretas di Linux yang mengamankan SSH dari serangan Brute Force dengan memblokir IP adalah...",
    options: ["Fail2ban", "UFW", "Squid", "Nginx"],
    answer: 0,
    exp: "Fail2ban membaca log gagal login dan otomatis memblokir IP penyerang."
  },
  {
    q: "Perintah Linux untuk mengubah hak akses izin berkas (Permissions) dinamakan...",
    options: ["chmod", "chown", "ls -l", "mkdir"],
    answer: 0,
    exp: "Command `chmod` (Change Mode) mengatur izin Read, Write, Execute."
  },
  {
    q: "Perintah Linux untuk mengubah kepemilikan user dan grup atas suatu berkas dinamakan...",
    options: ["chown", "chmod", "useradd", "passwd"],
    answer: 0,
    exp: "Command `chown` (Change Owner) mengubah pemilik file/folder."
  },
  {
    q: "Nilai octal `chmod 777` pada file Linux memiliki arti...",
    options: ["Semua user (Owner, Group, Other) memiliki hak penuh Read, Write, Execute", "Hanya Owner yang bisa baca", "File terkunci total", "File terhapus"],
    answer: 0,
    exp: "Angka 7 (4+2+1) memberikan izin total membaca, menulis, dan mengeksekusi."
  },
  {
    q: "Port default yang dipakai oleh layanan SSH Server adalah...",
    options: ["22", "23", "80", "443"],
    answer: 0,
    exp: "SSH menggunakan port terenkripsi 22."
  },
  {
    q: "Sistem pendeteksi intrusi yang memantau lalu lintas jaringan dari ancaman bahaya dinamakan...",
    options: ["IDS (Intrusion Detection System)", "IPS", "Proxy", "NAT"],
    answer: 0,
    exp: "IDS menganalisis paket dan memberikan peringatan ancaman keamanan."
  },

  // 30. Produk Kreatif & Kewirausahaan (PKK) (233-250)
  {
    q: "Surat izin resmi usaha dari pemerintah untuk menjalankan kegiatan bisnis dinamakan...",
    options: ["NIB / SIUP", "NPWP", "AMDAL", "Sertifikat HAKI"],
    answer: 0,
    exp: "SIUP / NIB merupakan dokumen legalitas usaha."
  },
  {
    q: "Kemampuan seseorang untuk menciptakan hal baru yang berbeda serta bermanfaat dinamakan...",
    options: ["Kreativitas dan Inovasi", "Monopoli", "Rutinitas", "Konsumsi"],
    answer: 0,
    exp: "Inovasi menghasilkan nilai tambah bagi produk atau jasa."
  },
  {
    q: "Analisis SWOT merupakan singkatan dari...",
    options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Organisation, Targets", "Safety, Warning, Options, Time", "System, Web, Output, Tools"],
    answer: 0,
    exp: "SWOT menilai Kekuatan, Kelemahan, Peluang, dan Ancaman bisnis."
  },
  {
    q: "Proteksi hukum atas karya cipta ciptaan intelektual seseorang dinamakan...",
    options: ["HAKI (Hak Atas Kekayaan Intelektual)", "AMDAL", "ISO 9001", "K3LH"],
    answer: 0,
    exp: "HAKI melindungi hak paten dan hak cipta karya inovasi."
  },
  {
    q: "Tahapan pembuatan contoh wujud fisik awal produk sebelum diproduksi masal dinamakan...",
    options: ["Prototyping", "Mass Production", "Marketing", "Packaging"],
    answer: 0,
    exp: "Prototyping menguji kelayakan sampel produk awal."
  },
  {
    q: "Dokumen rancangan tertulis yang memuat rencana strategi bisnis lengkap dinamakan...",
    options: ["Business Plan", "Laporan Keuangan", "Brosur", "Invoice"],
    answer: 0,
    exp: "Business Plan menjadi peta jalan operasional dan finansial bisnis."
  },
  {
    q: "Perhitungan modal di mana total pendapatan sama persis dengan total biaya keluaran dinamakan...",
    options: ["BEP (Break Even Point)", "Profit Margin", "ROI", "Loss"],
    answer: 0,
    exp: "BEP menunjukkan titik impas usaha (tidak rugi dan tidak untung)."
  },
  {
    q: "Proses promosi pemasaran produk berbasis platform internet dinamakan...",
    options: ["Digital Marketing", "Door-to-door", "Brosur Cetak", "Telemarketing"],
    answer: 0,
    exp: "Digital marketing memanfaatkan media sosial dan situs web."
  },
  {
    q: "Model bisnis yang menjual jasa infrastruktur IT berupa sewa perakitan jaringan ke klien dinamakan...",
    options: ["IT Integrator / Contractor", "Software House", "Reseller Online", "Copywriter"],
    answer: 0,
    exp: "System Integrator melayani instalasi infrastruktur IT pihak ketiga."
  },
  {
    q: "Komponen SWOT yang mengukur faktor positif internal dari dalam perusahaan adalah...",
    options: ["Strengths (Kekuatan)", "Weaknesses", "Opportunities", "Threats"],
    answer: 0,
    exp: "Strengths merepresentasikan keunggulan internal produk/perusahaan."
  },
  {
    q: "Komponen SWOT yang mengukur faktor negatif ekstrim dari luar lingkungan dinamakan...",
    options: ["Threats (Ancaman)", "Strengths", "Weaknesses", "Opportunities"],
    answer: 0,
    exp: "Threats merupakan tantangan luar seperti persaingan pasar atau regulasi."
  },
  {
    q: "Sikap mental wirausahawan yang pantang menyerah dan bangkit dari kegagalan dinamakan...",
    options: ["Resiliensi / Ulet", "Apatis", "Konsumtif", "Pesimistis"],
    answer: 0,
    exp: "Keuletan dan resiliensi menjadi modal sukses wirausaha."
  },
  {
    q: "Proses produksi yang dilakukan secara berkelanjutan dalam jumlah sangat besar dinamakan...",
    options: ["Produksi Massal", "Produksi Custom", "Prototype", "Trial Product"],
    answer: 0,
    exp: "Produksi massal membuat barang berskala besar secara efisien."
  },
  {
    q: "Layanan purna jual yang diberikan kepada konsumen berupa perbaikan produk cacat dinamakan...",
    options: ["Garansi (Warranty)", "Diskon", "Bonus", "Cashback"],
    answer: 0,
    exp: "Garansi menjamin kualitas dan layanan purna jual."
  },
  {
    q: "Perhitungan harga jual yang ditambahkan margin keuntungan di atas harga pokok dinamakan...",
    options: ["Cost-Plus Pricing", "Penetration Pricing", "Skimming", "Discount"],
    answer: 0,
    exp: "Cost-Plus Pricing menentukan harga dengan menambah persentase profit dari HPP."
  },
  {
    q: "Pihak konsumen yang membeli produk layanan IT dalam jumlah banyak dinamakan...",
    options: ["Klien / Pelanggan", "Competitor", "Vendor", "Supplier"],
    answer: 0,
    exp: "Klien merupakan pembeli jasa atau produk usaha."
  },
  {
    q: "Identitas visual berupa simbol atau grafis penanda suatu merek usaha dinamakan...",
    options: ["Logo / Brand Identity", "Katalog", "Kwitansi", "Slogan"],
    answer: 0,
    exp: "Logo merepresentasikan citra visual sebuah merek."
  },
  {
    q: "Salah satu indikator utama keberhasilan suatu produk IT di pasaran adalah...",
    options: ["Kepuasan Pengguna dan Tingkat Adopsi Pasar Tinggi", "Waktu pembuatan lama", "Harga sangat mahal", "Tidak ada pembaruan"],
    answer: 0,
    exp: "Produk sukses menyelesaikan masalah pengguna dan diterima luas oleh pasar."
  }
];

let activeQuestions = [];
let quizCurrentIndex = 0;
let quizUserAnswers = [];
let quizTimerInterval = null;
let quizTimeLeft = 1800; // 30 Menit

/**
 * Algoritma Fisher-Yates untuk Mengacak Array Soal
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startComprehensiveQuiz() {
  // 1. Acak seluruh soal di bank soal
  const shuffledBank = shuffleArray(fullQuizBank);
  
  // 2. Ambil hanya 20 soal pertama hasil acakan
  const TOTAL_SOAL = 20;
  activeQuestions = shuffledBank.slice(0, Math.min(TOTAL_SOAL, shuffledBank.length));

  quizCurrentIndex = 0;
  quizUserAnswers = [];
  quizTimeLeft = 1800;

  document.getElementById('quiz-selection').classList.add('hidden');
  document.getElementById('quiz-box').classList.remove('hidden');

  runTimer();
  renderQuizQuestion();
}

function runTimer() {
  const timerEl = document.getElementById('quiz-timer');
  quizTimerInterval = setInterval(() => {
    quizTimeLeft--;
    const min = Math.floor(quizTimeLeft / 60);
    const sec = quizTimeLeft % 60;
    timerEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

    if (quizTimeLeft <= 0) {
      clearInterval(quizTimerInterval);
      completeQuiz();
    }
  }, 1000);
}

function renderQuizQuestion() {
  const qData = activeQuestions[quizCurrentIndex];
  document.getElementById('question-number').textContent = `Soal ${quizCurrentIndex + 1} dari ${activeQuestions.length}`;
  document.getElementById('question-text').textContent = qData.q;

  const optContainer = document.getElementById('options-container');
  optContainer.innerHTML = '';

  qData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'w-full text-left p-4 rounded-lg border border-gray-200 dark:border-white/10 hover:border-blue-500 transition text-sm flex items-center space-x-3 bg-white/40 dark:bg-black/30';
    btn.onclick = () => chooseOption(idx, btn);

    if (quizUserAnswers[quizCurrentIndex] === idx) {
      btn.classList.add('border-blue-500', 'bg-blue-500/10');
    }

    btn.innerHTML = `
      <span class="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center text-xs font-mono font-bold">${String.fromCharCode(65 + idx)}</span>
      <span>${opt}</span>
    `;
    optContainer.appendChild(btn);
  });
}

function chooseOption(optIndex, element) {
  const allBtns = document.querySelectorAll('#options-container button');
  allBtns.forEach(b => b.classList.remove('border-blue-500', 'bg-blue-500/10'));
  
  element.classList.add('border-blue-500', 'bg-blue-500/10');
  quizUserAnswers[quizCurrentIndex] = optIndex;
}

function nextQuestion() {
  if (quizUserAnswers[quizCurrentIndex] === undefined) {
    alert("Silakan pilih salah satu jawaban sebelum melanjutkan!");
    return;
  }

  if (quizCurrentIndex < activeQuestions.length - 1) {
    quizCurrentIndex++;
    renderQuizQuestion();
  } else {
    completeQuiz();
  }
}

function completeQuiz() {
  clearInterval(quizTimerInterval);
  document.getElementById('quiz-box').classList.add('hidden');
  document.getElementById('quiz-result').classList.remove('hidden');

  let scoreCorrect = 0;
  const expContainer = document.getElementById('quiz-explanation-list');
  expContainer.innerHTML = '<h3 class="font-bold font-mono text-sm border-b pb-2 mb-4">// PEMBAHASAN JAWABAN LENGKAP:</h3>';

  activeQuestions.forEach((q, idx) => {
    const isCorrect = quizUserAnswers[idx] === q.answer;
    if (isCorrect) scoreCorrect++;

    const expCard = document.createElement('div');
    expCard.className = 'p-4 rounded-lg border text-sm ' + (isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5');
    expCard.innerHTML = `
      <p class="font-bold mb-1">${idx + 1}. ${q.q}</p>
      <p class="text-xs text-gray-500 mb-2">Jawaban Kamu: <span class="${isCorrect ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}">${q.options[quizUserAnswers[idx]] || 'Tidak dijawab'}</span></p>
      <p class="text-xs font-mono bg-gray-100 dark:bg-black/50 p-2.5 rounded text-gray-600 dark:text-gray-300">💡 Pembahasan: ${q.exp}</p>
    `;
    expContainer.appendChild(expCard);
  });

  const calculatedScore = Math.round((scoreCorrect / activeQuestions.length) * 100);
  document.getElementById('final-score').textContent = `${calculatedScore} / 100`;
}