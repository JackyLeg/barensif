export interface Facility {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export const facilities: Facility[] = [
  {
    id: 1,
    title: "Ruang Server Utama (Data Center)",
    subtitle: "Infrastruktur Pusat Server & Komputasi Barensif",
    description:
      "Ruang server berstandar tinggi yang dilengkapi dengan sistem pengondisian udara presisi (CRAC), UPS redundan, proteksi kebakaran gas cair, serta monitoring 24/7 untuk menjamin stabilitas seluruh sistem informasi Universitas Trisakti.",
    features: [
      "Server Rack Redundant Dual Power",
      "Sistem Pendingin CRAC Precision Cooling",
      "Fire Suppression System FM-200",
      "Monitoring Suhu & Kelembaban IoT 24/7",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Network Operations Center (NOC)",
    subtitle: "Pusat Kendali Jaringan & Keamanan Siber Campus-wide",
    description:
      "Fasilitas pemantauan performa jaringan LAN/WLAN, backbone fiber optic antar kampus, firewall keamanan siber, dan manajemen bandwidth real-time untuk mendukung kegiatan akademik seluruh sivitas akademika.",
    features: [
      "Multi-monitor Dashboard Wall",
      "Bandwidth & Traffic Analyzer Real-time",
      "Intrusion Prevention System (IPS)",
      "Pusat Koordinasi Network Incident Response",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Ruang Rapat & Koordinasi Strategis",
    subtitle: "Fasilitas Pertemuan & Presentasi Sistem Informasi",
    description:
      "Ruang rapat interaktif yang dilengkapi layar LCD interaktif 85 inch, kamera konferensi video 4K dengan kecerdasan buatan, serta sistem tata suara terpadu untuk rapat pleno perencanaan dan koordinasi tim IT.",
    features: [
      "Smart Interactive Display & Digital Whiteboard",
      "Video Conference System 4K AI Camera",
      "Kapasitas 20 Kursi Ergonomis",
      "High-speed Wi-Fi 6 Mesh Network",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Ruang Development & Workstation Staff",
    subtitle: "Area Kerja Kolaboratif Pengembang Perangkat Lunak",
    description:
      "Lingkungan kerja bernuansa modern dan ergonomis bagi para system analyst, programmer, dan administrator database dalam merancang, menguji, serta mengimplementasikan aplikasi akademik Universitas Trisakti.",
    features: [
      "Dual Monitor Ergonomic Workstations",
      "High-Speed Gigabit LAN Access",
      "Area Diskusi Tim & Agile Scrum Space",
      "Akses Langsung ke Server Testing (Staging)",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "IT Helpdesk & Layanan Pengaduan",
    subtitle: "Pusat Layanan Bantuan & Support Dosen & Mahasiswa",
    description:
      "Counter pelayanan tatap muka dan ticketing online bagi mahasiswa, dosen, serta staf administrasi yang membutuhkan bantuan teknis akun SSO, email kampus, sistem KRS online, maupun perbaikan perangkat keras.",
    features: [
      "Service Desk Counter & Ticket Tracking",
      "Area Tunggu Nyaman ber-AC",
      "Kios Mandiri SSO Reset & Verification",
      "Staf Support Teknis Siap Melayani",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  },
];
