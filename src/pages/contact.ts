import type { APIRoute } from 'astro';
import { DEFAULT_LOCALE, LOCALES } from '../i18n/i18n.constants';

export const prerender = false;

export const GET: APIRoute = ({ preferredLocaleList = [] }) => {
  const locale = preferredLocaleList.find(locale => (LOCALES as readonly string[]).includes(locale)) ?? DEFAULT_LOCALE;

  return new Response(null, {
    status: 302,
    headers: {
      Location: `/${locale}/contact`,
      Vary: 'Accept-Language',
    },
  });
};
