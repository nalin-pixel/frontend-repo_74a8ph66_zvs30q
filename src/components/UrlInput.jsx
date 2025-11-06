import { useState } from 'react';
import { Download } from 'lucide-react';

export default function UrlInput({ onSubmit, loading }) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    onSubmit(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mt-6 flex flex-col gap-3 md:flex-row md:items-center">
      <input
        type="url"
        required
        placeholder="Paste TikTok URL here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="flex-1 rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-gray-900 placeholder:text-gray-400 shadow-sm focus:border-black focus:outline-none"
      />
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
