"use client";

import { FaImage } from "react-icons/fa";

type ProductGalleryProps = {
  video: string;
  name: string;
};

export default function ProductGallery({ video, name }: ProductGalleryProps) {
  const videoSrc = video.trim();

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-steel-200 bg-black shadow-soft">
        {videoSrc ? (
          <video
            src={videoSrc}
            title={name}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-[480px] w-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="grid h-[480px] w-full place-items-center bg-brand-900 text-white">
            <div className="text-center">
              <FaImage className="mx-auto h-12 w-12 text-accent" />
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/80">
                Media coming soon
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
