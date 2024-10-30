export const siteConfig = {
  name: "Social Dance Effect",
  shortName: "SDE",
  description: "Your gateway to mastering social dance in Utah's Salt Lake Valley",
  url: "https://socialdanceeffect.com",
  mainLocation: {
    address: "7500 S 700 E",
    city: "Midvale",
    state: "UT",
    zip: "84047"
  },
  schedule: {
    dayOfWeek: "Tuesday",
    lesson: {
      startTime: "19:30", // 7:30 PM
      endTime: "20:30",   // 8:30 PM
      description: "Progressive lessons that build week by week"
    },
    socialDance: {
      startTime: "20:30", // 8:30 PM
      endTime: "22:00",   // 10:00 PM
      description: "Open social dancing with a mix of styles"
    }
  },
  danceStyles: [
    "Country Swing",
    "Line Dancing",
    "West Coast Swing",
    "Salsa",
    "Bachata",
    "Merengue",
    "Waltz",
    "Cha-Cha",
    "Foxtrot",
    "Rumba",
    "East Coast Swing",
    "Two-Step"
  ],
  socialLinks: {
    facebook: "https://facebook.com/socialdanceeffect",
    instagram: "https://instagram.com/socialdanceeffect"
  },
  contact: {
    email: "info@socialdanceeffect.com"
  },
  features: {
    events: {
      enabled: true,
      requireRegistration: false
    },
    
    learning: {
      enabled: true,
      progressTracking: true,
      achievements: true
    }
  }
};

export default siteConfig;