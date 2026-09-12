export interface Employee {
  id: number;
  name: string;
  position: string;
  employeeNumber: string;
  email: string;
  phone: string;
  image: string;
  department?: string;
}

export const employees: Employee[] = [
  {
    id: 1,
    name: "Dr. Ir. Hendra S. Utomo, M.T.",
    position: "Kepala Biro Administrasi Perencanaan & Sistem Informasi",
    employeeNumber: "19750812 200212 1 001",
    email: "hendra.utomo@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8101",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    department: "Pimpinan Biro",
  },
  {
    id: 2,
    name: "Drs. Bambang Wijaya, M.Kom.",
    position: "Kabag Pengembangan & Infrastruktur IT",
    employeeNumber: "19780415 200501 1 003",
    email: "bambang.wijaya@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8102",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    department: "Bagian Sistem Informasi",
  },
  {
    id: 3,
    name: "Siti Rahmawati, S.T., M.M.",
    position: "Kabag Perencanaan & Evaluasi Program",
    employeeNumber: "19820920 200812 2 004",
    email: "siti.rahmawati@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8103",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    department: "Bagian Perencanaan",
  },
  {
    id: 4,
    name: "Rian Nugraha, S.Kom., M.T.",
    position: "Kasubag System Analyst & Software Development",
    employeeNumber: "19871103 201201 1 009",
    email: "rian.nugraha@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8104",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    department: "Pengembangan Aplikasi",
  },
  {
    id: 5,
    name: "Dewi Lestari, S.Kom.",
    position: "Analis Data & Layanan Informasi",
    employeeNumber: "19900325 201504 2 012",
    email: "dewi.lestari@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8105",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    department: "Layanan Data & Informasi",
  },
  {
    id: 6,
    name: "Ahmad Fauzi, S.T.",
    position: "Administrator Jaringan & Network Security",
    employeeNumber: "19890614 201402 1 008",
    email: "ahmad.fauzi@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8106",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    department: "Infrastruktur Jaringan",
  },
  {
    id: 7,
    name: "Budi Santoso, S.Kom.",
    position: "Database Administrator & Data Center Lead",
    employeeNumber: "19851210 201001 1 005",
    email: "budi.santoso@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8107",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    department: "Data Center & Server",
  },
  {
    id: 8,
    name: "Maya Indah, S.E., M.Si.",
    position: "Staf Perencanaan Operasional & Statistik",
    employeeNumber: "19920118 201803 2 015",
    email: "maya.indah@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8108",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    department: "Bagian Perencanaan",
  },
  {
    id: 9,
    name: "Ferry Kurniawan, A.Md.",
    position: "Technical Support & IT Helpdesk Lead",
    employeeNumber: "19940708 201901 1 018",
    email: "ferry.kurniawan@trisakti.ac.id",
    phone: "(021) 566-3232 ext. 8109",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600",
    department: "IT Helpdesk & Support",
  },
];
