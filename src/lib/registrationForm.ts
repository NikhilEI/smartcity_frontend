const FORM_CONTAINER_RE = /<div class="form-container">\s*<\/div>/;

/**
 * The registration widget (public/registration/js/registration.js) normally fetches
 * this HTML client-side via $.get() and injects it into `.form-container` after mount,
 * which causes the form to visibly pop in after the rest of the page has rendered.
 * Fetching it here, server-side, lets the whole page (including the form) render in
 * one shot. The widget still runs client-side afterwards to wire up validation/reCAPTCHA/
 * submit handling; its own re-fetch of the same URL is a harmless no-op swap.
 */
export async function fetchRegistrationFormHtml(formName: string): Promise<string | null> {
  try {
    const res = await fetch(`https://www.smartcitiesindia.com/registration/forms${formName}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch {
    return null;
  }
}

export function injectFormHtml(pageHtml: string, formHtml: string | null): string {
  if (!formHtml) return pageHtml;
  if (!FORM_CONTAINER_RE.test(pageHtml)) return pageHtml;
  return pageHtml.replace(FORM_CONTAINER_RE, `<div class="form-container">${formHtml}</div>`);
}
