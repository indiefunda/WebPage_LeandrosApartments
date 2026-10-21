import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://leandros-apartments.web.app',
  trailingSlash: 'always',
  compressHTML: true,
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'el', 'fr'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          el: 'el-GR',
          fr: 'fr-FR',
        },
      },
      // @astrojs/sitemap emits the three language alternates but not
      // x-default, which the hreflang spec expects. Add it pointing at the
      // English edition of the same URL.
      serialize: (item) => {
        const links = item.links ? [...item.links] : [];
        if (links.length > 0 && !links.some((link) => link.lang === 'x-default')) {
          const english = links.find((link) => link.lang?.startsWith('en'))?.url ?? item.url;
          links.push({ lang: 'x-default', url: english });
        }
        return { ...item, links };
      },
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
