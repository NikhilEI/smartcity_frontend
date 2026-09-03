"use client";

import { useEffect } from "react";

type RegistrationWidgetProps = {
  formName: string;
  apiUrl?: string;
  eventName?: string;
  senderEmail?: string;
};

function loadScriptOnce(src: string, onload?: () => void) {
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) {
    onload?.();
    return;
  }
  const s = document.createElement("script");
  s.src = src;
  s.onload = () => onload?.();
  document.body.appendChild(s);
}

function whenReady(check: () => boolean, cb: () => void, attempts = 100) {
  if (check()) {
    cb();
    return;
  }
  if (attempts <= 0) return;
  setTimeout(() => whenReady(check, cb, attempts - 1), 50);
}

export default function RegistrationWidget({
  formName,
  apiUrl,
  eventName = "12th Smart Future Cities India 2027 expo",
  senderEmail = "noreply@smartcitiesindia.com",
}: RegistrationWidgetProps) {
  useEffect(() => {
    whenReady(
      () => !!window.jQuery,
      () => {
        loadScriptOnce("/registration/js/registration.js", () => {
          const $ = window.jQuery!;
          $(document).ready(function () {
            $(document).initializeRegistration({
              evetnName: eventName,
              eventPageForm: "https://www.smartcitiesindia.com/registration/forms" + formName,
              apiUrl,
              formCss: "",
              senderEmail,
            });
          });
        });
      }
    );
  }, [formName, apiUrl, eventName, senderEmail]);

  return null;
}
