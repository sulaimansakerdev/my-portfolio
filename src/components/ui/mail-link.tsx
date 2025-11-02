import React from "react";
import classNames from "classnames";
import Image from "next/image";

interface MailLinkProps {
  emailId: string;
  className?: string;
  ariaLabel?: string;
}

const MailLink: React.FC<MailLinkProps> = ({ emailId, className = "", ariaLabel }) => {
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
          <Image width={24} height={24} src="/assets/icons/gmail.svg" alt="" />
        </span>
        <span>{emailId}</span>
      </div>
    </a>
  );
};

export default MailLink;
