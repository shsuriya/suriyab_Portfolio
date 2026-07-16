"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import CertificateModal from "./CertificateModal";

const certs = [
  {
    id: "claude-101",
    name: "Claude 101",
    issuer: "Anthropic",
    pdf: "/claude-101-certificate.pdf",
  },
];

export default function CertificationsCard() {
  const [openCert, setOpenCert] = useState<(typeof certs)[0] | null>(null);

  return (
    <>
      <div className="edu-card">
        <div className="edu-icon-wrap purple">
          <Award size={28} strokeWidth={1.8} />
        </div>
        <h3 className="edu-degree">Certifications</h3>
        <div className="cert-tags">
          {certs.map((cert) => (
            <button
              key={cert.id}
              className="cert-tag cert-tag-btn"
              onClick={() => setOpenCert(cert)}
              title={`View ${cert.name} certificate`}
            >
              ✦ {cert.name} – {cert.issuer}
            </button>
          ))}
        </div>
      </div>

      {openCert && (
        <CertificateModal
          isOpen={!!openCert}
          onClose={() => setOpenCert(null)}
          title={`${openCert.name} — ${openCert.issuer}`}
          pdfUrl={openCert.pdf}
        />
      )}
    </>
  );
}
