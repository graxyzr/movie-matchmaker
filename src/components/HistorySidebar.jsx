import React from 'react';
import { Film } from 'lucide-react';
import { getImageUrl } from '../services/tvmazeApi';

const HistorySidebar = ({ favorites }) => {
    return (
        <div className="fixed right-0 top-0 bottom-0 w-[320px] sidebar-bg overflow-y-auto z-20 shadow-2xl"
            style={{ borderLeft: '1px solid rgba(212,169,74,0.12)' }}>

            {/* Header */}
            <div className="sticky top-0 z-30 bg-cinema-950/95 backdrop-blur-md"
                style={{ borderBottom: '1px solid rgba(212,169,74,0.12)' }}>

                {/* Top accent */}
                <div className="h-0.5 bg-gradient-to-r from-film-red via-film-gold to-film-red opacity-60" />

                <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                        {/* Projector icon */}
                        <div className="relative w-8 h-8 bg-cinema-800 rounded border border-film-gold/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-film-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z" />
                            </svg>
                            {favorites.length > 0 && (
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-film-red rounded-full animate-heartbeat" />
                            )}
                        </div>
                        <div>
                            <h2 className="font-cinema text-lg tracking-[0.15em] text-film-cream/90">SUA CINEMATECA</h2>
                            <p className="font-mono text-[9px] tracking-widest text-zinc-600 uppercase">Coleção pessoal</p>
                        </div>
                        <div className="ml-auto">
                            <span className="font-mono text-xs bg-film-red/15 text-film-red/80 px-2.5 py-1 rounded border border-film-red/20">
                                {favorites.length}
                            </span>
                        </div>
                    </div>

                    {/* Decorative film strip */}
                    <div className="flex gap-0.5 overflow-hidden opacity-20">
                        {[...Array(30)].map((_, i) => (
                            <div key={i} className="w-2 h-3 bg-cinema-700 rounded-sm flex-shrink-0 border border-cinema-600" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-96 text-center px-8">
                    <div className="relative mb-6">
                        <div className="w-20 h-20 rounded-full bg-cinema-800 border border-film-gold/15 flex items-center justify-center">
                            <Film className="w-9 h-9 text-film-gold/20" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-cinema-800 border border-film-red/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-film-red/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </div>
                    </div>
                    <p className="font-cinema text-base tracking-widest text-zinc-600 mb-2">CINEMATECA VAZIA</p>
                    <p className="font-display italic text-xs text-zinc-700 leading-relaxed max-w-[200px]">
                        Use o botão ❤️ ou a seta → para salvar seus filmes favoritos
                    </p>

                    <div className="mt-8 flex items-center gap-3 text-xs border border-film-gold/10 rounded px-4 py-3 bg-cinema-800/30">
                        <kbd className="px-2 py-0.5 bg-cinema-700 rounded border border-film-red/20 font-mono text-film-red/60 text-xs">←</kbd>
                        <span className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase">Pass</span>
                        <div className="w-px h-3 bg-zinc-700" />
                        <span className="font-mono text-[9px] text-zinc-600 tracking-widest uppercase">Like</span>
                        <kbd className="px-2 py-0.5 bg-cinema-700 rounded border border-green-700/20 font-mono text-green-700/60 text-xs">→</kbd>
                    </div>
                </div>
            ) : (
                <div className="p-4 space-y-2 pb-24">
                    {favorites.map((movie, index) => {
                        const posterUrl = getImageUrl(movie.Poster);
                        return (
                            <div
                                key={movie.id}
                                className="group relative flex gap-3 p-3 rounded transition-all duration-300 cursor-pointer hover:bg-cinema-800/60"
                                style={{ borderBottom: '1px solid rgba(212,169,74,0.06)' }}
                            >
                                {/* Position number */}
                                <span className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[8px] text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                {/* Poster thumbnail */}
                                <div className="relative w-12 h-[68px] flex-shrink-0 overflow-hidden rounded border border-film-gold/10 group-hover:border-film-gold/30 transition-colors">
                                    {posterUrl ? (
                                        <img
                                            src={posterUrl}
                                            alt={movie.Title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 poster-aged"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-cinema-700 flex items-center justify-center">
                                            <Film className="w-4 h-4 text-zinc-600" />
                                        </div>
                                    )}
                                    {/* Saved indicator */}
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-film-red to-film-gold opacity-60" />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0 py-0.5">
                                    <h3 className="font-cinema text-sm tracking-wide text-zinc-200 truncate group-hover:text-film-gold transition-colors leading-tight">
                                        {movie.Title}
                                    </h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="font-mono text-[9px] text-zinc-600">{movie.Year || 'N/A'}</span>
                                        {movie.imdbRating && movie.imdbRating !== 'N/A' && (
                                            <>
                                                <div className="w-px h-2.5 bg-zinc-700" />
                                                <div className="flex items-center gap-0.5">
                                                    <svg className="w-2.5 h-2.5 text-film-gold fill-film-gold" viewBox="0 0 24 24">
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                    <span className="font-mono text-[9px] text-film-gold/70">{movie.imdbRating}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {movie.Genre && (
                                        <span className="inline-block mt-1.5 font-mono text-[8px] tracking-wider text-film-red/50 uppercase border border-film-red/15 px-1.5 py-0.5 rounded">
                                            {movie.Genre.split(',')[0]?.trim()}
                                        </span>
                                    )}
                                </div>

                                {/* Heart saved icon */}
                                <div className="flex-shrink-0 self-center opacity-30 group-hover:opacity-60 transition-opacity">
                                    <svg className="w-3.5 h-3.5 fill-film-red text-film-red" viewBox="0 0 24 24">
                                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Footer stats */}
            {favorites.length > 0 && (
                <div className="fixed bottom-0 right-0 w-[320px] bg-cinema-950/95 backdrop-blur-md z-30"
                    style={{ borderTop: '1px solid rgba(212,169,74,0.12)' }}>
                    <div className="h-0.5 bg-gradient-to-r from-film-gold/0 via-film-gold/30 to-film-gold/0" />
                    <div className="px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Film className="w-3 h-3 text-zinc-600" />
                            <span className="font-mono text-[9px] tracking-widest text-zinc-600 uppercase">Total</span>
                        </div>
                        <span className="font-cinema text-lg tracking-wider text-film-gold/70">
                            {favorites.length} {favorites.length === 1 ? 'filme' : 'filmes'}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistorySidebar;