import React, { useState, useEffect, useCallback, useRef } from 'react';
import MovieCard from './components/MovieCard';
import ActionButtons from './components/ActionButtons';
import HistorySidebar from './components/HistorySidebar';
import SkeletonCard from './components/SkeletonCard';
import { getPopularMovies } from './services/tvmazeApi';

function App() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isExiting, setIsExiting] = useState(false);
  const [exitDirection, setExitDirection] = useState(null);

  const loadingRef = useRef(false);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const fetchMovies = async (page) => {
    if (loadingRef.current || page > totalPages) return;
    loadingRef.current = true;
    setLoading(true);
    try {
      const data = await getPopularMovies(page);
      setMovies(prev => [...prev, ...data.results]);
      setTotalPages(data.total_pages);
      setCurrentPage(page);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar filmes. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
      loadingRef.current = false;
    }
  };

  useEffect(() => { fetchMovies(1); }, []);

  useEffect(() => {
    if (currentIndex >= movies.length - 3 && currentPage < totalPages && !loading) {
      fetchMovies(currentPage + 1);
    }
  }, [currentIndex, movies.length, currentPage, totalPages, loading]);

  const handleDecision = useCallback((direction) => {
    if (!movies.length || currentIndex >= movies.length || isExiting) return;
    setExitDirection(direction);
    setIsExiting(true);
    setTimeout(() => {
      const currentMovie = movies[currentIndex];
      if (direction === 'right') {
        setFavorites(prev => {
          if (prev.some(m => m.id === currentMovie.id)) return prev;
          return [currentMovie, ...prev];
        });
      }
      setCurrentIndex(prev => prev + 1);
      setIsExiting(false);
      setExitDirection(null);
    }, 420);
  }, [movies, currentIndex, isExiting]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); handleDecision('left'); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); handleDecision('right'); }
  }, [handleDecision]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentMovie = movies[currentIndex];

  return (
    <div className="min-h-screen bg-cinema-950 screen-bg relative overflow-hidden">

      {/* Film strip decorations */}
      <div className="film-strip-left" />
      <div className="film-strip-right" />

      {/* Projector beam from top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-screen bg-projector-beam pointer-events-none animate-projector"
        style={{ clipPath: 'polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)' }} />

      {/* Subtle scratch line */}
      <div className="scratch-line" />

      {/* Top gold border */}
      <div className="fixed top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-film-gold/40 to-transparent z-50" />
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-film-red/30 to-transparent z-50" />

      {/* Sidebar */}
      <HistorySidebar favorites={favorites} />

      {/* Main content area */}
      <div className="flex items-center justify-center min-h-screen pr-[320px] pl-6 relative z-10">
        <div className="w-full max-w-sm">

          {/* Header */}
          <div className="text-center mb-10 relative">
            {/* Decorative reels */}
            <div className="flex items-center justify-center gap-3 mb-4 opacity-40">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-film-gold/60" />
              <div className="w-2 h-2 rounded-full bg-film-gold/60 border border-film-gold/30" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-film-gold/60" />
            </div>

            <h1 className="font-cinema text-6xl tracking-widest title-shimmer leading-none mb-1">
              MOVIE
            </h1>
            <h1 className="font-cinema text-5xl tracking-[0.3em] title-shimmer leading-none">
              MATCHMAKER
            </h1>

            <div className="flex items-center justify-center gap-3 mt-4 opacity-40">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-film-red/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-film-red/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-film-red/60" />
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-500 mt-4">
              Encontre seu próximo filme favorito
            </p>

            {/* Keyboard hints */}
            <div className="flex justify-center gap-8 mt-6 text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <kbd className="px-2.5 py-1 bg-cinema-800 rounded border border-film-red/30 font-mono text-film-red text-xs shadow-inner">←</kbd>
                <span className="font-display italic text-zinc-500">Pass</span>
              </div>
              <div className="w-px h-5 bg-zinc-700 self-center" />
              <div className="flex items-center gap-2">
                <span className="font-display italic text-zinc-500">Like</span>
                <kbd className="px-2.5 py-1 bg-cinema-800 rounded border border-green-700/40 font-mono text-green-500 text-xs shadow-inner">→</kbd>
              </div>
            </div>
          </div>

          {/* Card area */}
          {error ? (
            <div className="relative text-center p-8 bg-cinema-900/70 backdrop-blur-sm rounded-card ticket-gradient border border-film-red/20">
              <p className="font-display italic text-film-red/80 text-sm mb-4">{error}</p>
              <button
                onClick={() => { setMovies([]); setCurrentIndex(0); setCurrentPage(1); fetchMovies(1); }}
                className="px-8 py-2.5 bg-film-red/90 hover:bg-film-red rounded text-film-cream font-cinema tracking-widest text-sm transition-all duration-300 hover:shadow-btn-pass"
              >
                TENTAR NOVAMENTE
              </button>
            </div>
          ) : loading && movies.length === 0 ? (
            <SkeletonCard />
          ) : currentMovie ? (
            <MovieCard
              movie={currentMovie}
              isExiting={isExiting}
              direction={exitDirection}
            />
          ) : (
            <div className="text-center p-10 bg-cinema-900/60 backdrop-blur-sm rounded-card border border-film-gold/15">
              <div className="font-cinema text-3xl text-film-gold/60 tracking-widest mb-2">FIM DA SESSÃO</div>
              <p className="font-display italic text-zinc-500 text-sm">Volte mais tarde para novas recomendações</p>
            </div>
          )}

          {currentMovie && (
            <ActionButtons
              onLike={() => handleDecision('right')}
              onPass={() => handleDecision('left')}
              remaining={movies.length - currentIndex}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;