// config/seo.config.js

export const seoConfig = {
  defaultTitle: 'The Social Dance Effect - Learn to Dance in Salt Lake Valley',
  titleTemplate: '%s | The Social Dance Effect',
  description: 'Join our vibrant community of dancers in the Salt Lake Valley. Free weekly social dancing for all ages and skill levels!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://socialdanceeffect.com',
    site_name: 'The Social Dance Effect',
    images: [
      {
        url: '/assets/images/social-share.jpg',
        width: 1200,
        height: 630,
        alt: 'The Social Dance Effect',
      },
    ],
  },
  twitter: {
    handle: '@socialdanceeffect',
    site: '@socialdanceeffect',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest',
    },
  ],
};

export const getDanceStyleSEO = (style) => {
  const styleData = {
    'country-swing': {
      title: 'Learn Country Swing Dancing',
      description: 'Master Country Swing dancing with our free lessons and tutorials. Perfect for beginners!',
    },
    'west-coast-swing': {
      title: 'West Coast Swing Classes',
      description: 'Learn West Coast Swing with our comprehensive tutorials and weekly social dancing.',
    },
    // Add other dance styles...
  };

  return styleData[style] || {
    title: `Learn ${style.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
    description: `Master ${style.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} with our free lessons and social dancing events.`,
  };
};

export default seoConfig;
