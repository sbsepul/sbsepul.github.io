import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaArrowRight } from 'react-icons/fa6';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, description, date, slug }: BlogCardProps) => {
  return (
    <motion.article
      className="border border-dark-muted rounded-lg p-6 hover:border-dark-accent transition-colors"
      whileHover={{ scale: 1.02 }}
    >
      <h2 className="text-2xl font-bold mb-2">
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
        <motion.div whileHover={{ x: 4 }}>
          <FaArrowRight className="text-dark-muted hover:text-dark-accent transition-colors" />
        </motion.div>
      </div>
    </motion.article>
  );
};

export default BlogCard;