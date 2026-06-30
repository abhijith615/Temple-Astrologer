"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchSite, type SearchEntry } from "@/lib/search";

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [results, setResults] = useState<SearchEntry[]>([]);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    setResults(searchSite(query));
    setActive(0);
  }, [query]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const go = (entry: SearchEntry) => {
    router.push(entry.href);
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (!open || results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(results[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div ref={wrapRef} className={`relative ${compact ? "w-full" : "w-full max-w-[230px]"}`}>
      <div
        className="flex items-center gap-2 rounded-full px-3.5 py-2 border transition-colors"
        style={{
          background: "rgba(27,29,42,0.05)",
          borderColor: open ? "var(--champagne-gold)" : "rgba(27,29,42,0.18)",
        }}
      >
        <Search size={15} style={{ color: "var(--champagne-gold)" }} aria-hidden="true" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Search the site…"
          aria-label="Search the site"
          className="bg-transparent outline-none text-sm w-full"
          style={{ color: "var(--text-on-light)" }}
        />
        {query && (
          <button onClick={() => setQuery("")} aria-label="Clear search" style={{ color: "var(--text-on-light)" }}>
            <X size={14} />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <ul
          className="absolute top-full mt-2 left-0 right-0 rounded-2xl overflow-hidden z-50 border shadow-2xl"
          style={{ background: "var(--ivory)", borderColor: "rgba(200,162,75,0.3)" }}
          role="listbox"
        >
          {results.map((r, i) => (
            <li key={r.href + r.title} role="option" aria-selected={i === active}>
              <button
                onMouseEnter={() => setActive(i)}
                onClick={() => go(r)}
                className="w-full text-left px-4 py-2.5 transition-colors"
                style={{ background: i === active ? "rgba(200,162,75,0.12)" : "transparent" }}
              >
                <span className="block text-sm font-medium" style={{ color: "var(--text-on-light)" }}>
                  {r.title}
                </span>
                <span className="block text-xs" style={{ color: "rgba(27,29,42,0.5)" }}>
                  {r.section}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && query && results.length === 0 && (
        <div
          className="absolute top-full mt-2 left-0 right-0 rounded-2xl px-4 py-3 z-50 border text-sm"
          style={{ background: "var(--ivory)", borderColor: "rgba(200,162,75,0.3)", color: "rgba(27,29,42,0.6)" }}
        >
          No results for &ldquo;{query}&rdquo;
        </div>
      )}
    </div>
  );
}
