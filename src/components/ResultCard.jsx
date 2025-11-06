import React from 'react';

export default function ResultCard({ result }) {
  if (!result) return null;

  const { title, cover, download_url, duration, author, source } = result;

  return (
    <div className="mt-8 w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white shadow-sm">
      <div className="flex flex-col items-start gap-4 sm:flex-row">
        {cover ? (
          <img
            src={cover}
            alt={title || 'Video thumbnail'}
            className="h-40 w-full max-w-[18rem] rounded-lg object-cover ring-1 ring-white/10"
          />
        ) : (
          <div className="flex h-40 w-full max-w-[18rem] items-center justify-center rounded-lg bg-black/40 text-white/50 ring-1 ring-white/10">
            No thumbnail
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {source && (
              <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
                {source}
              </span>
            )}
            {duration ? (
              <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10">
                {Math.floor(duration)}s
              </span>
            ) : null}
          </div>

          <h3 className="mt-2 line-clamp-2 text-lg font-semibold">{title || 'Untitled video'}</h3>
          {author && (
            <p className="mt-1 text-sm text-white/70">by {author}</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {download_url && (
              <a
                href={download_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-600"
              >
                Download video
              </a>
            )}
            {!download_url && (
              <span className="text-sm text-red-300">No direct download found.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
