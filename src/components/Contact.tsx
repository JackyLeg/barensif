import React from "react";
import { SectionTitle } from "./SectionTitle";
import { MapPin, Mail, Phone, Clock, ExternalLink, Send } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionTitle
        title="CONTACT"
        subtitle="Hubungi Layanan Biro Administrasi Perencanaan & Sistem Informasi Universitas Trisakti"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-10">
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#004A91] font-bold text-xs font-poppins mb-6">
              <span>HUBUNGI KAMI</span>
            </div>

            <h3 className="text-2xl font-bold font-poppins text-slate-900 mb-6">
              Kantor Pusat BARENSIF
            </h3>

            <div className="space-y-6 text-sm text-slate-700">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#006BCB] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-poppins">Alamat Sekretariat</h4>
                  <p className="mt-1 leading-relaxed text-slate-600">
                    Gedung M (Syarief Thayeb) Lantai 3, Kampus A Universitas Trisakti, <br />
                    Jl. Kyai Tapa No. 1, Grogol, Jakarta Barat 11440, Indonesia.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#006BCB] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-poppins">Email Layanan</h4>
                  <p className="mt-1 text-slate-600">
                    <a href="mailto:barensif@trisakti.ac.id" className="hover:text-[#006BCB] underline decoration-blue-200">
                      barensif@trisakti.ac.id
                    </a>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Helpdesk IT: <a href="mailto:helpdesk.it@trisakti.ac.id" className="hover:text-[#006BCB]">helpdesk.it@trisakti.ac.id</a>
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#006BCB] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-poppins">Telepon & Fax</h4>
                  <p className="mt-1 text-slate-600">
                    (021) 566-3232 <span className="text-slate-400 font-mono text-xs">(Ext. 8100 - 8109)</span>
                  </p>
                  <p className="text-xs text-slate-500">Fax: (021) 567-3001</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#006BCB] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-poppins">Jam Operasional Layanan</h4>
                  <p className="mt-1 text-slate-600">
                    Senin - Jumat: 08.00 - 16.00 WIB
                  </p>
                  <p className="text-xs text-slate-400">Sabtu, Minggu & Hari Libur Nasional: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Google Maps Embed Frame */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-4 shadow-lg border border-slate-100 flex flex-col justify-between">
          <div className="relative w-full h-[400px] lg:h-full rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Peta Lokasi Universitas Trisakti"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6974154944933!2d106.78696837586749!3d-6.171253460473215!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f658b19a1fb9%3A0x6b801a24d8ef84f6!2sUniversitas%20Trisakti%20Kampus%20A!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 mt-2 text-xs text-slate-500 font-medium">
            <span>Lokasi: Kampus A Universitas Trisakti, Grogol</span>
            <a
              href="https://maps.google.com/?q=Universitas+Trisakti+Kampus+A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#006BCB] hover:text-[#004A91] font-semibold flex items-center gap-1"
            >
              <span>Buka Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
