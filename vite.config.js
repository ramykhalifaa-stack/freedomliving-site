import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import localForm from './tools/local-form.js';

export default defineConfig({
	plugins: [react(), localForm()],
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts', '.json'],
		alias: { '@': path.resolve(__dirname, './src') },
	},
});
