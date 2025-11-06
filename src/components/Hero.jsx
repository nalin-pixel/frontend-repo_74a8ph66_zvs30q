import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-black/90">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8o8oCk5QO2Qjx2jW/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Multi-platform video downloader
        </span>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Download videos without watermarks
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Paste a link from TikTok, YouTube, Instagram, or Rednote and get a clean, high-quality download.
        </p>
      </div>
    </section>
  );
}
