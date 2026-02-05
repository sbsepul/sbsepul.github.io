import React from 'react';

interface ProjectCardCompactProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  accentColor?: 'emerald' | 'violet' | 'amber' | 'rose' | 'sky';
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
  href,
  icon,
  accentColor = 'emerald',
  tags = [],
}) => {
  const colors = colorClasses[accentColor];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        block
        p-4
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

      <div className="relative flex items-start gap-4">
        <div className={`
          flex-shrink-0
          w-12 h-12
          rounded-lg
          flex items-center justify-center
          text-2xl
          transition-all duration-300
          ${colors.icon}
        `}>
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white mb-1 group-hover:text-gray-100 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2 mb-2">
            {description}
          </p>

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
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default ProjectCardCompact;
