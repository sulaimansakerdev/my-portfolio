import React from "react";
import GmailIcon from "../icons/gmail-icon";
import classNames from "classnames";

interface EmailLinkProps {
  emailId: string;
  className?: string;
  ariaLabel?: string;
}

const EmailLink: React.FC<EmailLinkProps> = ({ emailId, className = "", ariaLabel }) => {
  const accessibleLabel = ariaLabel ?? `Send an email to ${emailId}`;

  return (
    <a
      href={`mailto:${emailId}`}
      aria-label={accessibleLabel}
      className={classNames(
        "inline-block border border-neutral-600 rounded-2xl text-xs md:text-lg lg:text-2xl p-10 md:px-26 md:py-18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2",
        className
      )}
    >
      <div className="flex items-center gap-8 lg:gap-15 justify-center md:items-center md:justify-center">
        <span aria-hidden="true">
          <GmailIcon />
        </span>
        <span>{emailId}</span>
      </div>
    </a>
  );
};

export default EmailLink;
