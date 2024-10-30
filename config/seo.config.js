export const seoConfig = {
  defaultTitle: "Social Dance Effect - Learn Social Dancing in Salt Lake Valley",
  titleTemplate: "%s | Social Dance Effect",
  defaultDescription: "Learn social dancing with The Social Dance Effect - Your gateway to mastering various dance styles in Utah's Salt Lake Valley.",
  additionalMetaTags: [
    {
      property: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://socialdanceeffect.com/',
    site_name: 'Social Dance Effect',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Social Dance Effect'
      }
    ]
  },
  twitter: {
    handle: '@socialdanceeffect',
    site: '@socialdanceeffect',
    cardType: 'summary_large_image'
  },
  robotsContent: 'index,follow',
  pageMeta: {
    home: {
      title: "Social Dance Effect - Learn Social Dancing in Salt Lake Valley",
      description: "Join our weekly free social dance venue in Salt Lake Valley. Learn Country Swing, Latin, and Ballroom dancing in a welcoming environment."
    },
    events: {
      title: "Dance Events & Classes | Social Dance Effect",
      description: "Join our weekly Tuesday night events featuring progressive dance lessons and social dancing. Free entry, no partner needed!"
    },
    
    learning: {
      title: "Dance Learning Pathways | Social Dance Effect",
      description: "Structured learning paths for various dance styles. Progress from beginner to advanced at your own pace."
    }
  }
};

export default seoConfig;