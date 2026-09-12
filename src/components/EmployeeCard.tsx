import React from "react";
import { Employee } from "@/data/employees";

interface EmployeeCardProps {
  employee: Employee;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
      {/* Circle Avatar with Red Background */}
      <div className="w-36 h-36 rounded-full bg-[#B91C1C] overflow-hidden mb-5 flex items-center justify-center p-1.5 shadow-inner">
        <img
          src={employee.image}
          alt={employee.name}
          className="w-full h-full object-cover rounded-full"
          loading="lazy"
        />
      </div>

      {/* Name */}
      <h4 className="text-lg font-extrabold font-poppins text-slate-900 mb-1 leading-snug">
        {employee.name}
      </h4>

      {/* Jabatan */}
      <p className="text-sm font-bold text-[#0067C5] font-poppins mb-6">
        {employee.position}
      </p>

      {/* Details List */}
      <div className="w-full space-y-2 text-xs font-semibold text-slate-700 text-left px-2">
        <div className="flex items-center gap-2">
          <span className="w-5 text-center text-[#0067C5]">📇</span>
          <span className="w-28 text-slate-600 font-bold">Nomor Pegawai</span>
          <span>: {employee.employeeNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-5 text-center text-[#0067C5]">✉️</span>
          <span className="w-28 text-slate-600 font-bold">Email</span>
          <span className="truncate">: {employee.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-5 text-center text-[#0067C5]">📞</span>
          <span className="w-28 text-slate-600 font-bold">No Telp.</span>
          <span>: {employee.phone}</span>
        </div>
      </div>
    </div>
  );
};
