"use client";

import { ReactNode } from "react";

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  message?: string;
  title?: string;
}

export default function WhatsAppLink({
  children,
  className = "",
  message = "",
  title = "",
}: WhatsAppLinkProps) {
  const handleClick = () => {
    const phoneNumber = "6282143258744";
    const encodedMessage = message ? encodeURIComponent(message) : "";
    const url = `https://wa.me/${phoneNumber}${
      encodedMessage ? `?text=${encodedMessage}` : ""
    }`;
    window.open(url, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      title={title}
      aria-label={title || "Hubungi via WhatsApp"}
    >
      {children}
    </button>
  );
}
