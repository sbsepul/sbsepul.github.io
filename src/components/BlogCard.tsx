import React from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa6';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, description, date, slug }: BlogCardProps) => {
  return (
    <a
      href={`/blog/${slug}`}
      className="group block border border-dark-muted rounded-lg p-3 sm:p-4 hover:border-dark-accent transition-[border-color,transform] duration-200 hover:scale-[1.01]"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-base sm:text-lg font-bold group-hover:text-dark-accent transition-colors">
          {title}
        </h2>
        <div className="transition-transform duration-200 group-hover:translate-x-1 shrink-0">
          <FaArrowRight className="text-dark-muted group-hover:text-dark-accent transition-colors text-sm" />
        </div>
      </div>
      <p className="text-dark-muted text-sm mt-1 mb-2 line-clamp-1">{description}</p>
      <div className="flex items-center text-dark-muted">
        <FaCalendar className="mr-2 text-xs" />
        <span className="text-xs">{date}</span>
      </div>
    </a>
  );
};

export default BlogCard;
