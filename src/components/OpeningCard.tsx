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
      aria-labelledby="opening-card-title"
      aria-describedby="opening-card-details"
      onClose={() => setIsOpen(false)}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          dialogRef.current?.close();
        }
      }}
      className="fixed inset-0 m-auto max-h-[calc(100dvh_-_2rem)] w-[calc(100%_-_2rem)] max-w-6xl overflow-hidden rounded-2xl border-0 bg-white p-0 text-steel-900 shadow-2xl backdrop:bg-brand-950/75 backdrop:backdrop-blur-sm"
    >
      <div className="flex max-h-[calc(100dvh_-_2rem)] flex-col">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-steel-100 px-4 py-3 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="rounded-full bg-red-50 px-3 py-1 text-sm font-bold text-red-700">
              Important
            </span>
            <h2 id="opening-card-title" className="text-base font-semibold text-brand-900 sm:text-lg">
              Visit us at India ITME 2026
            </h2>
          </div>
          <button
            type="button"
            autoFocus
            aria-label="Close announcement"
            onClick={() => dialogRef.current?.close()}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-steel-50 text-brand-900 transition-colors hover:bg-steel-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            <FaTimes aria-hidden="true" className="h-4 w-4" />
          </button>
        </header>

        <Image
          src={invitation}
          alt="SVN Enterprises invites you to India ITME 2026, 4–9 December 2026 at India Expo Center & Mart, Greater Noida. Hall 16, Stall H16B11. Scan the QR code to register."
          priority
          sizes="(max-width: 1184px) calc(100vw - 2rem), 1152px"
          className="h-auto min-h-0 w-full object-contain"
        />

        <footer className="flex shrink-0 flex-col gap-4 border-t border-steel-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p id="opening-card-details" className="text-base text-steel-700">
            <span className="font-semibold text-brand-900">4–9 December 2026</span>
            <span className="mx-2" aria-hidden="true">·</span>
            Hall 16
            <span className="mx-2" aria-hidden="true">·</span>
            Stall H16B11
          </p>
          <a
            href="https://corporate.india-itme.com/itme2026/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg bg-brand-700 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            Register to visit
          </a>
        </footer>
      </div>
    </dialog>
  );
}
