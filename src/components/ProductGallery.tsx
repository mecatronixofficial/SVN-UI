/* eslint-disable @next/next/no-img-element */

interface ProductGalleryProps {
  video?: string;
  image?: string;
  name: string;
}

export default function ProductGallery({
  video,
  image,
  name,
}: ProductGalleryProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-steel-200 bg-white shadow-soft">
      {video ? (
        <video
          src={video}
          controls
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          Your browser does not support the video tag.
        </video>
      ) : image ? (
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-[500px] items-center justify-center bg-steel-50 text-steel-500">
          No media available
        </div>
      )}
    </div>
  );
}