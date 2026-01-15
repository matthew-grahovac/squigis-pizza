// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://matthew-grahovac.github.io',
    base: '/squigis-pizza',
    vite: {    
        plugins: [tailwindcss()],  
    },
});
