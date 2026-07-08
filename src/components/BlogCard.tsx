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
    <article className="group border border-dark-muted rounded-lg p-4 sm:p-6 hover:border-dark-accent transition-[border-color,transform] duration-200 hover:scale-[1.02]">
      <h2 className="text-xl sm:text-2xl font-bold mb-2">
        <a href={`/blog/${slug}`} className="hover:text-dark-accent transition-colors">
          {title}
        </a>
      </h2>
      <p className="text-dark-muted mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-dark-muted">
          <FaCalendar className="mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="transition-transform duration-200 group-hover:translate-x-1">
          <FaArrowRight className="text-dark-muted hover:text-dark-accent transition-colors" />
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
