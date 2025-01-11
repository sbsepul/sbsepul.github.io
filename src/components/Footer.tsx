import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-4 mt-32 border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Sebastian Sepulveda. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-6">
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