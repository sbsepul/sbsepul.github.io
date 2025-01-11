import React from 'react';
import { motion } from 'framer-motion';

const MenuItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    className="text-dark-muted hover:text-dark-accent transition-colors"
    whileHover={{ scale: 1.05 }}
  >
    {children}
  </motion.a>
);

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-sm z-50 py-4 text-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <motion.a 
            href="/"
            className="text-lg font-light text-dark-accent"
            whileHover={{ scale: 1.05 }}
          >
            sbsepul
          </motion.a>
          <div className="space-x-6">
            <MenuItem href="/blog">blog</MenuItem>
            <MenuItem href="/photos">photos</MenuItem>
            <MenuItem href="/cv">CV</MenuItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;