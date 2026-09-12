import React from "react";
import { Employee } from "@/data/employees";
import { Mail, Phone, Hash, Shield } from "lucide-react";

interface EmployeeCardProps {
  employee: Employee;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
      {/* Employee Photo Header */}
      <div className="relative h-64 bg-slate-100 overflow-hidden">
        <img
          src={employee.image}
          alt={employee.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Subtle Dark Gradient Overlay at Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

        {/* Department Badge */}
        {employee.department && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#004A91] text-[11px] font-bold font-poppins px-3 py-1 rounded-full shadow-sm">
            {employee.department}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Employee Name */}
          <h4 className="text-lg font-bold font-poppins text-slate-900 group-hover:text-[#006BCB] transition-colors leading-snug mb-1">
            {employee.name}
          </h4>

          {/* Position */}
          <p className="text-xs font-semibold text-[#006BCB] font-poppins mb-4 tracking-wide">
            {employee.position}
          </p>

          <hr className="border-slate-100 mb-4" />

          {/* Contact Details List */}
          <div className="space-y-2.5 text-xs text-slate-600">
            {/* Nomor Pegawai */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#006BCB] flex items-center justify-center flex-shrink-0">
                <Hash className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  Nomor Pegawai
                </span>
                <span className="font-mono text-slate-700 font-medium">
                  {employee.employeeNumber}
                </span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#006BCB] flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col truncate">
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  Email Official
                </span>
                <a
                  href={`mailto:${employee.email}`}
                  className="font-medium text-slate-700 hover:text-[#006BCB] transition-colors truncate"
                >
                  {employee.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#006BCB] flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  No. Telepon / Ext
                </span>
                <span className="font-medium text-slate-700">
                  {employee.phone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-emerald-600 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Aktif Layanan
          </span>

          <a
            href={`mailto:${employee.email}`}
            className="text-xs font-semibold text-[#006BCB] hover:text-[#004A91] font-poppins flex items-center gap-1 group-hover:translate-x-1 transition-transform"
          >
            <span>Hubungi</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};
