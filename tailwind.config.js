/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cinema: ['Bebas Neue', 'Arial Black', 'sans-serif'],
                display: ['Playfair Display', 'Georgia', 'serif'],
                mono: ['JetBrains Mono', 'Courier New', 'monospace'],
            },
            animation: {
                'slide-left': 'slideLeft 0.45s cubic-bezier(0.55, 0, 1, 0.45) forwards',
                'slide-right': 'slideRight 0.45s cubic-bezier(0.55, 0, 1, 0.45) forwards',
                'fade-in': 'fadeIn 0.5s cubic-bezier(0.2, 0, 0.2, 1) forwards',
                'projector': 'projectorPulse 4s ease-in-out infinite',
                'curtain': 'curtainOpen 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                'shimmer': 'goldShimmer 4s linear infinite',
                'flicker': 'flicker 8s ease-in-out infinite',
                'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
                'scratch': 'scratch 6s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 20s linear infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                slideLeft: {
                    '0%': { transform: 'translateX(0) rotate(0deg) scale(1)', opacity: '1', filter: 'brightness(1)' },
                    '100%': { transform: 'translateX(-140%) rotate(-12deg) scale(0.75)', opacity: '0', filter: 'brightness(0.5)' },
                },
                slideRight: {
                    '0%': { transform: 'translateX(0) rotate(0deg) scale(1)', opacity: '1', filter: 'brightness(1)' },
                    '100%': { transform: 'translateX(140%) rotate(12deg) scale(0.75)', opacity: '0', filter: 'brightness(0.5)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'scale(0.92) translateY(12px)', filter: 'blur(4px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)', filter: 'blur(0)' },
                },
                projectorPulse: {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                curtainOpen: {
                    '0%': { clipPath: 'inset(0 50% 0 50%)', opacity: '0' },
                    '50%': { opacity: '1' },
                    '100%': { clipPath: 'inset(0 0% 0 0%)' },
                },
                goldShimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                flicker: {
                    '0%, 97%, 100%': { opacity: '1' },
                    '98%': { opacity: '0.85' },
                    '99%': { opacity: '0.95' },
                },
                heartbeat: {
                    '0%, 100%': { transform: 'scale(1)' },
                    '14%': { transform: 'scale(1.3)' },
                    '28%': { transform: 'scale(1)' },
                    '42%': { transform: 'scale(1.15)' },
                    '70%': { transform: 'scale(1)' },
                },
                scratch: {
                    '0%': { left: '20%', opacity: '0', transform: 'scaleY(0.3)' },
                    '5%': { opacity: '1', transform: 'scaleY(1)' },
                    '20%': { left: '75%', opacity: '0' },
                    '100%': { left: '75%', opacity: '0' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                marquee: {
                    'from': { transform: 'translateX(100%)' },
                    'to': { transform: 'translateX(-100%)' },
                },
            },
            colors: {
                cinema: {
                    950: '#080810',
                    900: '#0e0e18',
                    800: '#14141f',
                    700: '#1e1e2e',
                    600: '#2a2a3e',
                    500: '#3a3a52',
                },
                film: {
                    red: '#c41e3a',
                    'red-light': '#e02244',
                    gold: '#d4a94a',
                    'gold-light': '#e8c168',
                    cream: '#f5e6c8',
                },
            },
            backgroundImage: {
                'screen-glow': 'radial-gradient(ellipse at 50% 0%, rgba(212, 169, 74, 0.04) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(196, 30, 58, 0.06) 0%, transparent 50%)',
                'projector-beam': 'linear-gradient(to bottom, rgba(255, 220, 120, 0.12) 0%, rgba(255, 220, 120, 0.04) 40%, transparent 80%)',
                'gold-shimmer': 'linear-gradient(90deg, #c41e3a 0%, #d4a94a 30%, #f5e6c8 50%, #d4a94a 70%, #c41e3a 100%)',
                'card-gradient': 'linear-gradient(to top, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)',
                'sidebar-gradient': 'linear-gradient(to bottom, #0c0c16, #080810)',
                'ticket-gradient': 'linear-gradient(135deg, rgba(212,169,74,0.05) 0%, transparent 50%, rgba(196,30,58,0.05) 100%)',
            },
            boxShadow: {
                'card': '0 30px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,169,74,0.12)',
                'card-hover': '0 40px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(212,169,74,0.25), 0 0 40px rgba(196,30,58,0.1)',
                'btn-like': '0 0 30px rgba(34,197,94,0.3), 0 0 60px rgba(34,197,94,0.1)',
                'btn-pass': '0 0 30px rgba(196,30,58,0.3), 0 0 60px rgba(196,30,58,0.1)',
                'gold': '0 0 20px rgba(212,169,74,0.3)',
                'glow-red': '0 0 30px rgba(196,30,58,0.4), 0 0 80px rgba(196,30,58,0.15)',
                'inner-vignette': 'inset 0 0 80px rgba(0,0,0,0.6)',
            },
            borderRadius: {
                'card': '12px',
            },
            spacing: {
                'sidebar': '320px',
            },
        },
    },
    plugins: [],
}