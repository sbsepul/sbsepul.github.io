import React from 'react';

interface ProjectCardCompactProps {
  title: string;
  description: string;
  impact?: string;
  href: string;
  icon: string;
  logo?: string;
  accentColor?: 'emerald' | 'violet' | 'amber' | 'rose' | 'sky';
  status?: string;
  tags?: string[];
}

const colorClasses = {
  emerald: {
    border: 'hover:border-emerald-400',
    bg: 'group-hover:bg-emerald-500/10',
    icon: 'bg-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/30',
    tag: 'border-emerald-500/30 text-emerald-400',
  },
  violet: {
    border: 'hover:border-violet-400',
    bg: 'group-hover:bg-violet-500/10',
    icon: 'bg-violet-500/20 text-violet-400 group-hover:bg-violet-500/30',
    tag: 'border-violet-500/30 text-violet-400',
  },
  amber: {
    border: 'hover:border-amber-400',
    bg: 'group-hover:bg-amber-500/10',
    icon: 'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500/30',
    tag: 'border-amber-500/30 text-amber-400',
  },
  rose: {
    border: 'hover:border-rose-400',
    bg: 'group-hover:bg-rose-500/10',
    icon: 'bg-rose-500/20 text-rose-400 group-hover:bg-rose-500/30',
    tag: 'border-rose-500/30 text-rose-400',
  },
  sky: {
    border: 'hover:border-sky-400',
    bg: 'group-hover:bg-sky-500/10',
    icon: 'bg-sky-500/20 text-sky-400 group-hover:bg-sky-500/30',
    tag: 'border-sky-500/30 text-sky-400',
  },
};

const ProjectCardCompact: React.FC<ProjectCardCompactProps> = ({
  title,
  description,
  impact,
  href,
  icon,
  logo,
  accentColor = 'emerald',
  status,
  tags = [],
}) => {
  const colors = colorClasses[accentColor];
  const isRepo = /github\.com/.test(href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        block
        p-3 sm:p-4
        rounded-xl
        border
        border-gray-800
        bg-gradient-to-br from-gray-900/50 to-gray-950/50
        transition-all
        duration-300
        ${colors.border}
        hover:shadow-lg
        hover:shadow-black/20
        hover:-translate-y-1
      `}
    >
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${colors.bg}`} />

      <div className="relative flex items-start gap-3 sm:gap-4">
        {logo ? (
          <img
            src={logo}
            alt={`${title} logo`}
            className="flex-shrink-0 w-9 h-9 sm:w-12 sm:h-12 rounded-lg object-cover"
          />
        ) : (
          <div className={`
            flex-shrink-0
            w-9 h-9 sm:w-12 sm:h-12
            rounded-lg
            flex items-center justify-center
            text-lg sm:text-2xl
            transition-all duration-300
            ${colors.icon}
          `}>
            {icon}
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="mb-0.5 sm:mb-1 flex flex-wrap items-center gap-2">
            <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-gray-100 transition-colors">
              {title}
            </h3>
            {status && status !== 'Active' && (
              <span className={`rounded-full border px-2 py-0.5 text-[11px] leading-tight ${colors.tag}`}>
                {status}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-none">
            {description}
          </p>
          {impact && (
            <p className="hidden sm:block mb-3 text-xs leading-relaxed text-gray-500">
              {impact}
            </p>
          )}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className={`
                    px-2 py-0.5
                    text-xs
                    border
                    rounded-full
                    transition-colors
                    ${colors.tag}
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex-shrink-0 text-gray-600 group-hover:text-gray-400 transition-colors">
          {isRepo ? (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.8 1.19 1.83 1.19 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.52 10.52 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="9" strokeWidth={2} />
              <path strokeLinecap="round" strokeWidth={2} d="M3 12h18M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9z" />
            </svg>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCardCompact;
