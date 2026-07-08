import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="mt-12 w-full pb-4 text-xs text-zinc-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 items-center sm:justify-between">
          <p className="text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Sebastian Sepulveda. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:mt-6">
            <a href="https://www.linkedin.com/in/sebasepulveda" className="text-gray-600 hover:text-gray-50 transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://www.github.com/sbsepul" className="text-gray-600 hover:text-gray-50 transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.x.com/sbsepul" className="text-gray-600 hover:text-gray-50 transition-colors">
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;