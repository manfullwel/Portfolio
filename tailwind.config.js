/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                cusco: {
                    50: '#fdf8f3',
                    100: '#f9eee0',
                    200: '#f2dcc0',
                    300: '#e8c396',
                    400: '#dda66a',
                    500: '#d4894a',
                    600: '#c6703f',
                    700: '#a55836',
                    800: '#854732',
                    900: '#6c3c2b',
                },
            },
            animation: {
                'tornado-spin': 'tornado-spin 3s ease-in-out forwards',
                'float': 'float 15s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
            },
            keyframes: {
                'tornado-spin': {
                    '0%': {
                        transform: 'rotate(0deg) scale(1)',
                        borderRadius: '0%',
                    },
                    '50%': {
                        transform: 'rotate(720deg) scale(0.5)',
                        borderRadius: '50%',
                    },
                    '100%': {
                        transform: 'rotate(720deg) scale(1)',
                        borderRadius: '50%',
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0) translateX(0)',
                        opacity: '0',
                    },
                    '50%': {
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'translateY(-100vh) translateX(50px)',
                        opacity: '0',
                    },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                scaleIn: {
                    from: {
                        transform: 'scale(0.8)',
                        opacity: '0',
                    },
                    to: {
                        transform: 'scale(1)',
                        opacity: '1',
                    },
                },
            },
        },
    },
    plugins: [],
}
