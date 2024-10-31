// src/config/site.config.ts
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
      startTime: "19:30",
      endTime: "20:30",
      description: "Progressive lessons that build week by week"
    },
    socialDance: {
      startTime: "20:30",
      endTime: "22:00",
      description: "Open social dancing with a mix of styles"
    }
  },
  socialLinks: {
    facebook: "https://facebook.com/socialdanceeffect",
    instagram: "https://instagram.com/socialdanceeffect"
  },
  contact: {
    email: "info@socialdanceeffect.com"
  }
};

export default siteConfig;