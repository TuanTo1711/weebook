import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    container: {
      center: true,
    },
  },
  corePlugins: { preflight: true },
  plugins: [],
} satisfies Config;
