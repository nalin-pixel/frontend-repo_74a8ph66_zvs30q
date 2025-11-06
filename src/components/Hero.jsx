import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
          Multi‑Platform Video Downloader
        </h1>
        <p className="mt-4 text-gray-700 md:text-lg">
          Grab videos from TikTok, YouTube, Instagram, and Rednote in seconds — high quality, no fuss.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white" />
    </section>
  );
}
