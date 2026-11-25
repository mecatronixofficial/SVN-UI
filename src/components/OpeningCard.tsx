"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import invitation from "../../public/images/india-itme-2026.png";

export default function OpeningCard() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="India ITME 2026 invitation"
      onClose={() => setIsOpen(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      className="w-[calc(100%_-_2rem)] max-w-3xl overflow-hidden rounded-2xl border-0 p-0 [background:none] [box-shadow:none] backdrop:bg-black/65 backdrop:backdrop-blur-sm"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={invitation}
          alt="SVN Enterprises invites you to India ITME 2026, 4–9 December 2026 at India Expo Center & Mart, Greater Noida. Hall 16, Stall H16B11. Scan the QR code to register."
          priority
          sizes="(max-width: 768px) calc(100vw - 2rem), 768px"
          className="block h-auto w-full"
        />
        <button
          type="button"
          autoFocus
          aria-label="Close announcement"
          onClick={() => dialogRef.current?.close()}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <FaTimes aria-hidden="true" className="h-3.5 w-3.5" />
        </button>
      </div>
    </dialog>
  );
}
