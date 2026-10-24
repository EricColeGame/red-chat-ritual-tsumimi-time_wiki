import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub. Content is provided for informational and entertainment purposes only.</p>
      <p>Story details, clues, endings, and release information may change without notice. Always verify important information through the game or official channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Tohakusha Inc. or CIRCLE LINE GAMES property.</p>
      <p>Questions about these terms can be sent to <a className="font-semibold text-foreground hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
