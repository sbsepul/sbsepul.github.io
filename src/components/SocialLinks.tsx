import React from 'react';
import { FaXTwitter, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'Twitter',
    url: 'https://x.com/sbsepul',
    icon: <FaXTwitter />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sbsepul',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sebasepulveda',
    icon: <FaLinkedin />,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/sbsepul?text=hola,%20como%20estas?',
    icon: <FaTelegram />,
  }
];

export default function SocialLinks({
  iconSize = 'w-5 h-5',   // Tamaño por defecto
  spacing = 'space-x-2', // Espaciado por defecto
  color = 'text-gray-400 hover:text-gray-50', // Colores por defecto
}) {
  return (
    <div className={`flex ${spacing} mb-4`}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${color}`}
        >
          {/* Inyectamos la clase de tamaño dentro del ícono */}
          {React.cloneElement(link.icon, { className: iconSize })}
        </a>
      ))}
    </div>
  );
}