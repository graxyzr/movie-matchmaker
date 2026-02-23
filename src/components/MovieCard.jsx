import React, { useState } from 'react';
import { getImageUrl } from '../services/tvmazeApi';
import { Film } from 'lucide-react';

const MovieCard = ({ movie, isExiting, direction }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const posterUrl = getImageUrl(movie.Poster);
    const year = movie.Year || 'N/A';
    const title = movie.Title || 'Título desconhecido';
    const overview = movie.Plot || 'Sinopse não disponível para este filme.';
    const rating = movie.imdbRating || '—';
    const genre = movie.Genre?.split(',')[0]?.trim() || 'Cinema';

    const animationClass = isExiting
        ? direction === 'right' ? 'animate-slide-right' : 'animate-slide-left'
        : 'animate-fade-in';

    return (
        <div className={`relative w-full mx-auto ${animationClass}`}>
            {/* Outer gold glow ring on hover */}
            <div className="group card-lift relative rounded-card shadow-card hover:shadow-card-hover transition-all duration-400">

                {/* Corner decorations - film reel style */}
                <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-film-gold/40 rounded-tl z-20 pointer-events-none" />
                <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-film-gold/40 rounded-tr z-20 pointer-events-none" />
                <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-film-gold/40 rounded-bl z-20 pointer-events-none" />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-film-gold/40 rounded-br z-20 pointer-events-none" />

                {/* Main card */}
                <div className="relative bg-cinema-900 rounded-card overflow-hidden border border-film-gold/10 ticket-gradient">

                    {/* Session badge */}
                    <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5 bg-cinema-950/85 backdrop-blur-sm px-2.5 py-1 rounded border border-film-gold/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-film-red animate-pulse" />
                        <span className="font-mono text-[9px] text-film-gold/70 tracking-widest uppercase">Em cartaz</span>
                    </div>

                    {/* Poster image */}
                    <div className="relative overflow-hidden bg-cinema-800" style={{ height: '420px' }}>
                        {!imageLoaded && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-cinema-800 to-cinema-900">
                                <Film className="w-14 h-14 text-film-gold/15 animate-pulse" />
                                <span className="font-mono text-[9px] text-zinc-700 mt-3 tracking-widest">CARREGANDO...</span>
                            </div>
                        )}

                        {posterUrl ? (
                            <img
                                src={posterUrl}
                                alt={title}
                                className={`w-full h-full object-cover transition-all duration-700 poster-aged ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                    } group-hover:scale-105`}
                                onLoad={() => setImageLoaded(true)}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    setImageLoaded(false);
                                }}
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-cinema-700 via-cinema-800 to-cinema-900 flex items-center justify-center p-8">
                                <div className="text-center">
                                    <Film className="w-14 h-14 mx-auto mb-4 text-film-gold/20" />
                                    <h3 className="font-cinema text-3xl tracking-wider text-film-cream/60 text-center leading-tight">{title}</h3>
                                </div>
                            </div>
                        )}

                        {/* Cinematic gradient overlay */}
                        <div className="absolute inset-0 bg-card-gradient" />

                        {/* Film strip perforations top/bottom */}
                        <div className="absolute top-0 left-0 right-0 h-5 bg-cinema-950/60 flex items-center justify-around px-2">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-2 h-2.5 bg-cinema-950 rounded-sm border border-cinema-700/50 flex-shrink-0" />
                            ))}
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-5 bg-cinema-950/30 flex items-center justify-around px-2">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-2 h-2.5 bg-cinema-950/80 rounded-sm border border-cinema-700/30 flex-shrink-0" />
                            ))}
                        </div>
                    </div>

                    {/* Info panel */}
                    <div className="absolute bottom-5 left-0 right-0 px-5 pb-1">
                        {/* Genre tag */}
                        <div className="mb-2">
                            <span className="font-mono text-[9px] tracking-[0.25em] text-film-gold/60 uppercase border-b border-film-gold/20 pb-0.5">
                                {genre}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-cinema text-2xl tracking-wider text-film-cream leading-tight line-clamp-1 mb-1 group-hover:text-film-gold transition-colors duration-300">
                            {title}
                        </h2>

                        {/* Meta row */}
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-mono text-xs text-zinc-500">{year}</span>
                            <div className="w-px h-3 bg-zinc-700" />
                            <div className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-film-gold fill-film-gold" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="font-mono text-xs text-film-gold/80">{rating}</span>
                            </div>
                        </div>

                        {/* Plot */}
                        <p className="font-display italic text-zinc-400 text-xs line-clamp-2 leading-relaxed text-[11px]">
                            {overview}
                        </p>

                        {/* More details link */}
                        <button className="mt-2 font-mono text-[9px] tracking-[0.2em] text-film-red/60 hover:text-film-red transition-colors duration-200 flex items-center gap-1 uppercase">
                            <span>Ver detalhes</span>
                            <span>›</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;