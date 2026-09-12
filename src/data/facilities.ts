export interface Facility {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const facilities: Facility[] = [
  {
    id: 1,
    title: "Ruang Arsip & Penggandaan",
    description:
      "Area khusus untuk menyimpan, mengelola, serta menggandakan berbagai berkas dan dokumen operasional.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Ruang Kepala Barensif",
    description:
      "Ruang kerja dan privat bagi pimpinan untuk mengarahkan operasional administrasi, serta memimpin koordinasi strategis.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Gudang IT & Peralatan",
    description:
      "Area khusus untuk penyimpanan organisasi perangkat keras dan perlengkapan elektronik, serta peralatan IT pendukung.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Network Operations Center",
    description:
      "Fasilitas pemantauan jaringan kampus dan infrastruktur server Universitas Trisakti.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
  },
];
