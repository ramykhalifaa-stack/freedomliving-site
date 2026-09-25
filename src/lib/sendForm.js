// Sends a form's fields by email through Web3Forms (a free form-to-email service), so the
// site needs no server of its own. Until a key is added, the published site hands the entry
// to the visitor's own email app instead, addressed to info@freedomliving.ae. On the Mac (`--mode mac` or
// `npm run dev`) it posts to /api/form, which saves to form-entries-local.jsonl.
const KEY = import.meta.env.VITE_WEB3FORMS_KEY;
const ON_MAC = import.meta.env.DEV || import.meta.env.MODE === 'mac';
export const FORM_TO = 'info@freedomliving.ae';

// Returns 'sent', or 'email-app' when the visitor still has to press Send in their email app.
export async function sendForm(subject, fields) {
	if (!KEY && !ON_MAC) {
		const body = Object.entries(fields)
			.filter(([k, v]) => v && !['company', 'elapsedMs'].includes(k))
			.map(([k, v]) => `${k}: ${v}`)
			.join('\n');
		window.location.href = `mailto:${FORM_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		return 'email-app';
	}
	const res = await fetch(KEY ? 'https://api.web3forms.com/submit' : '/api/form', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify(KEY ? { access_key: KEY, subject, ...fields } : { subject, ...fields }),
	});
	const body = await res.json().catch(() => ({}));
	if (!res.ok || !(body.success || body.ok)) throw new Error(body.message || body.error || 'Could not send');
	return 'sent';
}

// The toast shown when the entry went to the visitor's email app.
export function emailAppToast(lang) {
	return String(lang).startsWith('ar')
		? { title: 'أكمل الإرسال من بريدك', description: `فُتح تطبيق البريد برسالتك. اضغط إرسال لتصلنا. إن لم يُفتح، راسلنا على ${FORM_TO}`, duration: 12000 }
		: { title: 'Almost there', description: `Your email app has opened with your message. Press Send to reach us. If it did not open, write to ${FORM_TO}`, duration: 12000 };
}
