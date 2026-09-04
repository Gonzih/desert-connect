# ISOC Nevada site — email routing

## Current setup (while domain email is offline)

The chapter website (`isocnv.org`) does **not** have MX records configured yet. That means mail sent to any `@isocnv.org` address cannot be received.

Until domain email is live, **every email link on the site** opens a message to:

**isocnevada@gmail.com**

The subject line includes the intended recipient in brackets, for example:

```
[broadband@isocnv.org] Nevada Broadband Mapping workgroup
```

This lets volunteers sort incoming mail by workgroup or purpose until the proper addresses are active.

### What visitors see

- Email addresses displayed on the site show **isocnevada@gmail.com**
- Clicking any email link opens their mail app addressed to that inbox
- The subject (and sometimes body) explains which chapter contact the message is meant for

### What is preserved

All original `@isocnv.org` addresses are kept in the codebase for restoration:

| Purpose | Original address |
|---------|------------------|
| General / newsletter | hello@isocnv.org |
| Sponsorship | sponsorship@isocnv.org |
| Privacy requests | privacy@isocnv.org |
| Broadband workgroup | broadband@isocnv.org |
| Policy workgroup | policy@isocnv.org |
| Education workgroup | education@isocnv.org |
| Tribal workgroup | tribal@isocnv.org |
| MetaWeb workgroup | metaweb@isocnv.org |
| Community workgroup | community@isocnv.org |
| Nevada policy workgroup | nevada@isocnv.org |
| NV state workgroup | nvstate@isocnv.org |

Volunteer mail already used **isocnevada@gmail.com** and is unchanged.

---

## How to restore domain email

When MX records are configured and tested for `isocnv.org`:

1. Open **`src/lib/siteEmails.ts`**
2. Set **`USE_DOMAIN_EMAIL = true`**
3. Deploy the site
4. Send a test message to each address in `CHAPTER_DOMAIN_EMAILS` and confirm delivery
5. Run **`npm run test`** to confirm link audit tests pass

After that single flag change, the site will:

- Show the original `@isocnv.org` addresses in the UI
- Send mail directly to those addresses (no Gmail routing)
- Use normal subject lines without the `[intended@isocnv.org]` prefix

### DNS requirement

Before flipping the flag, verify MX records exist:

```bash
dig isocnv.org MX +short
```

You should see mail server entries (e.g. Google Workspace, Zoho, Cloudflare Email Routing). An empty result means domain email is not ready.

---

## Technical reference

- **Config file:** `src/lib/siteEmails.ts`
- **Routing flag:** `USE_DOMAIN_EMAIL` (default `false`)
- **Active inbox:** `CHAPTER_INBOX` → `isocnevada@gmail.com`
- **Address registry:** `CHAPTER_DOMAIN_EMAILS`
- **Helpers:** `mailtoHref()`, `displayEmail()`, `mailtoWorkgroup()`, etc.

Workgroup data stores the future address as `intendedEmail` in `src/data/projects.ts`.
