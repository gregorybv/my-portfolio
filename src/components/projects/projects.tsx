import { ProjectItem } from '../project-item';
import { project } from '../../data';
import { SmilingFace } from 'fluent-emoji';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Projects: FC = memo(() => {
  const { t } = useTranslation();
  const [areOtherProjectsVisible, setAreOtherProjectsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const featuredProjects = project.filter(({featured}) => featured);
  const otherProjects = project.filter(({featured}) => !featured);

  const renderProject = ({id, img, titleKey, stack, href}: typeof project[number]) => (
    <ProjectItem
      key={id}
      img={img}
      title={t(`projects.items.${titleKey}`)}
      stack={stack}
      href={href}
    />
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-container max-w-[1240px]"
    >
      <h2 id="projects-heading" className="h2">{t('projects.heading')}</h2>
      <p className="flex items-center justify-center gap-3 text-center py-8 text-2xl">
        {t('projects.description')}
        <SmilingFace className="w-[40px]" aria-hidden="true"/>
      </p>
      <div className="grid sm:grid-cols-3 gap-6 mt-5">
        {featuredProjects.map(renderProject)}
      </div>
      <div className="mt-10">
        <motion.button
          type="button"
          aria-expanded={areOtherProjectsVisible}
          aria-controls="other-projects"
          onClick={() => setAreOtherProjectsVisible((isVisible) => !isVisible)}
          whileHover={shouldReduceMotion ? undefined : {scale: 1.03}}
          whileTap={shouldReduceMotion ? undefined : {scale: 0.97}}
          className="group relative mx-auto block rounded-full bg-gradient-to-r from-[#4c85e6] via-[#d3f8cd] to-[#08fdd8] p-[1px] font-bold text-[#001b5e] shadow-[0_12px_40px_-18px_rgba(76,133,230,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-[#d3f8cd]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 -z-10 rounded-full bg-gradient-to-r from-[#4c85e6]/70 to-[#08fdd8]/70 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-60"
          />
          <span className="relative flex items-center gap-3 overflow-hidden rounded-full bg-white/95 py-2.5 pl-2.5 pr-3 backdrop-blur-sm dark:bg-[#020617]/95">
            <motion.span
              aria-hidden="true"
              className="absolute inset-y-0 left-[-35%] w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent"
              initial={false}
              animate={{x: areOtherProjectsVisible ? '420%' : '0%'}}
              transition={{duration: shouldReduceMotion ? 0 : 0.65, ease: 'easeInOut'}}
            />
            <motion.span
              aria-hidden="true"
              className="relative grid size-9 place-items-center rounded-full bg-[#001b5e] text-[#d3f8cd] shadow-inner shadow-white/20 dark:bg-[#d3f8cd] dark:text-[#001b5e]"
              animate={{rotate: areOtherProjectsVisible ? 180 : 0}}
              transition={{duration: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1]}}
            >
              <svg viewBox="0 0 20 20" className="size-4" fill="none">
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
            <span className="relative">{t('projects.otherProjects')}</span>
          </span>
        </motion.button>

        <AnimatePresence initial={false}>
          {areOtherProjectsVisible && (
            <motion.div
              id="other-projects"
              initial={shouldReduceMotion ? {opacity: 0} : {height: 0, opacity: 0}}
              animate={shouldReduceMotion ? {opacity: 1} : {height: 'auto', opacity: 1}}
              exit={shouldReduceMotion ? {opacity: 0} : {height: 0, opacity: 0}}
              transition={{duration: shouldReduceMotion ? 0.15 : 0.55, ease: [0.22, 1, 0.36, 1]}}
              className="overflow-hidden"
            >
              <motion.div
                className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: shouldReduceMotion ? 0 : 0.08,
                      delayChildren: shouldReduceMotion ? 0 : 0.12,
                    },
                  },
                }}
              >
                {otherProjects.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={{
                      hidden: shouldReduceMotion
                        ? {opacity: 0}
                        : {opacity: 0, y: 36, scale: 0.96, filter: 'blur(8px)'},
                      visible: shouldReduceMotion
                        ? {opacity: 1}
                        : {opacity: 1, y: 0, scale: 1, filter: 'blur(0px)'},
                    }}
                    transition={{duration: shouldReduceMotion ? 0.15 : 0.45, ease: [0.22, 1, 0.36, 1]}}
                  >
                    {renderProject(item)}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
});

