import React from "react";
import { employees } from "@/data/employees";
import { EmployeeCard } from "./EmployeeCard";
import { Users } from "lucide-react";

export const EmployeeGallery: React.FC = () => {
  return (
    <div className="mb-20">
      {/* Subheader Title */}
      <div className="flex flex-col items-center justify-center text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 text-[#004A91] font-bold text-xs font-poppins mb-3">
          <Users className="w-4 h-4 text-[#006BCB]" />
          <span>Struktur Pegawai & Layanan</span>
        </div>

        <h3 className="text-2xl md:text-4xl font-extrabold font-poppins text-slate-900">
          DATA PEGAWAI BARENSIF
        </h3>

        <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mt-2">
          Jajaran pimpinan dan staf ahli Biro Administrasi Perencanaan & Sistem Informasi Universitas Trisakti.
        </p>
      </div>

      {/* Responsive 3x3 Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};
