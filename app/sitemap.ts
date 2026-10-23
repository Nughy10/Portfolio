import type { MetadataRoute } from 'next';

// Single-page site: both languages are served from the same URL
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pau-nughy.dev',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
