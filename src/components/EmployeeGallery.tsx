import React from "react";
import { employees } from "@/data/employees";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeGallery: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-md border border-slate-200/80 mb-16">
      {/* Title */}
      <h3 className="text-xl md:text-3xl font-extrabold font-poppins text-slate-900 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
        Data Pegawai Biro Administrasi Perencanaan dan Sistem Informasi
      </h3>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};
