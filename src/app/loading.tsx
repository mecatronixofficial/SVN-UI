export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center bg-white">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-steel-200" />
          <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin" />
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-steel-500 font-semibold">
          Loading…
        </p>
      </div>
    </div>
  );
}
