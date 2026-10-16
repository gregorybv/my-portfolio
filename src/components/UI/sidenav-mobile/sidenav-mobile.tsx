import { navbar } from '../../../data';
import { FC, memo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface SidenavMobileProps {
  handleNav: () => void;
}

export const SidenavMobile: FC<SidenavMobileProps> = memo(({handleNav}) => {
  const { t } = useTranslation();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    focusable?.[0]?.focus();

    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || !focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    dialog?.addEventListener('keydown', trapFocus);
    return () => dialog?.removeEventListener('keydown', trapFocus);
  }, []);

  return (
    <div
      ref={dialogRef}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label={t('navigation.menu')}
      className="fixed inset-0 z-20 flex min-h-[100dvh] w-full flex-col items-center justify-center bg-[#e3f6e0] transition-colors duration-300 md:hidden dark:bg-slate-950"
    >
      <nav className="flex w-full flex-col items-center" aria-label={t('navigation.menu')}>
      {navbar.filter(({mobile}) => mobile).map((item) => {
        const {id, href, Icon, labelKey} = item;
        return (
          <a key={id} onClick={handleNav} href={href} className="mobile group relative">
            <Icon
              size={20}
              className="absolute left-[calc(50%-72px)] transition duration-200 ease-in group-hover:scale-105 group-hover:text-[#08fdd8]"
              aria-hidden="true"
            />
            <span className="text-center transition duration-200 ease-in group-hover:scale-105 group-hover:text-[#08fdd8]">
              {t(`navigation.${labelKey}`)}
            </span>
          </a>
        );
      })}
      </nav>
    </div>
  );
});
