import React, { useState } from "react";
import DarkBackground from "../DarkBackground/DarkBackground";
import CTA from "../Buttons/CTA/CTA";
import ContactModal from "./ContactModal";
import "./ContactSection.scss";

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DarkBackground wavePosition="bottom">
        <div className="contact-section__left">
          <p>
            This is the end of <br />
            the page, but the <br />
            beginning of our journey.
          </p>
        </div>
      <section className="contact-section">
        <div className="contact-section__center">
          <p className="talk">We should talk</p>

          <div className="contact-section__cta-wrapper">
            <CTA label="here" onClick={() => setIsModalOpen(true)} />
          </div>
        </div>

      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DarkBackground>
  );
}
