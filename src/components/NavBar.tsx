import React from 'react';

const MenuItem = ({ href, children, hidden }: { href: string; children: React.ReactNode; hidden?: boolean }) => (
  <a
    href={href}
    className="text-dark-muted hover:text-dark-accent transition-[color,transform] duration-200 hover:scale-105"
    style={{ display: hidden ? 'none' : 'inline-block' }}
  >
    {children}
  </a>
);

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-gradient-to-b from-gray-800 via-gray-800/70 to-transparent z-50 pt-8 pb-10 text-md">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <a
            href="/"
            className="inline-block text-xl font-light text-dark-accent transition-transform duration-200 hover:scale-105"
          >
            sbsepul
          </a>
          <div className="space-x-6">
            <MenuItem href="/projects">projects</MenuItem>
            <MenuItem href="/cv">cv</MenuItem>
            <MenuItem href="/blog">blog</MenuItem>
            <MenuItem href="/photos" hidden>photos</MenuItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
