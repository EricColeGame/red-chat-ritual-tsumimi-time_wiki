import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Red Chat Ritual TSUMIMI TIME, its characters, logos, screenshots, trailers, and related media belong to Tohakusha Inc., CIRCLE LINE GAMES, and their respective rights holders.</p>
      <p>This is an independent, non-official fan wiki. Original commentary and guide formatting on this site are provided for informational and entertainment purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
