import { Github, Instagram, Linkedin, Code2 } from "lucide-react";

// Social media links data structure
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

// Social media links data
const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bibek-samal/",
    icon: <Linkedin className="size-6" />,
    ariaLabel: "Visit LinkedIn profile",
  },
  {
    name: "GitHub",
    url: "https://github.com/Bibek-only",
    icon: <Github className="size-6" />,
    ariaLabel: "Visit GitHub profile",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bibek___samal/",
    icon: <Instagram className="size-6" />,
    ariaLabel: "Visit Instagram profile",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Bibek_samal/",
    icon: <Code2 className="size-6" />,
    ariaLabel: "Visit LeetCode profile",
  },
  
];

const Footer = () => {
  return (
    <footer className="py-2 md:py-12">
      <div className="px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a className="transition hover:opacity-75" href="#hero">
              About
            </a>
          </li>
          <li>
            <a className="transition hover:opacity-75" href="#education">
              Education
            </a>
          </li>
          <li>
            <a className="transition hover:opacity-75" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="transition hover:opacity-75" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                rel="noreferrer"
                target="_blank"
                className="transition hover:opacity-75"
                aria-label={link.ariaLabel}
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
