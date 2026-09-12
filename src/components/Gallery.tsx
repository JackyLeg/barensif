import React from "react";
import { SectionTitle } from "./SectionTitle";
import { EmployeeGallery } from "./EmployeeGallery";
import { FacilityGallery } from "./FacilityGallery";

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-10 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Section Title matching reference spelling GALERY */}
      <SectionTitle title="GALERY" />

      {/* Employee Grid Gallery */}
      <EmployeeGallery />

      {/* Facilities Stacking Carousel Gallery */}
      <FacilityGallery />
    </section>
  );
};
