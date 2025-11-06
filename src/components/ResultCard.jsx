import { Download } from 'lucide-react';

export default function ResultCard({ title, cover, downloadUrl }) {
  return (
    <div className="mt-8 w-full max-w-3xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <img src={cover} alt={title} className="w-full md:w-64 h-56 object-cover" />
        <div className="flex-1 p-5 flex flex-col">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 line-clamp-2">{title}</h3>
          <div className="mt-auto pt-4">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 font-medium text-white shadow-sm hover:opacity-90"
            >
              <Download className="h-5 w-5" />
              Download without watermark
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
