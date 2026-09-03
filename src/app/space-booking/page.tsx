import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import { fetchRegistrationFormHtml, injectFormHtml } from "@/lib/registrationForm";
import RegistrationWidget from "@/components/RegistrationWidget";

export const metadata: Metadata = buildMetadata("space-booking");

const FORM_NAME = "/space-booking-ci.aspx";

export default async function SpaceBookingPage() {
  const html = getPageHtml("space-booking");
  const formHtml = await fetchRegistrationFormHtml(FORM_NAME);
  const fullHtml = injectFormHtml(html, formHtml);
  return (
    <>
      <div id="page-content" dangerouslySetInnerHTML={{ __html: fullHtml }} />
      <RegistrationWidget formName={FORM_NAME} />
    </>
  );
}
