const WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL as string;

export async function submitLead(data: {
  name: string;
  email: string;
  phone: string;
  source: string;
}) {
  if (!WEBHOOK_URL) return;
  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors', // Google Apps Script requires no-cors
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    // fail silently — don't block the UI
  }
}
