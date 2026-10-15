import { FC, memo } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { Theme } from '../../../hooks/use-theme';
import { useTranslation } from 'react-i18next';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export const ThemeToggle: FC<ThemeToggleProps> = memo(({
  theme,
  onToggle,
}) => {
  const { t } = useTranslation();
  const isDark = theme === 'dark';
  const label = isDark ? t('theme.switchToLight') : t('theme.switchToDark');
  const Icon = isDark ? BsSun : BsMoonStars;

  return (
    <button
      type="button"
      onClick={onToggle}
      className="nav-control group p-2"
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <Icon
        size={30}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:scale-125 group-hover:text-[#08fdd8]"
      />
    </button>
  );
});
