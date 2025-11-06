import React, { useState } from 'react';
import { Link as LinkIcon } from 'lucide-react';

export default function UrlInput({ onSubmit, loading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onSubmit(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 w-full">
      <label htmlFor="videoUrl" className="sr-only">
        Paste video URL
      </label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-white/60">
            <LinkIcon size={18} />
          </div>
          <input
            id="videoUrl"
            type="url"
            required
            placeholder="Paste a TikTok, YouTube, Instagram, or Rednote link"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-10 py-3 text-white placeholder-white/50 outline-none ring-0 transition focus:border-white/20 focus:bg-white/10"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Resolving…' : 'Download'}
        </button>
      </div>
    </form>
  );
}
