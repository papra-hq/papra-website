import type { AstroConfig, AstroIntegration } from 'astro';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

function buildRedirects({ config }: { config?: AstroConfig }) {
  const redirects = config?.redirects;

  if (!redirects) {
    return;
  }

  return Object
    .entries(redirects)
    .map(([from, to]) => {
      const toPath = typeof to === 'string' ? to : to.destination;
      const status = typeof to === 'string' ? '' : to.status;

      return `${from} ${toPath} ${status}`.trim();
    })
    .join('\n');
}

export default function createRedirectsFile({
  fileName = '_redirects',
}: {
  fileName?: string;
} = {}): AstroIntegration {
  let config: AstroConfig;

  return {
    name: 'create-redirects-file',
    hooks: {
      'astro:config:done': async (args) => {
        config = args.config;
      },
      'astro:build:done': async ({ dir, logger }) => {
        const filePath = fileURLToPath(new URL(fileName, dir));
        const fileContent = buildRedirects({ config });

        if (!fileContent) {
          return;
        }

        await writeFile(filePath, fileContent);

        logger.info(`${fileName} file created`);
      },
    },
  };
}
