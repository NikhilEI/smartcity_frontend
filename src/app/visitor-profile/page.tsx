import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import RegistrationWidget from "@/components/RegistrationWidget";
import JqueryScript from "@/components/JqueryScript";

export const metadata: Metadata = buildMetadata("visitor-profile");

export default function VisitorProfilePage() {
  const html = getPageHtml("visitor-profile");
  return (
    <>
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <JqueryScript />
      <RegistrationWidget
        formName="/visitor-registration.aspx"
        apiUrl="https://www.smartcitiesindia.com/registration/api/visitor-registration-ci.aspx/Registration"
      />
    </>
  );
}
