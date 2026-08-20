import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';

const themePath = fileURLToPath(new URL('../astryx-theme.css', import.meta.url));

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-astryx-research-theme',
      async generateBundle() {
        this.emitFile({type: 'asset', fileName: 'astryx-theme.css', source: await readFile(themePath)});
      },
    },
  ],
});
