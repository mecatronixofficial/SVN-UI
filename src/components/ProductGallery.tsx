"use client";

type ProductGalleryProps = {
  video: string;
  name: string;
};

export default function ProductGallery({ video, name }: ProductGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-2xl border border-steel-200 bg-black shadow-soft">
        <video
          src={video}
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
      </div>
    </div>
  );
}