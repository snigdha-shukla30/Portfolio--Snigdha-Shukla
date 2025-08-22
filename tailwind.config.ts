import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 2s infinite",
        progress: "progress 1.5s ease-out forwards",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "var(--tw-progress-width, 100%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         float: "float 6s ease-in-out infinite",
//         "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         bounce: "bounce 2s infinite",
//       },
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//        keyframes: {
//       float: {
//         '0%, 100%': { transform: 'translateY(0)' },
//         '50%': { transform: 'translateY(-20px)' },
//       }
//     },
//   },
//   plugins: [],
// } satisfies Config;
