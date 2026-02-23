import React from 'react';
import { Film } from 'lucide-react';

const SkeletonCard = () => {
    return (
        <div className="relative w-full mx-auto animate-pulse">
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-film-gold/20 rounded-tl z-10 pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-film-gold/20 rounded-tr z-10 pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-film-gold/20 rounded-bl z-10 pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-film-gold/20 rounded-br z-10 pointer-events-none" />

            <div className="relative bg-cinema-900 rounded-card overflow-hidden border border-film-gold/8 shadow-card">

                {/* Poster placeholder */}
                <div className="relative bg-cinema-800" style={{ height: '420px' }}>
                    {/* Shimmer base */}
                    <div className="absolute inset-0 skeleton-shimmer" />

                    {/* Center loading indicator */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="relative">
                            <Film className="w-12 h-12 text-film-gold/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 border border-film-gold/10 rounded-full animate-spin-slow" />
                            </div>
                        </div>
                        <p className="font-mono text-[9px] tracking-[0.3em] text-zinc-700 mt-4 uppercase">Carregando sessão</p>
                        {/* Dot loader */}
                        <div className="flex gap-1.5 mt-3">
                            {[0, 1, 2].map((i) => (
                                <div
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-film-gold/20"
                                    style={{ animationDelay: `${i * 0.2}s`, animation: 'pulse 1s ease-in-out infinite' }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Film strip top */}
                    <div className="absolute top-0 left-0 right-0 h-5 bg-cinema-950/60 flex items-center justify-around px-2">
                        {[...Array(16)].map((_, i) => (
                            <div key={i} className="w-2 h-2.5 bg-cinema-800 rounded-sm border border-cinema-700/30 flex-shrink-0" />
                        ))}
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-card-gradient" />
                </div>

                {/* Info placeholder */}
                <div className="absolute bottom-5 left-0 right-0 px-5 pb-1">
                    {/* Genre line */}
                    <div className="h-2 w-16 bg-cinema-700/50 rounded mb-3 skeleton-shimmer" />

                    {/* Title */}
                    <div className="h-6 w-3/4 bg-cinema-700/60 rounded mb-2 skeleton-shimmer" />

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-3 w-10 bg-cinema-700/40 rounded skeleton-shimmer" />
                        <div className="h-3 w-10 bg-cinema-700/40 rounded skeleton-shimmer" />
                    </div>

                    {/* Plot lines */}
                    <div className="space-y-1.5">
                        <div className="h-2.5 w-full bg-cinema-700/30 rounded skeleton-shimmer" />
                        <div className="h-2.5 w-5/6 bg-cinema-700/30 rounded skeleton-shimmer" />
                    </div>

                    {/* Details link placeholder */}
                    <div className="mt-2 h-2 w-16 bg-cinema-700/20 rounded skeleton-shimmer" />
                </div>

                {/* Scan line effect */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)',
                    }}
                />
            </div>
        </div>
    );
};

export default SkeletonCard;