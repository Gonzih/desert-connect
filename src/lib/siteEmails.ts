/**
 * Chapter email routing
 * ---------------------
 * isocnv.org does not yet have MX records. Until domain email is live, all
 * public mailto links route to the chapter Gmail inbox with subjects that name
 * the intended @isocnv.org recipient.
 *
 * TO RESTORE DOMAIN EMAIL:
 * 1. Configure MX records for isocnv.org
 * 2. Set USE_DOMAIN_EMAIL below to `true`
 * 3. Verify mail delivery to each address in CHAPTER_DOMAIN_EMAILS
 * 4. Run: npm run test
 */

/** Flip to `true` once isocnv.org MX is configured and tested. */
export const USE_DOMAIN_EMAIL = false;

/** Active inbox while domain email is offline. */
export const CHAPTER_INBOX = "isocnevada@gmail.com";

/**
 * Original chapter addresses — preserved for restoration when MX is live.
 * These are NOT used for mailto links while USE_DOMAIN_EMAIL is false.
 */
export const CHAPTER_DOMAIN_EMAILS = {
  general: "hello@isocnv.org",
  newsletter: "hello@isocnv.org",
  sponsorship: "sponsorship@isocnv.org",
  privacy: "privacy@isocnv.org",
  volunteer: "isocnevada@gmail.com",
  workgroups: {
    broadband: "broadband@isocnv.org",
    policy: "policy@isocnv.org",
    education: "education@isocnv.org",
    tribal: "tribal@isocnv.org",
    metaweb: "metaweb@isocnv.org",
    community: "community@isocnv.org",
    nevada: "nevada@isocnv.org",
    nvstate: "nvstate@isocnv.org",
  },
} as const;

type MailtoOptions = {
  /** Intended @isocnv.org address once domain email is live */
  intended: string;
  subject: string;
  body?: string;
};

/** Address shown in the UI and used as mailto recipient. */
export const displayEmail = (intended: string) =>
  USE_DOMAIN_EMAIL ? intended : CHAPTER_INBOX;

/** Build a mailto: href, routing to Gmail with intended recipient in subject when needed. */
export const mailtoHref = ({ intended, subject, body = "" }: MailtoOptions) => {
  const to = displayEmail(intended);
  const routedSubject = USE_DOMAIN_EMAIL ? subject : `[${intended}] ${subject}`;
  const params = new URLSearchParams();
  params.set("subject", routedSubject);
  if (body) params.set("body", body);
  return `mailto:${to}?${params.toString()}`;
};

export const mailtoGeneral = () =>
  mailtoHref({ intended: CHAPTER_DOMAIN_EMAILS.general, subject: "ISOC Nevada inquiry" });

export const mailtoNewsletter = (subscriberEmail: string) =>
  mailtoHref({
    intended: CHAPTER_DOMAIN_EMAILS.newsletter,
    subject: "ISOC Nevada newsletter subscription",
    body: `Please add me to the ISOC Nevada chapter newsletter.\n\nEmail: ${subscriberEmail.trim()}`,
  });

export const mailtoSponsorship = () =>
  mailtoHref({
    intended: CHAPTER_DOMAIN_EMAILS.sponsorship,
    subject: "ISOC Nevada corporate sponsorship inquiry",
  });

export const mailtoPrivacy = () =>
  mailtoHref({
    intended: CHAPTER_DOMAIN_EMAILS.privacy,
    subject: "ISOC Nevada privacy / data request",
  });

export const mailtoVolunteer = (role?: string) =>
  mailtoHref({
    intended: CHAPTER_DOMAIN_EMAILS.volunteer,
    subject: role ? `Volunteer interest: ${role}` : "Volunteer with ISOC Nevada",
  });

export const mailtoWorkgroup = (intended: string, workgroupName: string) =>
  mailtoHref({
    intended,
    subject: `${workgroupName} workgroup`,
    body: `Hello,\n\nI'd like to connect with the ${workgroupName} workgroup.\n`,
  });
