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
      className="mt-4 flex w-full max-w-[200px] justify-between"
      aria-label={t('social.heading')}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1300"
    >
      {links.map(({id, href, label, Icon}) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="rounded-md p-1 transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Icon size={30} aria-hidden="true"/>
        </a>
      ))}
    </nav>
  );
});

