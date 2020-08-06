import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'doc-site',
  outDir: './dist/static',
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './docs'
      },
    }
  }
};
