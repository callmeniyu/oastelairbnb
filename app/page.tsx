"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { MotionConfig } from "framer-motion";
import BackgroundEffects from "./components/BackgroundEffects";
import CTASection from "./components/CTASection";
import EnquirySection from "./components/EnquirySection";
import ExperienceSection from "./components/ExperienceSection";
import FAQSection from "./components/FAQSection";
import HeroSection, { HERO_HIGHLIGHTS_COUNT } from "./components/HeroSection";
import OTAPartnersSection from "./components/OTAPartnersSection";
import ProfitModelSection from "./components/ProfitModelSection";
import ResultsSection from "./components/ResultsSection";
import SectionDivider from "./components/SectionDivider";
import ServicesSection from "./components/ServicesSection";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import TechnologySection from "./components/TechnologySection";
// import TestimonialsSection from "./components/TestimonialsSection";
import TrustSecuritySection from "./components/TrustSecuritySection";
import WhyChooseSection from "./components/WhyChooseSection";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  buildingLocation: "",
  buildingName: "",
  buildingLayout: "",
  bedroomType: "",
  propertyType: "",
  furnishingStatus: "",
  message: "",
};

export default function Home() {
  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const highlightInterval = window.setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % HERO_HIGHLIGHTS_COUNT);
    }, 3200);

    return () => window.clearInterval(highlightInterval);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus(null);
    setStatusMessage("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage(
        "Email service is not configured. Please connect EmailJS keys in the environment variables.",
      );
      setIsSending(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.buildingLocation,
          buildingName: formData.buildingName,
          layout: formData.buildingLayout,
          bedroomType: formData.bedroomType,
          isLanded: formData.propertyType,
          furnishing: formData.furnishingStatus,
          extraInfo: formData.message,
        },
        publicKey,
      );

      setStatus("success");
      setStatusMessage(
        "Thank you! Your enquiry was sent. Oastel will reach out shortly.",
      );
      setFormData(initialForm);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        "We could not send your enquiry. Please try again shortly.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <MotionConfig reducedMotion="never">
      <div className="relative flex flex-col bg-slate-950 text-white">
        <BackgroundEffects />
        <SiteHeader />

        <main className="relative z-10">
          <HeroSection activeHighlight={activeHighlight} />
          <EnquirySection
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSending={isSending}
            status={status}
            statusMessage={statusMessage}
          />
          <ServicesSection />
          <TechnologySection />
          <OTAPartnersSection />
          <SectionDivider className="my-12" />
          <ExperienceSection />
          <ResultsSection />
          <ProfitModelSection />
          <SectionDivider className="my-6 md:mb-24" />
          <WhyChooseSection />
          <div className="divider-line h-px w-full my-6 md:mb-24" />
          <TrustSecuritySection />
          <div className="divider-line h-px w-full my-12" />
          <FAQSection />
          <CTASection />
        </main>

        <SiteFooter />
      </div>
    </MotionConfig>
  );
}
