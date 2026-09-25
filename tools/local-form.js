// Local-only stand-in for the form service. With no Web3Forms key, src/lib/sendForm.js posts
// to /api/form, and `vite` / `vite preview` answer here by saving each entry to
// form-entries-local.jsonl. Nothing is emailed. The published site never uses this.
import fs from 'node:fs';
import path from 'node:path';

const FILE = path.resolve('form-entries-local.jsonl');

function handler(req, res, next) {
	if (req.url.split('?')[0] !== '/api/form' || req.method !== 'POST') return next();
	let raw = '';
	req.on('data', (c) => { raw += c; });
	req.on('end', () => {
		res.setHeader('Content-Type', 'application/json');
		try {
			fs.appendFileSync(FILE, JSON.stringify({ at: new Date().toISOString(), ...JSON.parse(raw) }) + '\n');
			res.end(JSON.stringify({ ok: true }));
		} catch {
			res.statusCode = 400;
			res.end(JSON.stringify({ ok: false, error: 'Invalid request' }));
		}
	});
}

export default function localForm() {
	return {
		name: 'local-form',
		configureServer: (server) => { server.middlewares.use(handler); },
		configurePreviewServer: (server) => { server.middlewares.use(handler); },
	};
}
