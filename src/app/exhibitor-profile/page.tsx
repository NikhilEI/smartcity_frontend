import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import RegistrationWidget from "@/components/RegistrationWidget";
import JqueryScript from "@/components/JqueryScript";

export const metadata: Metadata = buildMetadata("exhibitor-profile");

export default function ExhibitorProfilePage() {
  const html = getPageHtml("exhibitor-profile");
  return (
    <>
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <JqueryScript />
      <RegistrationWidget
        formName="/space-booking.aspx"
        apiUrl="https://www.smartcitiesindia.com/registration/api/space-booking.aspx/Registration"
      />
    </>
  );
}
