import { FC, memo } from 'react';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../../../data';

export const HeroLink: FC = memo(() => {
  const { t } = useTranslation();
  const links = [
    {
      id: 'telegram',
      href: siteConfig.socialLinks.telegram,
      label: t('social.telegram'),
      Icon: FaTelegram,
    },
    {
      id: 'github',
      href: siteConfig.socialLinks.github,
      label: t('social.github'),
      Icon: FaGithub,
    },
    {
      id: 'linkedin',
      href: siteConfig.socialLinks.linkedin,
      label: t('social.linkedin'),
      Icon: FaLinkedin,
    },
  ] as const;

  return (
    <nav
      className="mt-5 flex items-center gap-3"
      aria-label={t('social.heading')}
    >
      {links.map(({id, href, label, Icon}) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-900/15 bg-white/60 text-[#001b5e] backdrop-blur-sm transition-colors hover:bg-white dark:border-white/15 dark:bg-slate-900/55 dark:text-[#d3f8cd] dark:hover:bg-slate-900"
        >
          <Icon size={22} aria-hidden="true"/>
        </a>
      ))}
    </nav>
  );
});

