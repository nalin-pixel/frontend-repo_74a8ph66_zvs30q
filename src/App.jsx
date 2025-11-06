import React, { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import UrlInput from './components/UrlInput';
import Preloader from './components/Preloader';
import ResultCard from './components/ResultCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const progressTimer = useRef(null);

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const startProgress = () => {
    clearInterval(progressTimer.current);
    setProgress(0);
    let p = 0;
    progressTimer.current = setInterval(() => {
      // Ease-in-out faux progress to 90%, final 10% happens on resolve
      const increment = Math.random() * 10 + 6; // 6-16
      p = Math.min(90, p + increment);
      setProgress(Math.round(p));
    }, 220);
  };

  const stopProgress = () => {
    clearInterval(progressTimer.current);
    setProgress(100);
    setTimeout(() => setProgress(0), 400);
  };

  useEffect(() => () => clearInterval(progressTimer.current), []);

  const handleSubmit = async (url) => {
    setError('');
    setResult(null);
    setLoading(true);
    startProgress();
    try {
      const res = await fetch(`${backend}/api/resolve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) {
        const detail = await res.json().catch(() => ({}));
        throw new Error(detail.detail || 'Failed to resolve this link.');
      }
      const data = await res.json();
      setResult({
        title: data.title,
        cover: data.cover,
        download_url: data.download_url,
        duration: data.duration,
        author: data.author,
        source: data.source,
      });
    } catch (e) {
      setError(e.message || 'Something went wrong.');
    } finally {
      stopProgress();
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-black text-white">
      <div className="mx-auto max-w-6xl px-6 pb-14 pt-8">
        <Hero />
        <section className="mx-auto mt-8 max-w-3xl">
          <UrlInput onSubmit={handleSubmit} loading={loading} />
          {error && (
            <p className="mt-3 text-center text-sm text-red-300">{error}</p>
          )}
          {result && <ResultCard result={result} />}
        </section>

        <p className="mx-auto mt-14 max-w-2xl text-center text-xs text-white/50">
          Paste a link from your favorite platform. This tool finds the highest quality stream we can access and gives you a clean download link. Please respect platform terms and creators.
        </p>
      </div>

      {loading && <Preloader progress={progress} />} 

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/50">
        Built for smooth, watermark‑free downloads from TikTok, YouTube, Instagram, and Rednote.
      </footer>
    </div>
  );
}

export default App;
