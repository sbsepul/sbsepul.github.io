// OvalGlowBox.jsx
import React from 'react';

export default function OvalGlowBox({ children }) {
  return (
    <div
      className="
        relative
        bg-dark-bg
        inline-flex
        items-center
        justify-center
        border
        border-gray-700
        rounded-lg
      "
    >
      {/* Animación cíclica del gradiente */}
      <style>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 50% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      {/* Caja interna: fondo sólido y mismas esquinas redondeadas */}
      <div className="bg-dark-bg rounded-xl px-4 py-4">
        {children}
      </div>
    </div>
  );
}
