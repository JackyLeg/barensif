import React from "react";
import { SectionTitle } from "./SectionTitle";
import { Target, Compass, CheckCircle2, Building2 } from "lucide-react";

export const About: React.FC = () => {
  const missions = [
    "Mengembangkan dan mengelola infrastruktur teknologi informasi yang handal, aman, dan responsif terhadap tuntutan zaman.",
    "Menyusun dan mengevaluasi rencana strategis universitas secara akuntabel, transparan, dan berorientasi pada kemajuan berkelanjutan.",
    "Menyelenggarakan tata kelola layanan data dan aplikasi terpadu untuk mendukung efisiensi akademik dan administrasi.",
    "Meningkatkan kompetensi sumber daya manusia di bidang sistem informasi guna memberikan pelayanan prima kepada sivitas akademika.",
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionTitle
        title="ABOUT"
        subtitle="Mengenal Biro Administrasi Perencanaan dan Sistem Informasi Universitas Trisakti"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
        {/* Left Column: BARENSIF Overview */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 group-hover:bg-blue-100 transition-colors" />

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#006BCB]/10 text-[#006BCB] font-semibold text-xs font-poppins mb-6">
              <Building2 className="w-4 h-4" />
              <span>Profil Lembaga</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-poppins text-[#004A91] mb-6 leading-snug">
              BARENSIF Universitas Trisakti
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-slate-800 font-semibold">
                  Biro Administrasi Perencanaan dan Sistem Informasi (BARENSIF)
                </strong>{" "}
                merupakan unit kerja struktural di Universitas Trisakti yang bertugas mengoordinasikan seluruh perencanaan pembangunan fisik maupun non-fisik, serta mengelola ekosistem teknologi informasi dan komunikasi di lingkungan kampus.
              </p>

              <p>
                BARENSIF berperan strategis sebagai tulang punggung (backbone) transformasi digital universitas, memastikan keandalan jaringan, keamanan data, pengembangan aplikasi akademik, serta integrasi sistem informasi menuju keselarasan visi Universitas Trisakti yang berstandar internasional.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
            <span>Universitas Trisakti</span>
            <span className="text-[#006BCB] font-semibold">Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Right Column: Visi & Misi */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* VISI Card (Light Blue Accent) */}
          <div className="bg-[#DCEEFF] rounded-3xl p-8 shadow-md border border-blue-200/60 relative overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#006BCB] text-white flex items-center justify-center shadow-md">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-xl md:text-2xl font-black font-poppins text-[#004A91] tracking-wider uppercase">
                VISI
              </h4>
            </div>

            <p className="text-slate-800 text-sm md:text-base font-medium leading-relaxed italic pl-1 border-l-4 border-[#006BCB] my-2 bg-white/60 p-4 rounded-r-2xl">
              &quot;Menjadi biro yang handal, terpercaya, dan inovatif dalam penyediaan layanan perencanaan strategis serta sistem informasi terpadu guna mendukung Universitas Trisakti yang unggul dan berdaya saing global.&quot;
            </p>
          </div>

          {/* MISI Card */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 flex-1 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#004A91] text-white flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-xl md:text-2xl font-black font-poppins text-[#004A91] tracking-wider uppercase">
                MISI
              </h4>
            </div>

            <ul className="space-y-4">
              {missions.map((mission, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-[#006BCB] font-bold text-xs flex items-center justify-center font-poppins mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
