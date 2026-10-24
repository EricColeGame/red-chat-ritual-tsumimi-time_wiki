export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    steamCommunity?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Red Chat Ritual TSUMIMI TIME Wiki",
  shortName: "TSUMIMI TIME",
  logoText: "R",
  tagline: "Story Guides, Endings, Clues & Walkthroughs",
  description: "Investigate Tsumimi's livestream, uncover hidden clues, influence story events, and discover the truth behind Mashiro's disappearance in Red Chat Ritual TSUMIMI TIME.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://red-chat-ritual-tsumimi-time.wiki",
  supportEmail: "support@red-chat-ritual-tsumimi-time.wiki",
  gameUrl: "https://store.steampowered.com/app/4413070/Red_Chat_Ritual___TSUMIMI_TIME/",
  heroVideoId: "FFeaaU_GZ9Y", // Red Chat Ritual TSUMIMI TIME official Kickstarter trailer
  social: {
    youtube: "https://www.youtube.com/watch?v=FFeaaU_GZ9Y",
    steamCommunity: "https://steamcommunity.com/app/4413070",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
