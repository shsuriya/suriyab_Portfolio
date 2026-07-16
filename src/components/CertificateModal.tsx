"use client";

import { useEffect } from "react";
import { X, Download, ExternalLink } from "lucide-react";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  title,
  pdfUrl,
}: CertificateModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cert-modal-overlay" onClick={onClose}>
      <div
        className="cert-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="cert-modal-header">
          <div className="cert-modal-title-wrap">
            <div className="cert-modal-badge">Certificate</div>
            <h3 className="cert-modal-title">{title}</h3>
          </div>
          <div className="cert-modal-actions">
            <a
              href={pdfUrl}
              download
              className="cert-modal-btn download"
              title="Download Certificate"
            >
              <Download size={16} />
              Download
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-modal-btn open"
              title="Open in new tab"
            >
              <ExternalLink size={16} />
            </a>
            <button
              className="cert-modal-close"
              onClick={onClose}
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="cert-modal-body">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="cert-modal-iframe"
            title={title}
          />
        </div>
      </div>
    </div>
  );
}
