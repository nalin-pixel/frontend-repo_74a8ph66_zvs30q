import { useState } from 'react';
import { Download, Link } from 'lucide-react';

export default function UrlInput({ onSubmit, loading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onSubmit(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3">
      <div className="relative">
        <input
          type="url"
          required
          placeholder="Paste TikTok, YouTube, Instagram, or Rednote URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white/90 pl-11 pr-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-black focus:outline-none"
        />
        <Link className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 font-medium text-white shadow-sm transition hover:opacity-90 disabled:opacity-60"
      >
        <Download className="h-5 w-5" />
        {loading ? 'Processing...' : 'Download'}
      </button>
    </form>
  );
}
