import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import astroExpressiveCode from 'astro-expressive-code';
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import { config } from './src/app.config';
import createRedirectsFile from './src/plugins/redirects';

export default defineConfig({
  site: 'https://papra.app',
  integrations: [
    UnoCSS({ injectReset: true }),
    sitemap(),
    createRedirectsFile({
      redirects: {
        '/discord': { status: 302, destination: config.discordInvite },
      },
    }),
    astroExpressiveCode({
      themes: ['vitesse-dark', 'github-light'],
      styleOverrides: {
        frames: {
          shadowColor: 'transparent',
        },
      },
      defaultProps: {
        overridesByLang: {
          'bash,sh,shell': {
            frame: 'none',
          },
        },
      },
    }),
    mdx(),
  ],
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
