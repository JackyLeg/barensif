import React from "react";
import { SectionTitle } from "./SectionTitle";
import { EmployeeGallery } from "./EmployeeGallery";
import { FacilityGallery } from "./FacilityGallery";

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
      <SectionTitle
        title="GALLERY"
        subtitle="Dokumentasi Sumber Daya Manusia dan Infrastruktur Teknologi Informasi BARENSIF"
      />

      {/* Employee Grid Gallery */}
      <EmployeeGallery />

      {/* Separator Divider */}
      <div className="my-16 border-t border-slate-200/60 max-w-3xl mx-auto" />

      {/* Facilities Stacking Carousel Gallery */}
      <FacilityGallery />
    </section>
  );
};
