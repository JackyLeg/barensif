import React from "react";
import { SectionTitle } from "./SectionTitle";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionTitle title="ABOUT" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-6">
        {/* Left Column: BARENSIF */}
        <div className="md:col-span-6 pr-0 md:pr-6 flex flex-col justify-start">
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-extrabold font-poppins text-[#004A91] tracking-wider mb-2">
              BARENSIF
            </h3>
            {/* Underline below title */}
            <div className="h-[3px] w-full max-w-md bg-[#0067C5]" />
          </div>

          <p className="text-slate-800 text-base md:text-lg font-bold leading-relaxed mt-6">
            Barensif (Biro Administrasi Perencanaan dan Sistem Informasi) Universitas Trisakti adalah unit yang bertanggung jawab dalam pengelolaan Administrasi Perencanaan, Pengembangan Sistem Informasi, dan penyediaan data serta Informasi guna mendukung pelaksanaan Tridarma Perguruan Tinggi.
          </p>
        </div>

        {/* Center Vertical Divider Line for Desktop */}
        <div className="hidden md:block w-[2px] bg-[#0067C5] self-stretch justify-self-center my-2" />

        {/* Right Column: VISI & MISI */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* VISI Card */}
          <div className="bg-[#DCEEFF] rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="mb-4">
              <h4 className="text-2xl font-bold font-poppins text-[#004A91] tracking-wider mb-2">
                VISI
              </h4>
              <div className="h-[3px] w-full bg-[#0067C5]" />
            </div>

            <p className="text-slate-800 font-bold text-sm md:text-base leading-relaxed">
              Menjadi Biro yang andal dalam pengelolaan Administrasi Perencanaan, Pengembangan Sistem Informasi dan penyediaan data dan Informasi guna mendukung pelaksanaan Tridarma Perguruan Tinggi.
            </p>
          </div>

          {/* MISI Card */}
          <div className="bg-[#DCEEFF] rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="mb-4">
              <h4 className="text-2xl font-bold font-poppins text-[#004A91] tracking-wider mb-2">
                MISI
              </h4>
              <div className="h-[3px] w-full bg-[#0067C5]" />
            </div>

            <ol className="space-y-3 text-slate-800 font-bold text-sm md:text-base leading-relaxed">
              <li>
                1. Menyelenggarakan Administrasi Perencanaan, dan Pengembangan Institusi.
              </li>
              <li>
                2. Melakukan Pengembangan dan Pengelolaan Sistem Informasi.
              </li>
              <li>
                3. Menyelenggarakan pelatihan di bidang Sistem Informasi.
              </li>
              <li>
                4. Menjalin kerjasama dengan para pihak guna menjamin ketersediaan sumberdaya perangkat keras dan lunak.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
