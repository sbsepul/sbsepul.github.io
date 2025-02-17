// ProjectCard.jsx
import React from 'react';

const ProjectCard = ({
  title = 'Repetitive Archetypes Patterns Dataset',
  description = 'Project focused on detecting and segmenting repetitive patterns on ancient Peruvian vessels using annotated 3D and 2D data, providing tools for data conversion, splitting, and visualization.',
  tags = ['Python', 'OpenCV', '3D Data'],
  href = 'https://github.com/sbsepul/Repetitive-Archetypes-Patterns-Dataset',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-dark-bg
        p-5
        rounded-lg
        border
        border-gray-700
        transition-colors
        duration-200
        hover:border-blue-400
      "
    >
      <h3
        className="
          text-xl 
          font-semibold 
          mb-2
        "
      >
        {title}
      </h3>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      <div className="flex items-center gap-2">
        {tags.map((tag) => (
            <span
            key={tag}
            className="
                px-2 
                py-1 
                border 
                border-gray-300 
                rounded 
                text-gray-300 
                hover:bg-blue-500 
                hover:text-white 
                transition-colors 
                duration-150
            "
            >
            {tag}
            </span>
        ))}
        </div>
    </a>
  );
};

export default ProjectCard;
