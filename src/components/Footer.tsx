

type FooterLink = {
  id: string;
  label: string;
  href: string;
};

type FooterLinksSectionProps = {
  title: string;
  links: FooterLink[];
};

function FooterLinksSection({ title, links }: FooterLinksSectionProps) {
  return (
    <div>
      <p className="uppercase font-bold">{title}</p>
      {links.map((link) => (
        <p key={link.id}>
          <a href={link.href}>{link.label}</a>
        </p>
      ))}
    </div>
  );
}

function Footer() {
  const sections = [
    {
      title: "use cases",
      links: [
        {
          id: "designers",
          label: "For Designers",
          href: "/use-cases/designers",
        },
        {
          id: "developers",
          label: "For Developers",
          href: "/use-cases/developers",
        },
        {
          id: "pm",
          label: "For Product Managers",
          href: "/use-cases/product-managers",
        },
        {
          id: "compliance",
          label: "For Compliance Managers",
          href: "/use-cases/compliance",
        },
      ],
    },
    {
      title: "resources",
      links: [
        { id: "blog", label: "Blog", href: "/resources/blog" },
        { id: "library", label: "Library", href: "/resources/library" },
        {
          id: "release-notes",
          label: "Release Notes",
          href: "/resources/release-notes",
        },
        {
          id: "slack-community",
          label: "Slack Community",
          href: "/resources/slack-community",
        },
        {
          id: "wcag-compliance",
          label: "WCAG Compliance",
          href: "/resources/wcag-compliance",
        },
        {
          id: "section-508-compliance",
          label: "Section 508 Compliance",
          href: "/resources/section-508-compliance",
        },
        {
          id: "european-accessibility-act-(eaa)-compliance",
          label: "European Accessibility Act (EAA) Compliance",
          href: "/resources/european-accessibilty-act-eaa-compliance",
        },
      ],
    },
     {
      title: "help",
      links: [
        {
          id: "my-account",
          label: "My Account",
          href: "/help/my-account",
        },
        {
          id: "support-docs",
          label: "Support Docs",
          href: "/help/support-docs",
        },
        {
          id: "contact-us",
          label: "Contact Us",
          href: "/help/contact-us",
        },
        {
          id: "feature-requests",
          label: "Feature Requests",
          href: "/help/feature-requests",
        },
      ],
    },
    {
      title: "company",
      links: [
        {
          id: "stark-framework",
          label: "Stark Framework",
          href: "/company/stark-framework",
        },
        {
          id: "privacy-policy",
          label: "Privacy Policy",
          href: "/company/privacy-policy",
        },
        {
          id: "terms-of-service",
          label: "Terms of Service",
          href: "/company/terms-of-service",
        },
        {
          id: "code-of-conduct",
          label: "Code of Conduct",
          href: "/company/code-of-conduct",
        },
      ],
    },
    {
      title: "security",
      links: [
        {
          id: "security-overview",
          label: "Security Overview",
          href: "/security/security-overview",
        },
        {
          id: "cookie-policy",
          label: "Cookie Policy",
          href: "/security/cookie-policy",
        },
        {
          id: "ai-overview",
          label: "AI Overview",
          href: "/security/ai-overview",
        },
        {
          id: "gdpr",
          label: "GDPR",
          href: "/security/gdpr",
        },
        {
          id: "status",
          label: "Status",
          href: "/security/status",
        },
      ],
    },
    {
      title: "design integrations",
      links: [
        {
          id: "stark-for-figma",
          label: "Stark for Figma",
          href: "/design-integrations/stark-for-figma",
        },
        {
          id: "stark-for-figjam",
          label: "Stark for FigJam",
          href: "/design-integrations/stark-for-figjam",
        },
        {
          id: "stark-for-sketch",
          label: "Stark for Sketch",
          href: "/design-integrations/stark-for-sketch",
        },
        {
          id: "stark-for-adobe-xd",
          label: "Stark for Adobe XD",
          href: "/design-integrations/stark-for-adobe-xd",
        },
      ],
    },
    {
      title: "developer integrations",
      links: [
        {
          id: "stark-for-chrome",
          label: "Stark for Chrome",
          href: "/developer-integrations/stark-for-chrome",
        },
        {
          id: "stark-for-firefox",
          label: "Stark for Firefox",
          href: "/developer-integrations/stark-for-firefox",
        },
        {
          id: "stark-for-edge",
          label: "Stark for Edge",
          href: "/developer-integrations/stark-for-edge",
        },
        {
          id: "stark-for-safari",
          label: "Stark for Safari",
          href: "/developer-integrations/stark-for-safari",
        },
        {
          id: "stark-for-arc",
          label: "Stark for Arc",
          href: "/developer-integrations/stark-for-arc",
        },
        {
          id: "stark-for-brave",
          label: "Stark for Brave",
          href: "/developer-integrations/stark-for-brave",
        },
      ],
    }
  ];

  return (
    <footer>
      {/* Links Div */}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sections.map((section) => (
            <FooterLinksSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>

      {/* Bottom of the Links Div */}
      <div>{/* insert icons and copyright here */}</div>
    </footer>
  );
}

export default Footer;
