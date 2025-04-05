import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import UnoCSS from 'unocss/astro';
import { config } from './src/config';
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
  ],
});
