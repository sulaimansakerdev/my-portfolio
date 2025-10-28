import React from "react";
import GmailIcon from "../icons/gmail-icon";

interface EmailLinkProps {
  email: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({ email }) => {
  return (
    <a
      href={`mailto:${email}`}
      className="border border-neutral-600 rounded-2xl text-base md:text-lg lg:text-2xl p-26"
      aria-label={`Send an email to ${email}`}
    >
      <div className="flex items-center gap-15 justify-center md:items-center md:justify-center ">
        <GmailIcon aria-hidden="true" />
        <span>{email}</span>
      </div>
    </a>
  );
};

export default EmailLink;
