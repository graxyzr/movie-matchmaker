import React from 'react';
import { Film } from 'lucide-react';

const ActionButtons = ({ onLike, onPass, remaining = 0 }) => {
    return (
        <div className="mt-8 flex flex-col items-center gap-6">

            {/* Buttons row */}
            <div className="flex items-center justify-center gap-6">

                {/* Pass button */}
                <div className="flex flex-col items-center gap-2 group">
                    <button
                        onClick={onPass}
                        title="Pass (←)"
                        className="relative w-16 h-16 rounded-full bg-cinema-800 border border-film-red/30 flex items-center justify-center transition-all duration-300 group-hover:border-film-red group-hover:bg-film-red/10 group-hover:scale-110 group-hover:shadow-btn-pass"
                    >
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-film-red/0 group-hover:bg-film-red/5 transition-all duration-300" />
                        {/* X icon */}
                        <svg className="w-7 h-7 text-film-red/60 group-hover:text-film-red transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-600 group-hover:text-film-red/50 transition-colors uppercase">Pass</span>
                </div>

                {/* Center separator */}
                <div className="flex flex-col items-center gap-1 opacity-25">
                    <div className="w-px h-4 bg-film-gold" />
                    <div className="w-1 h-1 rounded-full bg-film-gold" />
                    <div className="w-px h-4 bg-film-gold" />
                </div>

                {/* Like button */}
                <div className="flex flex-col items-center gap-2 group">
                    <button
                        onClick={onLike}
                        title="Like (→)"
                        className="relative w-16 h-16 rounded-full bg-cinema-800 border border-green-700/30 flex items-center justify-center transition-all duration-300 group-hover:border-green-500 group-hover:bg-green-500/10 group-hover:scale-110 group-hover:shadow-btn-like"
                    >
                        <div className="absolute inset-0 rounded-full bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-300" />
                        {/* Heart icon */}
                        <svg className="w-7 h-7 text-green-600/70 group-hover:text-green-400 group-hover:fill-green-500/20 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                    <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-600 group-hover:text-green-600/50 transition-colors uppercase">Like</span>
                </div>
            </div>

            {/* Gold divider */}
            <div className="gold-line w-32" />

            {/* Remaining counter */}
            <div className="flex items-center gap-2 px-4 py-1.5 bg-cinema-800/40 backdrop-blur-sm rounded border border-film-gold/10">
                <Film className="w-3 h-3 text-film-gold/40" />
                <span className="font-mono text-[9px] tracking-[0.2em] text-zinc-500 uppercase">
                    {remaining > 0 ? `${remaining} filmes restantes` : 'Carregando mais...'}
                </span>
            </div>

        </div>
    );
};

export default ActionButtons;