// Sends a form's fields by email through Web3Forms (a free form-to-email service), so the
// site needs no server of its own. Without a key, as on the Mac, it posts to /api/form, which
// the local preview saves to form-entries-local.jsonl instead of emailing.
const KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export async function sendForm(subject, fields) {
	const res = await fetch(KEY ? 'https://api.web3forms.com/submit' : '/api/form', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify(KEY ? { access_key: KEY, subject, ...fields } : { subject, ...fields }),
	});
	const body = await res.json().catch(() => ({}));
	if (!res.ok || !(body.success || body.ok)) throw new Error(body.message || body.error || 'Could not send');
}
