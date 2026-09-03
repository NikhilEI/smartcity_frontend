import type { Metadata } from "next";
import { getPageHtml } from "@/lib/content";
import { buildMetadata } from "@/lib/pageMetadata";
import RegistrationWidget from "@/components/RegistrationWidget";

export const metadata: Metadata = buildMetadata("visitor-profile");

export default function VisitorProfilePage() {
  const html = getPageHtml("visitor-profile");
  return (
    <>
      <div id="page-content" dangerouslySetInnerHTML={{ __html: html }} />
      <RegistrationWidget
        formName="/visitor-registration.aspx"
        apiUrl="https://www.smartcitiesindia.com/registration/api/visitor-registration-ci.aspx/Registration"
      />
    </>
  );
}
