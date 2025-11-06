import { useState } from 'react';
import Hero from './components/Hero';
import UrlInput from './components/UrlInput';
import Preloader from './components/Preloader';
import ResultCard from './components/ResultCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const backend = import.meta.env.VITE_BACKEND_URL || '';

  const simulateProgress = () => {
    setProgress(0);
    let p = 0;
    const id = setInterval(() => {
      p = Math.min(100, p + Math.random() * 18 + 8);
      setProgress(Math.floor(p));
      if (p >= 100) clearInterval(id);
    }, 200);
    return () => clearInterval(id);
  };

  const handleSubmit = async (url) => {
    setError('');
    setResult(null);
    setLoading(true);
    const stop = simulateProgress();
    try {
      const res = await fetch(`${backend}/api/tiktok/metadata`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) {
        const t = await res.json().catch(() => ({}));
        throw new Error(t.detail || 'Failed to process the URL');
      }
      const data = await res.json();
      setResult({ title: data.title, cover: data.cover, downloadUrl: data.download_url });
    } catch (e) {
      setError(e.message || 'Something went wrong');
    } finally {
      stop();
      setLoading(false);
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Hero />
      <main className="px-6 py-8 max-w-6xl mx-auto">
        <UrlInput onSubmit={handleSubmit} loading={loading} />
        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
        )}
        {result && (
          <ResultCard title={result.title} cover={result.cover} downloadUrl={result.downloadUrl} />
        )}
      </main>
      <Preloader visible={loading} progress={progress} />
      <footer className="py-10 text-center text-xs text-gray-500">Built for fast, watermark-free downloads. Use responsibly.</footer>
    </div>
  );
}

export default App;
