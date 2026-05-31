/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // نام متغیری که در localFont تعریف کردید را اینجا جایگزین کنید
        sans: ['var(--font-iranian-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}